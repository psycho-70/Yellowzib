// Load header dynamically
fetch('components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // Add toggle functionality after loading header
        const toggleButton = document.querySelector('.toggle-button');
        const nav = document.querySelector('nav');
        const searchBar = document.querySelector('.search-bar'); // Get search bar
        const headButtons = document.querySelector('.head-btn'); // Get About Us & Advertise buttons
        const closeDrawerButton = document.querySelector('.close-drawer'); // X button to close the drawer

        toggleButton.addEventListener('click', () => {
            nav.classList.toggle('active'); // Toggle active class to show/hide nav

            if (nav.classList.contains('active')) {
                // Move search bar and buttons to the nav when active
                nav.prepend(searchBar);
                nav.appendChild(headButtons);
            } else {
                // Move search bar and buttons back to their original position when closed
                document.querySelector('.left').appendChild(searchBar);
                document.querySelector('.left').appendChild(headButtons);
            }
        });

        // Add event listener to X button to close the drawer
        closeDrawerButton.addEventListener('click', () => {
            nav.classList.remove('active'); // Close the drawer

            // Move search bar and buttons back to their original position
            document.querySelector('.left').appendChild(searchBar);
            document.querySelector('.left').appendChild(headButtons);
        });
    });

// Load footer dynamically (optional, if you have a footer component)
fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
