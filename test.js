function computeWhenDouble(interestRate) {
  // TODO: 여기에 코드를 작성합니다.
  // 수도코드
  // 반복한다. x가 두배가 될때 까지 2배가 될때 까지
  
  let i = 100;
  let c = 0
  
  while(i < 200){
    i = i + (i * interestRate / 100); 
    c++
    alert(i)
  }


  return c;
}

let output = computeWhenDouble(100);
console.log(output); // --> 11