import React, { Component } from 'react'
import 'antd/dist/antd.css';

import './index.css'
import store from './store/index.js'
import TodoListUI from './TodoListUI.js'

import axios from 'axios'

import {
    getInputChangeAction, 
    getAddTodoItemAction, 
    getDeleteTodoItemAction
} from './store/actionCreators.js'

class Todolist extends Component {
    constructor (props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubscribe = this.handleSubscribe.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)
        /* 订阅 */
        store.subscribe(this.handleSubscribe)
    }
    render () {
        return (
            <TodoListUI 
                inputValue={this.state.inputValue} 
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                handleItemClick={this.handleItemClick}
            />
        )
    }
    componentDidMount () {
        axios.get('/todolist.json').then((res) => {
            console.log('res')
            console.log(res)
        })
    }
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleSubscribe(){
        this.setState(store.getState())
    }
    handleBtnClick(e) {
        const action = getAddTodoItemAction()
        store.dispatch(action)
    }
    /* item点击输出 */
    handleItemClick(index) {
        const action = getDeleteTodoItemAction(index)
        store.dispatch(action)
    }
}

export default Todolist
