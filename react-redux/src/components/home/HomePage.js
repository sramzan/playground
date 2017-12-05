import React from 'react';

class HomePage extends React.Component{
    render() {
        return (
            <div className="jumbotron">
                <h1>Welcome</h1>
                <p>Sean's Super Awesome App</p>
            </div>
        );
    }
}

export default HomePage; // Exporting our component class so that others can import it