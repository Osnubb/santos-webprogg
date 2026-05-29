import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import DashLayout from './layouts/DashLayout.jsx'
import AuthLayout from './pages/AuthLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import ArticleListPage from './pages/ArticleListPage.jsx'
import DashboardPage from './pages/DashboardPages/DashboardPage.jsx'
import DashArticleListPage from './pages/DashboardPages/DashArticleListPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ReportsPage from './pages/DashboardPages/ReportsPage.jsx'
import SignInPage from './pages/SignInPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import UsersPage from './pages/DashboardPages/UsersPage.jsx'

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
      <Route path="dashboard" element={<DashLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="articles" element={<DashArticleListPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
