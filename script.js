const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    
    entry.target.querySelectorAll('.lang-fill').forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  });
}, { threshold: 0.05 });

document.querySelectorAll('section').forEach(el => observer.observe(el));