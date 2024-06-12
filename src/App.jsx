



import Header from "./Header/Header";
import CorePrinciple from "./components/CorePrincipal";
import Examples from "./components/Examples";


import { CORE_CONCEPTS } from "./data";





function App() {
  return (
    <> 
      <Header />
      <CorePrinciple />
      <main>
        <h2> Core Principle</h2>
        <section id="core-concepts">
          <ul>

            {CORE_CONCEPTS.map((core) => (
              <CorePrinciple key={core.title} {...core} />
            ))}
            {/* <CorePrinciple 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}

            /> 
             First way to add items 


             Second way to add items 

            <CorePrinciple {...CORE_CONCEPTS[1]}  />

            <CorePrinciple {...CORE_CONCEPTS[2]}  />  

            <CorePrinciple {...CORE_CONCEPTS[3]}  /> */}
            
          </ul>
        </section>
        <Examples />
      </main>
    </>
  );
}

export default App;