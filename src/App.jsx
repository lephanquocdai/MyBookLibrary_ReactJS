import { useEffect } from 'react'
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from './store/atoms'
import { useLocalStorage } from './hooks/useLocalStorage'
import HomePage from './pages/HomePage.jsx'
import BookListPage from './pages/BookListPage.jsx'
import BookDetailPage from './pages/BookDetailPage.jsx'
import AddBookPage from './pages/AddBookPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

function App() {
  // TODO (Câu 9): Lấy thông tin user từ Recoil để hiển thị tên + nút Logout
  const [user, setUser] = useRecoilState(userState)
  const [savedUser, setSavedUser] = useLocalStorage('user', null)
  const navigate = useNavigate()

  useEffect(() => {
    if (savedUser && !user) {
      setUser(savedUser)
    }
  }, [savedUser, user, setUser])

  const handleLogout = () => {
    setUser(null)
    setSavedUser(null)
    navigate('/login')
  }

  // TODO (Câu 10): Làm ProtectedRoute cho các trang cần đăng nhập

  return (
    <>
      <nav className="navbar">
        <h1>📚 My Book Library</h1>
        <div>
          <NavLink to="/" end>Trang chủ</NavLink>
          <NavLink to="/books">Danh sách sách</NavLink>
          <NavLink to="/add">Thêm sách</NavLink>
          {!user ? (
            <NavLink to="/login">Đăng nhập</NavLink>
          ) : (
            <>
              <span style={{ color: 'white', marginRight: 15, fontWeight: 'bold' }}>Xin chào, {user.username}</span>
              <button onClick={handleLogout} className="btn btn-danger" style={{ padding: '6px 12px' }}>Logout</button>
            </>
          )}
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BookListPage />} />
          <Route path="/books/:id" element={<BookDetailPage />} />
          <Route path="/add" element={<AddBookPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}

export default App
