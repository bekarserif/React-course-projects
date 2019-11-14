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
        //bu fonksiyon Component lifecyle içerisinde dahil edildiğinde çalışan bir fonksiyondur.
        //ve bu fonksiyonlar sadece class based componentlar içerisinde kullanılabilirler.
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
        /*bu fonksiyon Component içerisinde statelerde yada proplarda bir değişiklik olduğu zaman
        tetiklenen bir fonksiyondur.*/
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

const Header= (props)=>{
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps= {
    title : 'Indecision Default Prop'
}

// class Header extends React.Component{ 
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }


const Action = (props)=> {
    return(
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What Should I do?
            </button>
        </div>
    )
}
// class Action extends React.Component{
    
//     render(){
//         return(
//             <div>
//                 {/* <button onClick={this.handlePick()}>What Should I do?</button> Eğer bu kod içerisinde
//                 handlepick() methodu şeklinde kullanılırsa sayfa yenilendiği anda çalışır.
//                 Eğer onlick eventinde çalışmasını istiyorsak 
//                 <button onClick={this.handlePick}>What Should I do?</button> şeklinde kullanmalıyız.                
//                 */}
//                 <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >
//                 What Should I do?
//                 </button>
//             </div>
//         )
//     }
// }

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

// class Options extends React.Component{
//     render(){
//         return(
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>I will remove it all!</button>
//                 {this.props.options.map((option)=><Option key={option} optionText={option}/>)}
//             </div>
//         )
//     }
// }


const Option=(props)=>{
    return(
        <div>{props.optionText}
        <button onClick={(e)=>{
            props.handleDeleteOption(props.optionText)
            }}>Remove</button>
        </div>
    )
}




//key valuesuna prop olarak erişilemez.
// class Option extends React.Component{
//     render(){
//         return(
//             <p>{this.props.optionText}</p>
//         )
//     }
// }


class AddOption extends React.Component{
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error : undefined
        };
    }
    onFormSubmit(e){
        e.preventDefault();
        console.log('form submitted!');
        const option=e.target.elements.option.value.trim();
        const error=this.props.handleAddOption(option);
        this.setState(()=>({ error : error }))
        if (!error) {
            e.target.elements.option.value=''            
        }

    }
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input name='option' type='text'/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


const obj={
    name:'Vikram',
    getName(){
        return this.name;
    }
}
// const getName=obj.getName;
// console.log(getName());
/*Burada getName değişkenine sadece objenin içerisindeki fonksiyonu atadığımız için name değişkeni
içerisindeki değerleri alamaz. Yani objeye değil fonksiyonun kendisine bind edilmiş olur. Bu nedenle objenin
içerisindeki tüm değerlere erişebilmesi için bind methodunun kullanılması gerekir.
Aynı işlem react componentları içinde geçerlidir.
Componentlar içerisinde tanımladığımız this.props değişkeni içerisindeki prop değerlerine render() içerisindeki
fonksiyondan erişilebiliyorken event handler fonksiyonları içerisinde erişilemez.
*/

const getName=obj.getName.bind(obj);

// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// ) Eski kullanım.


//stateless functional component
const User = (props) => {
    return (
        <div>
            <p>Name : {props.name} </p>
            <p>Age : {props.name} </p>
        </div>
    )
}
// ReactDOM.render(<User name="Andrew" age={26}/>,document.getElementById('app'))
ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))