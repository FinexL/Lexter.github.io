const sideNav = document.getElementById('sidenav');
const mainContent = document.getElementById('main');
const toggleButton = document.getElementById('toggleSidebar');
const isCollapsed = localStorage.getItem('sideNavCollapsed') === 'true';

if (isCollapsed) {
  sideNav.classList.add('collapsed');
  mainContent.classList.add('expanded');
}

toggleButton.addEventListener('click', () => {
  sidenav.classList.toggle('collapsed');
  mainContent.classList.toggle('expanded');

  const currentState = sideNav.classList.contains('collapsed');
  localStorage.setItem('sideNavCollapsed', currentState);
});


    
    