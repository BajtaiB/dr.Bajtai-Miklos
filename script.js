// Scroll animáció ScrollReveal-vel
ScrollReveal().reveal('header', { delay: 200, origin: 'top', distance: '50px', duration: 800 });
ScrollReveal().reveal('#hero', { delay: 300, origin: 'bottom', distance: '50px', duration: 800 });
ScrollReveal().reveal('#rolam', { delay: 400, origin: 'left', distance: '50px', duration: 800 });
ScrollReveal().reveal('#szolgaltatasok', { delay: 500, origin: 'right', distance: '50px', duration: 800 });
ScrollReveal().reveal('#kapcsolat', { delay: 600, origin: 'bottom', distance: '50px', duration: 800 });

// Email küldés (emailjs használata)
(function() {
    emailjs.init(nHJ_29EAVqqSMMbo9); // <- ezt majd cseréld ki a saját kulcsodra
})();

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm(service_ghxn6gd,template_yz3uorc, this)
        .then(function() {
            alert('Az üzenet sikeresen elküldve!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Hiba történt: ' + JSON.stringify(error));
        });
});
