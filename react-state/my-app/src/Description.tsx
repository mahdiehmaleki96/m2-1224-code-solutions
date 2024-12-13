import { useState } from 'react';

type Props = {
  descriptions: string[];
};

export function Description({ descriptions }: Props) {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
  };

  return (
    <p onClick={handleClick} style={{ cursor: 'pointer' }}>
      {descriptions[index]}
    </p>
  );
}
