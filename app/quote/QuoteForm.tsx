'use client'

import { useState, useEffect } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { ko } from 'date-fns/locale'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('ko', ko)

declare global {
  interface Window {
    daum: {
      Postcode: new (config: {
        oncomplete: (data: { address: string; zonecode: string }) => void
      }) => { open: () => void }
    }
  }
}

const serviceTypes = [
  '입주청소',
  '이사청소',
  '사무실청소',
  '상가청소',
  '병·의원 청소',
  '준공청소',
  '관공서청소',
  '기타',
]

const additionalServiceOptions = [
  '줄눈시공',
  '탄성코트',
  '에어컨분해 청소',
  '새집증후군 시공',
]

interface FormData {
  name: string
  phone: string
  serviceType: string
  address: string
  detailAddress: string
  area: string
  desiredDate: Date | null
  additionalServices: string[]
  message: string
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    serviceType: '',
    address: '',
    detailAddress: '',
    area: '',
    desiredDate: null,
    additionalServices: [],
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
    script.async = true
    document.head.appendChild(script)
    return () => { document.head.removeChild(script) }
  }, [])

  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: (data) => {
        setForm((prev) => ({ ...prev, address: data.address, detailAddress: '' }))
      },
    }).open()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleAdditionalServiceToggle = (option: string) => {
    setForm((prev) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(option)
        ? prev.additionalServices.filter((s) => s !== option)
        : [...prev.additionalServices, option],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.serviceType || !form.area) {
      setErrorMsg('이름, 연락처, 서비스 종류, 면적은 필수 입력 항목입니다.')
      return
    }
    setStatus('loading')
    setErrorMsg('')

    try {
      const payload = {
        ...form,
        address: form.address + (form.detailAddress ? ` ${form.detailAddress}` : ''),
        desiredDate: form.desiredDate ? form.desiredDate.toISOString().split('T')[0] : '',
        additionalServices: form.additionalServices,
      }
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('서버 오류')
      setStatus('success')
      setForm({ name: '', phone: '', serviceType: '', address: '', detailAddress: '', area: '', desiredDate: null, additionalServices: [], message: '' })
    } catch {
      setStatus('error')
      setErrorMsg('문의 전송에 실패했습니다. 다시 시도하거나 전화로 문의해 주세요.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">견적 문의가 접수되었습니다!</h3>
        <p className="text-gray-600 text-lg mb-6">빠른 시간 내에 연락드리겠습니다.</p>
        <button
          onClick={() => setStatus('idle')}
          className="px-6 py-3 bg-[#0a3d7a] text-white font-semibold rounded-xl hover:bg-[#083270] transition-colors"
        >
          새 문의 작성하기
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* 이름 */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="홍길동"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a3d7a] focus:border-transparent text-gray-900 text-base"
            required
          />
        </div>

        {/* 연락처 */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="010-0000-0000"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a3d7a] focus:border-transparent text-gray-900 text-base"
            required
          />
        </div>

        {/* 서비스 종류 */}
        <div>
          <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
            서비스 종류 <span className="text-red-500">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a3d7a] focus:border-transparent text-gray-900 text-base bg-white"
            required
          >
            <option value="">서비스를 선택하세요</option>
            {serviceTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* 면적 */}
        <div>
          <label htmlFor="area" className="block text-sm font-semibold text-gray-700 mb-2">
            면적 (평형) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="area"
            name="area"
            value={form.area}
            onChange={handleChange}
            placeholder="예: 32"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a3d7a] focus:border-transparent text-gray-900 text-base"
          />
        </div>

        {/* 청소 주소 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            청소 주소
            <span className="ml-1 text-xs font-normal text-red-500">*(서울, 경기, 인천, 충청 지역만 가능)</span>
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={form.address}
              placeholder="주소찾기 버튼을 눌러주세요"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 text-base cursor-not-allowed"
            />
            <button
              type="button"
              onClick={handleAddressSearch}
              className="px-5 py-3 bg-[#0a3d7a] text-white text-sm font-semibold rounded-xl hover:bg-[#083270] transition-colors whitespace-nowrap"
            >
              주소찾기
            </button>
          </div>
        </div>

        {/* 상세주소 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            상세주소
          </label>
          <input
            type="text"
            name="detailAddress"
            value={form.detailAddress}
            onChange={handleChange}
            placeholder="상세주소를 입력해 주세요 (동/호수 등)"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a3d7a] focus:border-transparent text-gray-900 text-base"
          />
        </div>

        {/* 희망 일자 */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            희망 청소 일자
          </label>
          <DatePicker
            locale="ko"
            selected={form.desiredDate}
            onChange={(date: Date | null) => setForm((prev) => ({ ...prev, desiredDate: date }))}
            dateFormat="yyyy년 MM월 dd일"
            minDate={new Date()}
            placeholderText="날짜를 선택해 주세요"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a3d7a] focus:border-transparent text-gray-900 text-base"
            wrapperClassName="w-full"
            calendarClassName="shadow-xl border border-gray-200 rounded-xl"
            showPopperArrow={false}
          />
        </div>
      </div>

      {/* 추가견적 요청 */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          추가견적 요청 <span className="text-xs font-normal text-gray-500">(중복 선택 가능)</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {additionalServiceOptions.map((option) => {
            const checked = form.additionalServices.includes(option)
            return (
              <button
                key={option}
                type="button"
                onClick={() => handleAdditionalServiceToggle(option)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-colors text-left ${
                  checked
                    ? 'border-[#0a3d7a] bg-[#0a3d7a]/10 text-[#0a3d7a]'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-[#0a3d7a]/50'
                }`}
              >
                <span className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${checked ? 'bg-[#0a3d7a] border-[#0a3d7a]' : 'border-gray-400'}`}>
                  {checked && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                {option}
              </button>
            )
          })}
        </div>
      </div>

      {/* 추가 문의사항 */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          추가 문의사항
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="추가적인 요청사항이나 문의사항을 입력해 주세요."
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a3d7a] focus:border-transparent text-gray-900 text-base resize-none"
        />
      </div>

      {/* 개인정보 동의 */}
      <div className="bg-gray-50 rounded-xl p-4">
        <p className="text-sm text-gray-600">
          <strong className="text-gray-800">개인정보 수집·이용 동의</strong><br />
          수집 목적: 견적 상담 및 서비스 안내<br />
          수집 항목: 이름, 연락처, 이메일, 주소<br />
          보유 기간: 상담 완료 후 3년<br />
          위 개인정보 수집·이용에 동의하고 문의합니다.
        </p>
      </div>

      {errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-[#0a3d7a] text-white text-lg font-bold rounded-xl hover:bg-[#083270] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? '전송 중...' : '견적 문의 보내기'}
      </button>
    </form>
  )
}
