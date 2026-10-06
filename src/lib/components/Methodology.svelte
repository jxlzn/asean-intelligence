<script>
  import { reveal } from '../actions.js';

  const markets = [
    { name: 'Indonesia', share: '17 per cent', respondents: '88 respondents' },
    { name: 'Malaysia', share: '15 per cent', respondents: '76 respondents' },
    { name: 'Philippines', share: '17 per cent', respondents: '88 respondents' },
    { name: 'Singapore', share: '16 per cent', respondents: '84 respondents' },
    { name: 'Thailand', share: '17 per cent', respondents: '88 respondents' },
    { name: 'Vietnam', share: '18 per cent', respondents: '90 respondents' }
  ];
</script>

<section class="section" id="methodology">
  <div class="container">
    <div class="section-heading" use:reveal>
      <span class="section-number">08</span>
      <h2>Research Methodology</h2>
    </div>

    <div class="body-text" use:reveal>
      <p>
        Commissioned by The Business Times and executed by Kantar, this regional study provides a
        grounded examination of how South-east Asian enterprise decision-makers manage energy cost
        inflation, sustainability targets, and digital acceleration.
      </p>
    </div>

    <div class="method-grid">
      <div class="panel" use:reveal>
        <p class="caption">Survey design</p>
        <h4>Format &amp; fieldwork</h4>
        <ul class="bullet-list">
          <li>Methodology: Quantitative online self-completed survey (10–12 minutes).</li>
          <li>Fieldwork period: July 2026.</li>
          <li>Sample size: 514.</li>
        </ul>
      </div>

      <div class="panel" use:reveal>
        <p class="caption">Who we spoke to</p>
        <h4>Target audience</h4>
        <p class="panel__text">
          Business owners, C-suite executives, and senior strategic decision-makers who lead or
          co-lead organisational decision-making regarding energy strategy, fuel sourcing, utility
          cost management, or ESG/sustainability impact.
        </p>
      </div>
    </div>

    <div class="geo" use:reveal>
      <p class="caption">Geographic coverage</p>
      <h4>Sample breakdown · 514 respondents</h4>
      <div class="geo-grid">
        {#each markets as market}
          <div class="geo-item">
            <strong>{market.name}</strong>
            <span>{market.share}</span>
            <span class="geo-item__n">{market.respondents}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .method-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin: 40px 0;
  }

  .panel {
    background: var(--swatch--white);
    border-radius: 24px;
    padding: 28px;
    box-shadow: 1px 1px 8px #00000014;
  }

  h4 {
    margin: 0 0 16px;
    font-size: 1.25rem;
    color: var(--swatch--canopy);
  }

  .panel__text {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.55;
    opacity: 0.9;
  }

  .geo h4 {
    margin-bottom: 20px;
  }

  .geo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .geo-item {
    background: var(--swatch--white);
    border-radius: 18px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    box-shadow: 1px 1px 8px #00000010;
  }

  .geo-item strong {
    color: var(--swatch--canopy);
    font-size: 1.1rem;
  }

  .geo-item span {
    font-size: 0.95rem;
    opacity: 0.8;
  }

  .geo-item__n {
    font-size: 0.85rem !important;
    opacity: 0.65 !important;
  }

  @media (max-width: 991px) {
    .method-grid,
    .geo-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
