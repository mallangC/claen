import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { sendKakaoNotification } from '@/lib/solapi'

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

    const { error } = await supabase.from('quotes').insert([{
      name,
      phone,
      service_type: serviceType,
      address: address || null,
      area: area ? String(area).replace(/[^0-9.]/g, '') || null : null,
      desired_date: desiredDate || null,
      additional_services: additionalServices?.length ? additionalServices.join(', ') : null,
      message: message || null,
      status: 'pending',
    }])

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'DB 저장 실패' }, { status: 500, headers: CORS_HEADERS })
    }

    await sendKakaoNotification({ name, phone, serviceType, address, area, desiredDate, additionalServices, message })

    return NextResponse.json({ success: true }, { headers: CORS_HEADERS })
  } catch (err) {
    console.error('Quote API error:', err)
    return NextResponse.json({ error: '서버 오류' }, { status: 500, headers: CORS_HEADERS })
  }
}
