import './Image.css';
import { useState } from 'react';

type Props = {
  src: string[];
};
export function Image({ src }: Props) {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % src.length);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          src={src[index]}
          onClick={handleClick}
          alt={`Image ${index + 1}`}
        />
      </div>
    </div>
  );
}
