function insert(num){
var numero=document.getElementById('resposta').innerHTML

document.getElementById('resposta').innerHTML=numero + num
}
function clean(){
    document.querySelector('p#resposta').innerHTML=""
}
function back(){
    var resposta=document.getElementById('resposta').innerHTML
    
    document.getElementById('resposta').innerHTML=resposta.substring(0, resposta.length -1)

}
function calcular(){
    var resposta=document.getElementById('resposta').innerHTML
        if(resposta){
        document.getElementById('resposta').innerHTML=eval(resposta)
    }
}