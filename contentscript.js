const audioPath = "assets/audio/jobs_done.mp3";
const doneOptionId = "1";
const doneButtonId = "issue-workflow-transition-submit";
const resolutionId = "resolution";

let jobsDoneAudio = new Audio();
jobsDoneAudio.src = chrome.runtime.getURL(audioPath);

document.addEventListener("click", function (e) {
    if (e.target && e.target.id == doneButtonId) {
        let resolution = document.getElementById(resolutionId);
        if (resolution && resolution.options[resolution.selectedIndex].value == doneOptionId) {
            jobsDoneAudio.play();
        }
    }
});
