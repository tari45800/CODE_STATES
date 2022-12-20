/*
1. declaration

키워드 let을 사용하여 변수 course를 선언하세요.
*/

// TODO : 키워드 let을 사용하여 변수 course를 선언하세요.
//수도코드
//course변수를 선언
let course;


/*
9. compareOnlyAlphabet


두 개의 문자열을 입력받아 대소문자를 구분하지 
않고(case insensitive) 서로 같은지 여부를 리턴해야 합니다.
*/

function compareOnlyAlphabet(str1, str2) {
  //수도코드
  //파라미터로 전달 받은 두 개의 값을 대문자로 바꾼다.
  //두 값을 비교해서, 같은 값이라면 ture를 리턴한다.

  let output = false;

  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  if(str1 === str2){
    output = true;
  }

  return output;
}

console.log(compareOnlyAlphabet('hello', 'HELLO'));


/*
10. showTime

시간, 분, 초를 입력받아 현재 시각을 나타내는 메세지를 리턴해야 합니다.
플러스 연산자(+) 사용은 금지됩니다. ('현재 시각은 ' + hour + '시 ' + min + '분 ' + sec + '초 입니다.')
*/

function showTime(hour, min, sec) {
  //수도코드
  //백틱을 활용
  let time = `현재 시각은 ${hour}시 ${min}분 ${sec}초 입니다.`;
  return time;
}

console.log(showTime(1, 30, 25));
