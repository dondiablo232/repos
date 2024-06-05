document.querySelector('.learn-more-btn').addEventListener('click', function() {
    alert('Спасибо за интерес к нашему специальному предложению!');
});
document.addEventListener("DOMContentLoaded", function() {
    var card = document.querySelector('.ad-card');
    var info = document.querySelector('.ad-info');

    card.addEventListener('mouseover', function() {
        info.style.opacity = '1';
        info.style.visibility = 'visible';
    });

    card.addEventListener('mouseout', function() {
        info.style.opacity = '0';
        info.style.visibility = 'hidden';
    });
});