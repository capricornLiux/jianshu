/* 
1. store是唯一的
2. 只有store能改变自己的内容, 不是reducer, store拿到reducer返回的数据进行自己的更新
3. reducer必须是纯函数(给定固定的输入, 就有一定的输出, 不会有任何副作用)
*/
import { createStore } from 'redux'
import reducer from './reducer.js'
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
