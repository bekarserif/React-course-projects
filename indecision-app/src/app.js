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



var app={
    title : 'React APP',
    subtitle: 'How not to make React App.',
    options :['One','Two']
}
var template=(
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {(app.options  && app.options.length>0) ? 'Here is your options': 'There are no options.'}
    </div>
);

var user = {
    name : 'Andrew',
    age : 26,
    location : 'New York'
};



var userName='Mike';
var userAge=26;
var userLocation='New York'
var templateTwo=(
    <div>
        <h1>{user.name ? user.name:'Anonymous'}</h1>
        {user.age >=18 && <p>Age : {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
function getLocation(location) {

    return  location?<p>Location: {location}</p> :<p>Location: Unknown</p>
}
var appRoot=document.getElementById('app');

ReactDOM.render(template,appRoot)