<script>
  import { reveal } from '../actions.js';
  import BarChart from './BarChart.svelte';
  import DonutChart from './DonutChart.svelte';

  const aiInvestment = [
    { label: 'Indonesia', value: 85 },
    { label: 'Large enterprises', value: 69 },
    { label: 'ASEAN average', value: 63 },
    { label: 'SMEs', value: 53 }
  ];

  const energyDemandSplit = [
    { label: 'Significant increase', value: 40, color: '#00b38c' },
    { label: 'Moderate increase', value: 41, color: '#79c8af' },
    { label: 'Other / lower impact', value: 19, color: '#cbe8dd' }
  ];

  const aiEnergyImpact = [
    { label: 'Indonesia — expect increase', value: 88 },
    { label: 'ASEAN — expect increase', value: 81 },
    { label: 'Vietnam — significant increase', value: 58 },
    { label: 'Singapore — moderate only', value: 54 },
    { label: 'Singapore — significant impact', value: 17 }
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
    { label: 'ASEAN average', value: 78 },
    { label: 'Philippines', value: 64 }
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
        Driven by the search for productivity gains, 63 per cent of businesses reported that they
        increased their investment in AI or data-driven technologies over the past 12 months. Large
        enterprises led this trend, with 69 per cent raising AI investments compared to 53 per cent of
        SMEs.
      </p>
      <p>
        Growth is particularly pronounced in Indonesia (85 per cent), where half of businesses reported
        a moderate increase in AI investment changes over the last year and a further 35 per cent
        reported a significant increase.
      </p>
      <p>
        However, this digital surge is placing substantial pressure on power requirements: 81 per cent
        of businesses said they expect moderate (41 per cent) to significant (40 per cent) increase in
        energy demand as adoption scales.
      </p>
      <p>
        Expectations are strongest in Indonesia (88 per cent), while Vietnam stands out for the
        intensity of concern - 58 per cent said they expect a significant increase in energy demand.
      </p>
      <p>
        On the other end of the spectrum, businesses in Singapore are more likely to anticipate only a
        moderate increase (54 per cent) and less likely to foresee a significant impact (17 per cent).
      </p>
    </div>

    <div class="chart-pair" use:reveal>
      <BarChart
        caption="AI investment"
        title="Share raising AI or data-driven investment"
        items={aiInvestment}
      />
      <DonutChart
        caption="Regional energy outlook"
        title="Expected AI-driven energy demand growth"
        items={energyDemandSplit}
        centerValue="81%"
        centerLabel="Expect rise"
      />
    </div>

    <div use:reveal>
      <BarChart
        caption="Perceived AI energy impact by market"
        title="Where energy pressure from AI is felt most strongly"
        items={aiEnergyImpact}
      />
    </div>

    <h3 use:reveal>Cost and infrastructure bottlenecks</h3>
    <div class="body-text" use:reveal>
      <p>
        As AI compute requirements grow, enterprises expect energy demand to manifest in two main
        operational challenges: rising electricity or operating costs (46 per cent) and pressure to
        upgrade existing infrastructure (39 per cent).
      </p>
      <p>
        The nature of these hurdles vary across markets: Malaysia cited rising operating costs as their
        main challenge (58 per cent); businesses in the Philippines said they expect constraints in
        reliable power supply (49 per cent); and Thailand anticipated operational adjustments (49 per
        cent) and infrastructure upgrade requirements (47 per cent) as energy demand increases.
      </p>
      <p>
        To manage these energy implications, 52 per cent of enterprises are prioritising
        energy-efficient AI solutions, 48 per cent are evaluating AI investments through an energy-cost
        lens, and 46 per cent are setting targets to manage AI-related energy consumption (46 per
        cent).
      </p>
      <p>
        Indonesia businesses are particularly proactive, significantly more likely to prioritise
        energy-efficient AI solutions (68 per cent) while Vietnam leads in increasing the use of
        renewable or low-carbon energy sources (57 per cent).
      </p>
      <p>
        Malaysia exhibited the highest level of inertia - 26 per cent of businesses reported that no
        specific actions had been taken to manage AI-related energy consumption.
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
        <div class="stat-value">63%</div>
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
        transformation. Regionwide, nearly four in five (78 per cent) of businesses indicated they
        expect benefits from AI to outweigh associated energy requirements; Singapore (84 per cent),
        Vietnam (83 per cent) and Thailand (81 per cent) led the pack in having high expectations for
        AI.
      </p>
      <p>
        The Philippines stood out as a notable exception with significantly fewer leaders believing the
        benefits outweigh the energy demands (64 per cent vs 78 per cent overall) and 30 per cent
        viewing it as an even trade-off.
      </p>
    </div>

    <div use:reveal>
      <BarChart
        caption="The ROI conviction"
        title="Share saying AI benefits outweigh energy requirements"
        items={roiConviction}
      />
    </div>
  </div>
</section>

<style>
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
</style>
