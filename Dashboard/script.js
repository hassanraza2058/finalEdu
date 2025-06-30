document.addEventListener('DOMContentLoaded', function () {
  const expandableItems = document.querySelectorAll('.menu-item.expand');

  expandableItems.forEach(item => {
    item.addEventListener('click', function () {
      const clickedSubmenu = item.nextElementSibling;

      // Step 1: Close all other submenus and reset arrows
      expandableItems.forEach(otherItem => {
        const otherSubmenu = otherItem.nextElementSibling;
        const otherArrow = otherItem.querySelector('.arrow');

        if (otherItem !== item) {
          otherSubmenu.classList.remove('expand-submenu'); 
          if (otherArrow) {
            otherArrow.classList.remove('rotate');
            otherArrow.innerHTML = '&#9662;'; // Down arrow
          }
        }
      });

      // Step 2: Toggle clicked submenu
      clickedSubmenu.classList.toggle('expand-submenu');

      // Step 3: Toggle arrow direction
      const arrow = item.querySelector('.arrow');
      if (arrow) {
        if (clickedSubmenu.classList.contains('expand-submenu')) {
          arrow.innerHTML = '&#9650;'; // Up arrow
          arrow.classList.add('rotate');
        } else {
          arrow.innerHTML = '&#9662;'; // Down arrow
          arrow.classList.remove('rotate');
        }
      }
    });
  });
});
