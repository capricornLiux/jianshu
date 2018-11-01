import React, { Component } from 'react'
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
    render(){
        return (
            <div className="example">
                <Input 
                    placeholder="test" 
                    value={this.props.inputValue}
                    onChange={this.props.handleInputChange}
                />
                <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
                <List
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (<List.Item onClick={() => {this.props.handleItemClick(index)}}>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoListUI
