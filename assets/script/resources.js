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
const form = document.getElementById("form");

const observe = new IntersectionObserverEntry(entries => {
    entries.foreach(entry => {
        if (entry.intersects) {
            entry.target.classList.add("display");
        }
    });
}, { threshold: 0.5 });
form.forEach(form => {
    observe.observe(form);
});


// 768
// 1000
// 902