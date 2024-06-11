import animationImg from './assets/animation.png';
import Camera from './assets/camera.png';
import Materials from './assets/materials.png';
import Objetc3D from './assets/Objetc3D.png';

export const CORE_CONCEPTS = [
  {
    image: animationImg,
    title: 'Animation',
    description:
      'Animation is an essential technique for creating movement and interactivity in your 3D scenes. ',
  },
  {
    image: Camera,
    title: 'Camera',
    description:
      'Abstract base class for cameras. This class should always be inherited when you build a new camera.',
  },
  {
    image: Materials,
    title: 'Materials',
    description:
      'These constants define properties common to all material types, with the exception of Texture Combine.',
  },
  {
    image: Objetc3D,
    title: 'Objetc3D',
    description:
      'This is the base class for most objects in three.js and provides a set of properties and methods for manipulating objects in 3D space.',
  },
];

export const EXAMPLES = {
  animation: {
    title: 'Animation',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  camera: {
    title: 'Camera',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  materials: {
    title: 'Materials',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  object3D: {
    title: 'Object3D',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};