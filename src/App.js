import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/6")
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json();
        setAnimals(data);
      } catch (err) {
        console.log(err.message);
        setError("Could not fetch data");
      }
    }
    fetchCharacters()
  }, []);

  return <div className="App">
    {animals.map((animal, index) => (
      <div key={index} className="animalBox">
        <h1>{ animal.name }</h1>
        <img src={animal.image_link} alt={animal.name}></img>
      </div>
    ))}

  </div>;
}

export default App;


