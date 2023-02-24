import React from 'react'
import { MenuBar, MenuBarContainer, MenuItem } from './style'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <MenuBarContainer>
            <MenuBar>
                <MenuItem><Link to="/">Home</Link></MenuItem>
                <MenuItem><Link to="/servicos">Serviços</Link></MenuItem>
                <MenuItem><Link to="/portfolio">Portfólio</Link></MenuItem>
                <MenuItem><Link to="/contato">Contato</Link></MenuItem>
                <MenuItem><Link to="/sobre">Sobre</Link></MenuItem>
            </MenuBar>
        </MenuBarContainer>
    )
}








