import React from "react";
import { useSelector } from "react-redux";

function Home2() {
  const tweets = useSelector((state) => state.tweets);
  console.log("tweets"+ tweets);

  const nombreCompleto = (user)=> user.nombre + " " + user.apellido ;
  const usuario1 = {
    nombre: "pepe",
    apellido : "lopez"
  }

  const persona = {name:"Ale", adress:"yi2333"}
  const {name, adress}= persona 

  const edad= 18
  let mensaje = "" 
  if (edad>18){
    mensaje=" ale es tu nombre "
  } else {
    mensaje = " no es ale tu nombre"
  }

  const lista = ["fiat"," audi","ford","suzuki",]

  let age= 10

  
  return (
    <>
      <h2>Home2</h2>
      <span>{nombreCompleto(usuario1)}</span>
      <span><button>hola</button> <button>hola</button></span>
      <h4>{name}</h4>
      <span>{mensaje}</span>
      <p>{age >=18 ? "tomate una cerveza": "Lo siento , sos menor de edad"}</p>
      <div>
        <ul>
            {lista.map((item)=>item[0]==="f"?<li> {item}</li>:[])}
        </ul>
      </div>
    </>
  );
}

export default Home2;