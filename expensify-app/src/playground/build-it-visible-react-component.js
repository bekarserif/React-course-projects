class VisibilityToggle extends React.Component{
    constructor(props) {
        super(props)
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this)
        this.state={
            booleanValue:false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return{
                booleanValue : !prevState.booleanValue
            }
        })
    }
    render(){
        return(
            <div>
                <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.booleanValue?"Hide Details":"Show Details"}</button>
            {this.state.booleanValue &&<p>Some details</p>}
        </div>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'))