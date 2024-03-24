function calcular(){

    var texto =document.querySelector('label.texto')

    var day=document.getElementById('day')
    var dia=day.value

    var month=document.getElementById('month')
    var mes = month.value

    var year=document.getElementById('year')
    var ano=year.value

    var alerta_day=document.getElementById('alerta_1')
    var alerta_month=document.getElementById('alerta_2')
    var alerta_year=document.getElementById('alerta_3')
     var c_input= document.getElementsByTagName('input')
   
     /* Inicio das condições quanto ao preenchimento das inputs*/
     //inverso
     if(dia!=="" && mes!=="" && ano!==""){
        alerta_day.innerHTML=''
        alerta_month.innerHTML=''
        alerta_year.innerHTML=''

        // CALCULO DA IDADE, MÊS E DIA
    var resp_dia=document.getElementById('resp_dia')
    var resp_mes=document.getElementById('resp_mes')
    var resp_ano=document.getElementById('resp_ano')
    var date=new Date()
    var ano_atual=date.getFullYear()
    //ano
    var calc_ano = (ano_atual - ano)
    resp_ano.innerHTML=calc_ano
    //mês
    var calc_mes = (calc_ano * 12)
    resp_mes.innerHTML=calc_mes
    //dia
    var calc_dia = (calc_ano * 365)
    resp_dia.innerHTML=calc_dia
        
    }if(dia!==""){
        alerta_day.innerHTML=''
        day.style.borderColor='hsl(0, 2%, 75%)'
     }if (mes!=="") {
        alerta_month.innerHTML=''
        month.style.borderColor='hsl(0, 2%, 75%)'
     }if (ano!=="") {
        alerta_year.innerHTML=''
        year.style.borderColor='hsl(0, 2%, 75%)'
     }
/* Fim das condição */

//Inicio das condições quanto ao valores preenchidos
        if(dia<1 || dia>31){
            alerta_day.innerHTML='Dia Inválido'
            day.style.border='1px solid red'
        }if (mes<1 || mes>12) {
            alerta_month.innerHTML='Mês Inválido'
            month.style.border='1px solid red'
        }if (ano<1900 || ano>2100) {
            alerta_year.innerHTML='Ano Inválido'
            year.style.border='1px solid red'
        }
//Condição para os meses que só vâo até 30 em diante
        if((mes==4 || mes==6 || mes==9 || mes==11) && dia>30) {
            alerta_day.innerHTML='Dia Inválido'
            alert('O mês selecionado não alcansa mais de 30 dias')
        }if (mes == 2 && (dia < 1 || dia > 29)) {
             alert("Dia não válido para fevereiro. Escolha um dia entre 1 e 29.");
             alerta_day.innerHTML='Dia Inválido'
             day.style.border='1px solid red'
        }
       
/* fim */



}

