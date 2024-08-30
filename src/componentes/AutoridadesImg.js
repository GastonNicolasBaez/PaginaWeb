// AutoridadesImg.js
import React from 'react';
import image1 from '../assets/images/IBANEZ.jpg';
import image2 from '../assets/images/BARCHUCK.jpg';
import image3 from '../assets/images/IBANEZ.jpg';
import './Autoridades.css'; // Asegúrate de importar el archivo CSS

function AutoridadesIMG({ text }) {
  // Determina la imagen a mostrar según el texto
  let imageSrc;
  switch (text) {
    case 'First slide':
      imageSrc = image1;
      break;
    case 'Second slide':
      imageSrc = image2;
      break;
    case 'Third slide':
      imageSrc = image3;
      break;
    default:
      imageSrc = image1;
  }

  return (
    <div className="image-container">
      <img src={imageSrc} alt={text} />
    </div>
  );
}

export default AutoridadesIMG;

