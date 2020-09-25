import React from 'react';
import './common.css';

const ContentText = (props) => {
  console.log(props);
  return(
    <>
      <section 
        className={`content ${props.theme}`}
      >
        <p 
          className={`content-text ${props.color}`}
        >
        React has been designed from the start for gradual adoption, and you can use as little or as much React as you need.
        </p>
      </section>
    </>
  );
}
export default ContentText;