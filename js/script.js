    // Script para alternar a exibição do menu em telas pequenas
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    navbarToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
    });