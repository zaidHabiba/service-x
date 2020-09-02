import React from 'react';
import './home.css';

function Wave() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1200">
            <path fill="#0099ff" fill-opacity="1" d="M0,1200L1440,0L1440,1200L0,1200Z"></path>
        </svg>
    );
}

class Home extends React.Component {
    render() {
        return (
            <div className="home-page">
                <Wave/>
                Hello in home
            </div>
        );
    }
}

export default Home;