
// JS de Javier --------------------------------
const hiddenElements = document.querySelectorAll('.hidden');

const loadElement = (entries, observer) => {
    // console.log(entries);
    // console.log(observer);

    entries.forEach((entry) => {
        // if (entry.isIntersecting) {

        //     entry.target.classList.remove('hidden)');
        //     entry.target.classList.add('visible)');

        //     console.log('There it is');
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}

const observer = new IntersectionObserver(loadElement, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
});

// // observer.observe(hiddenElements);

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//         };

//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// JS de Ryan --------------------------------

// NAVBAR TRANSPARENTE
const navbar = document.querySelector('.nav');
let timeout;
window.addEventListener('scroll', () => {
    if (navbar.classList.contains('nav-trans')) {
        clearTimeout(timeout)
    } else {
        navbar.classList.add('nav-trans')
    }
    timeout = setTimeout(() => navbar.classList.remove('nav-trans'), 400)
});
// Explications : au scroll event, si la navbar n'a pas la classe nav-trans,
//  on l'ajoute. Puis on rajoute un timeout pour enlever la classe après un temps imparti.
//  Entre temps, si on scroll encore, mais que le temps n'est pas encore imparti
//  (donc la navbar possède toujours la classe nav-trans), on clear le timeout pour l'empêcher
//  de supprimer la classe, et on le relance.
// FORMULAIRE
document.getElementById('formulaire').addEventListener("submit", (e) => {
    let erreur;
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";
        }
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById('erreur').innerHTML = erreur;
        return false;
    } else {
        e.preventDefault();
        alert("Message envoyé !");
    }
});

// JS de Doroteya : dark mode --------------------------------

const html = document.getElementsByTagName('html')[0];
const themeSwitch = document.querySelector("#themeLogo");
const aboutDark = document.getElementById('background-dark');
const equipmentDark = document.getElementById('equipment-dark-mode');
const guideDark = document.getElementById('guide-dark-mode');
const formDark = document.getElementById('formulaire');
const footerDark = document.getElementById('footer-dark-mode');
const navDark = document.getElementById('nav-dark-mode');

themeSwitch.addEventListener('click', () => {
    html.classList.toggle('nuit');
    aboutDark.classList.toggle('nuit');
    equipmentDark.classList.toggle('nuit');
    guideDark.classList.toggle('nuit');
    formDark.classList.toggle('nuit');
    footerDark.classList.toggle('nuit');
    navDark.classList.toggle('nuit');

    if (html.classList.contains('nuit') && aboutDark.classList.contains('nuit') && equipmentDark.classList.contains('nuit') && guideDark.classList.contains('nuit') && formDark.classList.contains('nuit') && footerDark.classList.contains('nuit') && navDark.classList.contains('nuit')) {
        themeSwitch.innerHTML = "&#9788;";
    } else {
        themeSwitch.innerHTML = '&#9789;';
    }
})
