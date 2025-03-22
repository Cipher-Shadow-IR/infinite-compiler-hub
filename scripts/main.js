// Particle Generator
const numParticles = 40;
const body = document.body;

for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = Math.random() * 8 + 4; // 4px to 12px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
    body.appendChild(particle);
}

// Iframe Modal Logic
const iconContainers = document.querySelectorAll('.icon-container');
const modalOverlay = document.createElement('div');
modalOverlay.classList.add('modal-overlay');
modalOverlay.style.display = 'none';

const iframe = document.createElement('iframe');
const closeButton = document.createElement('div');
closeButton.classList.add('modal-close');
closeButton.innerHTML = '&times;';

modalOverlay.appendChild(closeButton);
modalOverlay.appendChild(iframe);
document.body.appendChild(modalOverlay);

iconContainers.forEach(container => {
    container.addEventListener('click', () => {
        const compilerURL = container.getAttribute('data-url');
        iframe.src = compilerURL;
        modalOverlay.style.display = 'flex';
    });
});

closeButton.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    iframe.src = ''; // stop compiler when closed
});

// Optional: Fancy heading letter animation (delays each letter)
document.querySelectorAll('.fancy-heading span').forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.05}s`;
});
