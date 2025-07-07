// Dark/Light Theme
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Scroll-to-Top
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Filter Projects
document.querySelectorAll('.filter').forEach(filter => {
  filter.addEventListener('click', function(){
    document.querySelector('.filter.active').classList.remove('active');
    this.classList.add('active');
    const cat = this.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = (cat==='all' || card.dataset.category.includes(cat)) ? 'block' : 'none';
    });
  });
});
