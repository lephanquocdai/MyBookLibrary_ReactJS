import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { booksState } from '../store/atoms'

function HomePage() {
  const books = useRecoilValue(booksState)

  // TODO (Câu 6): SV dùng useMemo để tính số lượng sách theo từng trạng thái
  // stats = { total, read, reading, unread }
  // Giải thích: Dùng useMemo ở đây để tránh việc phải duyệt mảng books và tính toán lại thống kê một cách không cần thiết mỗi khi component bị re-render bởi các lý do khác. Việc tính toán chỉ thực hiện lại khi mảng books thực sự thay đổi, giúp tối ưu hiệu suất.
  const stats = useMemo(() => {
    // SV tính toán ở đây
    const result = { total: books.length, read: 0, reading: 0, unread: 0 };
    books.forEach(book => {
      if (book.status === 'read') result.read++;
      else if (book.status === 'reading') result.reading++;
      else if (book.status === 'unread') result.unread++;
    });
    return result;
  }, [books])

  return (
    <div>
      <h2 style={{ marginBottom: 20 }}>📊 Thống kê tủ sách</h2>

      <div className="stats">
        <div className="stat-box">
          <div className="num">{stats.total}</div>
          <div>Tổng số sách</div>
        </div>
        <div className="stat-box">
          <div className="num" style={{ color: '#27ae60' }}>{stats.read}</div>
          <div>Đã đọc xong</div>
        </div>
        <div className="stat-box">
          <div className="num" style={{ color: '#f39c12' }}>{stats.reading}</div>
          <div>Đang đọc</div>
        </div>
        <div className="stat-box">
          <div className="num" style={{ color: '#95a5a6' }}>{stats.unread}</div>
          <div>Chưa đọc</div>
        </div>
      </div>

      <div className="card">
        <h3>Chào mừng đến với thư viện cá nhân của bạn!</h3>
        <p style={{ marginTop: 8 }}>
          Vào mục <b>Danh sách sách</b> để xem, tìm kiếm và lọc sách theo trạng thái đọc.
          Dùng mục <b>Thêm sách</b> để đưa sách mới vào tủ sách của bạn.
        </p>
      </div>
    </div>
  )
}

export default HomePage
