import React, {useEffect, useState} from 'react'
import CardsAjuda from '../Compo/CardsAjuda'

function Recrutamento() {

    const [ajudas, setAjudas] = useState([])

    useEffect(async () => {
        const answer = await fetch("https://ordorealitasnode.herokuapp.com/ver/ajuda",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        } )
        const data = await answer.json()
        setAjudas(data)
    }
    , [] )

    var ajuda = ajudas.map(item => {
        if(item.respondido_ajuda == 0){
            return(
            <CardsAjuda 
            id={item.id_visitante}
            data={item.data_ajuda_visitante}
            nome={item.nome_visitante}
            email={item.email_visitante}
            texto={item.texto_ajuda}
            />
            )
        }
    })

    return (
        <div>
            {ajuda}
        </div>
    )
}

export default Recrutamento
