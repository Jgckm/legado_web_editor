# legado_web_editor

![image-20220901202413040](https://cdn.jsdelivr.net/gh/jgckM/image@main/image/202209031638325.png)

## 🚧开发注意

如果你想要调试项目 请修改文件`.env.development`里`VITE_API`为阅读web服务ip

This project is web front of [legado](https://github.con/gedoor/legado/) web service.

if you want to  **Edit Source**, check https://github.com/gedoor/legado_web_source_editor/issues/40#issuecomment-1497059032

Before you running project, please change environment variable `VITE_API` to legado web service origin

## 路由

https://localhost:8080/rssSource 订阅源编辑  rss editor

https://localhost:8080/bookSource 书源编辑 bookSource editor

## 🎨Project setup

```
pnpm i
```

### Compiles and hot-reloads for development
```
# change `VITE_API` to legado web service origin
echo "VITE_API=https://192.168.1.3:1122" > .env.development
pnpm run dev
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint:fix
```

