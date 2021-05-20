let n = parseInt(prompt("Nhập giá trị n"))
let inputNumber = parseInt(prompt("Nhập giá trị inputNumber"))
function findOppositeNumber() {
if ( n<4 || n >20) {
     console.log('Xin mời nhập lại n');
} else if ( n<0 || inputNumber > (n-1)) {
     console.log('Xin mời nhập lại inputNumber');
} else {
    if ( inputNumber <= (n/2)) {
        inputNumber += (n/2);
    } else {
        inputNumber -= (n/2);
    }
}   
return inputNumber;
}
   console.log(findOppositeNumber());

