import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

function Menu() {
    return (
        <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
            <Nav.Link as={Link} to="/Tia-Do-Pave" href="/Tia-Do-Pave" eventKey="/Tia-Do-Pave">Cadastros</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/Recrutamento" href="/Recrutamento">Recrutamento</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/Ajuda" href="/Ajuda">Ajuda</Nav.Link>
        </Nav.Item>
        </Nav>
    //     <div class="container">
    //     <ul class="nav nav-pills nav-justified">
    //         <li class="nav-item ">
    //           <Link to="/"><a class="nav-link active" aria-current="page" href="#">Cadastros</a></Link>
    //         </li>
    //         <li class="nav-item">
    //             <Link to="/"><a class="nav-link" href="#">Recrutamento</a></Link>
    //         </li>
    //         <li class="nav-item">
    //             <Link to="/"><a class="nav-link" href="#">Ajuda</a></Link>
    //         </li>
    //     </ul>
    // </div>
    )
}

export default Menu
