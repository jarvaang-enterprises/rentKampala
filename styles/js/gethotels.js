const fs = require('fs')
const fileContents = fs.readFileSync('./inc/rKData.json', 'utf8');

try {
    const data = JSON.parse(fileContents)
    console.log(data[2][hotelName])
} catch (error) {
    console.log(error)
}