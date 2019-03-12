const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')
const Async = require('async')

const child_process = require('child_process')
var exec = require('child-process-promise').spawn

const INDEX_PATH = path.resolve(__dirname, '../src/index.js')

const CONTAINER_PATH = path.resolve(__dirname, '../src/containers/')
const COMPONENTS_PATH = path.resolve(__dirname, '../src/components/')

const STYLE_PATH = path.resolve(__dirname, '../src/common/css/')
const UTIL_PATH = path.resolve(__dirname, '../src/common/js/')

const DIST_PATH = path.resolve(__dirname, '../build/2b')

// 1. 确认目标文件ok
function prepareFile(path) {
    fsPromises
        .access(path)
        .then()
}

// 2. 读取文件队列
async function getFilesQueue() {
    const queue = []
    // 1. index
    queue.push(INDEX_PATH)
    // 2. containers
    const containers = await getFilePathWithName(CONTAINER_PATH)
    queue.push(...containers)
    // 3. components
    const components = await getFilePathWithName(COMPONENTS_PATH)
    queue.push(...components)
    // 4. style
    const styles = await getFilePathWithName(STYLE_PATH)
    queue.push(...styles)
    // 5. util
    const utils = await getFilePathWithName(UTIL_PATH)
    queue.push(...utils)
    return queue
}

async function getFilePathWithName(dirPath) {
    const Files = await fsPromises.readdir(dirPath)
    return Files.map(v => path.resolve(dirPath, v))
}

// getFilePathWithName(INDEX_PATH)

// 3. 写入

async function concatFiles() {

    await fsPromises.unlink(DIST_PATH)

    const Files = await getFilesQueue()

    Async.mapSeries(Files, async filePath => {
        if (filePath.indexOf('.DS_Store') > -1) 
            return

        const file = await fsPromises.readFile(filePath, 'utf8')

        await fsPromises.appendFile(DIST_PATH, `****** 文件 ${path.basename(filePath)} ******`)
        await fsPromises.appendFile(DIST_PATH, file)
        // await fsPromises.appendFile(DIST_PATH, `\r\r`)
        return ''
    }, (err, contents) => {
        if (err) 
            throw err
    })
}

concatFiles().catch((err) => {
    console.log(err);
})