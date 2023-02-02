import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPost from './features/posts/EditPost';
import Layout from './component/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path='post'>
          <Route index element={<AddPostForm />} />
          <Route path=':postId' element={<SinglePostPage />} />
          <Route path='edit/:postId' element={<EditPost />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
