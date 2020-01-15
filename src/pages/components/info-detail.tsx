import React, { Component } from 'react'

import { socket } from 'context/socket'

class InfoDetail extends Component<any, any> {
    constructor(props: any) {
        super(props)
        const { _id, nickname, username } = props.location.state

        this.state = {
            _id,
            nickname,
            username,
            isFriend: false,
            isMe: false
        }

        socket.emit('getUserInfo', {
            _id
        }, (data: any) => {
            const { nickname, username, isFriend, isMe } = data
            this.setState({
                nickname,
                username,
                isFriend,
                isMe
            })
        })

    }

    addFriend = () => {
        socket.emit('addFriend', {
            _id: this.state._id
        }, (result: any) => {
            if(result) {
                alert('已发送添加申请')
            } else {
                alert('添加失败')
            }
        })
    }

    render() {
        return (
            <section className="info-detail">
                <p>{this.state.nickname}</p>
                <p>{this.state.username}</p>
                {
                    this.state.isFriend? <span>发消息</span>: <span onClick={this.addFriend}>添加到通讯录</span>
                }
            </section>
        )
    }
}

export default InfoDetail