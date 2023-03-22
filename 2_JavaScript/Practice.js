let str = "Good morning! Have a nice day."
let a = str.split(' ')
console.log(typeof(a))
console.log("<br>")
console.log(a[0])

//값 입력받기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => { 
    // 한 줄씩 입력받은 후 실행할 코드
    // 입력된 값은 line에 저장된다.
    console.log(line);
    rl.close(); // close가 없으면 입력을 무한히 받는다.
});
rl.on('close', () => {
    // 입력이 끝난 후 실행할 코드
})

// 리스트 편집
let words = [a,b,c,df,d,e]
words.splice(3,1) //3번째부터 1개의 원소를 제거
let lyrics = words.joing(' '); // 배열의 원소를 이어붙여 문자열로 만듦


// 문자열
let apple = "Hello apple";
let e = apple.charAt(1);

//소수출력하기
function isPrime(n){
    var divisor = 2;
    if (n==1){return false;}
    while (n>divisor){
        if(n%divisor==0){
            return false;
        }else{
            divisor++;
        }
    }
    return true;
    
    
}

for(var i = 1; i <= 10; i++) {
    document.writeln(i, isPrime(i));
}

//문자열 거꾸로 출력하기
function reverse(str){

    var reverStr = "";
    for ( var i =str.length-1;i>=0;i--){
        reverStr += str[i];
    }
    return reverStr;
}

document.write(reverse("Hello World"));

// 문자열에서 특정한 문자열 찾기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var rap;

rl.on("line", function (line) {
  rap = line;
  rl.close();
}).on("close", function () {
  if (rap.includes('Hello World')) {
    console.log(rap.match(/Hello World/g).length);
  } else {
    console.log(0);
  }
});