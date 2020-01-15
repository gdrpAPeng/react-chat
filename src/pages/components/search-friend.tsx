import React, { Component } from 'react'

import { socket } from 'context/socket'

class SearchFriend extends Component<any, any> {
    private history: any
    constructor(props: any) {
        super(props)
        this.history = props.history
        this.state = {
            search: '',
            list: []
        }
    }

    inputSearch = (event: any) => {
        this.setState({
            search: event.target.value
        })
    }

    inputKepUp = (event: any) => {
        const { keyCode } = event
        if(keyCode === 13) {
            // 回车事件
            socket.emit('searchUser', {
                search: this.state.search
            }, (data: any) => {
                this.setState({
                    list: data
                })
            })
        }
    }

    userClick = (data: any): any => {
        const { _id, nickname, username } = data
        this.history.push('/info/detail', {
            _id,
            nickname,
            username
        })
    }

    render() {
        return (
            <section className="search-friend">
                <input 
                    type="text" 
                    value={this.state.search}
                    onChange={this.inputSearch}
                    onKeyUp={this.inputKepUp}
                />
                <ul>
                    {
                        this.state.list.map((item: any, index: number) => {
                            return (
                                <li key={index} onClick={() => this.userClick(item)}>{item.nickname}</li>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default SearchFriend