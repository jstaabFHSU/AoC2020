let fs = require('fs');

let ppsArray = fs.readFileSync('./4.txt', {encoding: 'utf8'}).split('\n\n');
let validCounter = 0;

for(let i=0; i<ppsArray.length; i++) {
    let temp = ppsArray[i].split(/:|\n| /);
    if(temp.includes('byr') && temp.includes('iyr') && temp.includes('eyr')
    && temp.includes('hgt') && temp.includes('hcl') && temp.includes('ecl')
    && temp.includes('pid')) {
        validCounter++;
    }
}

console.log(validCounter);
