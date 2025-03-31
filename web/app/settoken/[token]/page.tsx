'use client' // 需要在客户端执行 localStorage 操作

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { checkOrSetAccessToken } from '@/app/components/share/utils'

export default function SetTokenPage() {
  const router = useRouter()

  useEffect(() => {
    const handleToken = async () => {
      try {
        await checkOrSetAccessToken()
        // 保存成功后可以重定向到首页或其他页面
        router.push('/')
      }
      catch (error) {
        console.error('Failed to set token:', error)
        // 处理错误情况
      }
    }

    handleToken()
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold">Processing Token...</h1>
        <p>Please wait while we process your token.</p>
      </div>
    </div>
  )
}
