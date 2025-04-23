// Add post page for adding posts to the blog

import React from 'react';
import { Container, PostForm } from '../components';

function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
