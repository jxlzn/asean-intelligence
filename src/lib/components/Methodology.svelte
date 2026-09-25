<script>
  import { reveal } from '../actions.js';
</script>

<section class="section" id="methodology">
  <div class="container">
    <div use:reveal>
      <p class="caption">Research Methodology</p>
      <h3>How we listened to the region</h3>
      <p class="body-text">
        Commissioned by The Business Times and executed by Kantar, this regional study provides a
        grounded examination of how Southeast Asian enterprise decision-makers manage energy cost
        inflation, sustainability targets, and digital acceleration.
      </p>
    </div>

    <div class="method-grid">
      <div class="panel" use:reveal>
        <h4>Survey Format &amp; Fieldwork:</h4>
        <ul class="bullet-list">
          <li>Methodology: Quantitative online self-completed survey (10–12 minutes).</li>
          <li>Fieldwork period: July 2026.</li>
          <li>Sample size: 514.</li>
        </ul>
      </div>

      <div class="panel" use:reveal>
        <h4>Target Audience Profile:</h4>
        <ul class="bullet-list">
          <li>
            Demographics: Business owners, C-suite executives, and senior strategic decision-makers who
            lead or co-lead organisational decision-making regarding energy strategy, fuel sourcing,
            utility cost management, or ESG/sustainability impact.
          </li>
        </ul>
      </div>
    </div>

    <div class="geo" use:reveal>
      <h4>Geographic Breakdown (n = 514):</h4>
      <div class="geo-grid">
        <div class="geo-item"><strong>Indonesia</strong><span>17 per cent (n = 88)</span></div>
        <div class="geo-item"><strong>Malaysia</strong><span>15 per cent (n = 76)</span></div>
        <div class="geo-item"><strong>Philippines</strong><span>17 per cent (n = 88)</span></div>
        <div class="geo-item"><strong>Singapore</strong><span>16 per cent (n = 84)</span></div>
        <div class="geo-item"><strong>Thailand</strong><span>17 per cent (n = 88)</span></div>
        <div class="geo-item"><strong>Vietnam</strong><span>18 per cent (n = 90)</span></div>
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

  .geo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 20px;
  }

  .geo-item {
    background: var(--swatch--white);
    border-radius: 18px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 6px;
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

  @media (max-width: 991px) {
    .method-grid,
    .geo-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
