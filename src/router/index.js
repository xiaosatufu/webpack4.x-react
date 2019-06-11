import React from 'react'
import {Route,Link,Switch} from 'react-router-dom'

import Home from '../pages/Home'
import Count from '../pages/Count'

const PrimaryLayout = () =>(
    <div className="primary-layout">
        <header>
            <Link to="/">toHome</Link>
            <Link to="/count">toCount</Link>
        </header>
        <main>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/count" exact component={Count}></Route>
            </Switch>
        </main>
    </div>
)

export default PrimaryLayout

