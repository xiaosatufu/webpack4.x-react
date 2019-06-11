import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {BrowserRouter} from 'react-router-dom'
import Router from './router'


renderWithHotReload(Router)

if (module.hot) {
    module.hot.accept('./router/index.js',()=>{
        const Router = require('./router/index').default
        renderWithHotReload(Router)
    })
}

function renderWithHotReload(Router) {
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <Router></Router>
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('app')

    )
}