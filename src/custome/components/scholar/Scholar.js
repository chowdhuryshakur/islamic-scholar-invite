import React from 'react';
import './scholar.css';
import { Briefcase } from 'react-feather';

const Scholar = props => {
    const { picture, name, major, age, hadiya, email } = props.scholar;

    return (
        <div className='scholar'>
            <div>
                <img src={picture} alt="" />
            </div>
            <div className="s-info">
                <h2>{name}</h2>
                <h5>Experties: {major}</h5>
                <p>Age: {age} yrs</p>
                <p className="golden">Remuneration: ${hadiya}</p>
                <p>Mail: {email}</p>
            </div>
            <button onClick={()=>props.clickHandler(props.scholar)} className='btn'>
                <Briefcase style={{ width: '20px', marginRight: '10px' }}></Briefcase> Invite
            </button>
        </div>
    );
};

export default Scholar;