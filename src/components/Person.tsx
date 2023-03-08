type personProps = {
  firstname: string;
  lastname: string;
  age: number;
};

const Person = (props: personProps) => {
  const { firstname, lastname, age } = props;
  return (
    <div>
      <h2>Person information</h2>
      <div>Firstname : {firstname}</div>
      <div>Lastname : {lastname}</div>
      <div>Age : {age}</div>
    </div>
  );
};

export default Person;
