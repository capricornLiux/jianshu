import React from 'react'
import './style.css'

import TodoItem from './TodoItem.js'

/* 替代包裹div, 不会再dom中渲染 */
const Fragment = React.Fragment
class Todolist extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render () {
        return (
            <Fragment>
                <div>
                    <label htmlFor="textArea">输入内容</label>
                    <input type="text" 
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                        className="input"
                        id="textArea"
                    />
                    <button onClick={this.handleSubmit.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((currentValue, index, arr) => {
                            return (
                                <div>
                                    {/* <li 
                                        key={index} 
                                        onClick={this.handleItemClick.bind(this, index)}
                                        dangerouslySetInnerHTML={{__html: currentValue}}
                                    >
                                    </li> */}
                                    <TodoItem 
                                      content={currentValue} 
                                      index={index}  
                                      deleteItem={this.handleItemClick}
                                    />
                                </div>
                            )
                        })
                        /* react循环渲染的时候, 渲染出的每一项需要添加一个key值, 实际编程中不要用index做key值 */
                        /* 这个key最终不会渲染到DOM中 */
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        // console.log(this) // undefined
        // this.state.inputValue = e.target.value
        this.setState({
            inputValue: e.target.value
        })
    }

    // 点击提交按钮的时候调用
    handleSubmit (e) {
        // 点击按钮的时候
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
        // 使用拓展运算符拓展list
    }

    // 点击item的时候删除这个item
    handleItemClick (index) {
        /* console.log(e.target)
        console.log(index) */
        // 从数组中删除
        const list = [...this.state.list] // copy list
        list.splice(index, 1) // splice方法改变list
        this.setState({
            list: list
        })
        
        // react中immutable的概念, state不允许做任何改变, 修改变量可以修改变量的副本, 而不是直接操作变量
        // 违反这个规则的时候回对react的优化产生影响
    }
}

export default Todolist
