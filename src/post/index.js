import { useEffect, useState } from 'react';
import CommentSection from '../CommentSection';
import Message from '../Message';
import './Post.css';

const Post = (props) => {

  useEffect(() => {

  }, [])
  
  return (
    <div className='post-box mb-4'>
      <div className='box-wrapper' style={{ backgroundColor: 'white', margin: '5px'}}>
        <Message description={props.description}/>
      </div>
      <CommentSection postId={props.id} />
    </div>
  );
};

export default Post;