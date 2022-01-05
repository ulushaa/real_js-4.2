function random(min,max) {
  return Math.floor( Math.random() * (max - min) + min);
}

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

 
let number = +prompt('Введите количество примеров');

for(let i=0;i<number;i++){
  let number1 = random(20,30);
  let number2 = random(1,20);
  let primer = +prompt(number1 + gun + number2 + ' = ');
  let answer = (number1+gun+number2) == primer ? 'молодец' : 'ошибка';    
  alert(number1 + gun + number2 + ' = ' + (number1+gun+number2) + ' ваш ответ ' + primer + ' ! ' + answer);
}

