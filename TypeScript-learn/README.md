# demo01 ts+express+mysql
https://www.bilibili.com/video/BV1F7411c7m5/?p=24&t=1570 (P24,未看完)
## 安装插件

1. express-generator,之后使用 express --view=jade 就能创建出常用的目录(指定了模板用 jade)
2. typescript
3. @types/express @types/node

## 把 bin 文件中的 www 移动到根目录文件夹下

## 新建 types 文件夹、model 文件夹、controller、utils、config

## 重命名

把 www 重命名为 server.ts
把 app.js 重命名为 app.ts
把 routes 里面的两个文件都改成 ts

## 使用 tsc 命令

tsc --init 初始化 ts 环境

### 修改 tsconfig.json

1. "outDir": "./dist/",
2. 注释 "strict": true,
3. 放开并修改 "noImplicitAny": false,
4. 放开 "moduleResolution": "node"
5. 放开并修改修改 "baseUrl": "."
6. 放开并修改 "paths": {"\*":["node_modules/_","./types/\*"]},

## 修改 package.json

```js
"scripts": {
    "start": "npm run serve",
    "serve": "node ./dist/server.js",
    "build": "tsc && node handle-public.js",
    "watch-dev": "cross-env NODE_ENV=development nodemon -e ts,tsx --exec 'ts-node' ./server.ts"
  },
```

### 在根目录下新建文件，handle-public.js

```js
const shell = require("shelljs");

shell.cp("-R", "./public/", "./dist/"); //把public文件拷贝到dist文件目录下
shell.cp("-R", "./views/", "./dist/"); //把views文件拷贝到dist文件目录下
```

## 修改 server.ts 文件内的路径

修改完成后 运行 npm run watch-dev

登录http://localhost:3000/

## 添加 mysql

npm i mysql @types/mysql -D

## 添加配置文件 config/mysql.config.ts

```js
const devConfig = {
  host: "localhost",
  database: "ts",
  user: "admin",
  password: "admin"
};

const prodConfig = {
  host: "xxx.xxx.xxx.xxx",
  database: "ts",
  port: 3306
};

module.exports =
  process.env.NODE_ENV === "development" ? devConfig : prodConfig;
```

## model 文件夹下创建 index.ts

```js
import mysql = require('mysql');
const mysqlConfig = require('../config/mysql.config');

const sql = mysql.createConnection(mysqlConfig);

sql.connect();

export = sql;

```

## 在model下新建tables文件夹，再创建image.ts文件
未完待续
