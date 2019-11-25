
let booleanValue=false
const appRoot=document.getElementById("app");

const toggleVisibility= ()=>{
    booleanValue=booleanValue? false:true
    console.log("çalıştı")
    renderReactApp();
}

const renderReactApp=()=> {
    const template=(
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{booleanValue?"Hide Details":"Show Details"}</button>
            {booleanValue &&<p>Some details</p>}
        </div>
    )    
    ReactDOM.render(template,appRoot);
}
renderReactApp();

