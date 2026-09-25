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
          79 per cent of ASEAN enterprises experienced higher utility bills this year, leading 76 per
          cent to report shrinking profit margins (severely felt in Malaysia at 84 per cent, and
          Singapore and Indonesia at 81 per cent).
        </li>
        <li>
          Vietnam presents a striking exception: Despite 87 per cent reporting elevated energy costs, 37
          per cent maintained resilient profit margins due to operational hedging and productivity
          measures.
        </li>
        <li>
          To cope with elevated costs, 39 per cent of businesses are passing price increases to
          customers (Malaysia 50 per cent), while 54 per cent of Singaporean firms absorb cost increases
          internally.
        </li>
      </ul>
    </div>

    <div class="takeaway" use:reveal>
      <h4>
        <a href="#sustainability">Is sustainability taking a backseat?</a>
      </h4>
      <ul class="bullet-list">
        <li>
          Driven by immediate margin pressures, 53 per cent of businesses have delayed or deprioritised
          net-zero goals. Singapore leads the region in reporting significant delays (29 per cent),
          whereas Indonesia (39 per cent) and Vietnam (37 per cent) are accelerating sustainability
          plans.
        </li>
        <li>
          ESG remains firmly embedded in core operations (76 per cent). Companies are prioritising
          cost-reducing, mature technologies: energy efficiency (41 per cent) and solar/on-site
          renewables (66 per cent).
        </li>
        <li>
          Green financing serves as the primary catalyst, with 87 per cent of businesses reporting
          improved access to sustainable capital.
        </li>
      </ul>
    </div>

    <div class="takeaway" use:reveal>
      <h4>
        <a href="#digital-surge">The digital surge meets the energy barrier</a>
      </h4>
      <ul class="bullet-list">
        <li>
          Driven by productivity goals, 63 per cent of enterprises increased AI investments over the
          past 12 months (led by Indonesia at 85 per cent).
        </li>
        <li>
          81 per cent expect AI scaling to drive moderate-to-significant increases in energy demand,
          raising concerns over rising operating costs (46 per cent) and infrastructure upgrade
          requirements (39 per cent).
        </li>
        <li>
          Despite power constraints, 78 per cent of leaders remain convinced that the commercial returns
          of AI outweigh its energy burden.
        </li>
      </ul>
    </div>

    <div class="takeaway" use:reveal>
      <h4>
        <a href="#will-invest">Will businesses invest?</a>
      </h4>
      <ul class="bullet-list">
        <li>
          81 per cent of business leaders state that energy availability, reliability, and affordability
          directly influence their regional investment and expansion decisions.
        </li>
        <li>
          Awareness of the ASEAN Power Grid (APG) is exceptionally high (87 per cent), and 71 per cent
          indicate that meaningful progress on the regional grid would directly increase their
          willingness to invest in ASEAN.
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
