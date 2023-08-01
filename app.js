const express = require('express');
const app = express();
require('dotenv').config();
const fs = require('fs');

/*--------------------------------------TASK-1-------------------------------------*/

//setup done as per task-1

/*--------------------------------------TASK-2-------------------------------------*/

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]
    }
    console.log('Total:', total)
}

sum([1, 2, 3, 4]);      //calling function

/*--------------------------------------TASK-3-------------------------------------*/

async function readFile(filePath) {
    const readFile = await fs.promises.readFile(filePath, 'utf8');
    console.log('Words count:', readFile.length);

    //if without white space
    let newStr = '';
    for (let i = 0; i < readFile.length; i++) {
        if (readFile[i] != ' ') {
            newStr = newStr + readFile[i]
        }
    }
    console.log('Words count without whitespaces:', newStr.length)
}
readFile('data.txt');       //calling function




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Hello World! on port: ${PORT}`));