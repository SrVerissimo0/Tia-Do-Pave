import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Menu from './Componentes/Compo/Menu'
import Cadastro from './Componentes/Pages/Cadastro'
import Recrutamento from './Componentes/Pages/Recrutamento'
import Ajuda from './Componentes/Pages/Ajuda'

function Routes() {
    return (
        <>
            <header>
                <Menu />
            </header>
            <main>
                <Switch>
                    <Route exact path="/Tia-Do-Pave" component={Cadastro} />
                    <Route path='/Recrutamento' component={Recrutamento} />
                    <Route path='/Ajuda' component={Ajuda} />
                </Switch>
            </main>
        </>
    )
}

export default Routes