const xlsx = require('xlsx')

class ExcelUtils
{
    static getDataFromExcel(filePath, sheetName)
    {
        const workbook = xlsx.readFile(filePath)
        const sheet = workbook.Sheets[sheetName]
        const jsonData = xlsx.utils.sheet_to_json(sheet)

        return jsonData
    }
}

module.exports = {ExcelUtils}