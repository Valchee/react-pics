import React, { useState, useEffect } from 'react';

const ImageCard = props => {
  const [spans, setSpans] = useState(0);
  const imageRef = React.createRef();
  const { description, urls } = props.image

  useEffect(() => {
    imageRef.current.addEventListener('load', calcSpans);
  });

  const calcSpans = () => {
    const spans = Math.ceil(imageRef.current.clientHeight / 10);

    setSpans(spans);
  }

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
}

export default ImageCard;
