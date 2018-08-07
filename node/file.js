const fs = require('fs')
const fsPromises = fs.promises

// todo options
// 读取
const readFile = (path, opt) => fsPromises.readFile(path, opt)

// 增 / 文件夹 存在等等

// 追加
const appendFile = (path, data) => fsPromises.appendFile(path, data)

// 覆盖
const writeFile = (path, data) => fsPromises.writeFile(path, data)

// 删  异常处理
const delPath = path => fsPromises.unlink(path)

// 改名
const rename = path => fsPromises.rename(path)

// 读取文件列表
const readDir = path => fsPromises.readdir(dirPath)

// 

module.exports = {
    readFile,
    writeFile,
    appendFile,
    delPath,
    rename,
    readDir,
}