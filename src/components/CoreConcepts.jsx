import { CORE_CONCEPTS } from "../data";
import CorePrinciple from "./CorePrincipal";

export default function CoreConcepts() {

    return (
        <> 
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
         </>
    )
}