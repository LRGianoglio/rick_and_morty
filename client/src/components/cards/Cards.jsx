import Card from '../card/Card';
import styles from './Cards.module.css';

export default function Cards({characters, onClose}) { //hago destructuring con {} para sacar characters de prop
   return (
   <div className={styles.displayDiv}>
      {
      characters.map(character => (
         <Card
            id = {character.id}
            key = {character.id}
            name ={character.name}
            status = {character.status}
            species = {character.species}
            gender = {character.gender}
            origin = {character.origin?.name} /*le  pongo el ? para condicional de si existe*/
            image = {character.image}
            onClose = {onClose}
         />
      ))
      }
   </div>
   )
}
