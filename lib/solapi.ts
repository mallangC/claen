export async function sendKakaoNotification(data: {
  name: string
  phone: string
  serviceType: string
  address?: string | null
  area?: string | null
  desiredDate?: string | null
  additionalServices?: string[]
  message?: string | null
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
    const res = await fetch('https://api.solapi.com/messages/v4/send', {
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
    if (!res.ok) {
      const errBody = await res.text()
      console.error('솔라피 발송 오류:', errBody)
    }
  } catch (err) {
    console.error('솔라피 발송 오류:', err)
  }
}
