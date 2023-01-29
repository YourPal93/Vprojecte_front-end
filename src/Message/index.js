import React from 'react';
import './Message.css';

const Message = (props) => {
  const { description } = props;
  return (
    <>
      <div className='message-wrapper'>
        <div className='message-header d-flex gap-5'>
          Username
        </div>
        <div className='message-content'>
            {description}
        </div>
      </div>
    </>
  );
};

export default Message;
