import React from 'react'
import { MenuBar, MenuBarContainer, MenuItem } from './style'

export default function Header() {
    return (
        <MenuBarContainer>
            <MenuBar>
                <MenuItem>Home</MenuItem>
                <MenuItem>Serviços</MenuItem>
                <MenuItem>Portfólio</MenuItem>
                <MenuItem>Contato</MenuItem>
                <MenuItem>Sobre</MenuItem>
            </MenuBar>
        </MenuBarContainer>

    )
}








