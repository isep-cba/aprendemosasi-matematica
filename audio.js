// Botones Play/Pause para audios


// Pruebas de audio automatico con scroll

const audioscroll = document.querySelectorAll(".audioscroll");


const options = {
    root: null,
    threshold: 0,
    rootMargin: "-50px",
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting){
            //elemento visible
            entry.target.play();
        }else{
            entry.target.pause();
        }
    });
}, options);



function multimediaFoco(entries){
    let entry = entries[0];
    if(entry.isIntersecting){
        //elemento visible
        audioscroll.play();
    }else{
        audioscroll.pause();
    }
}

audioscroll.forEach(audioscroll => { 
    observer.observe(audioscroll);
});

