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

    // dyanamic page load
    // Array holding the content for each article page
const pages = [
    {
        title: "For Neighbors",
        description: "Explore a vast array of over 400 categories and interests, all conveniently located nearby for your browsing pleasure.",
        imgSrc: "assets/public/Rectangle-4.jpg",
        additionalInfo: {
            text: "Sign up for neighborhood news tailored to your interests.",
            icon: "assets/public/Rectangle-8.png"
        },
        buttonText: "Sign Up",
        bgColor: "rgb(255, 242, 234)" // First page color
    },
    {
        title: "For Businesses",
        description: "Add your business to a modern-day local directory offering affordable leads and social engagement in our Neighborhood News program.",
        imgSrc: "assets/public/Rectangle-3.jpg",
        additionalInfo: {
            text: "The same control panel for a home-based business as a national business. Grow customers near you. FREE Listing.",
            icon: "assets/public/Rectangle.png"
        },
        buttonText: "Sign Up",
        bgColor: "rgb(234, 247, 237)" // Second page color
    },
    {
        title: "For Neighbors",
        description: "Explore a vast array of over 400 categories and interests, all conveniently located nearby for your browsing pleasure.",
        imgSrc: "assets/public/Rectangle-2.jpg",
        additionalInfo: {
            text: "Sign up for neighborhood news tailored to your interests.",
            icon: null // No icon for the third section
        },
        buttonText: "Sign Up",
        bgColor: "rgb(234, 247, 237)" // Same color as second page
    }
];

// Function to dynamically create and insert HTML
function createSignupPages() {
    const signupContainer = document.getElementById('signup-container');

    pages.forEach((page, index) => {
        const article = document.createElement('article');
        article.classList.add('signup-section');
        if (index !== 0) article.classList.add('page2'); // Add the 'page2' class to the second and third pages

        // Create the HTML structure with different order for page 2
        if (index === 1) {
            // For page 2 (index 1), place the text first, then the image
            article.innerHTML = `
                <div class="content-wrapper">
                    <div class="text-wrapper" style="background-color: ${page.bgColor}">
                        <h2>${page.title}</h2>
                        <p>${page.description}</p>
                        <div class="additional-info">
                            ${page.additionalInfo.icon ? `<img src="${page.additionalInfo.icon}" alt="rectangle">` : ''}
                            ${page.additionalInfo.text}
                        </div>
                        <button class="signup-button">${page.buttonText}</button>
                    </div>
                    <div class="image-wrapper">
                        <img src="${page.imgSrc}" alt="${page.title}" class="main-image">
                    </div>
                </div>
            `;
        } else {
            // For other pages, keep the image first, then the text
            article.innerHTML = `
                <div class="content-wrapper">
                    <div class="image-wrapper">
                        <img src="${page.imgSrc}" alt="${page.title}" class="main-image">
                    </div>
                    <div class="text-wrapper" style="background-color: ${page.bgColor}">
                        <h2>${page.title}</h2>
                        <p>${page.description}</p>
                        <div class="additional-info">
                            ${page.additionalInfo.icon ? `<img src="${page.additionalInfo.icon}" alt="rectangle">` : ''}
                            ${page.additionalInfo.text}
                        </div>
                        <button class="signup-button">${page.buttonText}</button>
                    </div>
                </div>
            `;
        }

        signupContainer.appendChild(article);
    });
}

// Call the function to create the pages on page load
createSignupPages();
