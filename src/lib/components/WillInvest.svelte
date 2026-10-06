<script>
  import { reveal } from '../actions.js';
  import { parallax } from '../actions.js';
  import BarChart from './BarChart.svelte';
  import DonutChart from './DonutChart.svelte';
  import ArticlesRolodex from './ArticlesRolodex.svelte';

  const infrastructureConfidence = [
    { label: 'Indonesia', value: 94, group: 'Leading the pack' },
    { label: 'Vietnam', value: 89, group: 'Leading the pack' },
    { label: 'ASEAN average', value: 80, group: 'Regional benchmark' },
    { label: 'Malaysia', value: 71, group: 'Lagging confidence' },
    { label: 'Philippines', value: 66, group: 'Lagging confidence' }
  ];

  const energyThreats = [
    { label: 'Global energy price volatility', value: 44 },
    { label: 'Geopolitical tensions on supply', value: 37 },
    { label: 'Supply chain disruptions', value: 36 }
  ];

  const apgAwareness = [
    { label: 'Monitoring very closely', value: 49, color: '#00b38c' },
    { label: 'Monitoring somewhat closely', value: 38, color: '#8a857c' },
    { label: 'Not closely monitoring', value: 13, color: '#cceaf5' }
  ];

  const apgInvestmentLift = [
    { label: 'Indonesia', value: 84 },
    { label: 'ASEAN average', value: 71 },
    { label: 'Malaysia', value: 70 },
    { label: 'Philippines', value: 70 },
    { label: 'Vietnam', value: 68 },
    { label: 'Singapore', value: 65 },
    { label: 'Thailand', value: 65 }
  ];
</script>

<section class="section section--moss" id="plugged-in">
  <div class="container">
    <div class="section-heading" use:reveal>
      <span class="section-number">06</span>
      <h2>Can the Asean Power Grid deliver?</h2>
    </div>

    <div class="body-text" use:reveal>
      <p>
        One of the key reasons why Asean businesses are increasingly looking closer to home for growth
        and investment opportunities amid global volatility and trade tensions, is optimism over
        Asean’s economic integration.
      </p>
      <p>
        As this deepens, energy access conditions - specifically infrastructure reliability, grid
        connectivity and regulatory stability - have emerged as key determinants in corporate investment
        decisions.
      </p>
      <p>
        Four in five businesses (81 per cent) identify energy availability, affordability and
        sustainability as an important or critical factor in their regional investment decisions, with
        enterprises in Vietnam (96 per cent) and Thailand (92 per cent) placing the greatest weight on
        energy readiness.
      </p>
      <p>
        Overall, businesses (80 per cent) are confident that Asean’s energy infrastructure can support
        future growth over the next three to five years. However, perceptions vary across borders -
        confidence is particularly high in Indonesia (94 per cent) and Vietnam (89 per cent) while
        businesses in the Philippines (66 per cent) are less convinced. Large enterprises had a
        significantly higher level of confidence compared with their SME counterparts (84 per cent vs 74
        per cent).
      </p>
      <p>
        When assessing threats to energy security over the next three to five years, Asean enterprises
        indicated they are most concerned about external macroeconomic shocks beyond their direct
        control. Global energy price volatility (44 per cent) was the top concern, followed by
        geopolitical tensions affecting energy supplies (37 per cent) and supply chain disruptions
        impacting energy inputs (36 per cent).
      </p>
    </div>

    <div class="chart-pair" use:reveal>
      <BarChart
        caption="Infrastructure outlook"
        title="Confidence energy infrastructure can support growth"
        items={infrastructureConfidence}
      />
      <BarChart
        caption="Energy security threats"
        title="Top concerns over the next 3–5 years"
        items={energyThreats}
      />
    </div>
  </div>

  <div class="media-break">
    <img
      use:parallax={{ speed: 0.28 }}
      src="/images/grid.jpg"
      alt="Wind turbines representing regional power infrastructure"
    />
  </div>

  <div class="container">
    <h3 use:reveal>The regional catalyst: The Asean Power Grid</h3>
    <div class="body-text" use:reveal>
      <p>
        Across South-east Asia, corporate awareness of the push for regional energy trade is
        exceptionally high: 87 per cent of businesses said they are aware and monitoring developments
        on the APG either very closely (49 per cent) or somewhat closely (38 per cent).
      </p>
      <p>
        Engagement is strongest in Indonesia and Vietnam, where the highest proportions of businesses
        are monitoring developments very closely (67 and 62 per cent respectively). A higher proportion
        of large companies than SMEs (91 per cent vs 82 per cent) are keeping track of APG developments.
      </p>
      <p>
        Progress on regional grid connectivity serves as a major driver for capital deployment: 71 per
        cent of businesses indicated that meaningful progress on the APG would increase their
        willingness to invest and expand within the region, highlighting the potential economic impact
        of stronger regional energy integration.
      </p>
    </div>

    <div class="chart-pair" use:reveal>
      <DonutChart
        caption="Asean Power Grid"
        title="Awareness and monitoring intensity"
        items={apgAwareness}
        centerValue="87%"
        centerLabel="Aware"
      />
      <BarChart
        caption="Investment catalyst"
        title="Countries more likely to invest if APG advances"
        items={apgInvestmentLift}
      />
    </div>

    <div class="body-text" use:reveal>
      <p>
        This sentiment was strongest among Indonesian businesses (84 per cent) followed by the
        Philippines (70 per cent) and Malaysia (70 per cent). Large enterprises (77 per cent) also
        indicated they would increase their willingness to invest or expand in the region.
      </p>
      <p>
        Overall confidence in near-term grid progress remains positive - 65 per cent of businesses
        expect meaningful APG progress within the next three to five years. Optimism was highest in
        Vietnam (80 per cent) compared to more cautious outlooks in the Philippines and Malaysia (54 per
        cent each).
      </p>
    </div>

    <blockquote class="quote-block" use:reveal>
      “Every year of delay (on the APG) costs Asean around US$2.6 billion, rising to more than US$14
      billion over five years. Delay also means greater dependence on imported gas with around 55
      billion cubic metres more by 2040, and more than 71 million tonnes of additional CO₂ emissions.
      The longer Asean waits, the more it locks in costly and less secure energy”
    </blockquote>
    <p class="quote-attr" use:reveal>Lam Pham, energy analyst, Ember</p>

    <h3 use:reveal>Government efforts</h3>
    <div class="body-text" use:reveal>
      <p>
        Government efforts to manage energy-related challenges are generally viewed favourably: 83 per
        cent of businesses rate their government's energy management efforts as effective, with
        satisfaction highest in Vietnam (91 per cent) and Singapore (86 per cent), and lowest in Malaysia
        (78 per cent).
      </p>
    </div>

    <ArticlesRolodex />

    <div class="stat-grid" use:reveal>
      <div class="stat-card">
        <div class="stat-value">87%</div>
        <div class="stat-label">are aware of and monitoring the Asean Power Grid</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">71%</div>
        <div class="stat-label">would increase investment if APG progress accelerates</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">83%</div>
        <div class="stat-label">rate government energy management as effective</div>
      </div>
    </div>
  </div>
</section>

<style>
  .body-text {
    color: rgba(255, 255, 255, 0.94);
    max-width: 72ch;
  }

  .body-text p + p {
    margin-top: 1.25rem;
  }

  .chart-pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin: 40px 0;
  }

  .chart-pair :global(.chart) {
    margin: 0;
  }

  .media-break {
    position: relative;
    height: min(58vh, 480px);
    overflow: hidden;
    margin: 64px 0;
  }

  .media-break img {
    position: absolute;
    inset: -10% 0;
    width: 100%;
    height: 120%;
    object-fit: cover;
    will-change: transform;
  }

  .quote-block {
    color: white;
  }

  .quote-attr {
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 900px) {
    .chart-pair {
      grid-template-columns: 1fr;
    }
  }
</style>
