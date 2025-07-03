function displaytext(value){
    document.getElementById("display").value+= value;
}
function cleardisplay(){
    document.getElementById("display").value='';
}
function removenumber(){
   let v=  document.getElementById("display");
   v.value= v.value.slice(0,-1);
}
function evaluateit(){
    try{
         document.getElementById("display").value = eval(document.getElementById("display").value);

    }catch(errr){
        console.log("invalid expression");
    }
}