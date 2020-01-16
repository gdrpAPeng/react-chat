import React from 'react'

import { connect } from 'react-redux'

import './css/tabbar.scss'

class TabBar extends React.Component<{
    history: any
}> {

    private history: any
    private tabList = [
        {
            icon: 'icon',
            label: '微信',
            path: '/session'
        },
        {
            icon: 'icon',
            label: '通讯录',
            path: '/friend'
        },
        {
            icon: 'icon',
            label: '发现',
            path: ''
        },
        {
            icon: 'icon',
            label: '我',
            path: ''
        }
    ]
    constructor(props: any){
        super(props)

        this.history = props.history
    }

    routerTo(path: string) {
        if(!path) {
            return
        }
        this.history.replace(path)
    }

    render() {
        return (
            <section className="tabbar">
                <ul>
                    {
                        this.tabList.map((tab, index) => {
                            return (
                                <li key={index} onClick={() => this.routerTo(tab.path)}>
                                    <span>icon</span>
                                    <span>{tab.label}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default connect()(TabBar)