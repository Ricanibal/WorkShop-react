import React from 'react'
import  ReactDOM  from 'react-dom/client'
import {Header} from './components/Header.js'
import {Barra} from '../src/components/BarraLateral.js'
import {HeaderFiltro} from '../src/components/Emepelados/HerderFiltro.js'
import {Trabajos} from '../src/components/Emepelados/Working.js'
import './style/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
    <Header/>
    <div className='cuerpo'>
        <Barra/>
        <div className='zonatrabajo'>
            <HeaderFiltro/>
            <Trabajos/>  
        </div>
        
    </div>
    </>
    
)