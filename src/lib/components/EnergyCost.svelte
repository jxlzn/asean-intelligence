<script>
  import { reveal } from '../actions.js';
  import { parallax } from '../actions.js';
  import CostPressureInteractive from './CostPressureInteractive.svelte';
  import BarChart from './BarChart.svelte';

  const costByMarket = [
    { label: 'Vietnam', value: 87 },
    { label: 'Malaysia', value: 83 },
    { label: 'Singapore', value: 82 },
    { label: 'ASEAN average', value: 79 },
    { label: 'Thailand', value: 69 }
  ];

  const copingStrategies = [
    { label: 'Invest in energy-efficient technologies', value: 66 },
    { label: 'Accelerate automation and digitalisation', value: 62 },
    { label: 'Restructure energy-intensive activities', value: 52 },
    { label: 'Review or delay investment plans', value: 43 },
    { label: 'Relocate to lower-cost markets', value: 37 }
  ];

  const continuityMeasures = [
    { label: 'Alternative energy sources or suppliers', value: 58 },
    { label: 'Energy efficiency initiatives', value: 56 },
    { label: 'Backup energy sources', value: 54 }
  ];
</script>

<section class="section" id="energy-cost">
  <div class="container">
    <div class="section-heading" use:reveal>
      <span class="section-number">03</span>
      <h2>Energy cost inflation bites</h2>
    </div>

    <div class="body-text" use:reveal>
      <p>
        Disruptions in the Strait of Hormuz - a point controlling about 35 per cent of global seaborne
        crude oil trade - did not remain an abstract geopolitical headline for long. For nearly eight in
        10 Asean businesses, the global shock materialised directly on their monthly utility statements
        and is starting to make its impact felt on their bottom lines.
      </p>
      <p>
        Seventy-nine per cent of businesses surveyed across the region reported higher energy bills this
        year, with companies in Vietnam (87 per cent), Malaysia (83 per cent) and Singapore (82 per
        cent) feeling it the most.
      </p>
      <p>
        Thailand had the lowest proportion of businesses reporting a rise in energy costs, at 69 per
        cent.
      </p>
      <p>
        Across Asean, about a third (34 per cent) reported that the increase was in the moderate range,
        while 22 per cent said that the rise in energy costs was significant or very significant. A
        very significant increase is defined as more than 50 per cent, while a significant increase
        ranges from 30 to 50 per cent, and a moderate increase from 10 to 29 per cent. A slight increase
        in cost is measured as any increase less than 10 per cent.
      </p>
    </div>

    <div use:reveal>
      <BarChart
        caption="Higher costs, lower profits"
        title="Share of businesses reporting higher energy bills"
        items={costByMarket}
      />
    </div>

    <div class="stat-grid" use:reveal>
      <div class="stat-card">
        <div class="stat-value">79%</div>
        <div class="stat-label">of businesses reported higher energy bills this year</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">76%</div>
        <div class="stat-label">say rising energy costs are eroding profitability</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">37%</div>
        <div class="stat-label">
          of Vietnamese firms reported profitability had not been impacted or was positively impacted
        </div>
      </div>
    </div>

    <h3 use:reveal>The profitability squeeze</h3>
    <div class="body-text" use:reveal>
      <p>While the cost shock is widespread, its impact on company bottom lines varies across markets.</p>
      <p>
        Regionally, 76 per cent of Asean businesses reported that rising energy costs are eroding their
        profitability, with companies from Malaysia (84 per cent), Singapore and Indonesia (81 per cent
        respectively) hurting the most.
      </p>
      <p>
        Vietnam presents a striking exception. Vietnamese businesses topped the scales when it came to
        reporting elevated energy costs (87 per cent indicated costs had increased). Yet, their bottom
        lines remained the most resilient in the region — 37 per cent reported that profitability had
        not been impacted or was positively impacted. Just 61 per cent reported that the rising costs
        have had a negative impact on their profitability, compared with the regional average of 76 per
        cent.
      </p>
    </div>

    <blockquote class="quote-block" use:reveal>
      “Renewable energy is increasingly a way to manage costs while meeting regulatory and buyer
      requirements. In Vietnam, access to capital is not the issue. The question is what return that
      capital is willing to accept. And because regulation is still evolving through pilots, the model
      can change, and those changes flow straight through to the bottom line.”
    </blockquote>
    <p class="quote-attr" use:reveal>Douglas Macfarlane, founder and CEO of VHALT</p>

    <CostPressureInteractive />
  </div>

  <div class="media-break">
    <img
      use:parallax={{ speed: 0.25 }}
      src="/images/energy.jpg"
      alt="Solar panels representing energy infrastructure"
    />
  </div>

  <div class="container">
    <h3 use:reveal>What are companies doing to offset rising costs?</h3>
    <div class="body-text" use:reveal>
      <p>It has been over half a year since energy prices have risen.</p>
      <p>Energy cost pressures are most acute across three core operational areas:</p>
    </div>

    <div class="icon-grid" use:reveal>
      <div class="icon-card">
        <div class="emoji" aria-hidden="true">🏭</div>
        <h4>Operations and production costs</h4>
        <div class="pct">58%</div>
      </div>
      <div class="icon-card">
        <div class="emoji" aria-hidden="true">🚢</div>
        <h4>Transport, logistics and supply chain costs</h4>
        <div class="pct">56%</div>
      </div>
      <div class="icon-card">
        <div class="emoji" aria-hidden="true">☁️</div>
        <h4>IT and digital infrastructure</h4>
        <div class="pct">40%</div>
      </div>
    </div>

    <div class="body-text" use:reveal>
      <p>
        Rather than relying on short-term cost recovery measures, the 514 businesses we surveyed are
        leaning into productivity-led solutions such as investing in energy efficiency (61 per cent),
        accelerating automation and AI adoption (54 per cent), and delaying non-essential investments
        (44 per cent).
      </p>
      <p>
        If energy costs remain elevated in the long run, most organisations are choosing to invest in
        energy efficient technologies, equipment or facilities (66 per cent). Many also plan to
        accelerate automation and digitalisation (62 per cent), and reduce or restructure
        energy-intensive business activities (52 per cent).
      </p>
      <p>
        These options take precedence over reviewing or delaying investment and expansion plans (43 per
        cent) or relocating operations to lower-cost markets (37 per cent).
      </p>
      <p>
        This signals a clear strategic pivot across South-east Asia, from viewing energy as an
        operational expense to treating it as a critical enabler of competitiveness, expansion and
        business continuity.
      </p>
    </div>

    <div use:reveal>
      <BarChart
        caption="If energy costs remain elevated"
        title="Asean enterprises favour structural changes"
        items={copingStrategies}
      />
    </div>

    <blockquote class="quote-block" use:reveal>
      “The energy crisis surging gas prices across Asean has pushed up electricity costs for
      businesses, squeezing profit margins and undermining the region’s cost competitiveness. As long
      as Asean remains reliant on imported fuels which are constantly exposed to geopolitical risks, it
      is only a matter of time before another supply disruption.”
    </blockquote>
    <p class="quote-attr" use:reveal>Lam Pham, energy analyst, Ember</p>

    <h3 use:reveal>Building operational resilience</h3>
    <div class="body-text" use:reveal>
      <p>
        Across the region, confidence in energy resilience is high, with 85 per cent of businesses
        reporting they are moderately to very well prepared. Preparedness is particularly strong in
        Thailand (94 per cent) and Indonesia (90 per cent), while businesses in Malaysia (75 per cent)
        and Singapore (81 per cent) report comparatively lower levels of preparedness.
      </p>
      <p>
        To shield their operations from potential disruptions, companies are relying on a mix of
        continuity measures, from securing alternative energy sources or suppliers (58 per cent), to
        implementing energy efficiency initiatives (56 per cent) and maintaining backup energy sources
        (54 per cent).
      </p>
    </div>

    <div use:reveal>
      <BarChart
        caption="Continuity measures"
        title="How companies are preparing for energy disruption"
        items={continuityMeasures}
      />
    </div>
  </div>
</section>

<style>
  .media-break {
    position: relative;
    height: min(62vh, 520px);
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

  .body-text {
    margin-bottom: 1.5rem;
  }
</style>
