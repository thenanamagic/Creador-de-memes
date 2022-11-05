import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const[linea1, setlinea1] = useState('');
  const[linea2, setlinea2] = useState('');
  const[imagen, setImagen] = useState('');


  const onChangeLinea1 = function(evento){
    setlinea1(evento.target.value);
  }
  const onChangeLinea2 = function(evento){
    setlinea2(evento.target.value);
  }
    const onChangeImagen = function(evento){
      setImagen(evento.target.value);
  }
  const onClickExportar = function(evento){

    html2canvas(document.querySelector("#meme")).then(canvas => {
    var img = canvas.toDataURL("image/png");
        
    var link = document.createElement('a');
        link.download = 'meme.png';
        link.href = img;
        link.click()

  });;
}
  return (
    <div className="App">
     
       <select onChange={onChangeImagen}>
      <option value="comida">Llena de comida</option>
      <option value="enojada adorable">Ratona enojada</option>
      <option value="creepy">Creepy</option>
      <option value="facha">Facha</option>
      <option value="indignada">Indignación</option>
      <option value="mini yoda">Que la fuerza te acompañe</option>
      <option value="oh no">Rayos</option>
      <option value="podrida">Hasta cuando</option>
      <option value="rapido y seguro">Fast and fourius</option>
      <option value="sospecha">Situación sospechosa</option>
      <option value="tierna">Adorable</option>
      <option value="traviesa">Travesura realizada</option>
      <option value="woo">Turn down for whats</option>
     </select><br/>
    
     <input onChange={onChangeLinea1} type="text" placeholder='Ingrese primera linea de texto'/><br/>
     <input onChange={onChangeLinea2} type="text" placeholder='Ingrese segunda linea de texto'/><br/>
     
     <button onClick={onClickExportar} id="button">Exportar</button>
     

     <div className="meme" id='meme'>
      <span>{linea1}</span><br/>
      <span>{linea2}</span><br/>
      <img src={"/img/"+ imagen +".jpeg"}/>
      
     </div>
    </div>
  );
}

export default App;
