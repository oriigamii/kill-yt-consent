function saveOptions() {
    var enableAutoplay = document.getElementById('autoplay').checked;
    chrome.storage.local.set({
        enableAutoplay: enableAutoplay
    }, function () {
        var status = document.getElementById('status');
        status.textContent = 'Options saved';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

function restoreOptions() {
    chrome.storage.local.get(['enableAutoplay'], function (items) {
        document.getElementById('autoplay').checked = items.enableAutoplay;
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
