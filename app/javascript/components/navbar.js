const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-home');
  const button = document.querySelector('.button-home');
  if (navbar && button) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-wagon-blue');
        button.classList.add('btn-action-white');
        button.classList.remove('btn-action');
      } else {
        navbar.classList.remove('navbar-wagon-blue');
        button.classList.remove('btn-action-white');
        button.classList.add('btn-action');
      }
    });
  }
};

export { initUpdateNavbarOnScroll };
