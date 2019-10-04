class Counter extends React.Component{
    constructor(props) {
        super(props)
        this.handleAddOne=this.handleAddOne.bind(this)
        this.handleMinusOne=this.handleMinusOne.bind(this)
        this.handleReset=this.handleReset.bind(this)
        this.state={
            count:0
        };
    }
    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return{
                count:prevState.count - 1
            }
        })
    }
    handleReset(){
        this.setState(()=>{
            return{
                count : 0
            }
        })
        // this.setState({
        //     count:0
        // })
        // this.setState({
        //     count : this.state.count + 1
        // })
        //setState metodu bu şekildede kullanılabilir. Ancak bu asenkron olarak çalışır. Buda demektirki biz önce countu 0 yapıp sonra
        // 1 yapmasını beklerken this.setState içerisine doğrudan obje yolladığımızda sadece 1 artar. Önce 0 yapıp sonra 1 arttırmaz.
    }
    render(){
        return(
            <div>
                <h1>Count :{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />,document.getElementById('app'))
// let count=0;
// const addOne=()=>{
//     count++;
//     renderCounterApp();
// }
// const minusOne=()=>{
//     count--
//     renderCounterApp();
// }
// const reset=()=>{
//     count=0
//     renderCounterApp();
// }
// //Jsx içerisinde bazı attirubuteların isimleri değişmiştir. Örnek html class =jsx className


// const appRoot=document.getElementById('app');


// const renderCounterApp=()=>{
//     const templateThree= (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={addOne} >+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
//     ReactDOM.render(templateThree,appRoot)
// }

// renderCounterApp();