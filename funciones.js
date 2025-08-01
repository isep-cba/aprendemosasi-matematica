var videos = document.querySelectorAll('video');

function videoPause() {
  for(video of videos) { 
  video.pause();
  }
}


/* Set the width of the side navigation to 350px */
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
}



  function openMod1() {
    document.getElementById("mod1").style.height = "100%";
    document.getElementById("body").style.overflowY = "hidden";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeMod1() {
    document.getElementById("mod1").style.height = "0%";
    document.getElementById("body").style.overflowY = "scroll";
  //document.getElementsByClassName("video-modal") = pause();    
}

  function openMod2() {
    document.getElementById("mod2").style.height = "100%";
    document.getElementById("body").style.overflowY = "hidden";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeMod2() {
    document.getElementById("mod2").style.height = "0%";
    document.getElementById("body").style.overflowY = "scroll";
  }

  function openMod3() {
    document.getElementById("mod3").style.height = "100%";
    document.getElementById("body").style.overflowY = "hidden";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeMod3() {
    document.getElementById("mod3").style.height = "0%";
    document.getElementById("body").style.overflowY = "scroll";
  }


  function openModV1() {
    document.getElementById("mod-v1").style.height = "100%";
    document.getElementById("body").style.overflowY = "hidden";
  }
  function closeModV1() {
    document.getElementById("mod-v1").style.height = "0%";
    document.getElementById("body").style.overflowY = "scroll";
  }


  function openModV2() {
    document.getElementById("mod-v2").style.height = "100%";
    document.getElementById("body").style.overflowY = "hidden";
  }
    function closeModV2() {
    document.getElementById("mod-v2").style.height = "0%";
    document.getElementById("body").style.overflowY = "scroll";
  }


  function openModV3() {
    document.getElementById("mod-v3").style.height = "100%";
    document.getElementById("body").style.overflowY = "hidden";
  }
    function closeModV3() {
    document.getElementById("mod-v3").style.height = "0%";
    document.getElementById("body").style.overflowY = "scroll";
  }

  function openModV4() {
    document.getElementById("mod-v4").style.height = "100%";
    document.getElementById("body").style.overflowY = "hidden";
  }
    function closeModV4() {
    document.getElementById("mod-v4").style.height = "0%";
    document.getElementById("body").style.overflowY = "scroll";
  }


  function openModV5() {
    document.getElementById("mod-v5").style.height = "100%";
    document.getElementById("body").style.overflowY = "hidden";
  }
    function closeModV5() {
    document.getElementById("mod-v5").style.height = "0%";
    document.getElementById("body").style.overflowY = "scroll";
  }

  function openModV6() {
    document.getElementById("mod-v6").style.height = "100%";
    document.getElementById("body").style.overflowY = "hidden";
  }
    function closeModV6() {
    document.getElementById("mod-v6").style.height = "0%";
    document.getElementById("body").style.overflowY = "scroll";
  }


  function openAcercade() {
    document.getElementById("acercade").style.height = "100%";
    document.getElementById("body").style.overflowY = "hidden";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeAcercade() {
    document.getElementById("acercade").style.height = "0%";
    document.getElementById("body").style.overflowY = "scroll";
  }



  /* BOTON FULLSCREEN */

  /* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
