(function(){
    'use strict'
    console.log('reading js');

    const jellies = [
        document.querySelector('#moon'),
        document.querySelector('#purple'),
        document.querySelector('#cow'),
        document.querySelector('#leopard'),
        document.querySelector('#nettle')
    ];

    const info = [
        document.querySelector('#moonjelly'),
        document.querySelector('#purplestrippedjelly'),
        document.querySelector('#cownoseray'),
        document.querySelector('#leopardsharks'),
        document.querySelector('#japaneseseanettle')
    ];

    const button = document.querySelectorAll('button');
    const body = document.querySelector('body');
    const image = document.querySelector('img');
    
    const enterButton = document.querySelector('#pressEnter');
    const enter = document.querySelector('#enter');

    body.style.overflow = 'hidden';

    enterButton.addEventListener('click', function(){
        enter.className='animate';
        enter.className= 'hidden';
        body.style.overflow = 'auto';
    });

    for (let i=0; i<jellies.length; i++){
        jellies[i].addEventListener('click', function(){
            jellies[i].className = 'zoomIn';
            info[i].className = 'showing';
            const imageContainerRect = jellies[i].getBoundingClientRect();
            window.scrollTo({
              left: window.scrollX + imageContainerRect.left-800,
              behavior: 'smooth'
            });
            body.style.overflow = 'hidden';
            image[i].style.transform = '';
            image[i].style.transform = 'scale(1.25)';
        });

        button[i].addEventListener('click', function(){
            info[i].className = 'hidden';
            jellies[i].className = '';
            body.style.overflow = 'auto';
        });

        document.addEventListener('click', function(e){
            if(!jellies[i].contains(e.target)){
                info[i].className = 'hidden';
                jellies[i].className = '';                
            }
        });
    };
})();