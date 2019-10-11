class IndecisionApp extends React.Component{
    constructor(props) {
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            options:[],
            

        }
    }
    handleDeleteOptions(){
        this.setState(()=>{
            return { 
                options: []
            };
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
        this.setState((prevState)=>{
            return{
                options :prevState.options.concat(option)
            }
        })
    }
    render(){
        const tittle='Indecision';
        const subtitle='Put your life in the hands of a computer.';
        // const options=['Thing one','Thing two','Thing three']
        return(
            <div>
                <Header title={tittle} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length>0}
                        handlePick={this.handlePick}
                />
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

class Header extends React.Component{ 
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}
class Action extends React.Component{
    
    render(){
        return(
            <div>
                {/* <button onClick={this.handlePick()}>What Should I do?</button> Eğer bu kod içerisinde
                handlepick() methodu şeklinde kullanılırsa sayfa yenilendiği anda çalışır.
                Eğer onlick eventinde çalışmasını istiyorsak 
                <button onClick={this.handlePick}>What Should I do?</button> şeklinde kullanmalıyız.                
                */}
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                What Should I do?
                </button>
            </div>
        )
    }
}


class Options extends React.Component{

    render(){
        return(
            <div>
            <button onClick={this.props.handleDeleteOptions}>I will remove it all!</button>
                {this.props.options.map((option)=><Option key={option} optionText={option}/>)}
            </div>
        )
    }
}
//key valuesuna prop olarak erişilemez.
class Option extends React.Component{
    render(){
        return(
            <p>{this.props.optionText}</p>
        )
    }
}


class AddOption extends React.Component{
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();

        console.log('form submitted!');
        const option=e.target.elements.option.value.trim();
        if (option) {
            this.props.handleAddOption(option)
        }
    e.target.elements.option.value='';
    }
    render(){
        return(
            <div>
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
ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));