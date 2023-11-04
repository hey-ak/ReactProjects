import Card from "./assets/components/Card";
import "./App.css";

function App() {
  let myObj = {
    username: "Akshay",
    age: 20,
  };
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="Shubham" btnText="Start" />
      <Card username="Akshay" />
    </>
  );
}

export default App;
