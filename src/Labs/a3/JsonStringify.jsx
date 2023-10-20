export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];

  return (
    <>
      <h3>JSON.stringify</h3>
      squares = {squares}
      <br />
      JSON.stringify(squares) = {JSON.stringify(squares)}
      <br />
    </>
  );
}
