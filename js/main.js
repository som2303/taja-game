
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
const deco = document.querySelector('.info-deco');
const scoreDisplay = document.querySelector('.score');
const timeDisplayM = document.querySelector('.m');
const timeDisplayS = document.querySelector('.s');
const typeCorrect = document.querySelector('.type-correct');
const button = document.querySelector('.button');
const i2 = document.querySelector('.i2');
const i3 = document.querySelector('.i3');
const i4 = document.querySelector('.i4');

const popup = document.querySelector('.popup');
const r_time_m = document.querySelector('.r-m');
const r_time_s = document.querySelector('.r-s');
const r_score = document.querySelector('.r-score');
const r_accuracy = document.querySelector('.r-accuracy');

const receivedData = location.href.split('?')[1];
const receivedData2 = location.href.split('?')[2];
const receivedData3 = location.href.split('?')[3];
// const albumImage = document.querySelector('.bg-image');

const target = document.querySelectorAll('.btn_open');
const btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
const popMessage = document.querySelector('.pop_message');

const header = document.querySelector('.header');
const contents = document.querySelector('.contents');
const popup_contents = document.querySelector('.popup-contents');
const results = document.querySelector('.results');

init();


function init(){
    buttonChange("게임 로딩중");
    getWords();
    setText();
    getDeco(receivedData2);
    if(receivedData3==='0'){
        header.classList.remove('light-on');
        popup_contents.classList.remove('light-on');
        results.classList.remove('popup-light');

    } else {
        header.classList.add('light-on');
        popup_contents.classList.add('light-on');
        results.classList.add('popup-light');
    }
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


function getDeco(){
    if(receivedData2==='1'){
        deco.innerText='1st\nmini album\non/off';
    }else if(receivedData2==='2'){
        deco.innerText='2th\nmini Album\nyou\ncomplete me';
        deco.style.fontSize="1rem"
    }else if(receivedData2==='3'){
        deco.innerText='3rd\nmini Album\nwe\nmust love';
        deco.style.fontSize="1rem"
    }else if(receivedData2==='4'){
        deco.innerText='4th\nmini Album\ngo live';
    }else if(receivedData2==='5'){
        deco.innerText='5th\nmini Album\nspin off';
    }else if(receivedData2==='6'){
        deco.innerText='the first album\nonf:my name'
    }else if(receivedData2==='7'){
        deco.innerText='first\nrpackage\nalbum\ncity of onf'
        deco.style.fontSize="1rem"
    }else if(receivedData2==='8'){
        deco.innerText='summer popup album\npopping';
    }else if(receivedData2==='9'){
        deco.innerText='6th\nmini album\ngooosebumps';
    }
    // deco.innerText='special album\nstorage of onf'
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
        titleDisplay.innerText='Complete (널 만난 순간)'
    }else if(receivedData==="flymetothemoon"){
        const songs = JSON.parse(JSON.stringify(albumList2));
        words = songs.flymetothemoon
        titleDisplay.innerText='Fly Me To The Moon'
    }else if(receivedData==="goodmorning"){
        const songs = JSON.parse(JSON.stringify(albumList2));
        words = songs.goodmorning
        titleDisplay.innerText='아침 (Good Morning)'
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
        titleDisplay.innerText='별일 아냐 (Yayaya)'
    }else if(receivedData==="happilyneverafter"){
        const songs = JSON.parse(JSON.stringify(albumList3));
        words = songs.happilyneverafter
        titleDisplay.innerText='첫 사랑의 법칙\n(Happily never after)'
    }else if(receivedData==="ido"){
        const songs = JSON.parse(JSON.stringify(albumList3));
        words = songs.ido
        titleDisplay.innerText='I Do'
    }else if(receivedData==="why"){
        const songs = JSON.parse(JSON.stringify(albumList4));
        words = songs.why
        titleDisplay.innerText='Why'
    }else if(receivedData==="asteroid"){
        const songs = JSON.parse(JSON.stringify(albumList4));
        words = songs.asteroid
        titleDisplay.innerText='소행성 (Asteroid)'
    }else if(receivedData==="allday"){
        const songs = JSON.parse(JSON.stringify(albumList4));
        words = songs.allday
        titleDisplay.innerText='억X억 (All Day)'
    }else if(receivedData==="moscow"){
        const songs = JSON.parse(JSON.stringify(albumList4));
        words = songs.moscow
        titleDisplay.innerText='Moscow Moscow'
    }else if(receivedData==="twinckle"){
        const songs = JSON.parse(JSON.stringify(albumList4));
        words = songs.twinckle
        titleDisplay.innerText='Twinkle Twinkle'
    }else if(receivedData==="sukhumvit"){
        const songs = JSON.parse(JSON.stringify(albumList5));
        words = songs.sukhumvit
        titleDisplay.innerText='스쿰빗스위밍\n(Sukhumvit Swimming)'
    }else if(receivedData==="belleepoque"){
        const songs = JSON.parse(JSON.stringify(albumList5));
        words = songs.belleepoque
        titleDisplay.innerText='첫 키스의 법칙\n(Belle Epoque)'
    }else if(receivedData==="geppeto"){
        const songs = JSON.parse(JSON.stringify(albumList5));
        words = songs.geppeto
        titleDisplay.innerText='제페토 (Geppeto)'
    }else if(receivedData==="good"){
        const songs = JSON.parse(JSON.stringify(albumList5));
        words = songs.good
        titleDisplay.innerText='오늘 뭐 할래\n(Good Good)'
    }else if(receivedData==="cactus"){
        const songs = JSON.parse(JSON.stringify(albumList5));
        words = songs.cactus
        titleDisplay.innerText='선인장 (Cactus)'
    }else if(receivedData==="message"){
        const songs = JSON.parse(JSON.stringify(albumList5));
        words = songs.message
        titleDisplay.innerText='Message'
    }else if(receivedData==="newworld"){
        const songs = JSON.parse(JSON.stringify(albumList5));
        words = songs.newworld
        titleDisplay.innerText='신세계\n(SPIN OFF Ver.)'
    }else if(receivedData==="beautiful"){
        const songs = JSON.parse(JSON.stringify(albumList6));
        words = songs.beautiful
        titleDisplay.innerText='Beautiful Beautiful'
    }else if(receivedData==="mynameis"){
        const songs = JSON.parse(JSON.stringify(albumList6));
        words = songs.mynameis
        titleDisplay.innerText='My Name Is'
    }else if(receivedData==="thermometer"){
        const songs = JSON.parse(JSON.stringify(albumList6));
        words = songs.thermometer
        titleDisplay.innerText='온도차 (Thermometer)\n(ON Team Ver.)'
    }else if(receivedData==="secrettriangle"){
        const songs = JSON.parse(JSON.stringify(albumList6));
        words = songs.secrettriangle
        titleDisplay.innerText='비밀 (Secret Triangle)\n(OFF Team Ver.)'
    }else if(receivedData==="therealist"){
        const songs = JSON.parse(JSON.stringify(albumList6));
        words = songs.therealist
        titleDisplay.innerText='The Realist'
    }else if(receivedData==="onyou"){
        const songs = JSON.parse(JSON.stringify(albumList6));
        words = songs.onyou
        titleDisplay.innerText='On-You (Interlude)'
    }else if(receivedData==="tripadvisor"){
        const songs = JSON.parse(JSON.stringify(albumList6));
        words = songs.tripadvisor
        titleDisplay.innerText='누워서 세계 속으로\n(Trip Advisor)'
    }else if(receivedData==="feedback"){
        const songs = JSON.parse(JSON.stringify(albumList6));
        words = songs.feedback
        titleDisplay.innerText='Feedback'
    }else if(receivedData==="ifilu"){
        const songs = JSON.parse(JSON.stringify(albumList6));
        words = songs.ifilu
        titleDisplay.innerText='첫 사랑의 법칙\n(Happily never after)'
    }else if(receivedData==="beautifuleng"){
        const songs = JSON.parse(JSON.stringify(albumList6));
        words = songs.beautifuleng
        titleDisplay.innerText='Beautiful Beautiful\n(English Ver.)'
    }else if(receivedData==="lightson2021"){
        const songs = JSON.parse(JSON.stringify(albumList6));
        words = songs.lightson2021
        titleDisplay.innerText='Lights On (2021 Ver.)\n(CD Only)'
    }else if(receivedData==="uglydance"){
        const songs = JSON.parse(JSON.stringify(albumList7));
        words = songs.uglydance
        titleDisplay.innerText='춤춰 (Ugly Dance)'
    }else if(receivedData==="mygenesis"){
        const songs = JSON.parse(JSON.stringify(albumList7));
        words = songs.mygenesis
        titleDisplay.innerText='My Genesis (Übermensch)'
    }else if(receivedData==="thedreamer"){
        const songs = JSON.parse(JSON.stringify(albumList7));
        words = songs.thedreamer
        titleDisplay.innerText='The Dreamer'
    }else if(receivedData==="popping"){
        const songs = JSON.parse(JSON.stringify(albumList8));
        words = songs.popping
        titleDisplay.innerText='여름 쏙 (Popping)'
    }else if(receivedData==="summerpoem"){
        const songs = JSON.parse(JSON.stringify(albumList8));
        words = songs.summerpoem
        titleDisplay.innerText='여름 시 (Summer Poem)'
    }else if(receivedData==="summershape"){
        const songs = JSON.parse(JSON.stringify(albumList8));
        words = songs.summershape
        titleDisplay.innerText='여름의 모양 (Summer Shape)'
    }else if(receivedData==="dryice"){
        const songs = JSON.parse(JSON.stringify(albumList8));
        words = songs.dryice
        titleDisplay.innerText='여름의 온도 (Dry Ice)'
    }else if(receivedData==="summerend"){
        const songs = JSON.parse(JSON.stringify(albumList8));
        words = songs.summerend
        titleDisplay.innerText='여름의 끝 (Summer End)'
    }else if(receivedData==="popping"){
        const songs = JSON.parse(JSON.stringify(albumList8));
        words = songs.popping
        titleDisplay.innerText='여름 쏙 (Popping)'
    }else if(receivedData==="summerpoem"){
        const songs = JSON.parse(JSON.stringify(albumList8));
        words = songs.summerpoem
        titleDisplay.innerText='여름 시 (Summer Poem)'
    }else if(receivedData==="summershape"){
        const songs = JSON.parse(JSON.stringify(albumList8));
        words = songs.summershape
        titleDisplay.innerText='여름의 모양 (Summer Shape)'
    }else if(receivedData==="dryice"){
        const songs = JSON.parse(JSON.stringify(albumList8));
        words = songs.dryice
        titleDisplay.innerText='여름의 온도 (Dry Ice)'
    }else if(receivedData==="summerend"){
        const songs = JSON.parse(JSON.stringify(albumList8));
        words = songs.summerend
        titleDisplay.innerText='여름의 끝 (Summer End)'
    }else if(receivedData==="goosebumps"){
        const songs = JSON.parse(JSON.stringify(albumList9));
        words = songs.goosebumps
        titleDisplay.innerText='Goosebumps'
    }else if(receivedData==="whistle"){
        const songs = JSON.parse(JSON.stringify(albumList9));
        words = songs.whistle
        titleDisplay.innerText='Whistle'
    }else if(receivedData==="fatandsugar"){
        const songs = JSON.parse(JSON.stringify(albumList9));
        words = songs.fatandsugar
        titleDisplay.innerText='Fat and Sugar'
    }else if(receivedData==="alarm"){
        const songs = JSON.parse(JSON.stringify(albumList9));
        words = songs.alarm
        titleDisplay.innerText='Alarm'
    }else if(receivedData==="showmustgoon"){
        const songs = JSON.parse(JSON.stringify(albumList9));
        words = songs.showmustgoon
        titleDisplay.innerText='Show Must Go On'
    }
    
    
    
    
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
        if(typedChar == null){ // 삭제
            if(charLength>-1){
                tajaNum--;
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

        }else{
            isZero=false;
            // startCount = true;
            tajaNum++;
            if(charIndex!=charLength){
                if(characters[charIndex].innerText.toUpperCase() === typedChar.toUpperCase()){
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
        characters.forEach(span => span.classList.remove("active")); //지나간 부분 active를 다 지우고
        characters[charIndex].classList.add("active")
    }else if (window.event.key === 'Enter'){ // Enter 클릭
        isZero=true;
        nowIndex++;
        
        characters[charIndex].classList.remove("correct", "incorrect","active");
        if(characters[charIndex].innerText.toUpperCase() === typedChar.toUpperCase()){
            characters[charIndex].classList.add("correct");
            allWords++;
        }else{
            mistakes++;
            allWords++;
            characters[charIndex].classList.add("incorrect");
        }
        if(nowIndex>=words.length){ // 게임 종료

            openPopup()
            nowIndex=0;
            isPlaying=false;
            // time = GAME_TIME;
            buttonChange('게임시작');/////////
            return;
        }
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
        
    }else{ // 입력 문자열을 넘어갔을 때
        nowInput.value = nowInput.value.substr(0, characters.length);
        if(typedChar == null){ //삭제
            if(charIndex>-1){
                    tajaNum--;
                }
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
        }
    }
    allWords === 0 ? score=0:score=(allWords-mistakes)/allWords*100; // 정확도
    scoreDisplay.innerText = Math.floor((tajaNum/time)*30); // 타자수
    typeCorrect.innerText = score.toFixed(1);
    console.log(tajaNum,time);
}

// const target = document.querySelectorAll('.btn_open');
// const btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
let targetID;


function openPopup(){
    // timeDisplayM.innerText = Math.floor(time/60);
    // timeDisplayS.innerText = time%60;
    // scoreDisplay.
    // targetID = this.getAttribute('href');
    // popMessage.innerText="연습시간: "+timeDisplayM.value+'분'
    r_time_m.innerText=Math.floor(time / 60);
    r_time_s.innerText=time % 60;
    r_score.innerText=Math.floor((tajaNum/time)*30);
    r_accuracy.innerText=score.toFixed(1);
    popup.classList.remove("hide");
    // document.querySelector("#pop_info").style.display = 'block';
}
// function closePopup(){
//     let thisUrl = document.URL;
//     let snsTitle = "2021 웹진 [봄]";
//     document.querySelector("#pop_info").style.display = 'none';
//     const url = "http://twitter.com/share?url="+encodeURIComponent(thisUrl)+"&text="+encodeURIComponent(snsTitle);
//     window.open(url, "tweetPop", "width=486, height=286,scrollbars=yes");
//     // window.location.href = `home.html`;
// }


// 팝업 열기
// for(let i = 0; i < target.length; i++){
//     target[i].addEventListener('click', function(){
//         targetID = this.getAttribute('href');
//         popMessage.innerText="연습시간: "+timeDisplayM.innerText+'분'+timeDisplayS.innerText+'초\n'+"타자: "+scoreDisplay.innerText+"타\n"+"정확도: "+typeCorrect.innerText+"%"
//         document.querySelector(targetID).style.display = 'block';
//     });
// }

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
    scoreDisplay.innerText = Math.floor((tajaNum/time)*30);
}

function buttonChange(text) {
    button.innerText = text;
    text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading');
}

button.addEventListener('mouseover', function() {
    i2.classList.remove("ready");
    i3.classList.remove("ready");
    i4.classList.remove("ready");
    // button.classList.remove("ready");
    setTimeout(() => {
        i2.classList.add("ready");
        i3.classList.add("ready");
        i4.classList.add("ready");
        // button.classList.add("ready");
    }, 10);
    
});

button.addEventListener('mouseout', function() {
    i2.classList.remove("ready");
    i3.classList.remove("ready");
    i4.classList.remove("ready");
    
});

function again() {
    window.location.href = `index.html?${receivedData}?${receivedData2}`;
    // window.location.href = `indexcopy.html?${index1}?${index2}`;
}

function home() {
    window.location.href = `home.html?${receivedData2}?${receivedData3}`;
    // window.location.href = `indexcopy.html?${index1}?${index2}`;
}