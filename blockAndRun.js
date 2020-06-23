if (window.location.host == "www.youtube.com") {
  var tag = document.getElementById("consent-bump");
  if (tag) {
    document.getElementById("consent-bump").remove();
    setTimeout(function () {
      var video = document.getElementsByTagName("video")[0];
      if (video.paused) {
        video.play();
      }
    }, 1000)
  }
}