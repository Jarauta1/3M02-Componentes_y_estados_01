import logo from './logo.svg';
import './App.css';


function App() {
  const evento = {
    nombre: "Salsa dance party",
   fecha: "24/07/2020",
    hora: "16:00",
    lugar: {
          direccion:"Done Bikendi Kalea, 2",
          ciudad: "Bilbao"
      }
}


return (
  <>
  <h1>{evento.nombre}</h1>
<p>{evento.fecha} a las {evento.hora}</p>
<p>{evento.lugar.direccion}, {evento.lugar.ciudad}</p>
  </>
)

}

export default App;
