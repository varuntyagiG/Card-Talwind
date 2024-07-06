import { Card } from "./Components/Cards";

function App() {
  return (
    <>
      <Card amountinfo="Amount Pending" rupee="92,312.20" orders={13} />
      <Card amountinfo="Amount Processed" rupee="23,92,312.19" orders={7} />
      <Card amountinfo="Amount Processed" rupee="77,23445.19" orders={9} />
    </>
  );
}

export default App;
