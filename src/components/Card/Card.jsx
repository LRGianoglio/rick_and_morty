import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={styles.cardDiv}>
         <button onClick={()=>onClose(id)}>X</button> {/*ONCLOSE ES SI LLAVES PORQUE SI NO SE EECUTA AL TOQUE LA CONCHA DE TODO*/}
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <img src={image} alt='Imagen' className={styles.img} />
         <h4>{status}</h4>
         <h4>{gender}</h4>
         <h4>{species}</h4>
         <h4>{origin}</h4>
      </div>
   );
}
