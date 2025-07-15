
const params = new URLSearchParams(window.location.search);
const courseName = params.get('course');


if (courseName) {
  const titles = {
    html: "HTML Basics",
    css: "CSS Styling",
    js: "JavaScript Essentials",
  };
  document.getElementById("course-title").textContent = titles[courseName] || "Course";
}


const progressSlider = document.getElementById("progress");
const progressValue = document.getElementById("progress-value");

const key = `progress-${courseName}`;
if (progressSlider && progressValue) {
  const stored = localStorage.getItem(key);
  progressSlider.value = stored || 0;
  progressValue.textContent = `${progressSlider.value}%`;

  progressSlider.addEventListener("input", () => {
    progressValue.textContent = `${progressSlider.value}%`;
    localStorage.setItem(key, progressSlider.value);
  });
}
