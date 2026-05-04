import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import AuthLayout from './pages/AuthLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import ArticleListPage from './pages/ArticleListPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import SignInPage from './pages/SignInPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="articles" element={<ArticleListPage />} />
        <Route path="articles/:articleId" element={<ArticlePage />} />
        <Route element={<AuthLayout />}>
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
