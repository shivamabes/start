import "./App.css";
const App = ({ name, email, roll }) => {
  return (
    <div id="disp">
      <h1>Students Detail</h1>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Roll number: {roll}</h2>
    </div>
  );
};

export default App;
