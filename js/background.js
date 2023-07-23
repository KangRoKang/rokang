const images = [
    "일리단.gif",
    "카미노기.gif",
    "코미카도.gif",
    "태사다르.gif"
]
const todaysNumber = Math.floor(Math.random()*images.length)
const todaysimages = images[todaysNumber]
const bgImage = document.createElement("img");
bgImage.src = `img/${todaysimages}`
console.log(bgImage.src)

document.body.appendChild(bgImage)


const quotes = [
    {
        quote : "선택받은 자 같은건 없다. \n 우릴 구원하는건 우리 자신뿐이다.",
        author : "\n\n- 일리단 스톰레이지"
    },
    {
        quote : "남자가 울어도 좋을땐,,\n 모든 것을 마친 후 뿐이다.",
        author : "\n\n- 카미노기"
    },
    {
        quote : "자신이 무엇을 좋아하던. \n그건 개인의 자유이고. \n무엇을 좋아하는가엔 우열은 없습니다",
        author : "\n\n-  코미카도 켄스케"
    },
    {
        quote : "당신들이 우리 모두를 파멸시킬까 두렵지만, 이제 나는 대의회에 투항하겠소. \n엔 타로 아둔, 집행관. \n전투를 포기하지 마시오!",
        author : "\n\n- 태사다르"
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const todaysQuote = quotes[todaysNumber]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author