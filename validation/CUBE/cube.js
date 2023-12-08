function RESULT(){
    var Enteranumber=document.getElementById('id1').value
    if(Enteranumber==""){
        alert('please enter a number')
        return false
    }
    else{
        var result=Enteranumber**3
        document.write(result)
        return true
    }
} 
   function CLEAR(){
    var result=confirm('ARE YOU SURE TO CLEAR?')
    if(result==true){

    return true

   } 
   else{
    return false
   }
}