const humbergerButton = document.querySelector('#nav-mobile-btn');
const navLink = document.querySelector('.nav-list');

const allLinks = document.querySelectorAll('.nav-link');
const navOpen = document.querySelector('.nav-list');

if(humbergerButton) {
    humbergerButton.addEventListener('click', function() {
        console.log('humbergerButton is being clicked');
        navLink.classList.toggle('nav-open');
    });   

    allLinks.forEach((anchor)=> {
    
        anchor.addEventListener('click', (e) => {
    
            const hrefValue = anchor.getAttribute('href');
            console.log('navlist is being clicked');
            if(navLink.classList.contains('nav-open')){
                console.log('nav is open');
                navLink.classList.toggle('nav-open');
            }            
            
        });
    });
    
}else {
    console.log("button undetected");
}

