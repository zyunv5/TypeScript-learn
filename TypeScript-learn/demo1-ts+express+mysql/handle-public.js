const shell = require("shelljs");

shell.cp("-R", "./public/", "./dist/"); //把public文件拷贝到dist文件目录下
shell.cp("-R", "./views/", "./dist/"); //把views文件拷贝到dist文件目录下