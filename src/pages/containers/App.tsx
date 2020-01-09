import React from 'react'

class App extends React.Component {

    render() {
        return (
            <div className="app-container" style={ { width: '100vw', height: '100vh' } }>
                { this.props.children }
            </div>
        )
    }
}

export default App