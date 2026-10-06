<script>
  import { reveal } from '../actions.js';
  import BarChart from './BarChart.svelte';
  import DonutChart from './DonutChart.svelte';

  const priorities = [
    { label: 'Cost efficiency', value: 38, color: '#004b87' },
    { label: 'Energy security & reliability', value: 26, color: '#90d1e9' },
    { label: 'Sustainability & decarbonisation', value: 9, color: '#cceaf5' },
    { label: 'All three equally important', value: 27, color: '#2da3d0' }
  ];

  const decarbonisationPace = [
    { label: 'Delayed or deprioritised', value: 53 },
    { label: 'Accelerated', value: 26 }
  ];

  const acceleratingMarkets = [
    { label: 'Indonesia', value: 39 },
    { label: 'Vietnam', value: 37 }
  ];

  const delayingMarkets = [
    { label: 'Singapore', value: 29 },
    { label: 'Regional average', value: 20 }
  ];

  const cleanEnergyBarriers = [
    { label: 'Limited availability of suitable options', value: 48 },
    { label: 'Integration with existing systems', value: 38 },
    { label: 'Difficulty measuring business returns', value: 38 }
  ];

  const policyDemands = [
    { label: 'Greater renewable access & procurement', value: 55 },
    { label: 'Tax incentives or grants', value: 48 },
    { label: 'Investment in energy infrastructure', value: 44 }
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
        South-east Asia faces a stark dilemma: while the energy crisis highlights the long-term
        imperative to transition to clean energy, regional enterprises also face short-term profit
        pressure from rising costs. This tension is forcing near-term delays in decarbonisation plans.
      </p>
      <p>
        When evaluating immediate business priorities, cost efficiency leads decision-making for 38 per
        cent of organisations, followed by energy security and reliability (26 per cent). In contrast,
        pure sustainability and decarbonisation goals were identified as the primary driver by only 9
        per cent of businesses. The remaining 27 per cent identified all three factors as being equally
        important.
      </p>
      <p>
        Meanwhile, each market has distinct priorities: Indonesia (49 per cent) and Malaysia (47 per
        cent) businesses’ decisions are heavily cost-driven, whereas those in Singapore primarily focus
        on energy security (43 per cent).
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
        The challenging energy landscape has created a friction point for corporate climate ambitions.
        Regionally, more than half (53 per cent) of businesses reported that their decarbonisation plans
        have been delayed or deprioritised compared with the 26 per cent who have accelerated their
        efforts.
      </p>
      <p>
        Singapore leads the region in reporting significant delays or deprioritisation at 29 per cent,
        well above the regional average of 20 per cent. Conversely, a sizable proportion of businesses
        in Indonesia (39 per cent) and Vietnam (37 per cent) are actively accelerating their
        sustainability plans.
      </p>
    </div>

    <div class="chart-pair" use:reveal>
      <BarChart
        caption="Regional picture"
        title="Decarbonisation plans: pause vs push"
        items={decarbonisationPace}
      />
      <div class="divergence">
        <p class="caption">Market divergence</p>
        <p class="divergence__title">Acceleration vs significant delay</p>
        <div class="divergence__grid">
          <div class="divergence__side">
            <p class="divergence__label divergence__label--accelerate">Accelerating</p>
            <BarChart title="" items={acceleratingMarkets} />
          </div>
          <div class="divergence__vs" aria-hidden="true">vs</div>
          <div class="divergence__side">
            <p class="divergence__label divergence__label--delay">Significant delays</p>
            <BarChart title="" items={delayingMarkets} />
          </div>
        </div>
      </div>
    </div>

    <blockquote class="quote-block" use:reveal>
      “Much of Singapore’s business sector is concentrated in services and commercial activities, where
      decarbonisation pressures can look different. Manufacturing businesses in Indonesia and Vietnam
      are more exposed to international supply chains, where meeting the carbon requirements of export
      markets such as Europe and the US is becoming a condition for maintaining long-term market access
      and business continuity.”
    </blockquote>
    <p class="quote-attr" use:reveal>Lam Pham, energy analyst, Ember</p>

    <div class="body-text" use:reveal>
      <p>
        Despite short-term delays, commitment to the transition remains firm: 69 per cent of respondents
        project that their energy mix will become greener over the next three to five years.
      </p>
      <p>
        Thailand led the pack in expecting a significant shift toward cleaner energy sources (30 per
        cent), followed by Indonesia (26 per cent), well above the regional average of 22 per cent.
        Large enterprises tracked the regional average, at 23 per cent. Expectations of a gradual
        transition to clean energy are highest among businesses in Malaysia (62 per cent) and Singapore
        (61 per cent).
      </p>
      <p>
        However, conventional energy sources, including fossil fuels, remain essential for 28 per cent
        of businesses. This is particularly so in Vietnam (41 per cent) and among SMEs (33 per cent).
      </p>
    </div>

    <h3 use:reveal>ESG as operational efficiency</h3>
    <div class="body-text" use:reveal>
      <p>
        Overall, 76 per cent of organisations reported that ESG is embedded into their strategy and
        decision making: 36 per cent do so fully, while another 40 per cent say that ESG is integrated
        into key business functions. Integration rates were highest in Vietnam (83 per cent), Thailand
        (79 per cent), and Indonesia (78 per cent).
      </p>
      <p>
        Over the next three to five years, companies are focused on improving energy efficiency and
        reducing overall consumption (41 per cent), increasing the use of renewable energy resources
        (20 per cent), and reducing emissions from their own operations and energy use (17 per cent).
      </p>
      <p>
        When selecting clean energy solutions, companies indicated that they favour mature and scalable
        technologies including on-site renewable generation such as rooftop solar (66 per cent) and
        renewable energy sourcing via renewable energy certificates and power purchase agreements (63
        per cent).
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
        barrier, followed by integration challenges with existing operational systems and difficulty
        measuring business returns (38 per cent each).
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
        incentives or grants (48 per cent) and investment in energy infrastructure and grid reliability
        (44 per cent).
      </p>
      <p>
        Market-specific policy demands reflect local priorities: Respondents from Thailand prioritise
        renewable access (66 per cent vs 55 per cent overall); Singapore showed stronger demand for tax
        incentives and grants (52 per cent vs 48 per cent overall); and Indonesia called for direct
        energy subsidies and cost support (52 per cent vs 43 per cent overall).
      </p>
      <p>
        Access to capital: Momentum is building for green financing. Across Asean, 87 per cent of
        businesses reported improved access to green and sustainable financing, with 41 per cent noting
        significant improvements. Satisfaction was highest in the Philippines (95 per cent) and Vietnam
        (94 per cent), while Malaysia had the lowest proportion of businesses (78 per cent) reporting
        improved financing access.
      </p>
    </div>

    <blockquote class="quote-block" use:reveal>
      “Countries should not have to choose between economic development and sustainability. A successful
      transition depends on balancing affordability, sustainability, and security by responsibly
      utilising oil and gas to stabilise economies while lower-carbon systems are built for the future.”
    </blockquote>
    <p class="quote-attr" use:reveal>
      Yinson Production CEO Flemming Guiducci Grønnegaard
    </p>
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

  .divergence {
    margin: 0;
    padding: 28px 28px 24px;
    background: color-mix(in srgb, white 28%, var(--swatch--canopy));
    border-radius: 24px;
  }

  .divergence__title {
    margin: 0 0 20px;
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1.35;
    color: var(--swatch--white);
  }

  .divergence__grid {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 12px;
    align-items: stretch;
  }

  .divergence__side :global(.chart) {
    margin: 0;
    padding: 18px;
    background: color-mix(in srgb, white 18%, var(--swatch--canopy));
    box-shadow: none;
  }

  .divergence__label {
    margin: 0 0 10px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .divergence__label--accelerate {
    color: var(--swatch--golden-gate-light-green);
  }

  .divergence__label--delay {
    color: rgba(255, 255, 255, 0.7);
  }

  .divergence__vs {
    display: grid;
    place-items: center;
    align-self: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    color: white;
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  @media (max-width: 900px) {
    .chart-pair {
      grid-template-columns: 1fr;
    }

    .divergence__grid {
      grid-template-columns: 1fr;
    }

    .divergence__vs {
      margin: 4px auto;
    }
  }
</style>
