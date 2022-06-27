
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
let notMistakes = 0;
let wordsIndex = 0;
let nowIndex = 0;
let num = 0;
let tajaNum = 0;

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display p');
const scoreDisplay = document.querySelector('.score');
const timeDisplayM = document.querySelector('.m');
const timeDisplayS = document.querySelector('.s');
const typeCorrect = document.querySelector('.type-correct');
const button = document.querySelector('.button');
const wordList = document.querySelectorAll(".taja-list");
const receivedData = location.href.split('?')[1];

init();
// window.onkeydown = (e) => console.log(e);



function init(){
    buttonChange("게임 로딩중");
    getWords();
    // charIndex = 0;
    
    // wordInput.addEventListener('onkeydown', checkMatch);
    
}

function run()
{
    if (isPlaying) {
        return;
    }
    isPlaying = true;
    
    setText();
    tajaNum = 0;
    // time = GAME_TIME;
    wordList[0].querySelector('.word-input').focus();
    scoreDisplay.innerText = 0;
    mistakes = 0;
    notMistakes = 0;
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

function getWords(){
    console.log(receivedData);
    // const data = fetch('../json/onoff.json');
    if(receivedData==="1"){
        const songs = JSON.parse(JSON.stringify(albumList1));
        words = songs.onoff
    }else if(receivedData==="2"){
        const songs = JSON.parse(JSON.stringify(albumList1));
        words = songs.difficult
    }else if(receivedData==="3"){
        const songs = JSON.parse(JSON.stringify(albumList1));
        words = songs.ifwedream
    }else if(receivedData==="4"){
        const songs = JSON.parse(JSON.stringify(albumList1));
        words = songs.original
    }else if(receivedData==="5"){
        const songs = JSON.parse(JSON.stringify(albumList1));
        words = songs.catswaltz
    }else if(receivedData==="6"){
        const songs = JSON.parse(JSON.stringify(albumList2));
        words = songs.complete
    }else if(receivedData==="7"){
        const songs = JSON.parse(JSON.stringify(albumList2));
        words = songs.flymetothemoon
    }else if(receivedData==="8"){
        const songs = JSON.parse(JSON.stringify(albumList2));
        words = songs.goodmorning
    }else if(receivedData==="9"){
        const songs = JSON.parse(JSON.stringify(albumList2));
        words = songs.fiftyfifty
    }else if(receivedData==="10"){
        const songs = JSON.parse(JSON.stringify(albumList2));
        words = songs.incomplete
    }else if(receivedData==="11"){
        const songs = JSON.parse(JSON.stringify(albumList2));
        words = songs.twentyfour
    }else if(receivedData==="12"){
        const songs = JSON.parse(JSON.stringify(albumList3));
        words = songs.wemustlove
    }else if(receivedData==="13"){
        const songs = JSON.parse(JSON.stringify(albumList3));
        words = songs.icefire
    }else if(receivedData==="14"){
        const songs = JSON.parse(JSON.stringify(albumList3));
        words = songs.yayaya
    }else if(receivedData==="15"){
        const songs = JSON.parse(JSON.stringify(albumList3));
        words = songs.happilyneverafter
    }else if(receivedData==="16"){
        const songs = JSON.parse(JSON.stringify(albumList3));
        words = songs.ido
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
                notMistakes--;
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
                    notMistakes++;
                }else{
                    mistakes++;
                    notMistakes++;
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
            notMistakes++;
        }else{
            mistakes++;
            notMistakes++;
            characters[charIndex].classList.add("incorrect");
            // console.log(mistakes);
        }
        if(nowIndex>=words.length){
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
        nowInput = wordList[num].querySelector('.word-input');
        nowText = wordList[num].querySelector('.word-display p');
        characters = nowText.querySelectorAll("span");
        charLength = nowInput.value.length - 1;
        nowInput.focus();
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
                notMistakes--;
            }
            
            //console.log(charIndex)
            
        }
        
    }
    notMistakes === 0 ? score=0:score=(notMistakes-mistakes)/notMistakes*100;
    // score=(notMistakes-mistakes)/notMistakes*100;
    console.log(tajaNum, mistakes)
    scoreDisplay.innerText = Math.floor(tajaNum/time*60);
    typeCorrect.innerText = score.toFixed(1);
}




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