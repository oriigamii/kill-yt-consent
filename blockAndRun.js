if (window.location.host == "www.youtube.com") {
  let bump = document.querySelector('[id*="consent-bump"]');
  if (bump) {
    document.getElementById(bump.id).remove();
    setTimeout(function () {
      let video = document.getElementsByTagName("video")[0];
      if (video && video.paused) {
        video.play();
      }
    }, 1000)
  }
}