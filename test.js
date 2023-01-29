function solution(storey) {
  //수도코드 
  //storey를 문자열로 변환해 각 인덱스 값에 접근합니다.
  //0부터 storey의 자릿수만큼 반복합니다.
    //만약 storey의 반복횟수번 인덱스 값, num이 5이하라면 answer에 num을 더해줍니다.
    //아니라면 answer에 11 - num을 더해줍니다.

  var p = 0;
  var answer = 0;
  storey = storey.toString()

  for(let i = storey.length-1; i >= 0; i--){
    let num = Number(storey[i]) + p;

    //p가 10
    if(num === 10){
    } else if(num <= 5){
      answer += num
      p = 0; 
    } else {
      answer += 10 - num; 
      p++
    }


  }
  return answer;
}
