function SMIPLEINTEREST(){
    var prinicipalamount=(document.getElementById("id1").value)  
    if (prinicipalamount ==""){
        alert('enter the value')
        return false
    }
    var rateofinterest=(document.getElementById("id2").value)
    if (rateofinterest==""){
        alert('enter the value')
        return false
    }
    var rateoftenure=(document.getElementById("id3").value)

    if (rateoftenure==""){
        alert('enter the value')
        return false
    }

    else {
        var result=eval(prinicipalamount*rateofinterest*rateoftenure/100)
        alert(result)
        return true
    }



}

function CLEAR(){
    var result=confirm("Are you sure to delete")
    if(result==true){
        return true
    }
    else{
        return false
    }
}