import React from 'react';
import image1 from '../assets/images/AmbulanciaHNPB.jpg';
import image2 from '../assets/images/EcografiaHNPB.jpg';
import image3 from '../assets/images/EscudoHNPB.jpg';
import image4 from '../assets/images/FrenteHNPB.jpg';
import image5 from '../assets/images/HospitalAireHNPB.jpg';
import image6 from '../assets/images/FrenteDireccionHNPB.jpg';
import styles from './CardGroup.module.css'; // Importa el archivo CSS módulo

function ImagenesNovedades({ text }) {
  let imageSrc;
  switch (text) {
    case 'noticia-uno':
      imageSrc = image1;
      break;
    case 'noticia-dos':
      imageSrc = image2;
      break;
    case 'noticia-tres':
      imageSrc = image3;
      break;
    case 'noticia-cuatro':
      imageSrc = image4;
      break;
    case 'noticia-cinco':
      imageSrc = image5;
      break;
    case 'noticia-seis':
      imageSrc = image6;
      break;
    default:
      imageSrc = image1;
  }

  return (
    <div className={styles.cardImgWrapper}>
      <img className={styles.cardImgTop} src={imageSrc} alt={text} />
    </div>
  );
}

export default ImagenesNovedades;
