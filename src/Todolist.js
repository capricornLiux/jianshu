import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import './index.css'
import store from './store/index.js'
/* import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM
} from './store/actionTypes.js' */

import {
    getInputChangeAction, 
    getAddTodoItemAction, 
    getDeleteTodoItemAction
} from './store/actionCreators.js'

/* const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
]; */
class Todolist extends Component {
    constructor (props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubscribe = this.handleSubscribe.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        /* 订阅 */
        store.subscribe(this.handleSubscribe)
    }
    render () {
        return (
            <div className="example">
                <Input 
                    placeholder="test" 
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item onClick={this.handleItemClick.bind(this, index)}>{item}</List.Item>)}
                />
            </div>
        )
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
