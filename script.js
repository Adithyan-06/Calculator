const display=document.getElementById("display");

function append(input){
    display.value += input;
}

function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}

function clearDisplay(){
    display.value="";
}

function backspace() {
    display.value = display.value.slice(0, -1);
  }