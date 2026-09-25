<script>
  import Nav from './lib/components/Nav.svelte';
  import Hero from './lib/components/Hero.svelte';
  import Welcome from './lib/components/Welcome.svelte';
  import ExecutiveSummary from './lib/components/ExecutiveSummary.svelte';
  import EnergyCost from './lib/components/EnergyCost.svelte';
  import Sustainability from './lib/components/Sustainability.svelte';
  import DigitalSurge from './lib/components/DigitalSurge.svelte';
  import WillInvest from './lib/components/WillInvest.svelte';
  import Methodology from './lib/components/Methodology.svelte';
  import Footer from './lib/components/Footer.svelte';

  let menuOpen = $state(false);
</script>

<Nav bind:open={menuOpen} />

<main>
  <Hero />
  <Welcome />
  <ExecutiveSummary />
  <EnergyCost />
  <Sustainability />
  <DigitalSurge />
  <WillInvest />
  <Methodology />
</main>

<Footer />
