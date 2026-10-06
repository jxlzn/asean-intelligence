<script>
  import { reveal } from '../actions.js';
</script>

<section class="section section--moss" id="executive-summary">
  <div class="container">
    <div class="section-heading" use:reveal>
      <span class="section-number">02</span>
      <h2>Executive Summary</h2>
    </div>

    <div class="intro" use:reveal>
      <p class="lede">
        Powering Asean’s Future examines how enterprise decision-makers across South-east Asia are
        managing the intersection of energy cost inflation, AI adoption, and corporate net-zero
        commitments.
      </p>
      <p class="body-copy">
        What emerges is a picture of operational pragmatism and strategic recalibration. Asean
        enterprises are confronting immediate cost shocks and energy constraints by pivoting from
        high-level sustainability pledges to tangible, productivity-led efficiency measures.
      </p>
    </div>

    <h3 use:reveal>Key takeaways</h3>

    <div class="takeaway" use:reveal>
      <h4>
        <a href="#energy-cost">Energy cost inflation bites</a>
      </h4>
      <ul class="bullet-list">
        <li>
          79 per cent of Asean enterprises experienced higher energy costs since the start of this
          year, and 76 per cent reported that this is eroding their profitability.
        </li>
        <li>
          The hit to profits was most severely felt in Malaysia (84 per cent), followed by Singapore
          and Indonesia (81 per cent respectively).
        </li>
        <li>
          Vietnam presented a striking exception: Only 61 per cent saw a hit to their profitability,
          even though 87 per cent of Vietnam respondents faced higher energy costs.
        </li>
        <li>
          Rather than relying on short-term cost recovery measures, businesses are leaning into
          productivity-led solutions such as investing in energy efficiency (61 per cent) and
          accelerating automation and AI adoption (54 per cent), or delaying non-essential investments
          (44 per cent).
        </li>
        <li>
          Across the region, confidence in energy resilience is high, with 85 per cent of businesses
          reporting they are moderately to very well prepared. Preparedness is particularly strong in
          Thailand (94 per cent) and Indonesia (90 per cent), while businesses in Malaysia (75 per
          cent) and Singapore (81 per cent) report comparatively lower levels of preparedness.
        </li>
      </ul>
    </div>

    <div class="takeaway" use:reveal>
      <h4>
        <a href="#sustainability">Is sustainability taking a backseat?</a>
      </h4>
      <ul class="bullet-list">
        <li>
          Cost efficiency leads decision-making for 38 per cent of organisations, followed by energy
          security and reliability (26 per cent). Pure sustainability and decarbonisation goals were
          identified as the primary driver by only 9 per cent of businesses.
        </li>
        <li>
          Driven by immediate margin pressures, 53 per cent of Asean businesses have delayed or
          deprioritised decarbonisation plans.
        </li>
        <li>
          Singapore led the region with the highest proportion of businesses reporting significant
          delays (29 per cent) compared with the regional average of 20 per cent.
        </li>
        <li>
          On the flipside, some Asean businesses are still accelerating their sustainability plans.
          This is especially in Indonesia (39 per cent) and Vietnam (37 per cent).
        </li>
        <li>ESG remains firmly embedded as a strategic priority for 76 per cent of Asean businesses.</li>
        <li>
          Green financing serves as the single strongest enabler in the region, with 87 per cent of
          businesses reporting improved access to sustainable capital.
        </li>
      </ul>
    </div>

    <div class="takeaway" use:reveal>
      <h4>
        <a href="#digital-surge">The digital surge meets the energy barrier</a>
      </h4>
      <ul class="bullet-list">
        <li>
          Driven by productivity goals, 62 per cent of enterprises increased AI investments over the
          past 12 months.
        </li>
        <li>
          81 per cent expect the scaling up of AI use to drive moderate-to-significant increases in
          energy demand, raising concerns over rising electricity or operating costs (46 per cent) and
          infrastructure upgrade requirements (39 per cent).
        </li>
        <li>
          To manage these challenges, 52 per cent of Asean enterprises are prioritising energy-efficient
          AI solutions, 48 per cent are evaluating AI investments through an energy-cost lens, and 46
          per cent are setting targets to manage AI-related energy consumption.
        </li>
        <li>
          Despite these concerns, 78 per cent of leaders remain convinced that the commercial benefits
          of AI outweigh its energy burden.
        </li>
      </ul>
    </div>

    <div class="takeaway" use:reveal>
      <h4>
        <a href="#plugged-in">Can the Asean Power Grid deliver?</a>
      </h4>
      <ul class="bullet-list">
        <li>
          81 per cent of businesses state that energy availability, reliability, and affordability
          directly influence their regional investment and expansion decisions.
        </li>
        <li>
          Awareness of the Asean Power Grid (APG) – the effort to link up the region’s power systems
          for cross-border electricity trade – is exceptionally high, with 87 per cent of respondents
          monitoring it very or somewhat closely.
        </li>
        <li>
          Progress on regional grid connectivity serves as a major driver for capital deployment: 71
          per cent indicated that meaningful progress on the regional grid would directly increase
          their willingness to invest in Asean.
        </li>
        <li>
          Confidence in near-term grid progress remains positive - 65 per cent of businesses expect
          meaningful APG progress within the next three to five years.
        </li>
      </ul>
    </div>
  </div>
</section>

<style>
  .intro {
    margin-bottom: 48px;
  }

  .body-copy {
    font-size: 1.15rem;
    line-height: 1.65;
    max-width: 70ch;
    margin: 24px 0 0;
  }

  .takeaway {
    margin-top: 36px;
    padding-top: 8px;
  }

  .takeaway h4 {
    color: var(--swatch--white);
    margin-bottom: 0.75rem;
  }

  .takeaway h4 a {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 0.18em;
    text-decoration-thickness: 1px;
    transition: opacity 0.2s var(--ease-out);
  }

  .takeaway h4 a:hover {
    opacity: 0.7;
  }
</style>
