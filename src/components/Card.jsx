export default function Card(props) {
   return (
      <div>
         {<button onClick={props.onClose}>X</button>} {/*ONCLOSE ES SNI LLAVES PORQUE SI NO SE EECUTA AL TOQUE LA CONCHA DE TODO*/}
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.species}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt='Imagen' />
      </div>
   );
}
