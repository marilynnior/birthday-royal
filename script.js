/* ------------------ SCREEN ELEMENTS ------------------ */
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const screen3 = document.getElementById('screen3');

const cake = document.getElementById('cake');
const birthdayAudio = document.getElementById('birthdayAudio');

const gifts = document.querySelectorAll('.gift');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

/* ------------------ INTRO TRANSITION ------------------ */
// Move from screen1 to screen2 automatically after 2.5 seconds OR on click/tap
function goToScreen2() {
  screen1.classList.remove('active');
  screen2.classList.add('active');
}

// Auto transition after 2.5s
setTimeout(goToScreen2, 2500);

// Or on click/tap
screen1.addEventListener('click', goToScreen2);

/* ------------------ CAKE INTERACTION ------------------ */
cake.addEventListener('click', () => {
  // Play audio
  birthdayAudio.play();

  // Animate cake
  cake.style.transform = "scale(1.3)";
  cake.style.filter = "drop-shadow(0 0 25px #ffd1a8)";

  // Transition to screen3 after short delay
  setTimeout(() => {
    screen2.classList.remove('active');
    screen3.classList.add('active');
    startHearts(); // start floating hearts
  }, 700);
});

/* ------------------ GIFT MODALS ------------------ */
gifts.forEach(gift => {
  gift.addEventListener('click', () => {
    const type = gift.getAttribute('data-type');
    showModal(type);
  });
});

function showModal(type) {
  let content = '';

  // ------------------ CUSTOMIZE CONTENT HERE ------------------
  if (type === 'envelope') {
    content = `
    <h2>💌 Happy Birthday, my Orchard 💌</h2>
    <p>
      Remember who calls you that back in secondary school?  
      Ahhh, how time flies — look at you now.
    </p>
    <p>
      I pray this new chapter brings speedy answers to your prayers  
      and comforts you when you feel like you’re not doing enough.
    </p>
    <p>
      Honestly, I don’t even remember how we started talking,  
      but somehow we became so close.
    </p>
    <p>
      I know you have other girlfriends — which is fine because men are polygamous by nature —  
      but words can’t describe how proud I am to be your friend…  
      and your wife at heart 🥰💕.
    </p>
    <p>
      Thank you for all the times in school you helped me with your silver and love.  
      It truly meant so much.
    </p>
    <p>
      I love youuu and miss you ❤️  
      I can’t wait to see you in the UK and make even more unforgettable memories together.
    </p>
  `;
  }
  if (type === 'heart') {
    // Heart gift → banquet of roses
    content = `<div class="rose-banquet">
                 🌹🌹🌹🌹🌹<br>
                 🌹🌹🌹🌹🌹<br>
                 🌹🌹🌹🌹🌹
               </div>
               <p class="rose-message">Special roses for the birthday boy</p>`;
  }
  if (type === 'ribbon') {
    // <p>📸 Add your images here or swap with real images.</p>
    content = `<h2>Photo Gallery</h2>
               
                <div class="photo-gallery">
               <img width="200" height="auto" src="./photos/photo3.jpg" alt="Photo 3" class="gallery-photo">
               <img width="200" height="auto" src="./photos/photo4.jpg" alt="Photo 4" class="gallery-photo">
              <img width="200" height="auto" src="./photos/photo5.jpg" alt="Photo 5" class="gallery-photo">
              <img width="200" height="auto" src="./photos/photo6.jpg" alt="Photo 6" class="gallery-photo">
              <img width="200" height="auto" src="./photos/photo7.jpg" alt="Photo 7" class="gallery-photo">
              
               </div>
               
               `;

  }

  modalBody.innerHTML = content;
  modal.style.display = 'flex';
}

/* ------------------ CLOSE MODAL ------------------ */
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

/* ------------------ FLOATING HEARTS ------------------ */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💖';
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 500);
}
