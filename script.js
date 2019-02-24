window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let infoHeader = document.querySelector('.info-header'),
    tab = document.querySelectorAll('.info-header-tab'),
    tabContent = document.querySelectorAll('.info-tabcontent');
    
    // This function hides tabs
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    // Run the function from the second tab
    hideTabContent(1);


    // Include the desired tab content
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.remove('show');
        }
    }
    
    // Catch the mouse click on some tab
    infoHeader.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                // Take the number of the tab that was clicked
                if (target == tab[i]) {
                    hideTabContent(0);
                    // Substitute this number in the function " showTabContent"
                    showTabContent(i);
                    break;
                }
            }
        }
    }); 
});