import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className='scroll-up-button'>
      {backToTopButton && (
        <Button size="sm"
          style={{
            position: "fixed",
            up: "5px",
            left: "10px",
            height: "30px",
            width: "100px",
          }}
          onClick={scrollUp}
        >
          Back to top
        </Button>
      )}
    </div>
  );
};

export default BackToTopButton;