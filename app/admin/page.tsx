import { createAdminClient } from '@/lib/supabase'
import AdminDashboard from './AdminDashboard'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default async function AdminPage() {
  const cookieStore = await cookies()
  const adminSession = cookieStore.get('admin_session')

  if (!adminSession || adminSession.value !== 'authenticated') {
    redirect('/admin/login')
  }

  let quotes: Quote[] = []
  let fetchError = false

  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('quotes')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase fetch error:', error)
      fetchError = true
    } else {
      quotes = data || []
    }
  } catch (err) {
    console.error('Admin page error:', err)
    fetchError = true
  }

  return <AdminDashboard quotes={quotes} fetchError={fetchError} />
}

export interface Quote {
  id: string
  name: string
  phone: string
  email: string | null
  service_type: string
  address: string | null
  area: string | null
  desired_date: string | null
  message: string | null
  status: 'pending' | 'contacted' | 'completed' | 'cancelled'
  created_at: string
}
