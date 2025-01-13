# 说明

我使用的环境：node 版本>20 windows10

1. 开启三个终端分别进入 packages 下的三个目录，执行`npm run dev`启动服务

2. V5.3 和 V5.6 中的代码一致，App.jsx 中实现了两个组件（App 和 App2）唯一区别在于使用的 echarts 版本不同

3. 打开谷歌浏览器自带的任务管理器（快捷键 shift + ESC），点击页面上的 start 按钮，运行大约 3 分钟左右观察内存占用空间，发现 App 内存上涨速度快，App2 看上去比较正常

4. App 组件中的 `updateEchartLoss` 函数，注释掉`yAxis`项下的`formatter`后看上去恢复正常
