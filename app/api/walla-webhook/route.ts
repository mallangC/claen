import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { sendKakaoNotification } from '@/lib/solapi'

const FIELD_IDS = {
  serviceType: '328ffb34-3a9f-4eb0-af40-e254cfda3621',
  region:      'db9aa4d8-8f13-41e3-8ce4-a02c9eb316c1',
  area:        '5f437571-4971-4dee-8349-4bbf2b22d944',
  additional:  'e3ff9422-2df1-4e4d-82fe-3def4395bf2f',
  desiredDate: '447292f4-af37-4ae8-8f62-e5747e8fe08e',
  name:        '29dd19bc-2459-4c5d-9c93-c0de0f867685',
  phone:       'da051850-f7c2-464a-94ac-6525e9655f0e',
}

function getAnswer(answers: { field_id: string; value: unknown }[], fieldId: string) {
  return answers.find(a => a.field_id === fieldId)
}

function normalizePhone(phone: string): string {
  return phone.replace(/^\+82/, '0').replace(/[^0-9]/g, '')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (body.event_type !== 'response_submitted') {
      return NextResponse.json({ ok: true })
    }

    const answers = body.answers || []

    const name = (getAnswer(answers, FIELD_IDS.name)?.value as string) || ''
    const rawPhone = (getAnswer(answers, FIELD_IDS.phone)?.value as string) || ''
    const phone = normalizePhone(rawPhone)

    if (!name || !phone) {
      return NextResponse.json({ error: '필수 항목 누락' }, { status: 400 })
    }

    const serviceRaw = getAnswer(answers, FIELD_IDS.serviceType)?.value
    const serviceType = Array.isArray(serviceRaw) ? serviceRaw.join(', ') : String(serviceRaw || '')

    const regionRaw = getAnswer(answers, FIELD_IDS.region)?.value
    const address = Array.isArray(regionRaw) ? regionRaw[0] : String(regionRaw || '')

    const areaRaw = getAnswer(answers, FIELD_IDS.area)?.value
    const area = areaRaw ? String(areaRaw) : null

    const additionalRaw = getAnswer(answers, FIELD_IDS.additional)?.value
    const additionalServices = Array.isArray(additionalRaw) ? additionalRaw as string[] : []

    const desiredDate = (getAnswer(answers, FIELD_IDS.desiredDate)?.value as string) || null

    const supabase = createAdminClient()

    const { error } = await supabase.from('quotes').insert([{
      name,
      phone,
      service_type: serviceType,
      address: address || null,
      area: area || null,
      desired_date: desiredDate || null,
      additional_services: additionalServices.length ? additionalServices.join(', ') : null,
      message: null,
      status: 'pending',
    }])

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'DB 저장 실패' }, { status: 500 })
    }

    await sendKakaoNotification({ name, phone, serviceType, address, area, desiredDate, additionalServices })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Walla webhook error:', err)
    return NextResponse.json({ error: '서버 오류' }, { status: 500 })
  }
}
