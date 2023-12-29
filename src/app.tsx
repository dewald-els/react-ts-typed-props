import WithBool from "./components/with-bool";
import WithNumber from "./components/with-number";
import WithString from "./components/with-string";

const App: React.FC = () => {
  const aString = "Hello String";
  const aNumber = 42;
  const aBool = false;

  return (
    <div>
      <h1>React TypeScript Test</h1>

      <WithString value={aString} />
      <WithBool value={aBool} />
      <WithNumber value={aNumber} />

      <WithString value={aNumber} />
    </div>
  );
};

export default App;
