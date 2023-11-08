(function(){
    'use strict'
    
    const moon = document.querySelector('#moon');
    const purple = document.querySelector('#purple');
    const cow = document.querySelector('#cow');
    const leopard = document.querySelector('#leopard');
    const nettle = document.querySelector('#nettle');

    moon.addEventListener('click', function(){
        document.querySelector('#moonjelly').className = 'showing';
        document.querySelector('button').addEventListener('click', function(){
            document.querySelector('#moonjelly').className = 'hidden';
        })
    })
    
    purple.addEventListener('click', function(){
        document.querySelector('#purplestrippedjelly').className = 'showing';
        document.querySelector('button').addEventListener('click', function(){
            document.querySelector('#purplestrippedjelly').className = 'hidden';
        })
    })

    cow.addEventListener('click', function(){
        document.querySelector('#cownoseray').className = 'showing';
        document.querySelector('button').addEventListener('click', function(){
            document.querySelector('#cownoseray').className = 'hidden';
        })
    })

    leopard.addEventListener('click', function(){
        document.querySelector('#leopardsharks').className = 'showing';
        document.querySelector('button').addEventListener('click', function(){
            document.querySelector('#leopardsharks').className = 'hidden';
        })
    })

    nettle.addEventListener('click', function(){
        document.querySelector('#japaneseseanettle').className = 'showing';
        document.querySelector('button').addEventListener('click', function(){
            document.querySelector('#japaneseseanettle').className = 'hidden';
        })
    })

})();