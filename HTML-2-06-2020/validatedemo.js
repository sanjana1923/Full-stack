function validate(){
    var mob=document.getElementById('txtmobile').value;
    var user=document.getElementById('txtusername').value;
    var email=document.getElementById('txtemailid').value;
    var roll=document.getElementById('txtrollnumber').value;
    var m=/^[6-9][0-9]{9}$/;
    var e=/^[a-zA-Z0-9.-_]{6,20}[@][a-z]{3,15}[.][a-z]{2,6}$/;
    var r=/^[2][2][1][7][1][0][3][0][9][0-3][0-9][1-9]$/;
    if(mob=='' || user=='' || email=='' || roll=='')
    {
        window.alert('please enter all the fields');
        return false;
    }
    else{
        if(m.test(num)&&e.test(em)&&r.test(roll)){
            window.alert('Valid');
        }
        else{
            window.alert('Invalid');
            return false;
        }
    }
}