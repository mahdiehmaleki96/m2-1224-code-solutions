import { useState } from 'react';
import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const srcs = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const captions = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const descriptions = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];

export function App() {
  const [imageIndex, setImageIndex] = useState(0);

  // Handles cycling through images, captions, and descriptions
  function handleNextImage() {
    setImageIndex((prevIndex) => (prevIndex + 1) % srcs.length);
  }

  return (
    <>
      <Header text="React Image Bank" />
      <Image onClick={handleNextImage} src={srcs[imageIndex]} />
      <Caption caption={captions[imageIndex]} />
      <Description text={descriptions[imageIndex]} />
      <Button label="Click for Next Image" onClick={handleNextImage} />
    </>
  );
}
