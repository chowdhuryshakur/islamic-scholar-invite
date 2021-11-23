import React from 'react';
import './sideCard.css'

const SideCard = props => {
    const { addedScholar } = props;
    let totalCost = 0;
    for (const scholar of addedScholar) {
        totalCost += scholar.hadiya;
    }

    return (
        <div className='side-card'>
            <h3>Scholars:  {addedScholar.length}</h3>
            <h3>Total Cost: ${totalCost}</h3>
            <h3>List of Invited Scholars:</h3>
            <div>
                {addedScholar.map(sc => <div key={sc._id} className="sc-list">{sc.name}</div>)}
            </div>
        </div>
    );
};

export default SideCard;