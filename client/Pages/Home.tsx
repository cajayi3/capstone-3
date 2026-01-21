import React from 'react';
import Background from '../assets/images/galaxy.jpg'

const Home: React.FC = () => {
    return (
        <div style={{ backgroundImage: `url(${Background})`,
        height: '100vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
        }}>
            <div className='text-center text-light p-5 shadow-lg'>
                <h1 className='text-light fst-italic p-5 m-5'>Welcome to The USA Sports Association <i className='fa-solid fa-trophy text-warning'></i></h1>
            </div>
            <p className='fw-bold fst-italic text-capitalize text-light text-center'>Where imagination brings dreams to fruition...With the human mind anything is possible.</p>
        </div>
    )
}

export default Home;