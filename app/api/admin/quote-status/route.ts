import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { cookies } from 'next/headers'

export async function PATCH(request: NextRequest) {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')

  if (!session || session.value !== 'authenticated') {
    return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 })
  }

  try {
    const { id, status } = await request.json()

    const validStatuses = ['pending', 'contacted', 'completed', 'cancelled']
    if (!id || !validStatuses.includes(status)) {
      return NextResponse.json({ error: '잘못된 요청입니다.' }, { status: 400 })
    }

    const supabase = createAdminClient()
    const { error } = await supabase
      .from('quotes')
      .update({ status })
      .eq('id', id)

    if (error) {
      return NextResponse.json({ error: 'DB 업데이트 실패' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: '서버 오류' }, { status: 500 })
  }
}
