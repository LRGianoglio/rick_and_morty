import styles from './Card.module.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {addFav, removeFav} from '../../redux/actions'
import { useState, useEffect } from 'react';


function Card({id, name, status, species, gender, origin, image, onClose, filteredFavorites, addFav, removeFav}) {
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      filteredFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [filteredFavorites]);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({
            id: id,
            name: name,
            status: status,
            species: species,
            gender: gender,
            origin: origin,
            image: image,
            onClose: onClose
         })
      }
   }

   return (
      <div className={styles.cardDiv}>
         <div className={styles.buttonDiv}>
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
            <button onClick={()=>onClose(id)}>X</button>
         </div>
         <Link to={`/detail/${id}`} className={styles.link}>
            <h2 className={styles.hNombre}>{name}</h2>
         </Link>
         <img src={image} alt='Imagen' className={styles.img} />
         <h4 className={styles.hDesc}>Status: {status}</h4>
         <h4 className={styles.hDesc}>Gender: {gender}</h4>
         <h4 className={styles.hDesc}>Species: {species}</h4>
         <h4 className={styles.hDesc}>Origin: {origin}</h4>
      </div>
   );
}

const mapStateToProps = (state) => {
   return{
      filteredFavorites: state.filteredFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);