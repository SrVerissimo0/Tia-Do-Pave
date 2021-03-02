import React, {useEffect, useState} from 'react'
import CardsCadastro from '../Compo/CardsCadastro.js'

function Cadastro() {

    const [cadastros, setCadastros] = useState([])

    useEffect( async () => {
        const answer = await fetch("https://ordorealitasnode.herokuapp.com/autentica",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await answer.json()
        setCadastros(data)
    }
    , [])

    console.log(cadastros)
    var cadastro = cadastros.map(item => {
        if(item.estado_visitante == "Em Analise"){
            return(
            <CardsCadastro 
            id={item.id_visitante}
            nome={item.nome_visitante}
            email={item.email_visitante}
            cpf={item.cpf_visitante}
            data={item.data_cadastro_visitante}
            />
            )
        }
    })

    return (
        <div>
            {cadastro}
        </div>
    )
}

export default Cadastro
