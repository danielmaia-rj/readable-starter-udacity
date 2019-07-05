import React from 'react';
import { Route } from 'react-router-dom';
import Categories from './components/categories/categories.component';
import CategoryPosts from './components/categories/categories.post.component';
import PostAll from './components/post/post.all';
import PostDetail from './components/post/details/post.details.component';

function App() {
  return (
    <div>
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <Categories />
            <PostAll />
          </div>
        )}
      />
      <Route exact path="/:category" component={CategoryPosts} />
      <Route exact path="/:category/:postId" component={PostDetail} />
    </div>
  );
}

export default App;