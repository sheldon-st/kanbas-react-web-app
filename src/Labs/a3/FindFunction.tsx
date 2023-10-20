export default function FindFunction() {
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2", "string3"];
  const four = numberArray1.find((a) => a === 4);
  const string3 = stringArray1.find((a) => a === "string3");

  return (
    <div>
      <h1>Find Function</h1>
      <h2>Number Array</h2>
      <p>Array: {numberArray1}</p>
      <p>Find 4: {four}</p>
      <h2>String Array</h2>
      <p>Array: {stringArray1}</p>
      <p>Find string3: {string3}</p>
    </div>
  );
}
