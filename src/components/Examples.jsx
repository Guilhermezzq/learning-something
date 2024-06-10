import TabButton from "./TabButton";




const Examples = () => {

    function handleSelect() {
        console.log('selected!')
    }

  return (
    <section id="examples">
        <h2>Examples</h2>
        <menu>
             <TabButton onSelect={handleSelect} >Animation</TabButton>
             <TabButton onSelect={handleSelect}>Camera</TabButton>
             <TabButton onSelect={handleSelect} >Materials</TabButton>
             <TabButton onSelect={handleSelect}   >Object3D</TabButton>
        </menu>
        
    </section>
  )
}

export default Examples;