import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import ArticleListPage from './pages/ArticleListPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="articles" element={<ArticleListPage />} />
        <Route path="articles/:articleId" element={<ArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
