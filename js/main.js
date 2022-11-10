
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

const titleDisplay = document.querySelector('.top-bar');
const scoreDisplay = document.querySelector('.score');
const timeDisplayM = document.querySelector('.m');
const timeDisplayS = document.querySelector('.s');
const typeCorrect = document.querySelector('.type-correct');
const button = document.querySelector('.button');

const receivedData = location.href.split('?')[1];
const receivedData2 = location.href.split('?')[2];
// const albumImage = document.querySelector('.bg-image');

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
    }else if (receive==='4'){
        rink="url('https://musicmeta-phinf.pstatic.net/album/003/207/3207334.jpg?type=r360Fll&v=20220518190516')"
        header.classList.add("golive");
        contents.classList.add("golive-text");
    }else if (receive==='5'){
        rink="url('https://musicmeta-phinf.pstatic.net/album/004/775/4775212.jpg?type=r360Fll&v=20220518133519')"
        header.classList.add("spinoff");
        contents.classList.add("spinoff-text");
    }else if (receive==='6'){
        rink="url('https://musicmeta-phinf.pstatic.net/album/005/246/5246781.jpg?type=r360Fll&v=20220523110509')"
        header.classList.add("myname");
        contents.classList.add("myname-text");
    }else if (receive==='7'){
        rink="url('https://musicmeta-phinf.pstatic.net/album/005/739/5739003.jpg?type=r360Fll&v=20220517100952')"
        header.classList.add("cityofonf");
        contents.classList.add("cityofonf-text");
    }else if (receive==='8'){
        rink="url('https://musicmeta-phinf.pstatic.net/album/006/274/6274369.jpg?type=r360Fll&v=20220106082516')"
        header.classList.add("popping");
        contents.classList.add("popping-text");
    }else if (receive==='9'){
        rink="url('https://musicmeta-phinf.pstatic.net/album/006/714/6714873.jpg?type=r360Fll&v=20220410180351')"
        header.classList.add("goosebumps");
        contents.classList.add("goosebumps-text");
    }
    // const image = new Image();
    // albumImage.style.backgroundImage=rink;// = imgNumber; // 가져올 image경로 지정
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
        characters.forEach(span => span.classList.remove("active")); //지나간 부분 active를 다 지우고
        characters[charIndex].classList.add("active")
    }else if (window.event.key === 'Enter'){ // Enter 클릭
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
    scoreDisplay.innerText = Math.floor(tajaNum/time*60); // 타자수
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