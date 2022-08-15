const topMenu = document.getElementById('vhd-top-menu');
const toggleTopMenuIcon = document.getElementById('vhd-toggle-top-menu-icon');

document.addEventListener('click', (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    topMenu.classList.toggle('vhd-top-menu-expanded');
    topMenu.classList.toggle('hidden');
  } else {
    if (topMenu.classList.contains('vhd-top-menu-expanded')) {
      topMenu.classList.remove('vhd-top-menu-expanded');
      topMenu.classList.add('hidden');
    }
  }
});


