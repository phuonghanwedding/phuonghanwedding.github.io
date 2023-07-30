
var rotationInterval;

function toggleAudio() {
    var audio = document.getElementById('backgroundMusic');
    if (audio.paused) {
        audio.play();
        startRotation();
        rotationInterval = setInterval(startRotation, 500); // Rotate every 0.5 second
    } else {
        stopAudioRotation();
    }

}
var playWhenScroll = true;
function handleToggleAudio() {
    playWhenScroll = false;
    toggleAudio();
}

// Event listener for scroll
window.addEventListener('scroll', function () {
    var audio = document.getElementById('backgroundMusic');
    if (playWhenScroll && audio.paused && window.scrollY > 1) {
        toggleAudio();
    }
});



function startRotation() {
    var rotatingImage = document.getElementById('playPauseButton');
    rotatingImage.classList.add('rotating');
}

function stopAudioRotation() {

    var audio = document.getElementById('backgroundMusic');
    if (audio.paused) {
        return;
    }
    audio.pause();
    var rotatingImage = document.getElementById('playPauseButton');
    rotatingImage.classList.remove('rotating');
    clearInterval(rotationInterval);
    rotationInterval = null;
}

// document.addEventListener("visibilitychange", function () {
//     if (document.hidden) {

//         stopAudioRotation();
//     }
//   });
var stopAudioLink = document.getElementById('next-to-story');

stopAudioLink.addEventListener('click', function (event) {
    stopAudioRotation();
});

var stopAudioLinkEnd = document.getElementById('next-to-story-end');

stopAudioLinkEnd.addEventListener('click', function (event) {
    stopAudioRotation();
});
