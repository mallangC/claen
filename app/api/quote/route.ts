import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://www.thefirstclean.kr',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, serviceType, address, area, desiredDate, additionalServices, message } = body
    const phone = body.phone ? String(body.phone).replace(/[^0-9]/g, '') : ''

    if (!name || !phone || !serviceType) {
      return NextResponse.json({ error: '필수 항목이 누락되었습니다.' }, { status: 400, headers: CORS_HEADERS })
    }

    const supabase = createAdminClient()

    const { error } = await supabase.from('quotes').insert([
      {
        name,
        phone,
        service_type: serviceType,
        address: address || null,
        area: area ? String(area).replace(/[^0-9.]/g, '') || null : null,
        desired_date: desiredDate || null,
        additional_services: additionalServices?.length ? additionalServices.join(', ') : null,
        message: message || null,
        status: 'pending',
      },
    ])

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'DB 저장 실패' }, { status: 500, headers: CORS_HEADERS })
    }

    // 솔라피 카카오 알림톡 발송
    await sendSolapiNotification({ name, phone, serviceType, address, area, desiredDate, additionalServices, message })

    return NextResponse.json({ success: true }, { headers: CORS_HEADERS })
  } catch (err) {
    console.error('Quote API error:', err)
    return NextResponse.json({ error: '서버 오류' }, { status: 500, headers: CORS_HEADERS })
  }
}

async function sendSolapiNotification(data: {
  name: string
  phone: string
  serviceType: string
  address?: string
  area?: string
  desiredDate?: string
  additionalServices?: string[]
  message?: string
}) {
  const apiKey = process.env.SOLAPI_API_KEY
  const apiSecret = process.env.SOLAPI_API_SECRET
  const senderPhone = process.env.SOLAPI_SENDER_PHONE
  const receiverPhone = process.env.ADMIN_KAKAO_RECEIVER
  const pfId = process.env.SOLAPI_PFID

  if (!apiKey || !apiSecret || !senderPhone || !receiverPhone || !pfId ||
      apiKey === 'placeholder_solapi_api_key') {
    console.log('솔라피 설정 미완료 - 알림 발송 건너뜀')
    return
  }

  const now = new Date()
  const salt = now.getTime().toString()
  const date = now.toISOString()

  const { createHmac } = await import('crypto')
  const signature = createHmac('sha256', apiSecret)
    .update(date + salt)
    .digest('hex')

  const additionalText = data.additionalServices?.length ? data.additionalServices.join(', ') : '-'

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
          type: 'ATA',
          kakaoOptions: {
            pfId,
            templateId: 'KA01TP260601055330095AzRLGQAJPZr',
            variables: {
              '#{이름}': data.name,
              '#{연락처}': data.phone,
              '#{서비스종류}': data.serviceType,
              '#{추가견적}': additionalText,
              '#{주소}': data.address || '-',
              '#{면적}': data.area ? `${data.area}평` : '-',
              '#{희망일}': data.desiredDate || '-',
              '#{문의내용}': data.message || '-',
            },
          },
        },
      }),
    })
  } catch (err) {
    console.error('솔라피 발송 오류:', err)
  }
}
