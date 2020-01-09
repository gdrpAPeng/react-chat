import React from 'react'
import { socket } from 'context/socket'

class SocketContainer extends React.Component {

    componentDidMount() {
        console.log('app mount')
        // 连接成功会触发这个广播，在这里做鉴权
        socket.on('connect', (e:any) => {
            console.log('connection successfully!')
            this.socketAuth()
        })

        socket.on('authDisconnected', () => {
            // 鉴权出现异常，直接去登录页面吧
            localStorage.access_token = ''
            console.log('401')
        })
    }

    socketAuth() {
        socket.emit('auth', {
            access_token: localStorage.access_token
        })
    }

    render() {
        return (
            <div className="socket-container" style={ { width: '100vw', height: '100vh' } }>
                { this.props.children }
            </div>
        )
    }
}

export default SocketContainer