 function AOC(){
    var Enteraradius=document.getElementById('id1').value
    if(Enteraradius==""){
        alert('enter a value')
        return false
    }
    else{
        var result=3.14* Enteraradius**2
        var result=eval(result)
        document.write(result)
        }
 }
 function CLEAR(){
    var result=confirm('ARE YOU SURE TO CLEAR')
    if(result==true){
        return true
    }
    else{
        return false
    }
 }