<script>
  import { reveal } from '../actions.js';
</script>

<section class="section" id="welcome">
  <div class="container">
    <div class="section-heading" use:reveal>
      <span class="section-number">01</span>
      <h2>Welcome</h2>
    </div>

    <div class="two-col">
      <div class="body-text" use:reveal>
        <p>
          Following the warm reception to our inaugural flagship study, Asean Intelligence 2026, The
          Business Times is proud to present our second regional report, Powering Asean’s Future.
        </p>
        <p>
          Our purpose in undertaking this research is simple yet vital: to look beyond the daily churn
          of geopolitical headlines and provide a rigorous, grounded examination of how Southeast Asian
          enterprises are navigating a rapidly evolving energy landscape shaped by rising energy costs,
          growing sustainability expectations, and the accelerating adoption of AI and digital
          technologies.
        </p>
        <p>
          We are living through a period of profound recalibration. Asean businesses are currently
          navigating a fourth factor being thrown into the traditional understanding of the energy
          trilemma: artificial intelligence (AI). The effect of accelerating integration of AI on
          energy security, energy equity (affordability), and environmental sustainability is real.
          And for many leaders, balancing these competing imperatives has become the defining strategic
          challenge of our time.
        </p>
      </div>

      <div use:reveal={{ threshold: 0.2 }}>
        <div class="body-text">
          <p>
            To understand how these tensions manifest on the ground, we surveyed 514 business leaders
            across the region in partnership with research agency Kantar.
          </p>
          <p>
            What we found is a narrative of pragmatism and difficult trade-offs. While immediate
            financial pressures have forced some organisations to temporarily rethink their
            sustainability commitments, the underlying dedication to a sustainable, digital-first
            future remains robust.
          </p>
          <p>
            We hope this report serves not only as a benchmark of where the region stands today, but as
            a thoughtful companion for leaders charting their course through uncertainty.
          </p>
        </div>

        <div class="author" use:reveal>
          <p class="name">Mindy Tan</p>
          <p class="role">BT Insights Editor</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .author {
    margin-top: 48px;
    padding-left: 24px;
    border-left: 1px solid var(--default--text);
  }

  .name {
    margin: 0 0 4px;
    font-weight: 800;
    font-size: 1.25rem;
    color: var(--swatch--canopy);
  }

  .role {
    margin: 0;
    opacity: 0.75;
    font-size: 0.95rem;
  }
</style>
