// const inputFIeld = document.getElementsByClassName("box");
// document.getElementsByClassName("box").addEventListener("click, () =>"
//     element.style.backgroundColor = 'red'
// ); 

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