import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Option from './components/Option';
import Header from './components/Header';
import Action from './components/Action';

class IndecisionApp extends React.Component{
    constructor(props) {
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);
        this.state={
            options: props.options
        }
    }
    componentDidMount(){
        try {
            const json=localStorage.getItem('options');
            const options=JSON.parse(json);
            if (options) {
                this.setState(({options : options}))
            }
        } catch (error) {
            //do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    handleDeleteOptions(){
        this.setState(()=> ({ options: [] }));
    }
    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>{
            return {
                options : prevState.options.filter((option) => optionToRemove!== option)
            }
        });
    }
    handlePick(){
        let number=Math.floor(Math.random() * this.state.options.length);
        alert(number)
    }
    handleAddOption(option){
        if (!option) {
            return 'Enter valid value to add item'
        }
        else if (this.state.options.indexOf(option) > -1)
        {
            return 'This option already exists'
        }
        this.setState((prevState)=>({options :prevState.options.concat(option)}))
    }
    render(){
        const tittle='Indecision';
        const subtitle='Put your life in the hands of a computer.';
        // const options=['Thing one','Thing two','Thing three']
        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length>0}
                        handlePick={this.handlePick}
                />
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}
IndecisionApp.defaultProps = {
    options : []
}





const Options=(props)=>{
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>I will remove it all!</button>
            {props.options.lenght === 0 && <p>Please add an option to get started!</p>}
            {props.options.map((option)=>
            <Option
                key={option}
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
            />)}
        </div>
    )
}


ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))