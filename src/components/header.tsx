import React from 'react'

import { connect } from 'react-redux'

import './css/header.scss'

class Header extends React.Component<{
    history: any
}> {
    private history: any
    constructor(props: any) {
        super(props)
        this.history = props.history
    }

    routerBack = () => {
        this.history.goBack()
    }

    render() {
        return (
            <header>
                <div className="top">
                    <div className="left">
                        <span onClick={this.routerBack}>返回 icon</span>
                    </div>
                    <div className="center">
                        slot
                    </div>
                    <div className="right">
                        功能 icon
                    </div>
                </div>
                <div className="search-container">
                    <input type="text" />
                </div>
            </header>
        )
    }
}

export default connect()(Header)