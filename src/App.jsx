import Person from "./components/Person";


function App() {

  return (
    <>
      <Person 
        name="Kleon"
        surname="Arapaj"
        age="13"
        gender="male"
        $student
        nation="Albanian"
      />
      <Person 
      name="Sarela"
      surname="Arapaj"
      age="7"
      gender="female"
      $student
      nation="Albanian"
      />
      <Person 
      name="Gjysho"
      surname="Mecaj"
      age="30"
      gender="male"
      nation="Albanian"
      />
      <Person 
      name="Elona"
      surname="Arapaj"
      age="33"
      gender="female"
      nation="albanian"
      />
      <Person />
      
    </>
  );
}

export default App
/* Person => (
  name, 
  surname, 
  age,
  gender,
  $student,
  nation
)
*/