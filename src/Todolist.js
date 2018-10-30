import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from './TodoItem.js'

/* 替代包裹div, 不会再dom中渲染 */

class Todolist extends Component {
    constructor (props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)
    }
    render () {
        return (
            <Fragment>
                <div>
                    <label htmlFor="textArea">输入内容</label>
                    <input type="text" 
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        className="input"
                        id="textArea"
                    />
                    <button onClick={this.handleSubmit}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                        {/* react循环渲染的时候, 渲染出的每一项需要添加一个key值, 实际编程中不要用index做key值 */
                         /* 这个key最终不会渲染到DOM中 */}
                </ul>
            </Fragment>
        )
    }
    getTodoItem() {
        return this.state.list.map((currentValue, index, arr) => {
            return (
                <TodoItem 
                    key={index}
                    content={currentValue} 
                    index={index}  
                    deleteItem={this.handleItemClick}
                />
            )
        })
    }
    handleInputChange(e) {
        // console.log(this) // undefined
        // this.state.inputValue = e.target.value
        /* this.setState({
            inputValue: e.target.value
        }) */

        /* 新版的react写法 */
        /* 异步设置数据 */
        const value = e.target.value
        this.setState(() => {
            return {
                inputValue: value
            }
        })
    }

    // 点击提交按钮的时候调用
    handleSubmit (e) {
        // 点击按钮的时候
        /* this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }) */
        // 使用拓展运算符拓展list
        this.setState((prevState) => {
            return {
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            }
        })
    }

    // 点击item的时候删除这个item
    handleItemClick (index) {
        /* console.log(e.target)
        console.log(index) */
        // 从数组中删除 
        /* const list = [...this.state.list] // copy list
        list.splice(index, 1) // splice方法改变list
        this.setState({
            list: list
        }) */
        
        // react中immutable的概念, state不允许做任何改变, 修改变量可以修改变量的副本, 而不是直接操作变量
        // 违反这个规则的时候回对react的优化产生影响
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {
                list: list
            }
        })
    }
}

export default Todolist
