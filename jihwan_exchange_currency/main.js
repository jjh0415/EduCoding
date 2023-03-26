    // 1. 박스 두개 만들기
    //2. 드랍다운 
    //3. 환율정보
    //4.  드랍다운 리스트에서 아이템 선택
    // 5. 금액을 입력하면 환전
    // 6.  드랍다운 리스트에서 아이템 선택시 다시 단위 기준으로 환전됨
    // 7. 숫자를 한국어로 읽는법
    // 8. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스 환율이 적용이 된다.


    let currencyRatio={
        USD :{
            KRW : 1295.83,
            USD : 1,
            UK : 0.82,
            unit:"달러"
        },
        KRW : {
            KRW : 1,
            USD : 0.00077,
            UK : 0.00063,
            unit:"원"
        },
        UK : {
            UK : 1,
            USD : 1.22,
            KRW : 1584.41,
            unit:"파운드"
        }
    };

    // 1. console.log(currencyRatio.USD.unit);
    // 2. console.log(currencyRatio['UK']['unit']);
let fromCurrency = 'USD'
let toCurrency = 'USD'

document.querySelectorAll("#from-currency-list a")
.forEach((menu) => menu.addEventListener("click",function(){
    document.getElementById("from-button").textContent = this.textContent;
    fromCurrency = this.textContent;
    convert();
}));


document.querySelectorAll("#to-currency-list a")
.forEach((menu) => menu.addEventListener("click",function(){
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
    reversconvert();
}));

function convert(){
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    
    document.getElementById("to-input").value = convertedAmount;
    
}

function reversconvert(){
    let amount = document.getElementById("to-input").value;
    let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
    
    document.getElementById("from-input").value = convertedAmount;
}

