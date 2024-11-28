
document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('.btn');
    
    btns.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            if (btn.style.color === "red") {
                btn.querySelector('i').classList.replace('fas' , 'far')
                btn.style.color = "black";
            } 
			else {
                btn.querySelector('i').classList.replace('far' , 'fas')
                btn.style.color = "red";
            }
        });
    });
});