
 function detailssubmit() {
    alert("welcome");
 }
 function required(){
    var empt1 = document.form1.fname.value;
    var emp2=document.form1.lname.value;
    if (empt1 === "" && emp2 ==="")
{
alert("Please fill the form");
return false;
}
 else
 {
    alert("Thankyou for sumbitting the details");
    return true;
 }
}