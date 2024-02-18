
const dark=()=>{
    const root = document.documentElement;
    root.style.setProperty('--back-color-essencially', '#014284');
    root.style.setProperty('--white-color', '#abe1fb');
    root.style.setProperty('--bttn-color-background-second', '#014284');
    root.style.setProperty('--black-color', '#abe1fb');
    root.style.setProperty('--bttn-color-background-first', '#4a7bb5');
    root.style.setProperty('--input-background-color', '#014284');
    root.style.setProperty('--input-type-text-color', '#abe1fb  ');
    document.getElementById('right-column').style.display = 'none';
    document.getElementById('moon-shape').style.display = 'none';
    document.getElementById('sun-shape').style.display = 'flex';
    
}

const sun=()=>{
    const root = document.documentElement;
    // document.getElementById('right-column').style.display = 'inline-block';
    document.getElementById('sun-shape').style.display = 'none';
    document.getElementById('moon-shape').style.display = 'flex';
    root.style.setProperty('--back-color-essencially', '#f3f2f3');
    root.style.setProperty('--white-color', '#ffffff');
    root.style.setProperty('--bttn-color-background-second', '#abe1fb');
    root.style.setProperty('--black-color', '#000000');
    root.style.setProperty('--bttn-color-background-first', '#014284');
    root.style.setProperty('--input-background-color', '#ffffff');
    root.style.setProperty('--input-type-text-color', '#ffffff  ');
}

const mediaQuery = window.matchMedia('(max-width: 1350px)');
const mediaQuery_2 = window.matchMedia('(max-width: 768px)');

function handleMediaQueryChange(mediaQuery) {
    if (mediaQuery.matches) {
        document.getElementById('right-column').style.display = 'none';  
    }
}
handleMediaQueryChange(mediaQuery);
mediaQuery.addListener(handleMediaQueryChange);

function handleMediaQueryChange(mediaQuery_2) {
    if (mediaQuery_2.matches) {
        document.getElementById('right-column').style.display = 'none';  
    }
}
handleMediaQueryChange(mediaQuery_2);
mediaQuery_2.addListener(handleMediaQueryChange);

handleMediaQueryChange(mediaQuery_2);
mediaQuery_2.addListener(handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);
mediaQuery.addListener(handleMediaQueryChange);
handleMediaQueryChange(mediaQuery_2);
mediaQuery_2.addListener(handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);
mediaQuery.addListener(handleMediaQueryChange);