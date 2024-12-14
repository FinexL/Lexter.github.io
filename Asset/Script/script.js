    const sidenav = document.getElementById('sidenav');
    const mainContent = document.getElementById('main');
    const toggleButton = document.getElementById('toggleSidebar');
    const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
    const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))

    
    toggleButton.addEventListener('click', () => 
    {
      sidenav.classList.toggle('collapsed');
      mainContent.classList.toggle('expanded');
    });


    