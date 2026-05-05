import { useState, useEffect } from 'react'

// TODO (Câu 4): SV hoàn thiện custom hook useLocalStorage
// Hook này đồng bộ state với localStorage theo key
// Yêu cầu:
//   - Khi khởi tạo: đọc giá trị từ localStorage, nếu không có thì dùng initialValue
//   - Khi setValue: cập nhật state và ghi vào localStorage
//   - Trả về [value, setValue] giống useState
export function useLocalStorage(key, initialValue) {
  // SV viết code ở đây
}
