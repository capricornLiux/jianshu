import React from 'react'
import PropTypes from 'prop-types'
class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        const { content, test } = this.props
        return (
            <div onClick={this.handleClick}>
                {test}-{content}
            </div>
        )
    }
    handleClick() {
        const {deleteItem, index } = this.props
        deleteItem(index)
    }
}

/* 属性校验 */
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

/* 默认值 */
TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem
