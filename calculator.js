const calInput = document.querySelector(".calInput");
const calOutput =document.querySelector(".calOutput");
const col = document.querySelectorAll(".col");

/* all-clear sign dot result */
function clear(){
    calInput.innerText="";
}

document.querySelector(".all-clear").addEventListener("click",clear);


document.querySelector(".sign").addEventListener("click",function(){
    if(calInput.innerText !== "" && calInput.innerText.indexOf("-" === -1)){
        // 0 이 아니고 -가 존재하지 않는 경우
        calInput.innerText = "-" + calInput.innerText;
    }else{
        // 이미 음수인 경우 -> "-"를 없애줌
        calInput.innerText = calInput.innerText.replace("-","");
    }
})

document.querySelector(".dot").addEventListener("click",function(){
    if(calInput.innerText.indexOf(".") === -1){
        // 소수점이 없을때만 추가 가능(두개이상 못하게 하는 것)
        calInput.innerText += ".";
    }
})

document.querySelector(".result").addEventListener("click",function(){
    calOutput.innerText = eval(calInput.innerText);
    clear();
})

/* num op */
var numClicked = false;
Array.from(document.querySelectorAll(".num")).forEach(e=>{
    e.addEventListener("click",function(){
        if(calInput.innerText.length <= 15){
            calInput.innerText = calInput.innerText + this.innerText;
            numClicked = true;
        }else {
            alert("허용 범위를 초과하였습니다.");
        }
    });
});

// op 연속으로 못쓰게 해야함
// 방법 1) calInput.innerText.slice(-1) !== "-" && calInput.innerText.slice(-1) !== "+" && ... 하기
// 방법 2) 앞에 숫자이면 쓸수있게하고 숫자가 아니면 못쓰게 한다.

Array.from(document.querySelectorAll(".op")).forEach(e=>{
    e.addEventListener("click",function(){
        let op = this.innerText;
        if(this.innerText === "x"){
            op = "*";
        } // 눈엔 x 로 보이지만 *로 연산해야 하므로
        if(numClicked === false){ // 이전 입력값이 연산자 인데
            if(isNaN(this.innerText) === true){// 또 연산자를 입력하면
                //isNaN -> Not a Number , 숫자가 아닌 경우 true를 리턴한다
            }
        }else{
            calInput.innerText = calInput.innerText + op;
            numClicked = false;
        }
    });
});


/*
    텍스트가 하나라도 들어가면 AC가 C로 바뀜 -> DOM 이용해서 setattribute 하면 가능할듯
    연산자는 연속해서 나올 수 없음
    op는 +/- 말곤 맨처음에 쓸 수 없음
*/


function init(){
    
}

init();

// click event 수행해주기
// 콜백으로 클릭시 해당 value의 값을 add 하는 식으로

// Document.querySelector()는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환합니다.
// .textNode -> 해당 노드의 text 리턴 https://developer.mozilla.org/ko/docs/Web/API/Node/textContent


//output 계산결과엔 flex-wrap 풀어줘서 두번째줄까지 나오게 해도 되고,
// 혹은 output은 글자크기를 줄이기


//indexOf의 활용
//-> string이 있는지 없는지 확인 가능한데, 이는 sign(+/-) , dot(.)등에 유용하게 사용!!