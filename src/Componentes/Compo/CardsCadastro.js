import React, { useState } from 'react'
import './CardsCadastro.css'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function CardsCadastro(props) {

    var dia = props.data.split('T')[0]
    var tempo = props.data.split('T')[1].split('.')[0]

    const [resp, setResp] = useState()

    async function Update(estado){
      const answer = await fetch("https://ordorealitasnode.herokuapp.com/Atualiza",{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "estado": estado,
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
        <p>Email: {props.email}</p>
        <p>CPF: {props.cpf}</p>
        <p>Cadastro no dia: {dia} as {tempo}</p>
        <Button onClick={() => {Update("Aceito")}} variant="success" className="Aceitar">Aceitar</Button>
        <Button onClick={() => {Update("Recusado")}} variant="danger" className="Recusar">Recusar</Button>
      </div>
    </div>
    )
}

export default CardsCadastro
