let page = 1;
let songs = [];
// let textSize = 0;
const albumBtn = document.querySelector(".album_btn");
const albumImgDisplay = document.querySelector(".album-img img");
const section = document.querySelector(".section");
const preScreen = document.getElementById("left");
const nextScreen = document.getElementById("right");
// const item = document.querySelector(".item");
const albumImg = document.querySelector(".album-img .album");
const outer = document.querySelector(".contents");
const inner = document.querySelector(".inner");
const title = document.querySelector(".name span");
// let name = '';
itemDisplay();
// setInterval(typing(name), 2000);
function setChildValue(index1,index2) {
    window.location.href = `index.html?${index1}?${index2}`;
    // window.location.href = `indexcopy.html?${index1}?${index2}`;
}

preScreen.addEventListener("click", function(e){
    if (page === 1){
        page = 9;
    } else {
        page--;
    }
    
    console.log(page)
    // albumBtn.classList.remove("appear");
    // albumImgDisplay.classList.remove("img_appear");
    outer.classList.remove("change");
    // inner.classList.remove("change");
    // section.classList.remove("change_bg");
    setTimeout(() => {
        // albumBtn.classList.add("appear");
        // albumImgDisplay.classList.add("img_appear");
        outer.classList.add("change");
        // textSize=0;
        // title.innerHTML='';
        // inner.classList.add("change");
        // section.classList.add("change_bg");
    }, 10);
    itemDisplay();
    

})

nextScreen.addEventListener("click", function(e){
    if (page === 9){
        page = 1;
    } else {
        page++;
    }
    // page--;
    console.log(page)
    // albumBtn.classList.remove("appear");
    // albumImgDisplay.classList.remove("img_appear");
    outer.classList.remove("change");
    // inner.classList.remove("change");

    setTimeout(() => {
        // albumBtn.classList.add("appear");
        // albumImgDisplay.classList.add("img_appear");
        outer.classList.add("change");
        // textSize=0;
        // title.innerHTML='';
        // inner.classList.add("change");
    }, 10);
    itemDisplay();
    

})
// function typing(name){
//     if (textSize < name.length) {
//     let txt = name.charAt(textSize);
//     title.innerHTML += txt;
//     textSize++;
//     }
// }
function itemDisplay() {
    let songList = document.querySelector(".btn-box");
    // let name = '';
    // let title = document.querySelector(".items .name span");
    songList.innerHTML="";
    let rink = "https://musicmeta-phinf.pstatic.net/album/002/117/2117435.jpg?type=r360Fll&v=20220524212012";
    // item.classList.remove("onoff","complete","wemustlove","golive","spinoff","myname","cityofonf","popping","goosebumps");
    if (page===1) {
        title.innerHTML="ON/OFF";
        // name = "ON/OFF";
        songs = [["ON/OFF",'onoff'], ["Difficult",'difficult'], ["If We Dream",'ifwedream'], 
        ["Original",'original'], ["Cat's Waltz",'catswaltz']];
        // item.classList.add("onoff");
        rink = "https://musicmeta-phinf.pstatic.net/album/002/117/2117435.jpg?type=r360Fll&v=20220524212012";
    } else if (page===2) {
        title.innerHTML="YOU COMPLETE ME";
        songs = [["Complete (널 만난 순간)",'complete'], ["Fly Me To The Moon",'flymetothemoon'], ["아침 (Good Morning)",'goodmorning'], 
        ["Fifty Fifty",'fiftyfifty'], ["나 말고 다 (Incomplete)",'incomplete'], ["스물네 번 (86400)",'twentyfour']];
        // item.classList.add("complete");
        rink="https://musicmeta-phinf.pstatic.net/album/002/463/2463403.jpg?type=r360Fll&v=20220514062515";
    } else if (page===3) {
        title.innerHTML="WE MUST LOVE";
        songs = [["사랑하게 될 거야 (We Must Love)",'wemustlove'], ["Ice & Fire",'icefire'], ["별일 아냐 (Yayaya)",'yayaya'], 
        ["첫 사랑의 법칙 (Happily never after)",'happilyneverafter'], ["I Do",'ido']];
        // item.classList.add("wemustlove");
        rink="https://musicmeta-phinf.pstatic.net/album/002/835/2835389.jpg?type=r360Fll&v=20220518133519";
    } else if (page===4) {
        title.innerHTML="GO LIVE";
        songs = [["Why",'why'], ["소행성 (Asteroid)",'asteroid'], ["억X억 (All Day)",'allday'], 
        ["Moscow Moscow",'moscow'], ["Twinkle Twinkle",'twinckle']];
        // item.classList.add("golive");
        rink="https://musicmeta-phinf.pstatic.net/album/003/207/3207334.jpg?type=r360Fll&v=20220518190516";
    } else if (page===5) {
        title.innerHTML="SPIN OFF";
        songs = [["스쿰빗스위밍 (Sukhumvit Swimming)",'sukhumvit'], ["첫 키스의 법칙 (Belle Epoque)",'belleepoque'], ["제페토 (Geppeto)",'geppeto'], 
        ["오늘 뭐 할래 (Good Good)",'good'], ["선인장 (Cactus)",'cactus'], ["Message",'message'], ["신세계 (SPIN OFF Ver.)", 'newworld']];
        // item.classList.add("spinoff");
        rink="https://musicmeta-phinf.pstatic.net/album/004/775/4775212.jpg?type=r360Fll&v=20220518133519";
    } else if (page===6) {
        title.innerHTML="ONF: MY NAME";
        songs = [["Beautiful Beautiful",'beautiful'], ["My Name Is",'mynameis'], ["온도차 (Thermometer) (ON Team Ver.)",'thermometer'], 
        ["비밀 (Secret Triangle) (OFF Team Ver.)",'secrettriangle'], ["The Realist",'therealist'], ["On-You (Interlude)",'onyou'],
        ["누워서 세계 속으로 (Trip Advisor)",'tripadvisor'], ["Feedback",'feedback'], ["첫 사랑의 법칙 (Happily never after)",'ifilu'],
        ["Beautiful Beautiful (English Ver.)",'beautifuleng'], ["Lights On (2021 Ver.) (CD Only)",'lightson2021']];
        // item.classList.add("myname");
        rink="https://musicmeta-phinf.pstatic.net/album/005/246/5246781.jpg?type=r360Fll&v=20220523110509";
    } else if (page===7) {
        title.innerHTML="CITY OF ONF";
        songs = [["춤춰 (Ugly Dance)",'uglydance'], ["My Genesis (Übermensch)",'mygenesis'], ["The Dreamer",'thedreamer'],
        ["Beautiful Beautiful",'beautiful'], ["My Name Is",'mynameis'], ["온도차 (Thermometer) (ON Team Ver.)",'thermometer'], 
        ["비밀 (Secret Triangle) (OFF Team Ver.)",'secrettriangle'], ["The Realist",'therealist'], ["On-You (Interlude)",'onyou'],
        ["누워서 세계 속으로 (Trip Advisor)",'tripadvisor'], ["Feedback",'feedback'], ["첫 사랑의 법칙 (Happily never after)",'ifilu'],
        ["Beautiful Beautiful (English Ver.)",'beautifuleng'], ["Lights On (2021 Ver.) (CD Only)",'lightson2021']];
        // item.classList.add("cityofonf");
        rink="https://musicmeta-phinf.pstatic.net/album/005/739/5739003.jpg?type=r360Fll&v=20220517100952";
    } else if (page===8) {
        title.innerHTML="POPPING";
        songs = [["여름 쏙 (Popping)",'popping'], ["여름 시 (Summer Poem)",'summerpoem'], ["여름의 모양 (Summer Shape)",'summershape'], 
        ["여름의 온도 (Dry Ice)",'dryice'], ["여름의 끝 (Summer End)",'summerend']];
        // item.classList.add("popping");
        rink="https://musicmeta-phinf.pstatic.net/album/006/274/6274369.jpg?type=r360Fll&v=20220106082516";
    } else if (page===9) {
        title.innerHTML="Goosebumps";
        songs = [["Goosebumps",'goosebumps'], ["Whistle",'whistle'], ["Fat and Sugar",'fatandsugar'], 
        ["Alarm",'alarm'], ["Show Must Go On",'showmustgoon']];
        // item.classList.add("goosebumps");
        rink="https://musicmeta-phinf.pstatic.net/album/006/714/6714873.jpg?type=r360Fll&v=20220410180351";
    }
    songs.forEach(span=>{
        let spanTag = `<div class='list-btn'><div class='list-tag'>:/> </div><div class='btn-song' onclick="setChildValue('${span[1]}',${page})">${span[0]}</div></div>`;
        songList.innerHTML+=spanTag;
    })
    albumImg.src=rink;
    // function typing(){
    //     if (textSize < name.length) {
    //     let txt = name.charAt(textSize);
    //     title.innerHTML += txt;
    //     textSize++;
    //     }
    // }
    
}