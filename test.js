function solution(storey) {
  //수도코드 
  //storey를 문자열로 변환해 각 인덱스 값에 접근합니다.
  //0부터 storey의 자릿수만큼 반복합니다.
    //만약 storey의 반복횟수번 인덱스 값, num이 5이하라면 answer에 num을 더해줍니다.
    //아니라면 answer에 11 - num을 더해줍니다.

  var answer = 0;
  let p = 0;
  storey = storey.toString()

  for(let i = storey.length-1; i >= 0; i--){
    let num = Number(storey[i]) + p;

    alert(num)
    alert(answer)

    if(num <= 5){
      answer += num
      p = 0; 
    } else {
      answer += 10 - num; 
      p++
    }


  }
  return answer;
}

//수도코드
// 9999 - 1000 -1
// 88 -100 -10 -1 -1
// 16 - 10 -10 -1 -1

alert(solution(99))

