import styles from './Favorites.module.css'
import Card from '../card/Card'
import { connect } from "react-redux"
import { removeFav } from '../../redux/actions'

function Favorites({onClose, filteredFavorites}){
   return (
      <div className={styles.favoritesDiv}>
         <div className={styles.selectorDiv}>
            <select name='selectOrder'>
               <option value="A">Ascendente</option>
               <option value="D">Descendente</option>
            </select>
            <select name='selectGender'>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">Unknown</option>
            </select>
         </div>
         {
            filteredFavorites.map(character => (
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

const mapStateToProps = (state) => {
    return{
      filteredFavorites: state.filteredFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);