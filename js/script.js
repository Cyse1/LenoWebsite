document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu

  const toggle = document.querySelector('.mobile-nav-toggle');
  const menu = document.querySelector('.mobile-nav-list');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Video Modal

  const modal = document.querySelector('#videoModal');
  const videoButton = document.querySelector('.preview__video-button');
  const closeButton = document.querySelector('.modal__close-button');
  const videoPlayer = document.querySelector('#videoPlayer');

  videoButton.addEventListener('click', () => {
    modal.style.display = 'block';

    // replace src attribute with video URL// add 'embed' after equal to ID
    videoPlayer.src = 'https://www.youtube.com/embed/AIHlqEh0Bsc';

    // Close Modal on close button click
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      videoPlayer.src = '';
    });
    // Close modal on outter click

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        videoPlayer.src = '';
      }
    });
  });
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');

  if (window.scrollY > 30) {
    nav.classList.add('navbar--scroll');
  } else {
    nav.classList.remove('navbar--scroll');
  }
});
