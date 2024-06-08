import { useEffect, useState } from "react";

import logoThreeJs from './assets/threejs.png';
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// Produz um índice aleatório que gera as diferentes palavras possíveis de forma aleatória

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));

  
}


function Header() {
  const [descriptionIndex, setDescriptionIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDescriptionIndex(getRandomInt(2));
    }, 1500);

    return () => clearInterval(intervalId);
  }, []); // O segundo argumento vazio faz com que o useEffect seja executado apenas uma vez, após a montagem do componente


  return (
    <header>
      <img src={logoThreeJs} alt="Stylized atom" />
      <h1>Three Js</h1>
      <p>
      {reactDescriptions[descriptionIndex]} Three.js principles for crafting immersive 3D experiences in any web application you aspire to develop
      </p>
    </header>
  );
}
// function CorePrinciple(props) { 
// Object destructuring
function CorePrinciple({ image, title, description }) {
  

  return (
    <li>
      {/* <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p> {props.description} </p>
    </li> */}

      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p> {description} </p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2> Core Principle</h2>
        <section id="core-concepts">
          <ul>
            

            <CorePrinciple 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}

            /> 
            {/* First way to add items */}


            {/* Second way to add items */}

            <CorePrinciple {...CORE_CONCEPTS[1]}  />

            <CorePrinciple {...CORE_CONCEPTS[2]}  />  

            <CorePrinciple {...CORE_CONCEPTS[3]}  />
            
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;