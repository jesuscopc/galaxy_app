import { ISatellite } from '../interfaces';
import satellite from '../assets/images/satellite.jpg';


export const SATELLITES: Array<ISatellite> = [
  {
    name: 'Kenoby',
    x: -500,
    y: -200,
    distance: 100,
    image: satellite,
    message: ['', 'este', 'es', 'un', 'mensaje'],
  },
  {
    name: 'Skyewalker',
    x: 100,
    y: -100,
    distance: 115.5,
    image: satellite,
    message: ['este', '', 'un', 'mensaje'],
  },
  {
    name: 'Sato',
    x: 500,
    y: 100,
    distance: 142.7,
    image: satellite,
    message: ['', '', 'es', '', 'mensaje'],
  }
]