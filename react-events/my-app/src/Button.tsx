type Props = {
  label: string;
  onClick: () => void; // Function passed to handle button click
};

export function Button({ label, onClick }: Props) {
  return (
    <button onClick={onClick} style={{ marginTop: '10px', padding: '10px' }}>
      {label}
    </button>
  );
}
