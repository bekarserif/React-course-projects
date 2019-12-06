import React from 'react';
import { NavLink } from 'react-router-dom';
// const PortfolioPage= (props)=>{
//     if (props.match.params.id) {
//         return (
//             <div>
//                 <h1>A Thing I've Done</h1>
//                 <p>This page if for the with id of {props.match.params.id}</p>
//             </div>
//         )
//     }
//     else{
//         return (
//             <div>
//             <h1>My Work</h1>
//                 <p>Checkout the following things I've done.</p>
//                 <Link to="/portfolio/1" activeClassName="is-active">Item One</Link>
//                 <Link to="/portfolio/2" activeClassName="is-active">Item Two</Link>
//             </div>
//         )
//     }

// }
const PortfolioPage = props => {
    return (
        <div>
            <h1>My Work</h1>
            <p>Checkout the following things I've done.</p>
            <NavLink to="/portfolio/1" activeClassName="is-active">
                Item One
            </NavLink>
            <NavLink to="/portfolio/2" activeClassName="is-active">
                Item Two
            </NavLink>
        </div>
    );
};
export default PortfolioPage;
