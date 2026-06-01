'use client'

import { useState } from 'react'
import type { Quote } from './page'

const statusLabels: Record<Quote['status'], string> = {
  pending: '대기중',
  contacted: '연락완료',
  completed: '완료',
  cancelled: '취소',
}

const statusColors: Record<Quote['status'], string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  contacted: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800',
  cancelled: 'bg-gray-100 text-gray-600',
}

const PER_PAGE = 10

interface AdminDashboardProps {
  quotes: Quote[]
  fetchError: boolean
}

export default function AdminDashboard({ quotes: initialQuotes, fetchError }: AdminDashboardProps) {
  const now = new Date()
  const [quotes, setQuotes] = useState<Quote[]>(initialQuotes)
  const [selected, setSelected] = useState<Quote | null>(null)
  const [filter, setFilter] = useState<Quote['status'] | 'all'>('all')
  const [updatingId, setUpdatingId] = useState<string | null>(null)
  const [viewYear, setViewYear] = useState(now.getFullYear())
  const [viewMonth, setViewMonth] = useState(now.getMonth())
  const [page, setPage] = useState(1)

  const prevMonth = () => {
    setPage(1)
    setSelected(null)
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11) }
    else setViewMonth(m => m - 1)
  }
  const nextMonth = () => {
    setPage(1)
    setSelected(null)
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0) }
    else setViewMonth(m => m + 1)
  }

  const monthQuotes = quotes.filter(q => {
    const d = new Date(q.created_at)
    return d.getFullYear() === viewYear && d.getMonth() === viewMonth
  })

  const filtered = filter === 'all' ? monthQuotes : monthQuotes.filter(q => q.status === filter)
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const setFilterAndReset = (f: Quote['status'] | 'all') => {
    setFilter(f)
    setPage(1)
    setSelected(null)
  }

  const counts = {
    all: monthQuotes.length,
    pending: monthQuotes.filter(q => q.status === 'pending').length,
    contacted: monthQuotes.filter(q => q.status === 'contacted').length,
    completed: monthQuotes.filter(q => q.status === 'completed').length,
    cancelled: monthQuotes.filter(q => q.status === 'cancelled').length,
  }

  const handleStatusChange = async (id: string, status: Quote['status']) => {
    setUpdatingId(id)
    try {
      const res = await fetch('/api/admin/quote-status', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      })
      if (res.ok) {
        setQuotes(prev => prev.map(q => q.id === id ? { ...q, status } : q))
        if (selected?.id === id) setSelected(prev => prev ? { ...prev, status } : prev)
      }
    } catch (err) {
      console.error('Status update error:', err)
    } finally {
      setUpdatingId(null)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    window.location.href = '/admin/login'
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 헤더 */}
      <header className="bg-[#0a1a2e] text-white px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">더퍼스트클린 관리자</h1>
        <div className="flex items-center gap-4">
          <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors">사이트 보기</a>
          <button onClick={handleLogout} className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg transition-colors">
            로그아웃
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* 월 네비게이터 */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <button onClick={prevMonth} className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-xl font-bold text-gray-900">
              {viewYear}년 {viewMonth + 1}월
            </h2>
            <button
              onClick={nextMonth}
              disabled={viewYear === now.getFullYear() && viewMonth === now.getMonth()}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* 통계 카드 */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {([
              { key: 'all', label: '전체', color: 'bg-gray-50' },
              { key: 'pending', label: '대기중', color: 'bg-yellow-50' },
              { key: 'contacted', label: '연락완료', color: 'bg-blue-50' },
              { key: 'completed', label: '완료', color: 'bg-green-50' },
              { key: 'cancelled', label: '취소', color: 'bg-gray-50' },
            ] as const).map(item => (
              <button
                key={item.key}
                onClick={() => setFilterAndReset(item.key)}
                className={`${item.color} rounded-xl p-4 text-center border-2 transition-all ${filter === item.key ? 'border-[#0a3d7a]' : 'border-transparent'}`}
              >
                <p className="text-3xl font-black text-gray-900">{counts[item.key]}</p>
                <p className="text-sm text-gray-600 mt-1">{item.label}</p>
              </button>
            ))}
          </div>
        </div>

        {fetchError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6">
            데이터를 불러오는 데 실패했습니다. Supabase 설정을 확인해 주세요.
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 문의 목록 */}
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 border-b bg-gray-50">
              <h2 className="font-bold text-gray-900">
                견적 문의 목록 ({filtered.length}건)
              </h2>
            </div>

            <div className="divide-y divide-gray-200">
              {Array.from({ length: PER_PAGE }).map((_, i) => {
                const quote = paginated[i]
                if (!quote) {
                  return (
                    <div key={`empty-${i}`} className="h-[96px]" />
                  )
                }
                return (
                  <button
                    key={quote.id}
                    onClick={() => setSelected(quote)}
                    className={`w-full text-left px-4 pt-4 pb-6 h-[96px] hover:bg-gray-50 transition-colors ${selected?.id === quote.id ? 'bg-blue-50' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 truncate">{quote.name}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{quote.service_type}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(quote.created_at).toLocaleDateString('ko-KR')}
                        </p>
                      </div>
                      <span className={`flex-shrink-0 text-xs px-2 py-1 rounded-full font-medium ${statusColors[quote.status]}`}>
                        {statusLabels[quote.status]}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* 페이지네이션 */}
            {totalPages > 1 && (
              <div className="p-3 border-t bg-gray-50 flex items-center justify-between">
                <button
                  onClick={() => setPage(p => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className="px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  이전
                </button>
                <span className="text-sm text-gray-600">
                  {page} / {totalPages}
                </span>
                <button
                  onClick={() => setPage(p => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                  className="px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-200 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  다음
                </button>
              </div>
            )}
          </div>

          {/* 문의 상세 */}
          <div className="lg:col-span-2">
            {selected ? (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">문의 상세</h2>
                  <span className={`text-sm px-3 py-1 rounded-full font-medium ${statusColors[selected.status]}`}>
                    {statusLabels[selected.status]}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { label: '이름', value: selected.name },
                    { label: '연락처', value: selected.phone },
                    { label: '서비스 종류', value: selected.service_type },
                    { label: '추가견적', value: selected.additional_services || '-' },
                    { label: '주소', value: selected.address || '-' },
                    { label: '면적', value: selected.area || '-' },
                    { label: '희망 일자', value: selected.desired_date || '-' },
                    { label: '접수 일시', value: new Date(selected.created_at).toLocaleString('ko-KR') },
                  ].map(item => (
                    <div key={item.label} className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs text-gray-500 font-medium mb-1">{item.label}</p>
                      <p className="text-gray-900 font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-xs text-gray-500 font-medium mb-2">추가 문의사항</p>
                  <p className="text-gray-900 leading-relaxed">{selected.message || '-'}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-3">상태 변경</p>
                  <div className="flex flex-wrap gap-2">
                    {(Object.entries(statusLabels) as [Quote['status'], string][]).map(([status, label]) => (
                      <button
                        key={status}
                        onClick={() => handleStatusChange(selected.id, status)}
                        disabled={selected.status === status || updatingId === selected.id}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 ${selected.status === status ? statusColors[status] : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`tel:${selected.phone}`}
                    className="flex-1 sm:flex-none px-5 py-3 bg-[#0a3d7a] text-white font-semibold rounded-xl hover:bg-[#083270] transition-colors text-center"
                  >
                    전화 연결
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="flex-1 sm:flex-none px-5 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    닫기
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm p-12 text-center text-gray-400">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-lg font-medium">목록에서 문의를 선택하면</p>
                <p>상세 내용을 확인할 수 있습니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
