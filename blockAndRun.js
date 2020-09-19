function killBump() {
  let popups = document.getElementsByTagName('ytd-popup-container');
  let bump = document.querySelector('[id*="consent-bump"]');
  if (popups.length > 0) {
    popups[0].remove();
  } else if (bump) {
    document.getElementById(bump.id).remove();
  }
}

function cleanPlay(video) {
  setTimeout(function () {
    if (video.paused) {
      video.play();
    }
  }, 980)
}

function toggleAutoPlay(autoplay) {
  let autoPlayBtn = document.getElementsByTagName('paper-toggle-button')[0];
  if (autoPlayBtn && autoplay !== undefined) {
    autoplay ? autoPlayBtn.setAttribute('active', true) : autoPlayBtn.removeAttribute('active');
  }
}

function blockNRun() {
  killBump();
  let video = document.getElementsByTagName("video")[0];
  if (video) {
    cleanPlay(video);
    chrome.storage.local.get(['enableAutoplay'], function (result) {
      toggleAutoPlay(result.enableAutoplay);
    });
  }
}

function main() {
  if (
    window.location.host.includes("google")
    || window.location.host.includes("youtube")) {
    blockNRun();
  }
}

main();