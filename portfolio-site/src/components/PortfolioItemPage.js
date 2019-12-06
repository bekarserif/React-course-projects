import React from 'react';
const PortfolioPage = props => {
    return (
        <div>
            <h1>A Thing I've Done</h1>
            <p>This page if for the with id of {props.match.params.id}</p>
        </div>
    );
};

export default PortfolioPage;
