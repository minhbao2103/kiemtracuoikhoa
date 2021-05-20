function homeWork() {
    let a1 = prompt('Nhập a1');
    let a2 = prompt('Nhập a2');
    let temp ="";
    let maxString = 0;
    if(a1.length > a2.length){
        maxString=a1.length;
    } else {
        maxString=a2.length;
    }
for(let i = 0; i < maxString ; i= i+1) {
     if(!a1[i]){
         temp= temp + a2[i];
     } else if(!a2[i]) {
         temp= temp + a1[i];
     } else {
         temp = temp + a1[i] + a2[i];
     }
  }
  console.log(temp);
}   
homeWork() 