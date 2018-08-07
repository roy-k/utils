const Async = require('async')
const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')

const upload = require('./uploadFile.js')

const {readFile, writeFile, delPath} = require('./nodeKit/kit.js')

const DIST_PATH = path.resolve(__dirname, '../build');
const STYLEDIR_PATH = path.resolve(__dirname, '../src/common/css');
const STYLE_PATH = path.resolve(STYLEDIR_PATH, 'qrcode.css');

// 1. 读取
// 2. 写入
// 3. 上传
// 4. 删除

/**
 * 上传
 */

(async function () {
    const styl = await readFile(STYLE_PATH, 'utf8')

    const timeStamp = new Date().getTime()

    const newFileName = `qrcode${timeStamp}.css`

    console.log('newFileName', newFileName);

    const newFilePath = path.resolve(STYLEDIR_PATH, newFileName)

    await writeFile(newFilePath, styl)

    await upload(newFileName, newFilePath)

    await delPath(newFilePath)
})()
