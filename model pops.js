const modal = document.querySelector('.modal');
const triggers = document.querySelectorAll('.modal-trigger');
const closeBtn = document.querySelector('.close-btn');

const toggleModal = (isOpen) => {
    modal.classList.toggle('is-visible', isOpen);
    modal.setAttribute('aria-hidden', !isOpen);
    // Focus management
    if (isOpen) {
        closeBtn.focus();
    }
};

triggers.forEach(btn => btn.addEventListener('click', () => toggleModal(true)));
closeBtn.addEventListener('click', () => toggleModal(false));

// Close on ESC key or clicking outside
window.addEventListener('click', (e) => { if (e.target === modal) toggleModal(false); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggleModal(false); });