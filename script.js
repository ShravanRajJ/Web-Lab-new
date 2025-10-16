// ===== Typing effect =====
const text = "Web Developer | Designer | Learner";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.querySelector(".hero p").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = () => {
  typeEffect();
};

// ===== Dark/Light Mode Toggle =====
const toggleBtn = document.getElementById('mode-toggle');
const body = document.body;

if(localStorage.getItem('mode') === 'light') {
  body.classList.add('light-mode');
  if(toggleBtn) toggleBtn.textContent = '🌞';
}

if(toggleBtn){
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if(body.classList.contains('light-mode')){
      toggleBtn.textContent = '🌞';
      localStorage.setItem('mode', 'light');
    } else {
      toggleBtn.textContent = '🌙';
      localStorage.setItem('mode', 'dark');
    }
  });
}
