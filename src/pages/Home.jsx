import React, { Component } from 'react'
import '../assets/home.scss'


export default class Home extends Component {
    constructor(props) {
        super(props)
    }


    render(){
        return (
            <div className="home">
                <h1 className="h-txt">this is home page</h1>
            </div>
        )
    }

}
