/*
21_mostFrequentCharacter
문자열을 입력받아 가장 많이 반복되는 문자(letter)를 리턴해야 합니다.
*/

function mostFrequentCharacter(str) {

  // 수도코드
  // 시간이 없는 관계로 이하 생략
  
  let num = 0;
  let s = ' ';
  let arr = {};

  for(let i of str){
    if(!(i in arr) && i !== ' '){
      arr[i] = 1;
    } else {
      arr[i]++;
    }

    if(arr[i] > num){
      num = arr[i];
      s = i;
    }
  }

  return s;
}
let output = mostFrequentCharacter('apples not oranges');
console.log(output); // --> 'p'