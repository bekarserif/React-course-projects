'use strict';

console.log('This is app.js');

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


var app = {
    title: 'React APP',
    subtitle: 'How not to make React App.',
    options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options && app.options.length > 0 ? 'Here is your options' : 'There are no options.'
);

var user = {
    name: 'Andrew',
    age: 26,
    location: 'New York'
};

var userName = 'Mike';
var userAge = 26;
var userLocation = 'New York';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    getLocation(user.location)
);
function getLocation(location) {

    return location ? React.createElement(
        'p',
        null,
        'Location: ',
        location
    ) : React.createElement(
        'p',
        null,
        'Location: Unknown'
    );
}
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
