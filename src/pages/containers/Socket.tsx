import React from 'react'
import { socket } from 'context/socket'

class SocketContainer extends React.Component<any> {
    private history: any
    constructor(props: any){
        super(props)
        const { history } = props
        this.history = history
        console.log(props, props.history, '===')
    }

    componentDidMount() {
        console.log('app mount')
        // 连接成功会触发这个广播，在这里做鉴权
        socket.on('connect', (e:any) => {
            console.log('connection successfully!')
            this.socketAuth()
        })

        socket.on('authDisconnected', () => {
            // 鉴权出现异常，直接去登录页面吧
            console.log('401')
            localStorage.access_token = ''
            this.history.replace('/login')
        })  
    }

    componentWillUnmount() {
        // socket.emit('clientDisconnect')
    }

    socketAuth() {
        socket.emit('auth', {
            access_token: 'Bearer ' + localStorage.access_token
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