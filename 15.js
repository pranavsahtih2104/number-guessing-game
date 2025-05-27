function checkNumber(){
    randomnumber = Math.floor(Math.random()*15)+1;
    userinput = parseInt(document.getElementById("input").value);
    useroutput = document.getElementById("output");
    if (userinput == randomnumber){
        alert("congrats you won!");
        useroutput.value="";
    }else if (isNaN(userinput)){
        alert("please enter a number");
    }else if(userinput>15){
        alert("enter a number between 1 and 15");
    }
    else{
       useroutput.value=`incorrect ${randomnumber}.`
    }
}