/*
1. sum
수를 입력받아 0부터 해당 수까지의 합을 리턴해야 합니다.
 */

function sumTo(num) {
  // 수도코드
  // 숫자를 저장할 변수 선언
  // num 반복한다.
  // 반복할 동안 i를 변수에 저장한다.

  let total = 0;

  for (let i = 1; i <= num; i++) {
    total += i;
  }

  return total;
}

let output1 = sumTo(3);
console.log(output1); // --> 6


//----------------------------------------------------------------------------------------------------


/*
2. makeDigits

수(num)를 입력받아 1부터 num까지의 정수로 구성된 문자열을 리턴해야 합니다. */

function makeDigits(num) {
  // 수도코드
  // 숫자를 저장할 스트링 변수 선언한다.
  // num만큼 반복한다.
  // 반복할 동안 i를 변수에 저장한다.

  let total = '';

  for (let i = 1; i <= num; i++) {
    total += i;
  }

  return total;
}

let output2 = makeDigits(5);
console.log(output2); // --> "12345"

output2 = makeDigits(7);
console.log(output2); // --> "1234567"


//----------------------------------------------------------------------------------------------------


/*
3. makeDigits2
수(num)를 입력받아 1부터 num까지의 정수로 구성된 문자열을 리턴해야 합니다.
반복문(while)문을 사용해야 합니다.
for문 사용은 금지됩니다.
숫자(number string) 사이를 '-'로 구분합니다. ('1-2-3-4-5')
*/

function makeDigits2(num) {
  // 수도코드
	// 문자열을 저장할 변수를 선언한다.
	// num만큼 반복한다(while).
	// 반복할 때 마다 i를 와 '-'을 문자열에 저장한다.
	// 마지막 반복은 '-'을 생략한다.
	
	let total = '';
	let i = 1;

	while(i <= num){
		if(i === num){
			total += i;
		} else {
			total += i + '-';
		}
			i++
	}
	return total;

}

console.log(makeDigits2(5))


//----------------------------------------------------------------------------------------------------


console.log(makeDigits2(5))

/*
4. makeMultiplesOfDigit
수를 입력받아 1부터 해당 수까지의 수 중에서 3의 배수로만 구성된 문자열을 리턴해야 합니다.
*/

function makeMultiplesOfDigit(num) {
	// 수도코드
	// 문자열을 저장할 변수를 선언한다.
	// num만큼 반복한다.
	// 만약에 i가 3으로 나누어 떨어진다면 변수에 i를 저장한다. 

	let total = '';

	for(let i = 1; i <= num; i++){
		if(i % 3 === 0){
			total += i;
		}
	}
	return total;
}

console.log(makeMultiplesOfDigit(12))


//----------------------------------------------------------------------------------------------------


/*
5. countCharacter
문자열과 문자를 입력받아 문자열에서 문자(letter)가 등장하는 횟수를 리턴해야 합니다.
*/

function countCharacter(str, letter) {
	// 수도코드
	// 등장 횟수를 저장할 변수를 선언한다.
	// 문자열의 길이만큼 반복한다.
	// 만약에 문자열의 i번 인덱스가 해당 문자와 동일하다면 변수의 값을 1 증가 시킨다.

	let total = 0;
	
	for(let i = 0; i < str.length; i++){
		if(str[i] === letter){
			total++;
		}
	}
	return total;
}

let output5 = countCharacter('I am a hacker', 'a');
console.log(output5); // --> 3


//----------------------------------------------------------------------------------------------------


/*
6. getMaxNumberFromString
숫자 문자열을 입력받아 문자열을 구성하는 각 숫자 중 가장 큰 수를 나타내는 숫자를 리턴해야 합니다.
반복문(for)문을 사용해야 합니다.
str.split 사용은 금지됩니다.
빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
*/

function getMaxNumberFromString(str) {
  // 수도코드
  // 리턴받을 스트링타입 변수를 선언한다.
  // 문자열의 길이만큼 반복한다.
  // 만약에 문자열의 i번 인덱스의 값이 변수에 저장된 값보다 클 경우, 해당인덱스의 값을 변수에 할당한다.

  let num = '0';
  for (let i = 0; i < str.length; i++) {
    if (str[i] > num) {
      num = str[i];
    }
  }
  return num;
}

let output6 = getMaxNumberFromString('53862');
console.log(output6); // --> '8'

output6 = getMaxNumberFromString('4321');
console.log(output6); // --> '4'


//----------------------------------------------------------------------------------------------------


/*
7. replaceAll
문자열과 두 개의 문자(from, to)를 입력받아, 문자열에 등장하는 특정 문자(from)가 
다른 문자(to)로 바뀐 문자열을 리턴해야 합니다.
*/

function replaceAll(str, from, to) {
  // 수도코드
  // 리턴받을 스트링타입 변수를 선언한다.
  // 리턴받을 스트링타입 변수를 선언한다.
  // 문자열의 길이만큼 반복한다.
  // 만약에 문자열의 i번 인덱스의 값이 from과 일치한다면, i번 인덱스를 to로 바꿔준다.
  // 문자열의 i번 인덱스를 변수에 더해준다.

  let s = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === from) {
      str.replace(from, to);
      console.log(str[i])
    }
    s += str[i];
  }
  return s;
}

let output7 = replaceAll('loop', 'o', 'e');
console.log(output7); // --> 'leep'


//----------------------------------------------------------------------------------------------------


/*
8. getSumOfFactors
수를 입력받아 약수(factor)의 합을 리턴해야 합니다.
*/

function getSumOfFactors(num) {
  // 수도코드
  // 리턴할 넘버타입 변수를 선언한다.
  // num번 만큼 반복한다.
  // 만약 num을 i로 나누었을 때 나머지가 없다면 num을 변수에 더해 준다.

  let total = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      total += i;
    }
  }

  return total;
  s;
}

let output8 = getSumOfFactors(8);
console.log(output8); // --> 15 (1 + 2 + 4 + 8)

output8 = getSumOfFactors(12);
console.log(output8); // --> 28


//----------------------------------------------------------------------------------------------------


/*
9. isPrime
1 이상의 자연수를 입력받아 소수(prime number)인지 여부를 리턴해야 합니다.*/

function isPrime(num) {
  // 수도코드
  // 1을 제외하고 num 만큼 반복한다.
  // 주어진 숫자가 1이라면 소수가 아니다.
  // 만약 반복횟수가 주어진 숫자와 같지 않고, 주어진 숫자를 반복횟수로 나눴을 때 나머지가 0이라면 false를 리턴한다.
  // true를 리턴하다.

  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= num; i++) {
    if (i !== num && num % i === 0) {
      return false;
    }
  }
  return true;
}

let output9 = isPrime(1);
console.log(output9); // --> true


//----------------------------------------------------------------------------------------------------


/*
10. listPrimes
2 이상의 자연수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 합니다
*/

function listPrimes(num) {
  // 수도코드
  // 리턴할 문자열을 저장할 변수를 선언한다.
  // 3부터 받아온 수까지 반복한다.
  // 소수를 판별하는 변수를 선언한다.
  // 2부터 i만큼 반복한다. 
  // 만약 반복횟수가 i가 아니고 반복횟수를 i로 나눴을 때 나머지가 0이면 소수가 아니다.
  // 만약 소수이면 변수에 저장한다.

  let total = '2';

  for (let i = 3; i <= num; i++) {
    let isPrime = true;

    for (let j = 2; j <= i; j++) {
      if (j !== i && i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      total = total + '-' + i;
    }
  }

  return total;
}

let output10 = listPrimes(2);
console.log(output10); // --> '2'

output10 = listPrimes(6);
console.log(output10); // --> '2-3-5'

output10 = listPrimes(18);
console.log(output10); // --> '2-3-5-7-11-13-17'


//----------------------------------------------------------------------------------------------------


/*
11. makePermutations
문자열을 입력받아 해당 문자열에 등장하는 각 문자(letter)를 가지고 만들 수 있는 길이 2의 문자열들을 리턴해야 합니다.
*/

function makePermutations(str) {
  // 수도코드
  // 리턴할 문자열 변수 total을 선언한다.
  // 만약 빈 문자열이 아닐 경우, 문자열의 0번 인덱스와 0번 인덱스를 total에 할당한다.
  // 문자열의 길이만큼 반복한다, i변수로 반복횟수를 지정한다.
  // 문자열의 길이만큼 반복한다, j변수로 반복횟수를 지정한다.
  // 만약 i가 0이고, j도 0이라면 현재 반복문을 생략한다.
  // total과, ','와, 문자열의 i번 인덱스와, 문자열의 j번 인덱스를 total에 할당한다.

  let total = '';

  if (str !== '') {
    total = str[0] + str[0];
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      total = total + ',' + str[i] + str[j];
    }
  }

  return total;
}

let output11 = makePermutations('ab');
console.log(output11); // --> 'aa,ab,ba,bb'

output11 = makePermutations('123');
console.log(output11); // --> '11,12,13,21,22,23,31,32,33'

output11 = makePermutations('');
console.log(output11); // --> ''


//----------------------------------------------------------------------------------------------------


/*
12. hasRepeatedCharacter
문자열을 입력받아 해당 문자열에 중복된 문자(letter)가 존재하는지 여부를 리턴해야 합니다.
*/

function hasRepeatedCharacter(str) {
  // 수도코드
  // i변수 반복횟수를 지정, 문자열의 길이만큼 반복한다.
  // j변수 반복횟수를 지정, 문자열의 길이만큼 반복한다.
  // 만약 문자열의 i번 인덱스와 j번 인덱스의 값이 똑같다면 false를 리턴한다.
  // true를 리턴한다.

  for (let i = 0; i <= str.length; i++) {
    for (let j = 0; j <= str.length; j++) {
      if (j === i) {
        continue;
      }

      if (str[i] === str[j]) {
        return true;
      }
    }
  }

  return false;
}

let output12 = hasRepeatedCharacter('abcdefg');
console.log(output12); // --> false


//----------------------------------------------------------------------------------------------------


/*
13. makeMarginalString
문자열을 입력받아 해당 문자열을 처음부터 한 글자(letter)씩 다시 작성하려고 합니다. 이 때, 한 글자를 추가할 때마다 부분적으로 완성된 문자열을 전부 이어붙인 문자열을 리턴해야 합니다.
*/

function makeMarginalString(str) {
  // 수도코드
  // 리턴할 문자열 변수 total을 선언한다.
  // i변수 반복횟수를 지정, 문자열의 길이만큼 반복한다.
  // j변수 반복횟수를 지정, i만큼 반복한다.
  // 문자열의 인덱스 j를 total에 저장한다.

  let total = '';

  for (let i = 0; i <= str.length; i++) {
    for (let j = 0; j < i; j++) {
      total += str[j];
    }
  }

  return total;
}

let output13 = makeMarginalString('cat');
console.log(output13); // --> 'aababc'
