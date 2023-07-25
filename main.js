setInterval(() => {
const horas = document.getElementById('hh')
const minutos = document.getElementById('mm')
const segundos = document.getElementById('ss')
const dia_id = document.getElementById('dia')
const mes_id = document.getElementById('mes')
const ano_id = document.getElementById('ano')
const dia_n_id = document.getElementById('dia_num')
const timeml = document.getElementById('time')
const dateml = document.getElementById('date')
const bodyml = document.getElementById('body')
const pmam = document.getElementById('am')

var ampm = " "

//Puxando dados do horário atual da máquina.:
const date = new Date();

h = date.getHours();
m = date.getMinutes();
s = date.getSeconds();


//Fazendo uma condição se caso o harario for menor que 10, pra colocar um zero antes;

if(h < 10) {
  h = "0" + h;
}


if(m < 10) {
  m = "0" + m;
}

if(s < 10) {
 s = "0" + s;
}

//Aplicando a validação de fuso horário PM e AM, para implementar na variável: ampm.
if(h <= 12) {
  ampm = "AM"
} else {
  ampm = "PM"
}

//Pegando info do dia, mes, ano; 
const dia = date.getDay();
const mes = date.getMonth();
const ano = date.getFullYear();
//Dia atual do mês em num;
var dia_num = date.getDate()

//Colocando 0 antes do num do dia, se caso ele for menor que 10;
if(dia_num < 10) {
  dia_num = "0" + dia_num
}

var mes_m = "" //Variável vazia, para receber o nome do mes atual.

var dia_d = "" //Variável vazia, para receber o nome do dia atual.

//Condição para implementar o nome do mês atual na variável "mes_m".
switch (mes) {
      case 0:
        mes_m = "Janeiro"
        break;
    
      case 1:
        mes_m = "Fevereiro"
        break;
     
      case 2:
        mes_m = "Março"
        break;
      
      case 3:
        mes_m = "Abril"
        break;
        
      case 4:
        mes_m = "Maio"
        break;
       
      case 5:
        mes_m = "Junho"
        break;
       
      case 6:
        mes_m = "Julho"
        break;
        
      case 7:
        mes_m = "Agosto"
        break;
        
      case 8:
        mes_m = "Setembro"
        break;
        
      case 9:
        mes_m = "Outubro"
        break;
        
      case 10:
        mes_m = "Novembro"
        break;
        
      case 11:
        mes_m = "Dezembro"
        break;
}

//Condição para implementar o nome do dia atual, na variável dia_d.
switch (dia) {
  case 1:
    dia_d = "Segunda-Feira"
    break;
  case 2:
    dia_d = "Terça-Feira"
    break;
  case 3:
    dia_d = "Quarta-Feira"
    break;
  case 4:
    dia_d = "Quinta-Feira"
    break;
  case 5:
    dia_d = "Sexta-Feira"
    break;
  case 6:
    dia_d = "Sábado"
    break;
  case 0: 
    dia_d = "Domingo"
    break;
    
}

//Criando uma condição, para horário. Para implementar um modo noturno.
if(h >= 18) {
  
 timeml.classList.add("time_night");//Adicionado uma classe no elemento com o id:time.
document.getElementById('am').classList.add("time_night")
 
 dateml.classList.add("date_night"); //Adicionado uma classe no elemento com o id:date.
 
 
 document.querySelector('meta[name="theme-color"]').setAttribute("content", "#353935"); //Mudando a cor do Thema da pagina;
 
 body.classList.add("body_night")
};

//logs para teste.
//console.log(h, m, s, ampm, dia, dia_d, dia_num, mes_m, ano)



 horas.innerHTML = h
 minutos.innerHTML = m
 segundos.innerHTML = s
 dia_id.innerHTML = dia_d + ","
 dia_n_id.innerHTML = dia_num
 mes_id.innerHTML = mes_m
 ano_id.innerHTML = ano
am.innerHTML = ampm
});
