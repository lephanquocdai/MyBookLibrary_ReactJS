import { useState, useEffect } from 'react'

// TODO (Câu 4): SV hoàn thiện custom hook useLocalStorage
// Hook này đồng bộ state với localStorage theo key
// Yêu cầu:
//   - Khi khởi tạo: đọc giá trị từ localStorage, nếu không có thì dùng initialValue
//   - Khi setValue: cập nhật state và ghi vào localStorage
//   - Trả về [value, setValue] giống useState
export function useLocalStorage(key, initialValue) {
  // SV viết code ở đây
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }, [key, value])

  return [value, setValue]
}
