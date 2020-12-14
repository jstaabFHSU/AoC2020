
let pwarray = document.getElementById("passwords").innerHTML.split("\n");

let temp;
let policy;
let letter;
let pword;
let count = 0;
let validCounter1 = 0;
let validCounter2 = 0;

//part 1
for(let i=0; i<pwarray.length - 1; i++) {
    temp = pwarray[i].split(" ");

    policy = temp[0].split("-");
    letter = temp[1].charAt(0);
    pword = temp[2];

    for(let j=0; j<pword.length; j++) {
        if(pword.charAt(j) === letter) {
            count++;
        }
    }
    if(count >= parseInt(policy[0]) && count <= parseInt(policy[1])) {
        validCounter1++;
    }
    count = 0;
}
console.log(validCounter1);


//part 2
for(let i=0; i<pwarray.length - 1; i++) {
    position = 0;
    temp = pwarray[i].split(" ");

    policy = temp[0].split("-");
    letter = temp[1].charAt(0);
    pword = temp[2];

    if(pword.charAt(parseInt(policy[0])-1) === letter) {
        position++;
    }
    if(pword.charAt(parseInt(policy[1])-1) === letter) {
        position++;
    }
    if(position === 1) {
        validCounter2++;
    }
}
console.log(validCounter2);
