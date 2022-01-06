function random(min,max) {
  return Math.floor( Math.random() * (max - min) + min);
}

function old(){
  let run = Math.floor( Math.random() * 4);
  let gun = '=';
  if(run == 0){
    gun ='-';
  }else if(run == 1){
    gun ='+';
  }else if(run == 2){
    gun ='*';
  }else if(run == 3){
    gun ='/';
  }
  return gun;
}
let number = +prompt('Введите количество примеров');

for(let i=0;i<number;i++) {
  let number1 = random(10,20);
  let number2 = random(1,10);
  let primer = +prompt(number1 + old() + number2);
  let answer = (number1+old()+number2) == primer ? 'молодец' : 'ошибка';    
  alert(number1 + old() + number2 + ' = ' + (number1+old()+number2) + ' ваш ответ ' + primer + ' ! '+ answer);
}

