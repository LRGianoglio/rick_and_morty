import Card from './Card';

export default function Cards({characters}) { //hago destructuring con {} para sacar characters de prop
   return (
   <div>
      {
      characters.map(character => (
         <Card
            key = {character.id}
            name ={character.name}
            status = {character.status}
            species = {character.species}
            gender = {character.gender}
            origin = {character.origin?.name} /*le  pongo el ? para condicional de si existe*/
            image = {character.image}
            onClose ={() => window.alert('Emulamos que se cierra la card')}
         />
      ))
      }
   </div>
   )
}
