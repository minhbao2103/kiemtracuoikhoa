function checkForm(){
    let number = document.getElementById('a1').value;
    if(isNaN(number)) {
        alert("Vui lòng nhập số")
    } else {
        if(number > 0 && number <=10){
            alert("Chúc Mừng bạn đã chọn số may mắn")
        }else {
            alert("Vui lòng chọn số từ 1 tới 10")
        }
     
    }
}