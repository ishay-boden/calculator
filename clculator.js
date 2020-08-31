function calc(val){
    if (txtbx2.value==0)
    txtbx2.value=val;
    else
    txtbx2.value+= val;
    }
function operator(oper){
    txtbx1.value=txtbx2.value+oper;
    txtbx2.value=0;
    }
function calc2(){
    txtbx1.value+=txtbx2.value
    txtbx2.value=eval(txtbx1.value)
}
function clearr(){
        txtbx2.value=0;
    }
    function reset(){
        txtbx1.value=0;
        txtbx2.value=0;
    }

    function changeFontSize(size){
if (size=='big')
document.getElementById("txtbx2").style.fontSize="1.5cm";
else
document.getElementById("txtbx2").style.fontSize="1cm";
    }