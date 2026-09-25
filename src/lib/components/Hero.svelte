<script>
  import { parallax } from '../actions.js';
</script>

<section class="hero" id="top" aria-label="Hero">
  <div class="hero__media">
    <video
      use:parallax={{ speed: 0.45 }}
      class="hero__image"
      src="/images/energy-wind-anim.mp4"
      autoplay
      muted
      loop
      playsinline
      aria-label="Wind turbines against a dramatic sky"
    ></video>
    <div class="hero__overlay"></div>
  </div>

  <div class="hero__content">
    <p class="eyebrow">The Business Times Insights</p>
    <h1>
      Powering<br />
      Asean’s<br />
      Future
    </h1>
    <p class="hero__subheading">How energy security, sustainability and AI are reshaping business decisions across Asean</p>
  </div>

</section>

<style>
  .hero {
    position: relative;
    height: 100vh;
    height: 100dvh;
    min-height: 640px;
    overflow: hidden;
    background: var(--swatch--dark-green);
    color: white;
  }

  .hero__media {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .hero__image {
    position: absolute;
    inset: -8% 0;
    width: 100%;
    height: 116%;
    object-fit: cover;
    object-position: 50% 40%;
    will-change: transform;
  }

  .hero__overlay {
    position: absolute;
    inset: 0;
    z-index: 2;
    background:
      linear-gradient(90deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.05) 55%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.35), transparent 45%);
  }

  .hero__content {
    position: absolute;
    z-index: 3;
    left: clamp(24px, 4vw, 60px);
    bottom: clamp(72px, 10vh, 100px);
    max-width: min(920px, calc(100% - 48px));
    color: white;
  }

  .eyebrow {
    margin: 0 0 12px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.9rem;
    font-weight: 600;
    opacity: 0.9;
    animation: rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  h1 {
    color: white;
    margin: 0 0 18px;
    animation: rise 1s 0.08s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  .hero__subheading {
    margin: 0;
    color: white;
    font-family: var(--font-serif);
    font-size: clamp(1.5rem, 3.2vw, 2.75rem);
    font-weight: 400;
    line-height: 120%;
    max-width: 18ch;
    animation: rise 1.05s 0.16s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(28px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 767px) {
    .hero {
      min-height: 560px;
    }

    .hero__subheading {
      max-width: 100%;
    }
  }
</style>
