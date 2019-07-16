import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewPost from './Newpost';
import CreatePost from './CreatePost';
import PostList from './PostList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <CreatePost />
      </div>
      <div className="col-md-6">
            <PostList />
          </div>
    </div>
  </div>
  );
}

export default App;
