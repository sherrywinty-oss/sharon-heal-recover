document.addEventListener("DOMContentLoaded", function () {
  const goalJMD = 1200000;
  const raisedJMD = 0;

  const progressBar = document.querySelector(".bar");
  const progressText = document.querySelector(".progress + p");

  if (progressBar) {
    const percentage = Math.min((raisedJMD / goalJMD) * 100, 100);
    progressBar.style.width = percentage + "%";
    progressBar.setAttribute("role", "progressbar");
    progressBar.setAttribute("aria-valuemin", "0");
    progressBar.setAttribute("aria-valuemax", goalJMD.toString());
    progressBar.setAttribute("aria-valuenow", raisedJMD.toString());
  }

  if (progressText) {
    progressText.textContent =
      "Raised: J$" + raisedJMD.toLocaleString() +
      " of J$" + goalJMD.toLocaleString();
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
