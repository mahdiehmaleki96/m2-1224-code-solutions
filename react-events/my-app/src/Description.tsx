type Props = {
  text: string;
};
export function Description({ text }: Props) {
  return (
    <p style={{ textAlign: 'center', color: '#777', fontSize: '1rem' }}>
      {text}
    </p>
  );
}
