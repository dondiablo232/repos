document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.learn-more-btn');

    buttons.forEach(function(button) { 
        button.addEventListener('click', function() { 
            alert('Спасибо за интерес к нашему специальному предложению!');
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll('.ad-card'); 

    cards.forEach(function(card) { 
        let info = card.querySelector('.ad-info'); 

        card.addEventListener('mouseover', function() { 
            info.style.opacity = '1';
            info.style.visibility = 'visible';
        });

        card.addEventListener('mouseout', function() { 
            info.style.opacity = '0';
            info.style.visibility = 'hidden';
        });
    });
});
