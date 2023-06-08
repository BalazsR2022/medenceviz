const doc = {
    heightInput: document.querySelector('#height'),
    widthInput: document.querySelector('#width'),
    lengthInput: document.querySelector('#length'),


    indexInput: document.querySelector('#index'),
    calcButton: document.querySelector('#calcButton')
};

const state = {
    index : 0
};

window.addEventListener('load', () => {
    init();
});

function init (){
    if (document.calcButton){
    doc.calcButton.addEventListener('click', () =>{
        console.log('működik')
        startCalc();
    });
}
    //checkInput(30);
}

function startCalc(){
    let height = doc.heightInput.value;
    let width = doc.widthInput.value;
    let length = doc.lengthInput.value;

    


    state.index = calcVolume(height,width,length);
    doc.indexInput.value = state.index;

}

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

