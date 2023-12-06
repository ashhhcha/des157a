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

    const images = [
        'images/1.svg', 
        'images/2.svg',
        'images/3.svg',
        'images/4.svg',
        'images/5.svg',
        'images/6.svg',
    ]

    const delay = 3000;

    const button = document.querySelectorAll('button');
    const body = document.querySelector('body');
    const image = document.querySelector('img');
    const tap = document.querySelector('#learn');
    
    const enterButton = document.querySelector('#pressEnter');
    const enter = document.querySelector('#enter');

    body.style.overflow = 'hidden';

    enterButton.addEventListener('click', function(){
        for (let i = 1; i <= 6; i++) {
            setTimeout(function() {
            const layerElement = document.querySelector('.layer' + i);
            layerElement.classList.add('animate');
            }, (i - 1) * delay);
           }
        body.style.overflow = 'auto';

        enter.className = "animate";
        setTimeout(function() {
            enter.style.zIndex = '-10';
           }, 1000);
        intro.style.zIndex = "3";
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
            tap.className='hidden';      
        });

        button[i].addEventListener('click', function(){
            info[i].className = 'hidden';
            jellies[i].className = '';
            body.style.overflow = '';
            tap.className = 'showing';
        });

        document.addEventListener('click', function(e){
            if(!jellies[i].contains(e.target)){
                info[i].className = 'hidden';
                jellies[i].className = '';                
            }
        });
    };
})();