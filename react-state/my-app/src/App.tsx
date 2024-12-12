import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const src = ['/starry-sky.jpeg', '/beach.jpg', '/nature.jpg'];
const captions = [
  'A Beautiful Image of Space',
  'A stunning view of the ocean',
  'An amazing feeling in nature',
];
const descriptions = [
  'A beautiful image of space with shining stars illuminating the space.',
  'A peaceful ocean, perfect for a summer vacation.',
  'The vibrant lights reflecting in the calm waters of the river.',
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image src={src} />
      <Caption captions={captions} />
      <Description descriptions={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
