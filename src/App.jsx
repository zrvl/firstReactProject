import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ArticlePage from "./pages/ArticlePage";
import InfoPage from "./pages/InfoPage";
import ReviewPage from "./pages/ReviewPage";
import Layout from "./components/Layout";
import PostPage from './pages/PostPage';
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<ArticlePage/>}/>
        <Route path="post/:id" element={<PostPage/>}/>
        <Route path="info" element={<InfoPage/>}/>
        <Route path="reviews" element={<ReviewPage/>}/>
        <Route path="*" element={<PageNotFound/>} />
      </Route>
    </Routes>
  );
}

export default App;
