const section = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.3 });

section.forEach(section => {
    observer.observe(section);
});

const form = document.querySelectorAll(".form");

const observe = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("display");
        }
    });
}, { threshold: 0.3 });

section.forEach(section => {
    observer.observe(section);
});

// 768
// 1000
// 902