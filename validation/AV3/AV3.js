function RESULT(){
    var N1=document.getElementById('id1').value
    if(N1==""){
        alert("enter a value")
        return false
    }
    var N2=document.getElementById('id2').value

    if(N2==""){
        alert("enter a value")
        return false
    }

    var N3=document.getElementById('id3').value

    if(N3==""){
        alert("enter a value")
        return false
    }

    else{
        var result=eval(N1)+eval(N2)+eval(N3)
        var result=result/3
        document.write(result)
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