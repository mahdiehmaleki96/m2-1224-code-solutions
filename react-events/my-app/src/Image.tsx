import './Image.css';

type Props = {
  src: string;
  onClick: () => void;
};

export function Image({ src, onClick }: Props) {
  return (
    <img
      src={src}
      alt="Dynamic Content"
      onClick={onClick}
      style={{
        display: 'block',
        margin: '20px auto',
        maxWidth: '60%',
        height: 'auto',
        cursor: 'pointer',
        borderRadius: '10px',
      }}
    />
  );
}
