import AdminLoginForm from './AdminLoginForm'

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-[#0a1a2e] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">더퍼스트클린</h1>
          <p className="text-gray-400">관리자 로그인</p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <AdminLoginForm />
        </div>
      </div>
    </div>
  )
}
