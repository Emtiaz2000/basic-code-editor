/* const ifram = document.querySelector('#final-output')
console.log(ifram.contentDocument) */

const htmlText = document.querySelector('#input-html-text');
const cssText =  document.querySelector('#input-css-text');
const jsText = document.querySelector('#input-js-text');
const button =  document.querySelector('#button');
const ifram =  document.querySelector('#final-output');

//html editor section
htmlText.addEventListener('keydown',(e)=>{
    proventTab(e,htmlText)
})

//css editing section
cssText.addEventListener('keydown',(e)=>{
    proventTab(e,cssText)
})

//javascript editing section
jsText.addEventListener('keydown',(e)=>{
    proventTab(e,jsText)
})

//to prevent tab button behaviur
function proventTab(e,selector){
    if(e.key=='Tab'){
        e.preventDefault()
        selector.value += '  ';
    }
}

//click run button working
button.addEventListener('click',function getOutput(){
    console.log(htmlText.value)
    ifram.contentDocument.body.innerHTML = htmlText.value;
    ifram.contentDocument.head.innerHTML = '<style>' + cssText.value + '</style>' ;
    ifram.contentWindow.eval(jsText.value);
}) 
