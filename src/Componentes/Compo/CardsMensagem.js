import React, { useState } from 'react'
import './CardsCadastro.css'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function CardsMensagem(props) {

  const [ resp, setResp ] = useState('')

    async function Update(){
        const answer = await fetch("https://ordorealitasnode.herokuapp.com/Atualiza/recrutamento",{
            method: "POST",
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "estado": 1,
              "id": props.id  
            })})
    
        const data = await answer.json()
        setResp(data.Mensagem)
    } 
    
      if(resp == "Atualizou"){
        return(<Redirect to="/Tia-Do-Pave" />)
      }

    return (
    <div className="card-funcionario">
      <div className="info-funcionario">
        <h4>Nome: {props.nome}</h4>
        <p>Data: {props.data.split('T')[0]} as {props.data.split("T")[1].split(".")[0]}</p>
        <p>Email: {props.email}</p>
        <p>Texto:</p>
        <p>{props.texto}</p>
        <Button onClick={() => {Update()}} variant="success" className="Aceitar">Respondido</Button>
      </div>
    </div>
    )
}

export default CardsMensagem
