console.log('This is app.js')


//JSX --Javascript XML
// var template=(
//     <div>
//     <h1>Hello world!</h1>
//     <p>This is some info</p>
//     <ol>
//         <li>First Item</li>
//         <li>Second Item</li>        
//     </ol>
//     </div>
// );

// const user = {
//     name : 'Andrew',
//     age : 26,
//     location : 'New York'
// };

// const userName='Mike';
// const userAge=26;
// const userLocation='New York'
// const templateTwo=(
//     <div>
//         <h1>{user.name ? user.name:'Anonymous'}</h1>
//         {user.age >=18 && <p>Age : {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );
// function getLocation(location) {

//     return  location?<p>Location: {location}</p> :<p>Location: Unknown</p>
// }

const app={
    title : 'React APP',
    subtitle: 'How not to make React App.',
    options :[]
}

const onFormSubmit = (e)=>{
    e.preventDefault();

    console.log('form submitted!');
    const option=e.target.elements.option.value;
    if (option) {
        app.options.push(option)
        e.target.elements.option.value='';
    }
    renderReactApp();
}
const onRemoveClick=()=>{
    app.options=[]
    renderReactApp();
}

const onMakeDesicion=()=>{
    const number=Math.floor(Math.random() * app.options.length);
    console.log(number);
}
const appRoot = document.getElementById('app');

const renderReactApp=()=>
{
    const template=(
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options  && app.options.length>0) ? 'Here is your options': 'There are no options.'}</p>
        <p>{app.options.length}</p>
        {/* {
            [<p key="1">a</p>,<p key="2">b</p>,<p key="3">c</p>]
        } */}
        <ol>
            {
                app.options.map((option)=>{
                    return <li key={option}>{option}</li>
                })
            }
        </ol>
        <button disabled={app.options.length===0} onClick={onMakeDesicion}>What should I do?</button>
        <button onClick={onRemoveClick}>Remove All</button>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
}

renderReactApp();