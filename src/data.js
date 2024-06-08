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
