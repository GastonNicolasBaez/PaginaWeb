import React from 'react';
import image1 from '../assets/images/IBANEZ.jpg';
import image2 from '../assets/images/Completar.jpg';
import image3 from '../assets/images/Completar.jpg';
import image4 from '../assets/images/BARCHUCK.jpg';
import './Autoridades.css'; // Asegúrate de importar el archivo CSS

function AutoridadesIMG({ text }) {
  let imageSrc;
  switch (text) {
    case 'Primer slide':
      imageSrc = image1;
      break;
    case 'Segundo slide':
      imageSrc = image2;
      break;
    case 'Tercer slide':
      imageSrc = image3;
      break;
    case 'Cuarto slide':
      imageSrc = image4;
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
