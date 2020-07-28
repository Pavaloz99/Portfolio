document.querySelector('#about').addEventListener('click', function(e){
    e.preventDefault()
    const aboutPage = document.querySelector('.about');
    aboutPage.scrollIntoView({behavior: 'smooth'});
});

document.querySelector('#projects').addEventListener('click', function(e){
    e.preventDefault();
    const aboutPage = document.querySelector('.projects');
    aboutPage.scrollIntoView({behavior: 'smooth'});
});

document.querySelector('#skills').addEventListener('click', function(e){
    e.preventDefault();
    const aboutPage = document.querySelector('.skills');
    aboutPage.scrollIntoView({behavior: 'smooth'});
});

document.querySelector('#contact').addEventListener('click', function(e){
    e.preventDefault();
    const aboutPage = document.querySelector('.contact');
    aboutPage.scrollIntoView({behavior: 'smooth'});
});