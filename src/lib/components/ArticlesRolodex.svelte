<script>
  import { reveal } from '../actions.js';

  const articles = [
    {
      type: 'Article',
      title: 'Asean leaders should focus on energy transition, not US-China rivalry: Al Gore',
      summary:
        'The former US vice-president sees Beijing taking a bigger role in climate governance, and urges Asean governments to accelerate the low-carbon transition.',
      meta: 'Janice Lim · 8 Sep 2026',
      href: 'https://www.businesstimes.com.sg/esg/asean-leaders-should-focus-energy-transition-not-us-china-rivalry-al-gore'
    },
    {
      type: 'Article',
      title: 'How deeply have South-east Asian governments had to dig in this oil crisis?',
      summary:
        'Subsidies and tax cuts may stem the bleed, but the region’s budgets are coming under strain as governments cushion rising fuel costs.',
      meta: '7 Apr 2026',
      href: 'https://www.businesstimes.com.sg/international/asean/how-deeply-have-south-east-asian-governments-had-dig-oil-crisis'
    },
    {
      type: 'Podcast',
      title: 'The cost of conflict: Asia’s energy risk',
      summary:
        'Simon Tay’s Political Cafe unpacks how Middle East tensions are reshaping Asia’s energy outlook, from oil volatility to longer-term security choices.',
      meta: 'Claressa Monteiro · 17 Apr 2026',
      href: 'https://www.businesstimes.com.sg/podcasts/cost-conflict-asias-energy-risk'
    },
    {
      type: 'In charts',
      title:
        'Singapore’s energy and chemicals sector in focus as Middle East conflict escalates',
      summary:
        'The sector’s green pivot could help it be less vulnerable to oil and gas disruptions in the long term.',
      meta: '10 Mar 2026',
      href: 'https://www.businesstimes.com.sg/companies-markets/charts-singapores-energy-and-chemicals-sector-focus-middle-east-conflict-escalates'
    },
    {
      type: 'Graphics',
      title: 'Carbon tax: Where Singapore stands in a world divided on price',
      summary:
        'Asia Unpacked looks at how Singapore’s carbon tax compares with limited and uneven pricing progress across the region.',
      meta: 'Carbon pricing 2026',
      href: 'https://graphics.businesstimes.com.sg/specials/carbon-pricing-2026/index.html'
    }
  ];

  /** @type {HTMLDivElement | undefined} */
  let track;

  function scrollByCard(direction) {
    if (!track) return;
    const card = track.querySelector('.card');
    const amount = card ? card.getBoundingClientRect().width + 20 : 320;
    track.scrollBy({ left: direction * amount, behavior: 'smooth' });
  }
</script>

<div class="interactive" use:reveal>
  <div class="interactive__head">
    <div>
      <p class="caption">From The Business Times</p>
      <h4>What have governments done?</h4>
    </div>
    <div class="controls">
      <button type="button" class="nav-btn" onclick={() => scrollByCard(-1)} aria-label="Previous articles">
        ←
      </button>
      <button type="button" class="nav-btn" onclick={() => scrollByCard(1)} aria-label="Next articles">
        →
      </button>
    </div>
  </div>

  <div class="carousel" bind:this={track} tabindex="0" aria-label="Business Times articles">
    {#each articles as article}
      <article class="card">
        <p class="card__type">{article.type}</p>
        <h5 class="card__title">{article.title}</h5>
        <p class="card__summary">{article.summary}</p>
        <div class="card__footer">
          <p class="card__meta">{article.meta}</p>
          <a class="card__link" href={article.href} target="_blank" rel="noopener noreferrer">
            Read on BT →
          </a>
        </div>
      </article>
    {/each}
  </div>
</div>

<style>
  .interactive {
    margin: 48px 0;
    padding: 36px 32px;
    background: var(--swatch--white);
    border-radius: 28px;
    box-shadow: 1px 1px 12px #00000014;
    color: var(--swatch--dark-green);
  }

  .interactive__head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    margin-bottom: 28px;
    flex-wrap: wrap;
  }

  .caption {
    margin: 0 0 8px;
    color: var(--swatch--moss);
    letter-spacing: 0.08rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 700;
  }

  h4 {
    margin: 0;
    max-width: 28ch;
    color: var(--swatch--canopy);
    font-size: clamp(1.35rem, 2.2vw, 1.85rem);
    line-height: 1.25;
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .nav-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--swatch--beige);
    color: var(--swatch--canopy);
    font-size: 1.15rem;
    font-weight: 700;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .nav-btn:hover {
    background: var(--swatch--canopy);
    color: white;
  }

  .carousel {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(300px, 1fr);
    gap: 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    padding-bottom: 12px;
    margin: 0 -4px;
    padding-left: 4px;
    padding-right: 4px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 102, 60, 0.35) transparent;
  }

  .carousel:focus-visible {
    outline: 2px solid var(--swatch--canopy);
    outline-offset: 4px;
  }

  .card {
    display: flex;
    flex-direction: column;
    min-height: 320px;
    padding: 28px;
    background: var(--swatch--beige);
    border-radius: 24px;
    border: 1px solid rgba(26, 44, 37, 0.08);
    box-shadow: 1px 1px 8px #00000014;
    scroll-snap-align: start;
  }

  .card__type {
    margin: 0 0 12px;
    color: var(--swatch--moss);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .card__title {
    margin: 0 0 14px;
    color: var(--swatch--canopy);
    font-size: clamp(1.15rem, 1.6vw, 1.35rem);
    line-height: 1.3;
    font-weight: 800;
  }

  .card__summary {
    margin: 0;
    flex: 1;
    font-size: 1rem;
    line-height: 1.55;
  }

  .card__footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    margin-top: 24px;
    padding-top: 18px;
    border-top: 1px solid rgba(26, 44, 37, 0.12);
  }

  .card__meta {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.7;
  }

  .card__link {
    display: inline-flex;
    align-items: center;
    padding: 10px 18px;
    border-radius: 999px;
    background: var(--swatch--canopy);
    color: white;
    font-size: 0.95rem;
    font-weight: 700;
    transition: background-color 0.2s ease;
  }

  .card__link:hover {
    background: color-mix(in srgb, var(--swatch--canopy) 82%, black);
  }

  @media (min-width: 1100px) {
    .carousel {
      grid-auto-columns: calc((100% - 40px) / 3);
    }
  }

  @media (max-width: 767px) {
    .interactive {
      padding: 28px 20px;
    }

    .carousel {
      grid-auto-columns: minmax(260px, 85%);
    }

    .card {
      min-height: 300px;
      padding: 22px 18px;
    }
  }
</style>
