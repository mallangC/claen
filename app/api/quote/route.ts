import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, serviceType, address, area, desiredDate, message } = body

    if (!name || !phone || !serviceType) {
      return NextResponse.json({ error: '필수 항목이 누락되었습니다.' }, { status: 400 })
    }

    const supabase = createAdminClient()

    const { error } = await supabase.from('quotes').insert([
      {
        name,
        phone,
        email: email || null,
        service_type: serviceType,
        address: address || null,
        area: area || null,
        desired_date: desiredDate || null,
        message: message || null,
        status: 'pending',
      },
    ])

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'DB 저장 실패' }, { status: 500 })
    }

    // 솔라피 카카오 알림톡 발송
    await sendSolapiNotification({ name, phone, serviceType, address, area, desiredDate, message })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Quote API error:', err)
    return NextResponse.json({ error: '서버 오류' }, { status: 500 })
  }
}

async function sendSolapiNotification(data: {
  name: string
  phone: string
  serviceType: string
  address?: string
  area?: string
  desiredDate?: string
  message?: string
}) {
  const apiKey = process.env.SOLAPI_API_KEY
  const apiSecret = process.env.SOLAPI_API_SECRET
  const senderPhone = process.env.SOLAPI_SENDER_PHONE
  const receiverPhone = process.env.ADMIN_KAKAO_RECEIVER

  if (!apiKey || !apiSecret || !senderPhone || !receiverPhone ||
      apiKey === 'placeholder_solapi_api_key') {
    console.log('솔라피 설정 미완료 - 알림 발송 건너뜀')
    return
  }

  const now = new Date()
  const salt = now.getTime().toString()
  const date = now.toISOString()

  // HMAC-SHA256 서명 생성
  const { createHmac } = await import('crypto')
  const signature = createHmac('sha256', apiSecret)
    .update(date + salt)
    .digest('hex')

  const text = `[더퍼스트클린] 새 견적 문의\n이름: ${data.name}\n연락처: ${data.phone}\n서비스: ${data.serviceType}\n주소: ${data.address || '-'}\n면적: ${data.area || '-'}\n희망일: ${data.desiredDate || '-'}\n문의: ${data.message || '-'}`

  try {
    await fetch('https://api.solapi.com/messages/v4/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `HMAC-SHA256 apiKey=${apiKey}, date=${date}, salt=${salt}, signature=${signature}`,
      },
      body: JSON.stringify({
        message: {
          to: receiverPhone,
          from: senderPhone,
          text,
        },
      }),
    })
  } catch (err) {
    console.error('솔라피 발송 오류:', err)
  }
}
