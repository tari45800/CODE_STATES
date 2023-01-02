
/*
01_getProperty
객체와 키를 입력받아 키에 해당하는 값을 리턴해야 합니다.
*/


function getProperty(obj, property) {
//수도코드 
//키에 해당하는 값을 리턴 하는게 핵심!
// 중요! 변수를 문자열로 감싸면 문자열이 된다. 
// obj['property']; => undefined

return obj[property];

}


//----------------------------------------------------------------------------------------------------


/*
02_addProperty
1.  객체와 키를 입력받아 
2.  키에 해당하는 값 
3.  을 true를 할당한다.
*/

function addProperty(obj, property) {

obj[property] = true;
}


//----------------------------------------------------------------------------------------------------


/*
03_addPropertyAndValue
1. 객체와 키, 값을 입력받아 키에 값
2. 을 할당해야 합니다.
*/

function addPropertyAndValue(obj, property, value) {

  obj[property] = value;
}


//----------------------------------------------------------------------------------------------------


/*
04_addObjectProperty
1. 두 개의 객체와 키를 입력받아 
2. 첫번째 객체의 키
3. 에 두번째 객체를 할당해야 합니다.
*/

function addObjectProperty(obj1, property, obj2) {

obj1[property] = obj2;
}


//----------------------------------------------------------------------------------------------------


/*
05_removeProperty
1. 객체와 키를 입력받아 
2. 입력받은 객체의 입력받은 키
3. 키가 들어있는 속성을 제거합니다.
*/

function removeProperty(obj, property) {
// 수도코드
// 핵심은 제거!!
// delete 객체.키 
// 키와 값이 지워진다. === 프로퍼티를 지운다. 

delete obj[property];

};


//----------------------------------------------------------------------------------------------------


/*
06_removeNumberValues
1. 객체를 입력받아 
2. number 타입의 값을 갖는 속성을 
3. 모두 제거해야 합니다.
*/


  function removeNumberValues(obj) {
  // 수도코드
  // 객체를 순회한다. 
  // 만약 
  // 객체의 값
  // 이 숫자라면
  // 프로퍼티를 제거 한다. 

  for(let i in obj){
  
    if(typeof obj[i] === 'number'){
      delete obj[i];
    }

  }

}


//----------------------------------------------------------------------------------------------------


/*
07_removeArrayValues
1. 객체를 입력받아 
2. 배열을 값으로 갖는 속성을 
3. 모두 제거해야 합니다.
*/

function removeArrayValues(obj) {
  for(let i in obj){
  
    if(Array.isArray(obj[i])){
      delete obj[i];
    }

  }
}


//----------------------------------------------------------------------------------------------------


/*
08_removeOddValues
1. 객체를 입력받아 
2. 홀수를 값으로 갖는 속성을 
3. 모두 제거해야 합니다.
*/

function removeOddValues(obj) {
  // 수도코드
  // 만약 속성 값이 숫자이고
  // 속성 값을 2로 나누었을 때 나머지가 있으면 = 홀수 
  // 프로퍼티를 삭제한다. 
  for(let i in obj){

    if(typeof obj[i] === 'number' && obj[i]%2 !== 0){
      delete obj[i]
    }
  }

}


//----------------------------------------------------------------------------------------------------


/*
09_isPersonOldEnoughToVote
1. 객체를 입력받아 
2. 객체가 가진 age 속성값이 
3. 합법적으로 투표할 수 있는 나이(18세 이상)인지 여부를 
4. 리턴해야 합니다.
*/


function isPersonOldEnoughToVote(person) {
  // 수도코드
  // 객체가 가진 age 속성값에 접근한다. 
  // 18세 이상인지 판단함.
  // 리턴함
  return person['age'] >= 18;
}


//----------------------------------------------------------------------------------------------------


/*
10_addFullNameProperty
객체를 입력받아 'firstName', 'lastName' 속성값 사이에 
띄어쓰기 하나를 둔 단일 문자열을 fullName 속성값으로 할당해야 합니다.
*/

function addFullNameProperty(obj) {
  // 수도코드
  // 객체를 입력받는다.
  // 'firstName'과 'lastName' 속성 값을 찾는다.
  // 띄어쓰기 하나를 둔 단일 문자열을
  // fullName 속성값으로 할당

  obj['fullName'] = obj['firstName'] + ' ' + obj['lastName'];

}


//----------------------------------------------------------------------------------------------------


/*
11_removeNumbersLargerThan
수와 객체를 입력받아 
입력받은 수보다 큰 수를 갖는 속성을 모두 제거해야 합니다.
*/

function removeNumbersLargerThan(num, obj) {
  // 수도코드

  for(let i in obj){
    if(typeof obj[i] === 'number' && num < obj[i] ){
      delete obj[i];
    }
  }

}


//----------------------------------------------------------------------------------------------------


/*
12_countNumberOfKeys
객체를 입력받아 속성의 개수를 리턴해야 합니다.
*/

function countNumberOfKeys(obj) {
  // 수도코드
  // 시간이 없는 관계로 이하 생략

  let num = 0;

  for(let i in obj){
    num++
  }

  return num;
}


//----------------------------------------------------------------------------------------------------


/*
13_printObject
객체를 입력받아 키, 값 쌍을 표현하는 문자열을 리턴해야 합니다.
각 문자열은 한 줄에 키: 값 형태로 구성되며, 각 문자열 끝에는 줄바꿈 문자가 포함되어야 합니다.*/

function printObject(obj) {
  // 수도코드
  // 시간이 없는 관계로 이하 생략

  let str = '';

  for(let i in obj){
    str += i + ': ' +obj[i]+ '\n'
  }

  return str;
}


//----------------------------------------------------------------------------------------------------


/*
14_getElementOfArrayProperty
객체, 키, 수를 입력받아 주어진 키에 해당하는 값이 배열인 경우, 수가 가리키는 인덱스에 해당하는 요소를 리턴해야 합니다.
*/


function getElementOfArrayProperty(obj, key, index) {
  let arrProperty = obj[key];
  // 수도코드
  // 시간이 없는 관계로 이하 생략

  if(Array.isArray(obj[key])){
    return obj[key][index];
  }

}


//----------------------------------------------------------------------------------------------------


/*
16_getLastElementOfProperty
객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소를 리턴해야 합니다.
*/


function getLastElementOfProperty(obj, property) {

  // 수도코드
  // 시간이 없는 관계로 이하 생략



  for(let i in obj){
    if(i === property && Array.isArray(obj[i])){
      return obj[i][obj[i].length-1]
    }
  }
  
  
}


//----------------------------------------------------------------------------------------------------


/*
17_getValueOfNthElement
배열과 수를 입력받아 수가 가리키는 인덱스에 해당하는 객체의 'name' 속성값을 리턴해야 합니다.
*/


function getValueOfNthElement(arr, num) {

  // 수도코드
  // 시간이 없는 관계로 이하 생략
  
  let str = 'no name';
  
  if(arr.length === 0){
  
  } else if(num > arr.length-1){
    str = arr[arr.length-1].name;
  } else {
    str = arr[num].name;
  }
  
  return str;
}
  

//----------------------------------------------------------------------------------------------------


/*
18_getAllButLastElementOfProperty
객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소가 제거된 새로운 배열을 리턴해야 합니다.*/


function getAllButLastElementOfProperty(obj, key) {

  // 수도코드
  // 시간이 없는 관계로 이하 생략
  
  let arr = []
  
  if(Array.isArray(obj[key])){
    arr = obj[key].slice(0, obj[key].length-1);

  }


  return arr;
}
  

//----------------------------------------------------------------------------------------------------


/*
18_getAllButLastElementOfProperty
객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소가 제거된 새로운 배열을 리턴해야 합니다.*/


function getAllButLastElementOfProperty(obj, key) {

  // 수도코드
  // 시간이 없는 관계로 이하 생략
  
  let arr = []
  
  if(Array.isArray(obj[key])){
    arr = obj[key].slice(0, obj[key].length-1);

  }

  return arr;
}
  


//----------------------------------------------------------------------------------------------------

/*
19_extend
두 개의 객체를 입력받아 두번째 객체의 속성들을 첫번째 객체에 추가해야 합니다.
*/

function extend(obj1, obj2) {

  // 수도코드
  // 시간이 없는 관계로 이하 생략
  
  let isInclude = false;
  
  for(let i in obj2){
    isInclude = false
    
    for(let j in obj1){
      if(i === j){

        isInclude = true;
      }
    }
  
    if(!isInclude){ 
      obj1[i] = obj2[i];
    }
  }
  
}
  
//----------------------------------------------------------------------------------------------------


/*
20_countAllCharacters
문자열을 입력받아 문자열을 구성하는 각 문자(letter)를 키로 갖는 객체를 리턴해야 합니다.
각 키의 값은 해당 문자가 문자열에서 등장하는 횟수를 의미하는 number 타입의 값이어야 합니다.*/

function countAllCharacters(str) {

  // 수도코드
  // 시간이 없는 관계로 이하 생략

  
  let arr = {};

  for(let i of str){

  
    if(i in arr){
      arr[i]++;
    } else {
      arr[i] = 1;
    }
  }

  
  return arr;
  
}
  

//----------------------------------------------------------------------------------------------------


/*
21_mostFrequentCharacter
문자열을 입력받아 가장 많이 반복되는 문자(letter)를 리턴해야 합니다.
*/

function mostFrequentCharacter(str) {

  // 수도코드
  // 시간이 없는 관계로 이하 생략
  
  let num = 0;
  let s = '';
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