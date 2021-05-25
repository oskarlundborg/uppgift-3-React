import React from 'react'
import Navbar from './Navbar'
import './index.css'
import './reset.css'

export default function Header() {
    return (
    <header class="header">
        <div class="logo__container">
            <h1 class="logo">Welcome to The Ocean</h1>
        </div>
        <Navbar />
    </header>
    )
}
