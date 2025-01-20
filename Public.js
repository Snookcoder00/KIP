// Simple effet d'apparition pour chaque projet avec JavaScript
window.addEventListener('scroll', function() {
    const projectItems = document.querySelectorAll('.project-item');
    const windowHeight = window.innerHeight;

    projectItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < windowHeight - 50) {
            item.style.transform = 'translateY(0)';
            item.style.opacity = '1';
        } else {
            item.style.transform = 'translateY(100px)';
            item.style.opacity = '0';
        }
    });
});

const galerie = document.querySelector('.galerie');
const overlay = document.querySelector('.overlay');
const imageAgrandie = overlay.querySelector('.image-agrandie img');
const btnFermer = overlay.querySelector('.btn-fermer');
const btnPrecedent = overlay.querySelector('.btn-precedent');
const btnSuivant = overlay.querySelector('.btn-suivant');
const images = document.querySelectorAll('.image-conteneur img');
let indexImageActuelle = 0;

// Ouvrir l'image en grand
function ouvrirImage(image, index) {
    imageAgrandie.src = image.src;
    indexImageActuelle = index;
    overlay.classList.add('actif');
    document.body.style.overflow = 'hidden'; // Empêcher le défilement
}

// Fermer l'image
function fermerImage() {
    overlay.classList.remove('actif');
    document.body.style.overflow = ''; // Réactiver le défilement
}

// Navigation entre les images
function imagesPrecedente() {
    indexImageActuelle = (indexImageActuelle - 1 + images.length) % images.length;
    imageAgrandie.src = images[indexImageActuelle].src;
}

function imageSuivante() {
    indexImageActuelle = (indexImageActuelle + 1) % images.length;
    imageAgrandie.src = images[indexImageActuelle].src;
}

// Écouteurs d'événements
images.forEach((image, index) => {
    image.addEventListener('click', () => ouvrirImage(image, index));
});

btnFermer.addEventListener('click', fermerImage);
btnPrecedent.addEventListener('click', imagesPrecedente);
btnSuivant.addEventListener('click', imageSuivante);

// Fermer avec la touche Echap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fermerImage();
    if (e.key === 'ArrowLeft') imagesPrecedente();
    if (e.key === 'ArrowRight') imageSuivante();
});

// Fermer en cliquant sur l'overlay
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) fermerImage();
});

// section engagement
const engagementItems = document.querySelectorAll('.engagement-item');

engagementItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// section d'avis client
let noteSelectionnee = 0;

// Configuration des étoiles
document.querySelectorAll('.etoile').forEach((etoile, index) => {
    etoile.addEventListener('mouseover', () => {
        document.querySelectorAll('.etoile').forEach((e, i) => {
            e.classList.toggle('active', i <= index);
        });
    });

    etoile.addEventListener('mouseout', () => {
        document.querySelectorAll('.etoile').forEach((e, i) => {
            e.classList.toggle('active', i < noteSelectionnee);
        });
    });

    etoile.addEventListener('click', () => {
        noteSelectionnee = index + 1;
        document.querySelectorAll('.etoile').forEach((e, i) => {
            e.classList.toggle('active', i < noteSelectionnee);
        });
    });
});

function ouvrirFormulaire() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('formulaire').style.display = 'block';
}

function fermerFormulaire() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('formulaire').style.display = 'none';
    // Réinitialiser le formulaire
    document.getElementById('nom').value = '';
    document.getElementById('commentaire').value = '';
    noteSelectionnee = 0;
    document.querySelectorAll('.etoile').forEach(e => e.classList.remove('active'));
}



// Gestion du menu-hamburger
document.querySelector('.menu-toggle').addEventListener('click', function () {
    const navMenu = document.querySelector('.nav-menu');
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
  });
