<footer class="footer">
  <div class="container footer-inner">
    <div>
      <p class="footer-brand">The Business Times</p>
      <p class="footer-title">Powering Asean’s Future</p>
      <p class="footer-sub">Navigating the energy-AI-sustainability trilemma</p>
    </div>
    <p class="footer-copy">© {new Date().getFullYear()} The Business Times. All rights reserved.</p>
  </div>
</footer>

<style>
  .footer {
    background: var(--swatch--dark-green);
    color: white;
    padding: 64px 0 40px;
  }

  .footer-inner {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  .footer-brand {
    margin: 0 0 8px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.8rem;
    opacity: 0.75;
  }

  .footer-title {
    margin: 0 0 8px;
    font-size: 1.8rem;
    font-weight: 800;
  }

  .footer-sub {
    margin: 0;
    font-family: var(--font-serif);
    font-size: 1.15rem;
    opacity: 0.85;
  }

  .footer-copy {
    margin: 0;
    opacity: 0.65;
    font-size: 0.9rem;
  }
</style>
