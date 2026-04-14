document.addEventListener('DOMContentLoaded', () => {
    // --- Countdown Timer ---
    const targetDate = new Date('July 4, 2026 09:00:00').getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const gap = targetDate - now;

        if (gap < 0) {
            daysEl.innerText = '00';
            hoursEl.innerText = '00';
            minutesEl.innerText = '00';
            secondsEl.innerText = '00';
            return;
        }

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const d = Math.floor(gap / day);
        const h = Math.floor((gap % day) / hour);
        const m = Math.floor((gap % hour) / minute);
        const s = Math.floor((gap % minute) / second);

        daysEl.innerText = d.toString().padStart(2, '0');
        hoursEl.innerText = h.toString().padStart(2, '0');
        minutesEl.innerText = m.toString().padStart(2, '0');
        secondsEl.innerText = s.toString().padStart(2, '0');
    }

    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // --- Accordion Logic ---
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            // Close others if we want it to behave like a true accordion (optional)
            /*
            accordions.forEach(otherAcc => {
                if(otherAcc !== acc) {
                    otherAcc.parentElement.classList.remove('active');
                    otherAcc.nextElementSibling.classList.remove('active');
                }
            });
            */

            // Toggle current
            const parent = this.parentElement;
            const content = this.nextElementSibling;
            
            parent.classList.toggle('active');
            content.classList.toggle('active');
        });
    });
    
    // Open the first one by default
    if(accordions.length > 0) {
        accordions[0].click();
    }

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: unobserve after revealing if you don't want it to repeat
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Slight offset
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- Smooth Scroll for Hero Chevron ---
    document.querySelector('.scroll-down').addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
