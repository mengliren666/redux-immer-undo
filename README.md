## redux-immer-undo

![](https://img.shields.io/badge/DuoR-%E5%88%9D%E6%9D%A5%E4%B9%8D%E5%88%B0-%238c37db)
![npm](https://img.shields.io/npm/v/redux-immer-undo)

## Install

````
npm  install redux-immer-undo
````



## Usage

```js
import { undoEnhancer } from "redux-immer-undo"

// -------------------before-------------------
export default reducer

// -------------------after-------------------
export default undoEnhancer(reducer, {
    limit: 30, // 历史流水栈的限制长度
    undoType: "@@Count/UNDO", // 撤销操作类型
    redoType: "@@Count/REDO", // 重做操作类型
    clearHistoryType: "@@Count/CLEAR_HISTORY", // 清空历史记录类型
    include: [increment(), decrement(), incrementByAsync.fulfilled()], // 需要参与历史记录的action类型
    openMergeOption: false, // 是否开启合并选项
})
```
