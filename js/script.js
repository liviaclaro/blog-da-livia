/* ==================== SCRIPT DO BLOG ==================== */

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito de aparecimento ao rolar a página
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todos os post-cards
document.querySelectorAll('.post-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Validar email
        if (email) {
            alert('Obrigado por se inscrever! Você receberá dicas exclusivas em ' + email);
            this.reset();
        }
    });
}

// Adicionar classe de scroll ao header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 8px 30px rgba(255, 182, 217, 0.3)';
    } else {
        header.style.boxShadow = '0 4px 20px rgba(255, 182, 217, 0.15)';
    }
});

// Carrossel de imagens (opcional)
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    if (slides.length === 0) return;
    
    slides.forEach(slide => slide.style.display = 'none');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

// Função para próximo slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Função para slide anterior
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicializar
if (slides.length > 0) {
    showSlide(0);
}

// Log de inicialização
console.log('✨ Blog da Lívia carregado com sucesso!');
console.log('🌸 Aproveite as dicas de maquiagem!');
