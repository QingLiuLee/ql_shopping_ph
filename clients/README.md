# clients

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vant
    - 按需引入
    - yarn add babel-plugin-import -dev
    - babel.config.js
        "plugins": [
            ["import", {
            "libraryName": "vant",
            "libraryDirectory": "es",
            "style": true
            }]
        ]
    
### err
    - 运行时：Cannot read property 'parseComponent' of undefined
    ```
        yarn add --dev @vue/component-compiler-utils@1.3.1
        
        package.json:
            "devDependencies": {
                ....,
                "vue-template-compiler": "2.6.11"
            },
        注意：
            使用yarn安装包可能是缓存包，所以还是会报错，可以将包删除，使用npm或cnpm安装
    ```

    - 图片资源找不到，require找不到（Cannot find name 'require'）
        - yarn add @types/node --save-dev

- sass @import 路径问题
    - @import url('./variable.scss'); 改为
        - @import './variable.scss';