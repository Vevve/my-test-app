import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from './App.module.css'
import { Navigation } from './navigation/Navigation.js'
import { Attributes } from './views/Attributes.js'
import { Form } from './views/Form.js'
import { Home } from './views/Home.js'
import { NoMatch } from './views/NoMatch.js'



const MyApp = () => (
    <BrowserRouter>
        <div className={styles.container}>
            <div className={styles.left}>
                <Navigation />
            
        </div>
            <div className={styles.right}>
                <Routes>
                    <Route exact path='/' Component={Home} />
                    <Route exact path='/form' Component={Form} />
                    <Route exact path='/attributes' Component={Attributes} />
                    <Route Component={NoMatch} />
                </Routes>
            </div>
    </div>
    </BrowserRouter>
)

export default MyApp
