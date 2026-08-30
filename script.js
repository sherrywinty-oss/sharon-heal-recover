document.addEventListener("DOMContentLoaded", function () {
  const goalJMD = 1200000;
  const raisedJMD = 20000;

  const progressBar = document.querySelector(".progress-fill");
  const progressText = document.querySelector(".progress-labels");

  if (progressBar) {
    const percentage = Math.min((raisedJMD / goalJMD) * 100, 100);
    progressBar.style.width = percentage + "%";
    progressBar.setAttribute("role", "progressbar");
    progressBar.setAttribute("aria-valuemin", "0");
    progressBar.setAttribute("aria-valuemax", goalJMD.toString());
    progressBar.setAttribute("aria-valuenow", raisedJMD.toString());
  }

 if (progressText) {
    const percentage = ((raisedJMD / goalJMD) * 100).toFixed(2);

    progressText.innerHTML =
        "<span>jmd $20,000 raised<br>Approx. usd $125.50</span>" +
        "<span>" + percentage + "% funded</span>";
 }

  const footer = document.querySelector("footer");

  if (footer) {
    const copyright = document.createElement("p");
    copyright.className = "copyright";
    copyright.textContent =
      "© " + new Date().getFullYear() +
      " Help Sharon Heal & Recover";

    footer.appendChild(copyright);
  }
});
function copyForInstagram() {

navigator.clipboard.writeText("https://tinyurl.com/HelpSharonRecover");

alert("Website link copied!\n\nPaste it into your Instagram Bio, Story or Post.");

}

function copyForTikTok() {

navigator.clipboard.writeText("https://tinyurl.com/HelpSharonRecover");

alert("Website link copied!\n\nPaste it into your TikTok Bio or Video Description.");

}
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

