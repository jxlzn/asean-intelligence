<script>
  import { reveal } from '../actions.js';
  import BarChart from './BarChart.svelte';
  import DonutChart from './DonutChart.svelte';

  const aiInvestment = [
    { label: 'ASEAN average', value: 62 },
    { label: 'Large enterprises', value: 69 },
    { label: 'SMEs', value: 53 }
  ];

  const energyDemandSplit = [
    { label: 'Significant increase', value: 40, color: '#633517' },
    { label: 'Moderate increase', value: 41, color: '#f7a84b' },
    { label: 'Other / lower impact', value: 19, color: '#cceaf5' }
  ];

  const manageAiEnergy = [
    { label: 'Prioritise energy-efficient AI', value: 52 },
    { label: 'Evaluate AI through an energy-cost lens', value: 48 },
    { label: 'Set targets for AI energy use', value: 46 }
  ];

  const roiConviction = [
    { label: 'Singapore', value: 84 },
    { label: 'Vietnam', value: 83 },
    { label: 'Thailand', value: 81 },
    { label: 'Indonesia', value: 80 },
    { label: 'ASEAN average', value: 78 }
  ];
</script>

<section class="section" id="digital-surge">
  <div class="container">
    <div class="section-heading" use:reveal>
      <span class="section-number">05</span>
      <h2>The digital surge meets the energy barrier</h2>
    </div>

    <div class="body-text" use:reveal>
      <p>
        Driven by the search for productivity gains, 62 per cent of businesses reported that they
        increased their investment in AI or data-driven technologies over the past 12 months. Large
        enterprises led this trend, with 69 per cent raising AI investments compared to 53 per cent of
        SMEs.
      </p>
      <p>
        Growth is particularly pronounced in Indonesia, where half of businesses reported a moderate
        increase in AI investment changes over the last year and a further 35 per cent reported a
        significant increase.
      </p>
    </div>

    <aside class="sidenote-panel body-text" use:reveal>
      <p>
        This tracks with the findings from our flagship survey
        <a
          class="text-link"
          href="https://www.businesstimes.com.sg/keywords/asean-intelligence-2026"
          target="_blank"
          rel="noopener noreferrer">Asean Intelligence 2026</a
        >
        which we launched in May this year. In that study, we found that Indonesia is aggressively
        positioning itself as South-east Asia’s AI pacesetter, as businesses invest in multiple AI
        capabilities.
      </p>
    </aside>

    <div class="body-text" use:reveal>
      <p>
        The Powering Asean’s Future report found that this digital surge is placing substantial pressure
        on power requirements: 81 per cent of Asean businesses expect a moderate (41 per cent) to
        significant (40 per cent) increase in energy demand as adoption scales.
      </p>
      <p>
        Expectations of AI-driven energy demand are strongest in Indonesia (88 per cent) followed by
        the Philippines (86 per cent), and Thailand and Vietnam (85 per cent each). Vietnam stands out
        for the intensity of concern - 58 per cent said they expect the increase in energy demand to be
        “significant”.
      </p>
      <p>
        On the other end of the spectrum, over half of businesses in Singapore anticipate only a
        moderate increase (54 per cent) and fewer foresee a significant impact (17 per cent).
      </p>
    </div>

    <div class="chart-pair" use:reveal>
      <DonutChart
        caption="Regional energy outlook"
        title="Expected AI-driven energy demand growth"
        items={energyDemandSplit}
        centerValue="81%"
        centerLabel="Expect rise"
      />
      <BarChart
        caption="AI investment"
        title="Where energy pressure from AI is felt most strongly"
        items={aiInvestment}
      />
    </div>

    <h3 use:reveal>Cost and infrastructure bottlenecks</h3>
    <div class="body-text" use:reveal>
      <p>
        As AI compute requirements grow, enterprises expect energy demand to manifest in two main
        operational challenges: rising electricity or operating costs (46 per cent), pressure to upgrade
        existing infrastructure (39 per cent), and increased competition for energy resources (37 per
        cent).
      </p>
      <p>
        The nature of these hurdles varies across markets: Malaysia businesses cited rising operating
        costs as their main challenge (58 per cent); those in the Philippines said they expect
        constraints in reliable power supply (49 per cent); and Thai businesses anticipated operational
        adjustments (49 per cent) and infrastructure upgrade requirements (47 per cent) as energy demand
        increases.
      </p>
      <p>
        Businesses in Singapore cited higher electricity or operating costs as their top challenge (40
        per cent) but this was in close competition with other factors including increased competition
        for energy resources and difficulty meeting sustainability or carbon reduction targets (39 per
        cent each); as well as increased volatility in energy prices and greater uncertainty in
        long-term business planning (38 per cent each).
      </p>
      <p>
        To manage these challenges, 52 per cent of Asean enterprises are prioritising energy-efficient
        AI solutions, 48 per cent are evaluating AI investments through an energy-cost lens, and 46 per
        cent are setting targets to manage AI-related energy consumption.
      </p>
      <p>
        Indonesia businesses are particularly proactive, prioritising energy-efficient AI solutions (68
        per cent vs the average of 52 per cent) while Vietnam leads in increasing the use of renewable
        or low-carbon energy sources (57 per cent vs the average of 45 per cent).
      </p>
      <p>
        Malaysia exhibited the highest level of inertia - 26 per cent of businesses reported that no
        specific actions had been taken to manage AI-related energy consumption vs the regional average
        of 17 per cent.
      </p>
    </div>

    <div use:reveal>
      <BarChart
        caption="Managing the energy load"
        title="How enterprises are responding to AI power demand"
        items={manageAiEnergy}
      />
    </div>

    <div class="stat-grid" use:reveal>
      <div class="stat-card">
        <div class="stat-value">62%</div>
        <div class="stat-label">increased AI or data-driven investment in the past 12 months</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">81%</div>
        <div class="stat-label">expect moderate-to-significant energy demand growth from AI</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">78%</div>
        <div class="stat-label">believe AI benefits outweigh associated energy requirements</div>
      </div>
    </div>

    <h3 use:reveal>The ROI conviction</h3>
    <div class="body-text" use:reveal>
      <p>
        Despite operational hurdles, enterprises remain overwhelmingly committed to digital
        transformation. Regionwide, nearly four in five (78 per cent) businesses indicated they expect
        benefits from AI to outweigh associated energy requirements; Singapore (84 per cent), Vietnam
        (83 per cent) and Thailand (81 per cent) led the pack in having positive expectations for AI,
        followed by Indonesia (80 per cent).
      </p>
      <p>
        The Philippines stood out as a notable exception with significantly fewer respondents believing
        the benefits outweigh the energy demands (64 per cent vs 78 per cent overall) and 30 per cent
        viewing it as a balanced trade-off.
      </p>
    </div>

    <div use:reveal>
      <BarChart
        caption="The ROI conviction"
        title="Share saying AI benefits outweigh energy requirements"
        items={roiConviction}
      />
    </div>

    <blockquote class="quote-block" use:reveal>
      “Well-designed policies could help align the growth of AI with the energy transition. This could
      also unlock investment in innovative technologies such as advanced geothermal and long-duration
      energy storage, potentially creating wider spillover benefits that accelerate the transition to a
      cleaner and more resilient power system.”
    </blockquote>
    <p class="quote-attr" use:reveal>Lam Pham, energy analyst, Ember</p>
  </div>
</section>

<style>
  .sidenote-panel {
    margin: 40px 0;
    padding: 28px;
    background: var(--swatch--white);
    border-radius: 24px;
    box-shadow: 1px 1px 8px #00000014;
  }

  .sidenote-panel p {
    margin: 0;
  }

  .chart-pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin: 40px 0 8px;
  }

  .chart-pair :global(.chart) {
    margin: 0;
  }

  @media (max-width: 900px) {
    .chart-pair {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .sidenote-panel {
      padding: 22px 18px 18px;
    }
  }
</style>
