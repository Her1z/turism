// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Handle search form submission
const searchForm = document.querySelector('.search-form');
if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const destination = this.querySelector('input[type="text"]').value;
        const date = this.querySelector('input[type="date"]').value;
        const persons = this.querySelector('input[type="number"]').value;

        // Here you would typically send this data to a server
        console.log('Search parameters:', {
            destination,
            date,
            persons
        });

        alert('Спасибо за ваш запрос! Мы свяжемся с вами в ближайшее время.');
    });
}

// Add sticky header
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scrolling down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scrolling up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Add animation to destination cards
const cards = document.querySelectorAll('.destination-card');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-in-out';
    observer.observe(card);
});

// Handle contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: this.querySelector('#name').value,
            email: this.querySelector('#email').value,
            phone: this.querySelector('#phone').value,
            message: this.querySelector('#message').value
        };

        // Here you would typically send this data to a server
        console.log('Contact form data:', formData);

        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        this.reset();
    });
}

// Handle tour filter form
const filterForm = document.querySelector('.filter-form');
if (filterForm) {
    filterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const filters = {
            type: this.querySelector('select[name="type"]').value,
            duration: this.querySelector('select[name="duration"]').value,
            budgetFrom: this.querySelector('input[placeholder="Бюджет от"]').value,
            budgetTo: this.querySelector('input[placeholder="Бюджет до"]').value
        };

        // Here you would typically filter tours based on the selected criteria
        console.log('Applied filters:', filters);
    });
}

// Add click handlers for tour buttons
const tourButtons = document.querySelectorAll('.tour-button');
tourButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tourCard = this.closest('.tour-card');
        const tourName = tourCard.querySelector('h3').textContent;
        const tourPrice = tourCard.querySelector('.tour-features li:last-child').textContent;

        alert(`Спасибо за интерес к туру "${tourName}"! Наш менеджер свяжется с вами для обсуждения деталей.`);
    });
}); 