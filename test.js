function whois({displayName: displayName, fullName: {firstName: name}}){
  console.log(displayName + " is " + name);
}

let user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
      firstName: "John",
      lastName: "Doe"
  }
};

whois(user)// 질문: 콘솔에서 어떻게 출력될까요?