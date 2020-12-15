let trees = document.getElementById("passwords").innerHTML.split("\n");

//console.log(trees);
let newArray = [];
let array2 = [];
let array3 = [];
let array4 = [];
let array5 = [];
let j = 3;
let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

//right 3, down, 1
for(let k = 1; k < 324; k++) {
    newArray.push(trees[k].charAt(j));
    j += 3;
    if(j === 33) {
        j = 2;
    } else if(j === 32) {
        j = 1;
    } else if(j === 31) {
        j = 0;
    }
}
for(let m = 0; m < newArray.length; m++) {
    if(newArray[m] === '#') {
        count++;
    }
}

//right 1, down 1
j = 1;
for(let k = 1; k < 324; k++) {
    array2.push(trees[k].charAt(j));
    j++;
    if(j === 31) {
        j = 0;
    }
}
for(let m = 0; m < array2.length; m++) {
    if(array2[m] === '#') {
        count2++;
    }
}

//right 5, down 1
j = 5;
for(let k = 1; k < 324; k++) {
    array3.push(trees[k].charAt(j));
    j += 5;
    if(j === 35) {
        j = 4;
    } else if(j === 34) {
        j = 3;
    } else if(j === 33) {
        j = 2;
    } else if(j === 32) {
        j = 1;
    } else if(j === 31) {
        j = 0;
    }
}
for(let m = 0; m < array3.length; m++) {
    if(array3[m] === '#') {
        count3++;
    }
}

//right 7, down 1
j = 7;
for(let k = 1; k < 324; k++) {
    array4.push(trees[k].charAt(j));
    j += 7;
    if(j === 37) {
        j = 6;
    } else if(j === 36) {
        j = 5;
    } else if(j === 35) {
        j = 4;
    } else if(j === 34) {
        j = 3;
    } else if(j === 33) {
        j = 2;
    } else if(j === 32) {
        j = 1;
    } else if(j === 31) {
        j = 0;
    }
}
for(let m = 0; m < array4.length; m++) {
    if(array4[m] === '#') {
        count4++;
    }
}

//right 1, down 2
j = 1;
for(let k = 2; k < 324; k += 2) {
    array5.push(trees[k].charAt(j));
    j += 1;
    if(j === 31) {
        j = 0;
    }
}
for(let m = 0; m < array5.length; m++) {
    if(array5[m] === '#') {
        count5++;
    }
}


console.log(count * count2 * count3 * count4 * count5);
console.log(count);
console.log(count2);
console.log(count3);
console.log(count4);
console.log(count5);
