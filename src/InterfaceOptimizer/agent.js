// src/core/ObserverOptimizer.js
export default class ObserverOptimizer {
    constructor() {
      this.io = new IntersectionObserver((entries) => {
        for (let e of entries) {
          if (e.isIntersecting) e.target.classList.add('visible');
          else e.target.classList.remove('visible');
        }
      }, {
        rootMargin: '200px',
        threshold: 0.01
      });
    }
  
    observeAll(selector = '.seamless') {
      document.querySelectorAll(selector).forEach(el => {
        this.io.observe(el);
      });
    }
  }
  