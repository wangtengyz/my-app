import React, { Component } from 'react'
// import ReduxLearning from './index.module.less'
// redux 状态管理
import App from './redux/components/App'
export default class Redux extends Component {
    render() {
        return (
            <div>
                <h3>redux 状态管理</h3>
                <App />
            </div>
        )
    }
}