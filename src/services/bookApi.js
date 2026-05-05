import axios from 'axios'

// Sử dụng mockapi.io hoặc json-server cho trước:
// URL mẫu: https://67xxxxx.mockapi.io/books
export const API_URL = 'https://67ec9394aa794fb3222e224b.mockapi.io/books'

// TODO (Câu 2): SV viết hàm fetch danh sách sách bằng axios
export async function getBooks() {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

// TODO (Câu 7): SV viết hàm POST thêm sách mới
export async function addBook(book) {
  // ...
}

// TODO (Câu 8): SV viết hàm DELETE sách theo id
export async function deleteBook(id) {
  // ...
}

// TODO (Câu 5): SV viết hàm GET chi tiết 1 cuốn sách theo id
export async function getBookById(id) {
  // ...
}
