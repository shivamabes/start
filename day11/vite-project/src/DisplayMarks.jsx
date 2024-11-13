import Marks from "./Marks";

const DisplayMarks = () => {
  const students = [
    { name: "Shivam", roll: 151, m1: 8.5, m2: 8.32, m3: 7.76 },
    { name: "Shivam", roll: 151, m1: 8.5, m2: 8.32, m3: 7.76 },
    { name: "Shivam", roll: 151, m1: 8.5, m2: 8.32, m3: 7.76 },
    { name: "Shivam", roll: 151, m1: 8.5, m2: 8.32, m3: 7.76 },
    { name: "Shivam", roll: 151, m1: 8.5, m2: 8.32, m3: 7.76 },
    { name: "Shivam", roll: 151, m1: 8.5, m2: 8.32, m3: 7.76 },
    { name: "Shivam", roll: 151, m1: 8.5, m2: 8.32, m3: 7.76 },
  ];
  return (
    <div>
      {students.map((student, index) => (
        <Marks name={students.name} />
      ))}
    </div>
    // <div id="disp">
    //   <h1>Students Detail</h1>
    //   <h2>Name: {name}</h2>
    //   <h2>Email: {email}</h2>
    //   <h2>Roll number: {roll}</h2>
    // </div>
  );
};

export default DisplayMarks;
