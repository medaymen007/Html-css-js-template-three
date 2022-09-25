let divOfButtonOtherLinks = document.querySelector(".divOfButtonOtherLinks");
let btnOL = document.querySelector(".btnOL")

btnOL.addEventListener("click", () => {
        if (divOfButtonOtherLinks.style.opacity === '0') {
            divOfButtonOtherLinks.style.opacity = '1';
            divOfButtonOtherLinks.style.marginTop = "1px"
        } else {
            divOfButtonOtherLinks.style.opacity = '0'
            divOfButtonOtherLinks.style.marginTop = "20px";
        }
    })
    //animation of our skills
let perOne = document.querySelector(".perOne");
let perTwo = document.querySelector(".perTwo");
let perThree = document.querySelector(".perThree");
let perFour = document.querySelector(".perFour");

window.addEventListener('scroll', () => {
    let scrollValue = 6682.39990234375;
    if (window.scrollY >= scrollValue) {
        perOne.style.width = "80%"
        perTwo.style.width = "85%"
        perFour.style.width = "80%"
        perThree.style.width = "70%"
        perOne.style.transition = "1s";
        perTwo.style.transition = "1s"
        perThree.style.transition = "1s"
        perFour.style.transition = "1s"
    } else {
        perOne.style.width = "0%"
        perTwo.style.width = "0%"
        perFour.style.width = "0%"
        perThree.style.width = "0%"
    }
})

////////////////////////////////////////////////////////////Time
let joursEl = document.getElementById("j");
let heuresEl = document.getElementById("h");
let minutesEl = document.getElementById("m");
let secondesEl = document.getElementById("s");

// get UTC offset once
let now = new Date();
const dateOffsetInMinutes = now.getTimezoneOffset();

const unJourEnMs = 1000 * 60 * 60 * 24;
const uneHeureEnMs = 1000 * 60 * 60;
const uneMinuteEnMs = 1000 * 60;

// const newYear = Date.now() - (dateOffsetInMinutes * uneMinuteEnMs) + 2000;
const newYear = new Date("2024");

const getCountdown = () => {

    let nowDate = Date.now();

    let tempsRestantEnMs = newYear - nowDate + (dateOffsetInMinutes * uneMinuteEnMs);



    // jours
    let nbJours = Math.floor(tempsRestantEnMs / unJourEnMs);


    // heures
    let resteTempsSansJoursMs = tempsRestantEnMs - (nbJours * unJourEnMs);
    let nbHeures = Math.floor(resteTempsSansJoursMs / uneHeureEnMs);

    // minutes
    let resteTempsSansHeuresMs = resteTempsSansJoursMs - (nbHeures * uneHeureEnMs);
    let nbMinutes = Math.floor(resteTempsSansHeuresMs / uneMinuteEnMs);


    // secondes
    let resteTempsSansMinutesMs = resteTempsSansHeuresMs - (nbMinutes * uneMinuteEnMs);
    let nbSecondes = Math.floor(resteTempsSansMinutesMs / 1000);

    joursEl.textContent = nbJours;
    heuresEl.textContent = nbHeures;
    minutesEl.textContent = nbMinutes;
    secondesEl.textContent = nbSecondes;

    if (tempsRestantEnMs <= 0) {
        clearInterval(countDownInterval);
        joursEl.textContent = 0;
        heuresEl.textContent = 0;
        minutesEl.textContent = 0;
        secondesEl.textContent = 0;
    }
}

let countDownInterval = setInterval(getCountdown, 1000);

// init
getCountdown();

//////////////////////////////////// VIDEO ///////////////////////////////////////////

//videos
let videoOne = document.querySelector(".videoOne");
let videoTwo = document.querySelector(".videoTwo");
let videoThree = document.querySelector(".videoThree");
let videoFour = document.querySelector(".videoFour");
let videoFive = document.querySelector(".videoFive");
let videoSix = document.querySelector(".videoSix");
let videoSeven = document.querySelector(".videoSeven");
//elements Of Click
let clickVideoOne = document.querySelector(".clickVideoOne");
let clickVideoTwo = document.querySelector(".clickVideoTwo");
let clickVideoThree = document.querySelector(".clickVideoThree");
let clickVideoFour = document.querySelector(".clickVideoFour");
let clickVideoFive = document.querySelector(".clickVideoFive");
let clickVideoSix = document.querySelector(".clickVideoSix");
let clickVideoSeven = document.querySelector(".clickVideoSeven");
let zoneDisplayVideo = document.querySelector(".zoneDisplayVideo");
// caption video
let captionVideoOne = document.querySelector(".captionVideoOne");
let captionVideoTwo = document.querySelector(".captionVideoTwo");
let captionVideoThree = document.querySelector(".captionVideoThree");
let captionVideoFour = document.querySelector(".captionVideoFour");
let captionVideoFive = document.querySelector(".captionVideoFive");
let captionVideoSix = document.querySelector(".captionVideoSix");
let captionVideoSeven = document.querySelector(".captionVideoSeven");
// 
let imgOfDisplay = document.querySelector(".imgOfDisplay");

//hidden video
videoOne.style.display = "none";
videoTwo.style.display = "none";
videoThree.style.display = "none";
videoFour.style.display = "none";
videoFive.style.display = "none";
videoSix.style.display = "none";
videoSeven.style.display = "none";
//hidden caption

captionVideoOne.style.display = "none";
captionVideoTwo.style.display = "none";
captionVideoThree.style.display = "none";
captionVideoFour.style.display = "none";
captionVideoFive.style.display = "none";
captionVideoSix.style.display = "none";
captionVideoSeven.style.display = "none";




clickVideoOne.addEventListener("click", () => {
    imgOfDisplay.style.display = "none"
    let divVideo = document.createElement("div");
    divVideo.className = "hello"
    divVideo.appendChild(videoOne);
    zoneDisplayVideo.appendChild(divVideo);
    videoOne.style.display = "block";
    videoTwo.style.display = "none";
    videoThree.style.display = "none";
    videoFour.style.display = "none";
    videoFive.style.display = "none";
    videoSix.style.display = "none";
    videoSeven.style.display = "none";
    //play video
    videoOne.play()
        // stop video
    videoTwo.pause()
    videoThree.pause()
    videoFour.pause()
    videoFive.pause()
    videoSix.pause()
    videoSeven.pause()

    //caption zone
    zoneDisplayVideo.appendChild(captionVideoOne);

    captionVideoOne.style.display = "block";
    captionVideoTwo.style.display = "none";
    captionVideoThree.style.display = "none";
    captionVideoFour.style.display = "none";
    captionVideoFive.style.display = "none";
    captionVideoSix.style.display = "none";
    captionVideoSeven.style.display = "none";
})
clickVideoTwo.addEventListener("click", () => {
    imgOfDisplay.style.display = "none"
    let divVideo = document.createElement("div");
    divVideo.appendChild(videoTwo);
    zoneDisplayVideo.appendChild(divVideo);
    videoOne.style.display = "none";
    videoTwo.style.display = "block";
    videoThree.style.display = "none";
    videoFour.style.display = "none";
    videoFive.style.display = "none";
    videoSix.style.display = "none";
    videoSeven.style.display = "none";
    //play video
    videoTwo.play()
        // stop video
    videoOne.pause()
    videoThree.pause()
    videoFour.pause()
    videoFive.pause()
    videoSix.pause()
    videoSeven.pause()
        //caption zone

    zoneDisplayVideo.appendChild(captionVideoTwo);

    captionVideoOne.style.display = "none";
    captionVideoTwo.style.display = "block";
    captionVideoThree.style.display = "none";
    captionVideoFour.style.display = "none";
    captionVideoFive.style.display = "none";
    captionVideoSix.style.display = "none";
    captionVideoSeven.style.display = "none";
})
clickVideoThree.addEventListener("click", () => {
    imgOfDisplay.style.display = "none"
    let divVideo = document.createElement("div");
    divVideo.appendChild(videoThree);
    zoneDisplayVideo.appendChild(divVideo);
    videoOne.style.display = "none";
    videoTwo.style.display = "none";
    videoThree.style.display = "block";
    videoFour.style.display = "none";
    videoFive.style.display = "none";
    videoSix.style.display = "none";
    videoSeven.style.display = "none";
    //play video
    videoThree.play()
        // stop video
    videoTwo.pause()
    videoOne.pause()
    videoFour.pause()
    videoFive.pause()
    videoSix.pause()
    videoSeven.pause()
        //caption zone

    zoneDisplayVideo.appendChild(captionVideoThree);

    captionVideoOne.style.display = "none";
    captionVideoTwo.style.display = "none";
    captionVideoThree.style.display = "block";
    captionVideoFour.style.display = "none";
    captionVideoFive.style.display = "none";
    captionVideoSix.style.display = "none";
    captionVideoSeven.style.display = "none";

})
clickVideoFour.addEventListener("click", () => {
    imgOfDisplay.style.display = "none"
    let divVideo = document.createElement("div");
    divVideo.appendChild(videoFour);
    zoneDisplayVideo.appendChild(divVideo);
    videoFour.style.display = "block";
    videoOne.style.display = "none";
    videoTwo.style.display = "none";
    videoThree.style.display = "none";
    videoFive.style.display = "none";
    videoSix.style.display = "none";
    videoSeven.style.display = "none";
    //play video
    videoFour.play()
        // stop video
    videoTwo.pause()
    videoThree.pause()
    videoOne.pause()
    videoFive.pause()
    videoSix.pause()
    videoSeven.pause()
        //caption zone

    zoneDisplayVideo.appendChild(captionVideoFour);

    captionVideoOne.style.display = "none";
    captionVideoTwo.style.display = "none";
    captionVideoThree.style.display = "none";
    captionVideoFour.style.display = "block";
    captionVideoFive.style.display = "none";
    captionVideoSix.style.display = "none";
    captionVideoSeven.style.display = "none";

})
clickVideoFive.addEventListener("click", () => {
    imgOfDisplay.style.display = "none"
    let divVideo = document.createElement("div");
    divVideo.appendChild(videoFive);
    zoneDisplayVideo.appendChild(divVideo);
    videoOne.style.display = "none";
    videoTwo.style.display = "none";
    videoThree.style.display = "none";
    videoFour.style.display = "none";
    videoFive.style.display = "block";
    videoSix.style.display = "none";
    videoSeven.style.display = "none";
    //play video
    videoFive.play()
        // stop video
    videoTwo.pause()
    videoThree.pause()
    videoFour.pause()
    videoOne.pause()
    videoSix.pause()
    videoSeven.pause()
        //caption zone

    zoneDisplayVideo.appendChild(captionVideoFive);


    captionVideoOne.style.display = "none";
    captionVideoTwo.style.display = "none";
    captionVideoThree.style.display = "none";
    captionVideoFour.style.display = "none";
    captionVideoFive.style.display = "block";
    captionVideoSix.style.display = "none";
    captionVideoSeven.style.display = "none";

})
clickVideoSix.addEventListener("click", () => {
    imgOfDisplay.style.display = "none"
    let divVideo = document.createElement("div");
    divVideo.appendChild(videoSix);
    zoneDisplayVideo.appendChild(divVideo);
    videoOne.style.display = "none";
    videoTwo.style.display = "none";
    videoThree.style.display = "none";
    videoFour.style.display = "none";
    videoFive.style.display = "none";
    videoSix.style.display = "block";
    videoSeven.style.display = "none";
    //play video
    videoSix.play()
        // stop video
    videoTwo.pause()
    videoThree.pause()
    videoFour.pause()
    videoFive.pause()
    videoOne.pause()
    videoSeven.pause()
        //caption zone

    zoneDisplayVideo.appendChild(captionVideoSix);

    captionVideoOne.style.display = "none";
    captionVideoTwo.style.display = "none";
    captionVideoThree.style.display = "none";
    captionVideoFour.style.display = "none";
    captionVideoFive.style.display = "none";
    captionVideoSix.style.display = "block";
    captionVideoSeven.style.display = "none";

})
clickVideoSeven.addEventListener("click", () => {
        imgOfDisplay.style.display = "none"
        let divVideo = document.createElement("div");
        divVideo.appendChild(videoSeven);
        zoneDisplayVideo.appendChild(divVideo);
        videoOne.style.display = "none";
        videoTwo.style.display = "none";
        videoThree.style.display = "none";
        videoFour.style.display = "none";
        videoFive.style.display = "none";
        videoSix.style.display = "none";
        videoSeven.style.display = "block";
        //play video
        videoSeven.play()
            // stop video
        videoTwo.pause()
        videoThree.pause()
        videoFour.pause()
        videoFive.pause()
        videoSix.pause()
        videoOne.pause()
            //caption zone

        zoneDisplayVideo.appendChild(captionVideoSeven);


        captionVideoOne.style.display = "none";
        captionVideoTwo.style.display = "none";
        captionVideoThree.style.display = "none";
        captionVideoFour.style.display = "none";
        captionVideoFive.style.display = "none";
        captionVideoSix.style.display = "none";
        captionVideoSeven.style.display = "block";
    })
    ///////////////////////  counter  ////////////////////////////
let countr = document.querySelectorAll(".countr");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 11106.400390625) {


        countr.forEach((e) => {

            e.innerHTML = "0"
            let upcounter = () => {
                let target = +e.getAttribute("data-target")
                let c = +e.innerHTML
                let increment = target / 500
                if (c < target) {
                    e.innerHTML = `${Math.ceil(c+increment)}`;
                    setTimeout(upcounter, 50)
                }
            }
            upcounter()
        })
    }
})

///////////////////////////   button of up And Down   ////////////////////////////
let x = 11763.2001953125
let buttonOfUpAndDown = document.querySelector(".buttonOfUpAndDown");
window.addEventListener("scroll", () => {

    if (window.scrollY >= 192) {
        buttonOfUpAndDown.style.display = "flex";
        buttonOfUpAndDown.style.right = "15px"
        buttonOfUpAndDown.style.transition = "1s"
    } else {
        buttonOfUpAndDown.style.display = "none";
    }
})

buttonOfUpAndDown.addEventListener("click", () => {
    if (window.scrollY >= 9063.2001953125) {
        document.documentElement.scrollTop = 0;
    } else {
        document.documentElement.scrollTop = 12063.2001953125;
    }

})