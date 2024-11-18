import Movielist from "./MovieList";
const App = () => {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "black",
          color: "white",
          fontSize: "40px",
          textAlign: "center",
        }}
      >
        Netflix Clone app
      </h1>
      <Movielist />
    </div>
  );
};

export default App;
