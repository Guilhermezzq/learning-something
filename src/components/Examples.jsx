import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton 
        isSelected={selectedTopic === 'animation'}
        onSelect={() => handleSelect('animation')}>Animation</TabButton>
        <TabButton 
        isSelected={selectedTopic === 'camera'}
        onSelect={() => handleSelect('camera')}>Camera</TabButton>
        <TabButton 
        isSelected={selectedTopic === 'materials'}
        onSelect={() => handleSelect('materials')}>Materials</TabButton>
        <TabButton 
        isSelected={selectedTopic === 'object3D'}
        onSelect={() => handleSelect('object3D')}>Object3D</TabButton>
      </menu>
      { !selectedTopic && <p>Please select a topic</p>  }

      { 
      selectedTopic && ( <div id="tab-content"> 
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div> 
      
     )
    } 
      
      
    </section>
  );
};

export default Examples;