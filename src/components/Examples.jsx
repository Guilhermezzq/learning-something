import { useState } from "react";
import TabButton from "./TabButton";




const Examples = () => {

  const [ selectedTopic, setSelectedTopic ] = useState("Please click a button")

  function handleSelect(selectedButton) {
      // selectedButton => 'components' , 'jsx' 'props' , 'state'
      setSelectedTopic(selectedButton);
      console.log(selectedTopic);
    }

  return (
    <section id="examples">
        <h2>Examples</h2>
        <menu>
             <TabButton onSelect={ () => handleSelect('animation')} >Animation</TabButton>
             <TabButton onSelect={ () => handleSelect('camera')}>Camera</TabButton>
             <TabButton onSelect={ () => handleSelect('materials')} >Materials</TabButton>
             <TabButton onSelect={ () => handleSelect('object3d')}   >Object3D</TabButton>
        </menu>
        {selectedTopic}
    </section>
  )
}

export default Examples;