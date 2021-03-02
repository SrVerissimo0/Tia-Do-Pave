import React, {useEffect, useState} from 'react'
import CardsMensagem from '../Compo/CardsMensagem'

function Recrutamento() {

    const [recrutamentos, setRecrutamentos] = useState([])

    useEffect(async () => {
        const answer = await fetch("https://ordorealitasnode.herokuapp.com/ver/recrutamento",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        } )
        const data = await answer.json()
        setRecrutamentos(data)
    }
    , [] )

    var recrutamento = recrutamentos.map(item => {
        if(item.respondido_recrutamento == 0){
            return(
            <CardsMensagem 
            id={item.id_visitante}
            data={item.data_recrutamento_visitante}
            nome={item.nome_visitante}
            email={item.email_visitante}
            texto={item.texto_recrutamento}
            />
            )
        }
    })

    return (
        <div>
            {recrutamento}
        </div>
    )
}

export default Recrutamento
