import react ,{Component} from 'react'
export default class Count extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    handleClick(){
        this.setState({
            count:++this.state.count
        })
    }

    render(){
        return (
            <div>
                11111
                当前count值:{this.state.count} <br/>
                <button style={{border:'1px dashed blue'}} onclick={()=>this.handleClick}>add 1</button>
            </div>
        )
    }
}