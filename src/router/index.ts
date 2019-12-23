import Chat from 'pages/chat'

interface IRoute {
    path: string
    component?: any
}

const routes: IRoute[] = [
    {
        path: '/'
    },
    {
        path: '/chat',
        component: Chat
    }
]

export default routes