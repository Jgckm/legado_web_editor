# legado_web_editor

![image-20220901202413040](https://cdn.jsdelivr.net/gh/jgckM/image@main/image/202209031638325.png)

## 🚧开发注意

如果你想要调试项目 请在开发者模式里手动设置`localStorage` 如：`url : 192.168.0.101:1122`设置完毕刷新即可

![image-20220903163437674](https://cdn.jsdelivr.net/gh/jgckM/image@main/image/202209031634758.png)

- 完美的支持原来的 web 编辑功能
- 调整页面布局
- 支持点击文本域自适应高度
- 加入快捷键
- 删除多个书源

# 🚀快捷键说明
| 操作               | 说明     |
| :-------- | :-: |
| `Ctrl`+`S`         | 保存书源 |
| `Ctrl`+`Z`         | 撤销操作 |
| `Ctrl`+`Shift`+`Z` | 返回撤销 |
| `Ctrl`+`P` | 推送源 |
| `Shift`+`P` | 拉取源 |
| `Ctrl`+`E` | 生成源 |
| `Shift`+`C` | 清空表单 |
| `Shift`+`R`        | 重做操作 |
| `Ctrl`+`Enter`     | 调试源   |

每菜单个操作都有`快捷键`提示

![快捷键提示](https://cdn.jsdelivr.net/gh/jgckM/image@main/image/202209031224684.gif)

# 🎈高度自适应

点击后文本框`高度自动适应`

![高度自适应](https://cdn.jsdelivr.net/gh/jgckM/image@main/image/202209031628041.gif)

# 🎇删除书源

使用快捷键快速拉取源 

`多选删除`

![删除书源](https://cdn.jsdelivr.net/gh/jgckM/image@main/image/202209031249415.gif)

## 🎨Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
