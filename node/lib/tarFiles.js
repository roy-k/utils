const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')
const child_process = require('child_process')
var exec = require('child-process-promise').spawn

const DIST_PATH = path.resolve(__dirname, '../build')
const TRANSFER_PATH = path.resolve(__dirname, '../build/transfer')

const HOME_INDEX_PATH = path.resolve(DIST_PATH, 'index.html')
const DOWNLOAD_PATH = path.resolve(DIST_PATH, 'download.html')

/**
 * 压缩文件 (index.html, download.html)
 * 输出 transfer.zip
 */
async function tarFile() {
    // 1. 创建 transfer 文件夹
    // await fsPromises.mkdir(TRANSFER_PATH)

    // 2. 拷贝 home/index.html
    // await fsPromises.copyFile(HOME_INDEX_PATH, TRANSFER_PATH)
    // await fsPromises.copyFile(DOWNLOAD_PATH, TRANSFER_PATH)

    // 3. 压缩
    await exec('zip', [
        '-rm', 'transfer.zip', 'index.html', 'download.html'], {cwd: DIST_PATH})
}

tarFile().catch((err) => {
    console.log(err);
})