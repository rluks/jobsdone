const audioPath = "assets/audio/jobs_done.mp3";
const resolutionId = "resolution";
const resolutionOptionId = "10801";
const doneButtonId = "issue-workflow-transition-submit";

let jobsDoneAudio = new Audio();
jobsDoneAudio.src = chrome.runtime.getURL(audioPath);

document.addEventListener("click", function (e) {
    if (e.target && e.target.id == doneButtonId) {
        let resolution = document.getElementById(resolutionId);
        if (resolution && resolution.options[resolution.selectedIndex].value == resolutionOptionId) {
            jobsDoneAudio.play();
        }
    }
});
