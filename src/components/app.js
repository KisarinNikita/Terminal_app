import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';
import Header from './Header';

class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="content">
                    <div className="container">
                        <RegistrationForm/>
                    </div>
                </div>

            </>
        )
    }
}

export default App;