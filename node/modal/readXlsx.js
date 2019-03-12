// import xlsx from 'node-xlsx';
const fs = require('fs')
const path = require('path')
const xlsx = require('node-xlsx').default;

// Parse a buffer
// const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/myFile.xlsx`))
// Parse a file
const workSheetsFromFile = xlsx.parse(path.resolve(__dirname, '../../test/readXlsx.test.xlsx'))

/**
 * [ { name: 'Sheet1', data: [ [Array], [Array] ] },
  { name: 'Sheet2', data: [] },
  { name: 'Sheet3', data: [] } ]
 */
// console.log(workSheetsFromFile)

/**
 * [ [ 'a1', 'b1', 'c1', 'd1', 'e1', 'f1' ],
  [ 'a2', 'b2', 'c2', 'd2', 'e2', 'f2' ] ]
 */
// console.log(workSheetsFromFile[0].data)
