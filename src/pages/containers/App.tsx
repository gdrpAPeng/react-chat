import React from 'react'

class App extends React.Component<{
    path?: string
}> {

    componentDidMount() {
        console.log('app mount')
    }

    render() {
        return (
            <div style={ { width: '100vw', height: '100vh' } }>
                { this.props.children }
            </div>
        )
    }
}

export default App