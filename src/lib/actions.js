export function reveal(node, options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = options;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible');
        observer.unobserve(node);
      }
    },
    { threshold, rootMargin }
  );

  node.classList.add('reveal');
  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

export function parallax(node, { speed = 0.35 } = {}) {
  let raf = 0;

  function update() {
    const rect = node.getBoundingClientRect();
    const viewH = window.innerHeight;
    const progress = (viewH - rect.top) / (viewH + rect.height);
    const offset = (progress - 0.5) * speed * 120;
    node.style.transform = `translate3d(0, ${offset}px, 0) scale(1.12)`;
  }

  function onScroll() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(update);
  }

  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  return {
    destroy() {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    }
  };
}
