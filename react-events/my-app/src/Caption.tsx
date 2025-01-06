type Props = {
  caption: string;
};
export function Caption({ caption }: Props) {
  return (
    <h3 style={{ textAlign: 'center', marginTop: '10px', color: '#555' }}>
      {caption}
    </h3>
  );
}
