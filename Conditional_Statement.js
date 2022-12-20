/* 
1. isOldEnoughToDrink

나이를 입력받아 술을 마실 수 있는지(18세 이상) 여부를 리턴해야 합니다.
*/

function isOldEnoughToDrink(age) {
  // 수도코드
  // 만약에 나이가 18보다 크거나 같으면 변수에 true를 할당한다.

  let oldEnough = false;

  if(age >= 18){
    oldEnough = true;
  }

  return oldEnough
}

console.log(isOldEnoughToDrink(20))


//----------------------------------------------------------------------------------------------------


/*
2.fizzBuzz

수를 입력받아 3 그리고 5로 각각 나눈 뒤 나머지 값에 따라 알맞은 메시지를 리턴해야 합니다.
*/

function fizzBuzz(num) {
  // 수도코드
  // 파라미터로 전달 받은 값을 비교한다.
  // 만약에 비교되는 값을 3과 5로 나누었을 때 나머지가 없을 경우 'FizzBuzz'를 변수에 할당.
  // 아니면 비교되는 값을 3으로 나누었을 때 나머지가 없을 경우 'Fizz'를 변수에 할당.
  // 아니면 비교되는 값을 5으로 나누었을 때 나머지가 없을 경우 'Buzz'를 변수에 할당.
  // 아니면 'No FizzBuzz'를 변수에 할당.

  let FB ='';

  if(num % 3 === 0 && num % 5 === 0){
    FB = 'FizzBuzz';
  } else if(num % 3 === 0){
    FB = 'Fizz'; 
  } else if(num % 5 === 0){
    FB = 'Buzz'; 
  } else {
    FB = 'No FizzBuzz';
  }

  return FB;
}

console.log(fizzBuzz(15));


//----------------------------------------------------------------------------------------------------


/*
3. convertScoreToGrade

두 개의 수와 기호를 입력받아 알맞게 계산한 값을 리턴해야 합니다.
*/

function miniCalculator(num1, num2, operator) {
  // 수도코드
  // 넘버타입의 변수를 선언하고 리턴한다.
  // 만약에 operator가 '+'인 경우에는 num1과 num2를 더한다.
  // 아니면 만약에 operator가 '-'인 경우에는 num1과 num2를 뻰다.
  // 아니면 만약에 operator가 '*'인 경우에는 num1과 num2를 곱한다.
  // 아니면 만약에 operator가 '/'인 경우에는 num1과 num2를 나눈다.
  let num = 0;

  if (operator === '+') {
    num = num1 + num2;
  } else if (operator === '-') {
    num = num1 - num2;
  } else if (operator === '*') {
    num = num1 * num2;
  } else if (operator === '/') {
    num = num1 / num2;
  }
  return num;
}

console.log(miniCalculator(3, 4, '+'));

/*
3. miniCalculator

점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.

*/

function convertScoreToGrade(score) {
  // 수도코드
  // 파라미터로 받아온 score값을 100이하 0이상 사이에서 비교한다.
  // score값이 해당하는 범위의 점수라면 해당 범위의 문자열을 반환한다.
  // 아니면 INVALID SCORE를 리턴

  let Sscore = '';

  if(score <=  100 && score >= 90){
    Sscore = 'A';
  } else if(score < 90  && score >= 80){
    Sscore = 'B';
  } else if(score < 80  && score >= 70){
    Sscore = 'C';
  } else if(score < 70  && score >= 60){
    Sscore = 'D';
  } else if(score < 60  && score >= 0){
    Sscore = 'F';
  } else 
[
  Sscore = 'INVALID SCORE'
]

return Sscore

}

console.log(convertScoreToGrade(91));


//----------------------------------------------------------------------------------------------------


/*
4. convertScoreToGrade
점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.
*/

function convertScoreToGrade(score) {
  // 수도코드
  // 넘버타임의 정수를 입력받고
  // 점수가 90점 이상 100이하일 경우 A를 출력한다.
  // 정수가 80점 이상 89이하일 경우 B를 출력한다.
  // 정수가 70점 이상 79이하일 경우 C를 출력한다.
  // 정수가 60점 이상 69이하일 경우 D를 출력한다.
  // 정수가 0점 이상 59이하일 경우 F를 출력한다.
  // 아니면 INVALID SCORE 리턴한다.

  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80 && score <= 89) {
    return 'B';
  } else if (score >= 70 && score <= 79) {
    return 'C';
  } else if (score >= 60 && score <= 69) {
    return 'D';
  } else if (score >= 0 && score <= 59) {
    return 'F';
  } else {
    return 'INVALID SCORE';
  }
}

console.log(convertScoreToGrade(50));


//----------------------------------------------------------------------------------------------------


/*
5. checkAge
이름과 나이를 입력받아 나이별로 다른 메시지를 리턴해야 합니다.
*/
function checkAge(name, age) {
  // 수도코드
  // 길이 10이하 스트링타입의 이름을 입력받는다.
  // 0초과 100미만의 넘버타입의 나이를 입력받는다.
  // 만약에 나이가 21세 이상일 경우, Welcome, name을 리턴한다.
  // 아니면 GO home, name을 리턴한다.

  if (age >= 21) {
    return `Welcome, ${name}!`;
  } else {
    return `Go home, ${name}!`;
  }
}

console.log(checkAge('John', 21));


//----------------------------------------------------------------------------------------------------


/*
6. convertScoreToGradeWithPlusAndMinus
점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.
만약 주어진 점수가 100을 초과하거나 0 미만인 경우, 문자열 'INVALID SCORE'를 리턴해야 합니다.
각 등급의 최고 점수보다 7점 이하인 경우, 등급과 함께 '-'를 리턴해야 합니다. (단, 93점의 경우에는 A를 리턴해야 합니다.)
각 등급의 최저 점수보다 8점 이상인 경우, 등급과 함께 '+'를 리턴해야 합니다.
F+ 와 F- 는 존재하지 않습니다.
 */

// 수도코드
// 문자열타입 변수를 선언한다.
// 만약 점수가 90이상일 100이하인 경우, 변수에 A를 저장한다.
// 만약 점수의 끝자리가

function convertScoreToGradeWithPlusAndMinus(score) {
  // 수도코드
  // 만약 점수가 90 이상일 경우, A를 변수에 저장한다.
  // 만약 점수가 100이라면 '+A'를 리턴한다.
  // 아니면 점수가 80 이상일 경우, B를 변수에 저장한다.
  // 아니면 점수가 70 이상일 경우, C를 변수에 저장한다.
  // 아니면 점수가 60 이상일 경우, D를 변수에 저장한다.
  // 아니면 점수가 60 미만일 경우, F를 변수에 저장한다.
  

  //이미 90이상이고 92이하고 98이상인 경우에 메뉴얼을 정했다.
  // => 100,99,98,92,91,90;
  // 가 아닌 경우에는 A를 주고싶다.

  let s = '';

  // 만약에 점수가 90이상이고 100 이하라면
  if (score >= 90 && score <= 100) {
    s = 'A';
    if (score === 100) {
      return '+A';
    }
  } else if (score >= 80 && score <= 89) {
    s = 'B';
  } else if (score >= 70 && score <= 79) {
    s = 'C';
  } else if (score >= 60 && score <= 69) {
    s = 'D';
  } else if (score >= 0 && score <= 59) {
    s = 'F';
  } else {
    s = 'INVALID SCOR';
  }

  if (score >= 60 && score <= 100) {
    score = score % 10; //9

    if (score >= 8) {
      s = '+' + s;
    } else if (score <= 2) {
      s = '-' + s;
    }
  }

  return s;
}

console.log(convertScoreToGradeWithPlusAndMinus(-1));


//----------------------------------------------------------------------------------------------------


/*
7. addOneSecond
시, 분, 초를 입력받아 1초를 더한 결과값을 특정 형태의 메시지로 리턴해야 합니다. 
*/

function addOneSecond(hour, minute, second) {
  // 수도코드
  // 만약에 second가 0이상이고 59 이하라면 second 1을 더해줍니다.
  // 만약에 60라면 second은 0으로 초기화, minute 1을 더합니다.
  // 만약에 minute이 0이상이고 60 이하이면
  // 만약에 60라면 minute 0으로 초기화, hour 1을 더합니다.
  // 만약에 hour 0이상이고 24 이하라면
  //만약hour 24라면 hour 0으로 초기화.

  // 만약에 second가 0이상이고 59 이하라면 second 1을 더해줍니다.
  if (second >= 0 && second <= 59) {
    second++;

    // 만약에 60라면 second은 0으로 초기화, minute 1을 더합니다.
    if (second === 60) {
      second = 0;
      minute++;

      // 만약에 minute이 0이상이고 60 이하이면
      if (minute >= 0 && minute <= 60) {
        // 만약에 60라면 minute 0으로 초기화, hour 1을 더합니다.
        if (minute === 60) {
          minute = 0;
          hour++;

          // 만약에 hour 0이상이고 24 이하라면
          if (hour >= 0 && hour <= 24) {
            //만약hour 24라면 hour 0으로 초기화.
            if (hour === 24) {
              hour = 0;
            }
          }
        }
      }
    }
  }

  return `1초 뒤에 ${hour}시 ${minute}분 ${second}초`;
}

console.log(addOneSecond(23, 59, 59));
