import React, { useEffect, useState } from 'react';
import Header from './components/header/Header'
import Scholar from './components/scholar/Scholar';
import SideCard from './components/side-card/SideCard';

const Home = () => {
    const [scholars, setScholar] = useState([]);
    const [addedScholr, setAddedScholr] = useState([]);
    useEffect(() => {
        fetch('./scholars.json')
            .then(res => res.json())
            .then(data => setScholar(data));
    }, [])

    const scholarStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 31%)',
        padding: '20px',
        gridGap: '30px'
    }

    const sideCardValuHandle = addScholr => {
        setAddedScholr([...addedScholr, addScholr]);
    }

    return (
        <main>
            <Header></Header>
            <div style={{ display: 'grid', gridTemplateColumns: '80% 20%' }}>
                {/* grid view of scholar's information */}
                <div style={scholarStyle}>
                    {scholars.map(scholar => <Scholar
                        scholar={scholar}
                        key={scholar._id}
                        clickHandler={sideCardValuHandle}
                    ></Scholar>)}
                </div>
                {/* side information */}
                <SideCard addedScholar={addedScholr}></SideCard>
            </div>
        </main>
    );
};

export default Home;