import "./Marks.css";

const Marks = ({ name, roll, m1, m2, m3 }) => {
  return (
    <div id="disp">
      <h1>Marksheet</h1>
      <h2>Name: {name}</h2>
      <h2>Roll Number: {roll}</h2>
      <h2>Semester 1:{m1}</h2>
      <h2>semester 2:{m2}</h2>
      <h2>semester 3:{m3}</h2>
    </div>
  );
};

export default Marks;
