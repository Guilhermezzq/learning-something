import "./CorePrincipal.css";

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

  export default CorePrinciple;