// КАК Я БРОСАЛ КУРИТЬ ВО ВРЕМЯ ВОЙНЫ
"use strict";
const allSmoke = +prompt('Сколько у Вас сигарет?, 0');
let start = +prompt('Со скольки сигарет в день будем начинать бросать?', 0);
const minusAtDay = +prompt('На сколько штук в день Вы хотите уменьшить?, 0');
const endSmoke = ( allSmoke == 1 )? 'та':
( allSmoke == 2 || allSmoke == 3 || allSmoke == 4)? 'ты': 'т';

console.log(`Начнем с ${start} сигаре${endSmoke} в день и будем уменьшать
  на ${minusAtDay} с каждым следуйщим днем.`);
let remainder = allSmoke;
let day = 0;
while ( remainder >= start && !(start <= 0)) {
      remainder -= start;
      console.log(start);
      start -= minusAtDay;
      ++day;
}
while ( remainder > 0 ) {
console.log(1);
--remainder;
++day;
}
const endDay = ( day == 1)? 'ень':           ( day == 2 || day == 3 || day == 4 )? 'ня': 'ней';
console.log(`Вы сможете бросить курить за  ${day} д${endDay}.`);
