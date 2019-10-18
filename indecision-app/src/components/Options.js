import React from 'react';
import Option from './Option'


const Options=(props)=>(
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

export default Options;
