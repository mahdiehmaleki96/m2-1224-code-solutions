import { useState } from 'react';

type Props = {
  captions: string[];
};

export function Caption({ captions }: Props) {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % captions.length);
  };

  return (
    <h3 onClick={handleClick} style={{ cursor: 'pointer' }}>
      {captions[index]}
    </h3>
  );
}
