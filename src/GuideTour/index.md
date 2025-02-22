---
nav:
  path: /components
group:
  title: 信息展示
  order: 9
toc: 'content'
---

# GuideTour 新手引导

蒙层与自定义卡片的引导组件

## 何时使用

适用于页面上关键功能的介绍。

## 代码示例
<code src='pages/GuideTour/index'></code>

## API
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名 | string | - | 
| current | 当前步骤  | number | - |
| defaultCurrent | 默认当前步骤 | number | 0 |
| items | 步骤信息 | [GuideTourItem](#guidetourttem)[] | - |
| maskClassName | 蒙层的类名 | string | - | 
| maskStyle | 蒙层的样式 | string | - | 
| style | 样式 | string | - |
| swiperable | 是否开启滑动模式 | boolean | false |
| visible |  是否显示 | boolean | false | 
| onCancel   | 关闭回调  | () => void | - | 
| onChange   | 步骤改变回调 | (index: number) => void | - | 


### GuideTourItem 
| 参数 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| left | 距离左边距离，单位px | number | - |
| imageMode | 图片模式，同 image 的 mode | string | - |
| imageStyle | 图片内联样式 | string | - |
| imageUrl | 图片地址 | string | - |
| top | 距离顶部距离，单位px | number | - |