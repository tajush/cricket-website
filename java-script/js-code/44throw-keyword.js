
document.getElementById("we").addEventListener("click",function () {
    let put=document.getElementById("you").value
    try{
        if(put<5){
            throw"too low"
        }
        else if(put>10){
            throw"too high"
        }
        // else
        // console.log(put);
    }
    
    catch(err){
    console.log(err);
    }
    
})

