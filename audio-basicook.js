const audio = document.querySelector("#audio1");

// Example: Add custom play/pause buttons
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

playButton.addEventListener("click", () => {
    audio.play();
});

pauseButton.addEventListener("click", () => {
    audio.pause();
});

const options = {
    root: null,
    threshold: 0,
    rootMargin: 0,
};

function multimediaFoco(entries){
    let entry = entries[0];
    if(entry.isIntersecting){
        //elemento visible
        audioscroll.play();
    }else{
        audioscroll.pause();
    }
}

let observer = new IntersectionObserver (multimediaFoco, {

});

let audioscroll = document.querySelector("#audioscroll");

observer.observe(audioscroll);
