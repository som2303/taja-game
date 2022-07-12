
const GAME_TIME = 0;

let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let isZero = true;
let startCount = false;
let timeInterval;
let checkInterval;
let words = [];
let charIndex = 0;
let mistakes = 0;
let allWords = 0;
let wordsIndex = 0;
let nowIndex = 0;
let num = 0;
let tajaNum = 0;

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display p');
const wordList = document.querySelectorAll(".taja-list");

const titleDisplay = document.querySelector('.title');
const scoreDisplay = document.querySelector('.score');
const timeDisplayM = document.querySelector('.m');
const timeDisplayS = document.querySelector('.s');
const typeCorrect = document.querySelector('.type-correct');
const button = document.querySelector('.button');

const receivedData = location.href.split('?')[1];
const receivedData2 = location.href.split('?')[2];
const albumImage = document.querySelector('.bg-image');

const target = document.querySelectorAll('.btn_open');
const btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
const popMessage = document.querySelector('.pop_message');

const header = document.querySelector('.header');
const contents = document.querySelector('.contents');

init();
// window.onkeydown = (e) => console.log(e);



function init(){
    buttonChange("게임 로딩중");
    getWords();
    setText();
    paintImage(receivedData2);
    // charIndex = 0;
    
    // wordInput.addEventListener('onkeydown', checkMatch);
    
}

function run()
{
    if (isPlaying) {
        return;
    }
    isPlaying = true;
    
    
    tajaNum = 0;
    // time = GAME_TIME;
    wordList[0].querySelector('.word-input').classList.add("click");
    wordList[0].querySelector('.word-input').focus();
    scoreDisplay.innerText = 0;
    mistakes = 0;
    allWords = 0;
    timeInterval = setInterval(countDown, 1000);
    checkInterval = setInterval(checkStatus, 50);
    buttonChange("게임 중");
}

function checkStatus(){
    if(!isPlaying && time === 0){
        buttonChange("게임시작");
        clearInterval(checkInterval);
    }
}

// const header = document.querySelector(".header");

function paintImage(receive) {
    let rink = "url('https://musicmeta-phinf.pstatic.net/album/002/117/2117435.jpg?type=r360Fll&v=20220524212012')"
    if (receive==='2'){
        rink="url('https://musicmeta-phinf.pstatic.net/album/002/463/2463403.jpg?type=r360Fll&v=20220514062515')"
        header.classList.add("complete");
        contents.classList.add("complete-text");
    }else if (receive==='3'){
        rink="url('https://musicmeta-phinf.pstatic.net/album/002/835/2835389.jpg?type=r360Fll&v=20220518133519')"
        header.classList.add("wemustlove");
        contents.classList.add("wemustlove-text");
    }
    // const image = new Image();
    albumImage.style.backgroundImage=rink;// = imgNumber; // 가져올 image경로 지정
    // image.classList.add("bgImage"); // image에 bgImage 클래스 추가 
    // header.appendChild(image); // body의 자식에 image추가
}

function getWords(){
    console.log(receivedData);
    // const data = fetch('../json/onoff.json');
    if(receivedData==="onoff"){
        const songs = JSON.parse(JSON.stringify(albumList1));
        words = songs.onoff
        titleDisplay.innerText='ON/OFF'
    }else if(receivedData==="difficult"){
        const songs = JSON.parse(JSON.stringify(albumList1));
        words = songs.difficult
        titleDisplay.innerText='Difficult'
    }else if(receivedData==="ifwedream"){
        const songs = JSON.parse(JSON.stringify(albumList1));
        words = songs.ifwedream
        titleDisplay.innerText='If We Dream'
    }else if(receivedData==="original"){
        const songs = JSON.parse(JSON.stringify(albumList1));
        words = songs.original
        titleDisplay.innerText='Original'
    }else if(receivedData==="catswaltz"){
        const songs = JSON.parse(JSON.stringify(albumList1));
        words = songs.catswaltz
        titleDisplay.innerText='Cat\'s Waltz'
    }else if(receivedData==="complete"){
        const songs = JSON.parse(JSON.stringify(albumList2));
        words = songs.complete
        titleDisplay.innerText='Complete\n(널 만난 순간)'
    }else if(receivedData==="flymetothemoon"){
        const songs = JSON.parse(JSON.stringify(albumList2));
        words = songs.flymetothemoon
        titleDisplay.innerText='Fly Me To\nThe Moon'
    }else if(receivedData==="goodmorning"){
        const songs = JSON.parse(JSON.stringify(albumList2));
        words = songs.goodmorning
        titleDisplay.innerText='아침\n(Good Morning)'
    }else if(receivedData==="fiftyfifty"){
        const songs = JSON.parse(JSON.stringify(albumList2));
        words = songs.fiftyfifty
        titleDisplay.innerText='Fifty Fifty'
    }else if(receivedData==="incomplete"){
        const songs = JSON.parse(JSON.stringify(albumList2));
        words = songs.incomplete
        titleDisplay.innerText='나 말고 다\n(Incomplete)'
    }else if(receivedData==="twentyfour"){
        const songs = JSON.parse(JSON.stringify(albumList2));
        words = songs.twentyfour
        titleDisplay.innerText='스물네 번 (86400)'
    }else if(receivedData==="wemustlove"){
        const songs = JSON.parse(JSON.stringify(albumList3));
        words = songs.wemustlove
        titleDisplay.innerText='사랑하게 될 거야\n(We Must Love)'
    }else if(receivedData==="icefire"){
        const songs = JSON.parse(JSON.stringify(albumList3));
        words = songs.icefire
        titleDisplay.innerText='Ice & Fire'
    }else if(receivedData==="yayaya"){
        const songs = JSON.parse(JSON.stringify(albumList3));
        words = songs.yayaya
        titleDisplay.innerText='별일 아냐\n(Yayaya)'
    }else if(receivedData==="happilyneverafter"){
        const songs = JSON.parse(JSON.stringify(albumList3));
        words = songs.happilyneverafter
        titleDisplay.innerText='첫 사랑의 법칙\n(Happily never after)'
    }else if(receivedData==="ido"){
        const songs = JSON.parse(JSON.stringify(albumList3));
        words = songs.ido
        titleDisplay.innerText='I Do'
    }else if(receivedData==="17"){
        const songs = JSON.parse(JSON.stringify(albumList4));
        words = songs.why
    }else if(receivedData==="18"){
        const songs = JSON.parse(JSON.stringify(albumList4));
        words = songs.asteroid
    }else if(receivedData==="19"){
        const songs = JSON.parse(JSON.stringify(albumList4));
        words = songs.allday
    }else if(receivedData==="20"){
        const songs = JSON.parse(JSON.stringify(albumList4));
        words = songs.moscow
    }else if(receivedData==="21"){
        const songs = JSON.parse(JSON.stringify(albumList4));
        words = songs.twinckle
    }
    
    
    //
    //
    //["하나하나하나","둘둘","셋"]//,"넷","다섯","여섯","일곱","여덟","아홉","열"];
    buttonChange('게임시작');
}

function setText(){
    
    
    // mistakes=0;
    let n=0;
    while(true){
        if(n===4){
            return;
        }
        if(wordsIndex>=words.length){
            wordsIndex=0;
            while(n!=4){
                wordList[n].querySelector('.word-input').value = "";
                wordList[n].querySelector('.word-display p').innerHTML="";
                n++;
            }
            return;
        }
        wordList[n].querySelector('.word-display p').innerHTML="";
        words[wordsIndex].split("").forEach(span=>{
            let spanTag = `<span>${span}</span>`;
            wordList[n].querySelector('.word-display p').innerHTML+=spanTag;
        })
        wordList[n].querySelector('.word-input').value = "";
        charIndex = 0;
        wordsIndex++;
        n++;
    }
    // const randomIndex = Math.floor(Math.random()*words.length);
    // wordDisplay.innerText = words[randomIndex];
    // if(wordsIndex<words.length){
    //     wordDisplay.innerHTML="";
    //     words[wordsIndex].split("").forEach(span=>{
    //         let spanTag = `<span>${span}</span>`;
    //         wordDisplay.innerHTML+=spanTag;
    //     })
    //     charIndex = 0;
    //     wordsIndex++;
    // }else{
    //     isPlaying=false;
    // }
    
}



function checkMatch (){
    // isPlaying = true;
    let nowInput = wordList[num].querySelector('.word-input');
    let nowText = wordList[num].querySelector('.word-display p');
    let characters = nowText.querySelectorAll("span");
    let charLength = nowInput.value.length-1;
    let typedChar = nowInput.value.split("")[charIndex];
    
    
    if(charIndex<characters.length-1){
        
        if(typedChar == null){
            // console.log("a")
            if(charLength>-1){
                tajaNum--;
                console.log(charLength);
            }else if(!isZero){
                isZero=true;
                tajaNum--;
            }
            if(charIndex>charLength && charIndex>0){
                charIndex--;
                if(characters[charIndex].classList.contains("incorrect") && mistakes>0){ 
                    mistakes--;
                    
                }
                allWords--;
            }
            characters[charIndex].classList.remove("correct", "incorrect");
            
            //console.log(charIndex)
        }else{
            isZero=false;
            // startCount = true;
            tajaNum++;
            // console.log("a")
            if(charIndex!=charLength){
                if(characters[charIndex].innerText === typedChar){
                    characters[charIndex].classList.add("correct");
                    allWords++;
                }else{
                    mistakes++;
                    allWords++;
                    characters[charIndex].classList.add("incorrect");
                    // console.log(mistakes);
                }
                charIndex++;
            }
            
        }
        
        // console.log("ㅁ",charIndex)
        characters.forEach(span => span.classList.remove("active")); //지나간 부분 active를 다 지우고
        characters[charIndex].classList.add("active")
    }else if (window.event.key === 'Enter'){
        isZero=true;
        nowIndex++;
        

        characters[charIndex].classList.remove("correct", "incorrect","active");
        if(characters[charIndex].innerText === typedChar){
            characters[charIndex].classList.add("correct");
            allWords++;
        }else{
            mistakes++;
            allWords++;
            characters[charIndex].classList.add("incorrect");
            // console.log(mistakes);
        }
        if(nowIndex>=words.length){
            openPopup()
            nowIndex=0;
            isPlaying=false;

            // time = GAME_TIME;
            buttonChange('게임시작');/////////
            return;
        }
        // score+=characters.length-mistakes;
        // scoreDisplay.innerText = score;
        // time = GAME_TIME;
        num++;
        charIndex=0;
        if(num===4){
            setText();
            num=0;
        }
        nowInput.classList.remove("click");
        nowInput = wordList[num].querySelector('.word-input');
        nowText = wordList[num].querySelector('.word-display p');
        characters = nowText.querySelectorAll("span");
        charLength = nowInput.value.length - 1;
        nowInput.focus();
        nowInput.classList.add("click");
        typedChar = nowInput.value.split("")[charIndex];
        characters[charIndex].classList.add("active");
        
        
    }else{
        nowInput.value = nowInput.value.substr(0, characters.length);
        if(typedChar == null){
            if(charIndex>-1){
                    tajaNum--;
                    console.log(tajaNum);
                }
            // console.log("a")
            if(charIndex>charLength && charIndex>0){
                characters[charIndex].classList.remove("correct", "incorrect", "active");
                
                charIndex--;
                characters[charIndex].classList.remove("correct", "incorrect", "active");
                characters[charIndex].classList.add("active")
                if(characters[charIndex].classList.contains("incorrect") && mistakes>0){ 
                    mistakes--;
                    
                }
                allWords--;
            }
            
            //console.log(charIndex)
            
        }
        
    }
    allWords === 0 ? score=0:score=(allWords-mistakes)/allWords*100;
    // score=(allWords-mistakes)/allWords*100;
    console.log(tajaNum, mistakes)
    scoreDisplay.innerText = Math.floor(tajaNum/time*60);
    typeCorrect.innerText = score.toFixed(1);
}

// const target = document.querySelectorAll('.btn_open');
// const btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
let targetID;


function openPopup(){
    // timeDisplayM.innerText = Math.floor(time/60);
    // timeDisplayS.innerText = time%60;
    // scoreDisplay.
    // targetID = this.getAttribute('href');
    popMessage.innerText="연습시간: "+timeDisplayM.value+'분'
    document.querySelector("#pop_info").style.display = 'block';
}
function closePopup(){
    let thisUrl = document.URL;
    let snsTitle = "2021 웹진 [봄]";
    document.querySelector("#pop_info").style.display = 'none';
    const url = "http://twitter.com/share?url="+encodeURIComponent(thisUrl)+"&text="+encodeURIComponent(snsTitle);
    window.open(url, "tweetPop", "width=486, height=286,scrollbars=yes");
    // window.location.href = `home.html`;
}


// 팝업 열기
for(let i = 0; i < target.length; i++){
    target[i].addEventListener('click', function(){
        targetID = this.getAttribute('href');
        popMessage.innerText="연습시간: "+timeDisplayM.innerText+'분'+timeDisplayS.innerText+'초\n'+"타자: "+scoreDisplay.innerText+"타\n"+"정확도: "+typeCorrect.innerText+"%"
        document.querySelector(targetID).style.display = 'block';
    });
}

// 팝업 닫기
// for(let j = 0; j < target.length; j++){
//     btnPopClose[j].addEventListener('click', function(){
//         this.parentNode.parentNode.style.display = 'none';
//     });
// }




function countDown(){
    time++;
    // console.log("first")
    // if(startCount) {
    //     isPlaying = true;
        
    // }
    // time > 0 ? time-- : isPlaying = false;
    if (!isPlaying){
        clearInterval(timeInterval);
    }
    timeDisplayM.innerText = Math.floor(time/60);
    timeDisplayS.innerText = time%60;
    scoreDisplay.innerText = Math.floor(tajaNum/time*60);
}

function buttonChange(text) {
    button.innerText = text;
    text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading');
}