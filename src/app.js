//File: index.html
//Author: Balázs Réka
//Copyright: 2023, Balázs Réka
//Group: Szoft 1-2-E
//Date: 2023-06-08
//Github: https://github.com/BalazsR2022/medenceviz




function calcVolume(height,width,length){
    return (height-10)*width*length;
}

function checkInput(input){
    let inputStr = String(input);
    let inputNum = Number(input);
    if (inputStr.match(/^[0-9.]+$/)){
        if(inputNum > 0){
        return true;
    }else{
        return false;
    }
    
    }else{
        return false;
    }
   
    
}


const height = document.querySelector('button[value="height"]');
const width = document.querySelector('button[value="width"]');
const length = document.querySelector('button[value="length"]');
gomb.addEventListener('click', szamol);

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
});



function calcVolume(height,width,length){
    const heigth = document.querySelector('#megadottertek');
    const width = document.querySelector('#megadottertek');
    const length = document.querySelector('#megadottertek');
    const volumeInput = document.querySelector('#volume');
    volumeInput.value = volume;




    return (height-10)*width*length;
}
  
 

  
  


