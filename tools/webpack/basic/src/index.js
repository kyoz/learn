import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack', 'from script'], ' ');
  element.classList.add('hello');

  // Add image to existing div
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  // Log xml data
  console.log(Data);

  return element;
}

document.body.appendChild(component());
