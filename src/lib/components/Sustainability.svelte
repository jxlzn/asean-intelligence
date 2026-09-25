<script>
  import { reveal } from '../actions.js';
  import BarChart from './BarChart.svelte';
  import DonutChart from './DonutChart.svelte';

  const priorities = [
    { label: 'Cost efficiency', value: 38, color: '#00b38c' },
    { label: 'All three equally important', value: 27, color: '#79c8af' },
    { label: 'Energy security & reliability', value: 26, color: '#a2d7c4' },
    { label: 'Sustainability & decarbonisation', value: 9, color: '#cbe8dd' }
  ];

  const decarbonisationPace = [
    { label: 'Delayed or deprioritised', value: 53 },
    { label: 'Accelerated', value: 26 }
  ];

  const acceleratingMarkets = [
    { label: 'Indonesia accelerating', value: 39 },
    { label: 'Vietnam accelerating', value: 37 },
    { label: 'Singapore significant delays', value: 29 },
    { label: 'Regional average significant delays', value: 20 }
  ];

  const cleanEnergyBarriers = [
    { label: 'Limited availability of suitable options', value: 48 },
    { label: 'Integration with existing systems', value: 38 },
    { label: 'Difficulty measuring business returns', value: 38 }
  ];

  const policyDemands = [
    { label: 'Greater renewable access & procurement', value: 55 },
    { label: 'Tax incentives or grants', value: 48 },
    { label: 'Energy subsidies', value: 43 }
  ];
</script>

<section class="section section--dark" id="sustainability">
  <div class="container">
    <div class="section-heading" use:reveal>
      <span class="section-number">04</span>
      <h2>Is sustainability taking a backseat?</h2>
    </div>

    <div class="body-text" use:reveal>
      <p>
        Southeast Asia stands at a strategic crossroad. As inflation erodes profitability, regional
        enterprises are confronting a stark operational paradox: short-term margin preservation is
        forcing near-term delays in net-zero targets even as energy cost pressure accelerates the
        long-term imperative to transition to clean energy.
      </p>
      <p>
        When evaluating immediate business priorities, cost efficiency leads decision-making for 38 per
        cent of organisations, followed by energy security and reliability (26 per cent). In contrast,
        pure sustainability and decarbonisation goals were identified as the primary driver by only 9
        per cent of businesses. The remaining 27 per cent identified all three factors as being equally
        important.
      </p>
      <p>
        Meanwhile, national priorities reflect distinct market realities: Indonesia (49 per cent) and
        Malaysia (47 per cent) are heavily cost-driven, whereas Singapore places its primary focus on
        energy security (43 per cent).
      </p>
    </div>

    <div use:reveal>
      <DonutChart
        caption="Immediate business priorities"
        title="What drives decision-making today"
        items={priorities}
        centerValue="38%"
        centerLabel="Cost first"
      />
    </div>

    <div class="stat-grid" use:reveal>
      <div class="stat-card">
        <div class="stat-value">38%</div>
        <div class="stat-label">prioritise cost efficiency as their immediate driver</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">53%</div>
        <div class="stat-label">have delayed or deprioritised decarbonisation plans</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">69%</div>
        <div class="stat-label">expect a greener energy mix in the next 3–5 years</div>
      </div>
    </div>

    <h3 use:reveal>The regional divergence: Pausing vs accelerating</h3>
    <div class="body-text" use:reveal>
      <p>
        This has created a temporary friction point for corporate climate ambitions. Regionally, more
        than half (53 per cent) of businesses reported that their decarbonisation plans have been
        delayed or deprioritised compared with the 26 per cent who have accelerated their efforts.
      </p>
      <p>
        Singapore leads the region in reporting significant delays or deprioritisation (29 per cent,
        well above the regional average of 20 per cent). Conversely, businesses in Indonesia (39 per
        cent) and Vietnam (37 per cent) are actively accelerating their sustainability plans.
      </p>
    </div>

    <div class="chart-pair" use:reveal>
      <BarChart
        caption="Regional picture"
        title="Decarbonisation plans: pause vs push"
        items={decarbonisationPace}
      />
      <BarChart
        caption="Market divergence"
        title="Acceleration vs significant delay"
        items={acceleratingMarkets}
      />
    </div>

    <div class="body-text" use:reveal>
      <p>
        Despite these short-term delays, commitment to the transition remains firm: 69 per cent of
        respondents project that their energy mix will become greener over the next three to five
        years.
      </p>
      <p>
        However, conventional energy sources remain essential for 28 per cent of businesses. This is
        particularly so in Vietnam (41 per cent) and among SMEs (33 per cent). Businesses in Singapore
        (61 per cent) and Malaysia (62 per cent) are the most likely to expect a gradual transition
        toward cleaner energy.
      </p>
    </div>

    <h3 use:reveal>Practical action: ESG as operational efficiency</h3>
    <div class="body-text" use:reveal>
      <p>
        While high level decarbonisation goals may have been delayed, ESG principles remain firmly
        integrated into core operations.
      </p>
      <p>
        Overall, 76 per cent of organisations reported that ESG is fully embedded into their strategy
        and decision making (36 per cent) and key business functions (40 per cent). Integration rates
        were highest in Vietnam (83 per cent), Thailand (79 per cent), and Indonesia (78 per cent).
        Large enterprises (78 per cent) were more likely than SMEs (71 per cent) to have ESG embedded
        into their core business activities.
      </p>
      <p>
        Rather than pursuing broad carbon reduction targets, organisations are focusing on tangible,
        cost-reducing sustainability actions.
      </p>
      <p>Over the next three to five years, companies are overwhelmingly focused on:</p>
    </div>
    <ul class="bullet-list" use:reveal>
      <li>
        Energy efficiency: Improving energy efficiency and reducing overall consumption is the top
        focus for 41 per cent of companies.
      </li>
      <li>
        On-site renewables: One in five companies cited increasing the use of renewable energy
        resources as one of their key actions.
      </li>
    </ul>
    <div class="body-text" use:reveal>
      <p>
        When selecting clean energy solutions, companies indicated that they favour mature and scalable
        technologies including solar power and on-site renewable generation (66 per cent) and renewable
        energy sourcing via renewable energy certificates and power purchase agreements (63 per cent).
      </p>
      <p>
        Thailand stood out for its higher interest in electrification of operations (60 per cent versus
        49 per cent overall) and biofuels (56 per cent versus 44 per cent overall), indicating stronger
        consideration of alternative energy applications alongside renewable energy adoption.
      </p>
    </div>

    <h3 use:reveal>Barriers and catalysts</h3>
    <div class="body-text" use:reveal>
      <p>
        The primary obstacle to clean energy adoption is practical rather than philosophical: 48 per
        cent of businesses cited limited availability of suitable clean energy options as the main
        barrier, followed by Integration challenges with existing operational systems and difficulty
        measuring business returns (38 per cent respectively).
      </p>
      <p>
        Market-specific barriers differ significantly: Businesses from the Philippines identified
        limited availability of suitable clean energy options as a key barrier (61 per cent vs the
        average of 48 per cent); Indonesia highlighted infrastructure constraints (50 per cent vs the
        average of 34 per cent); and Vietnam reported greater challenges integrating clean energy
        solutions into existing operations (53 per cent vs the average of 38 per cent).
      </p>
    </div>

    <div class="chart-pair" use:reveal>
      <BarChart
        caption="Adoption barriers"
        title="What is holding back clean energy"
        items={cleanEnergyBarriers}
      />
      <BarChart
        caption="Policy asks"
        title="Support businesses want most"
        items={policyDemands}
      />
    </div>

    <div class="body-text" use:reveal>
      <p>To overcome these bottlenecks, businesses are looking for policy support and capital.</p>
      <p>
        Policy demands: 55 per cent of businesses highlighted greater access to renewable energy
        sources and procurement options as their top policy requirement, outpacing requests for tax
        incentives or grants (48 per cent) and energy subsidies (43 per cent).
      </p>
      <p>
        Market-specific policy demands reflect local pain points: Respondents from Thailand prioritise
        renewable access (66 per cent vs 55 per cent overall); Vietnam showed stronger demand for tax
        incentives and grants (58 per cent vs 48 per cent overall); and Indonesia called for direct
        energy subsidies and cost support (52 per cent vs 43 per cent overall).
      </p>
      <p>
        Access to capital: Green financing represents the single strongest enabler in the region.
        Across Asean, 87 per cent of businesses reported improved access to green and sustainable
        financing, with 41 per cent noting significant improvements. Satisfaction was highest in the
        Philippines (95 per cent) and Vietnam (94 per cent), while Malaysia reported the lowest rate of
        improved financing access at 78 per cent.
      </p>
    </div>
  </div>
</section>

<style>
  .body-text {
    color: rgba(255, 255, 255, 0.92);
    max-width: 72ch;
  }

  .body-text p + p {
    margin-top: 1.25rem;
  }

  .chart-pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin: 8px 0 32px;
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
