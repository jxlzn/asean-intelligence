<script>
  import { countryData, countryOptions, kpis } from '../costBreakdownData.js';
  import { reveal } from '../actions.js';

  let selected = $state('ALL');

  const data = $derived(countryData[selected]);
  const metrics = $derived(kpis(data));

  const costSegments = $derived([
    {
      key: 'verySignificant',
      label: 'Increased very significantly (>50%)',
      value: data.cost.verySignificant,
      color: '#004b87'
    },
    {
      key: 'significant',
      label: 'Increased significantly (30–50%)',
      value: data.cost.significant,
      color: '#2da3d0'
    },
    {
      key: 'moderate',
      label: 'Increased moderately (10–29%)',
      value: data.cost.moderate,
      color: '#90d1e9'
    },
    {
      key: 'slight',
      label: 'Increased slightly (<10%)',
      value: data.cost.slight,
      color: '#cceaf5'
    },
    {
      key: 'unchanged',
      label: 'Remained broadly unchanged',
      value: data.cost.unchanged,
      color: '#f7a84b'
    },
    {
      key: 'decreased',
      label: 'Have decreased',
      value: data.cost.decreased,
      color: '#633517'
    }
  ]);

  const profitBars = $derived([
    { label: 'Significant negative', value: data.profit.significant, color: '#004b87' },
    { label: 'Moderate negative', value: data.profit.moderate, color: '#2da3d0' },
    { label: 'Minor negative', value: data.profit.minor, color: '#90d1e9' },
    { label: 'No impact', value: data.profit.none, color: '#f7a84b' },
    { label: 'Positive impact', value: data.profit.positive, color: '#00b38c' },
    ...(data.profit.notSure > 0
      ? [{ label: 'Not sure', value: data.profit.notSure, color: '#8a857c' }]
      : [])
  ]);

  const donutGradient = $derived.by(() => {
    let start = 0;
    return costSegments
      .map((seg) => {
        const end = start + seg.value;
        const slice = `${seg.color} ${start}% ${end}%`;
        start = end;
        return slice;
      })
      .join(', ');
  });

  const maxBar = 50;
</script>

<div class="interactive" use:reveal>
  <div class="interactive__head">
    <div>
      <h4>
        How are companies from your country experiencing energy cost pressures and its impact on
        profitability?
      </h4>
    </div>

    <label class="country-select">
      <span class="country-select__label">Select country</span>
      <div class="country-select__wrap">
        <select bind:value={selected} aria-label="Select country">
          {#each countryOptions as opt}
            <option value={opt.value}>{opt.label}</option>
          {/each}
        </select>
      </div>
    </label>
  </div>

  <div class="banner">
    <div>
      <p class="banner__eyebrow">Selected market</p>
      <p class="banner__title">{data.title}</p>
    </div>
    <span class="badge">Sample size: {data.sample}</span>
  </div>

  <div class="kpi-grid">
    <div class="kpi">
      <p class="kpi__value">{metrics.increased}</p>
      <p class="kpi__text">
        of firms report <em>higher energy costs</em>
      </p>
    </div>
    <div class="kpi">
      <p class="kpi__value">{metrics.highImpact}</p>
      <p class="kpi__text">
        saw costs rise <em>significantly or more (≥30%)</em>
      </p>
    </div>
    <div class="kpi">
      <p class="kpi__value">{metrics.profitImpact}</p>
      <p class="kpi__text">
        faced <em>moderate or significant</em> profit pressure
      </p>
    </div>
    <div class="kpi">
      <p class="kpi__value">{metrics.lowProfitImpact}</p>
      <p class="kpi__text">
        saw only <em>minor, none, or positive</em> profit impact
      </p>
    </div>
  </div>

  <div class="panels">
    <article class="panel">
      <p class="panel__eyebrow">B1 · Energy cost change</p>
      <h5>Magnitude of energy cost increase</h5>

      <div class="donut-row">
        <div
          class="donut"
          style={`background: conic-gradient(${donutGradient});`}
          role="img"
          aria-label="Energy cost change distribution"
        >
          <div class="donut__hole">
            <strong>{data.increaseNet}%</strong>
            <span>Increase NET</span>
          </div>
        </div>

        <ul class="legend">
          {#each costSegments as seg}
            <li>
              <span class="swatch" style={`background:${seg.color}`}></span>
              <span class="legend__label">{seg.label}</span>
              <strong>{seg.value}%</strong>
            </li>
          {/each}
        </ul>
      </div>

      <p class="takeaway"><strong>Key takeaway:</strong> {data.s9Takeaway}</p>
    </article>

    <article class="panel">
      <p class="panel__eyebrow">B2 · Profitability impact</p>
      <h5>Impact of energy costs on profitability</h5>

      <div class="bars" role="img" aria-label="Profitability impact distribution">
        {#each profitBars as bar}
          <div class="bar-row">
            <div class="bar-meta">
              <span>{bar.label}</span>
              <strong>{bar.value}%</strong>
            </div>
            <div class="bar-track">
              <div
                class="bar-fill"
                style={`width:${(bar.value / maxBar) * 100}%; background:${bar.color}`}
              ></div>
            </div>
          </div>
        {/each}
      </div>

      <div class="mini-stats">
        <div>
          <span>Negative (NET)</span>
          <strong>{data.negativeNet}%</strong>
        </div>
        <div>
          <span>Mod + Significant</span>
          <strong>{data.profit.moderate + data.profit.significant}%</strong>
        </div>
        <div>
          <span>Positive</span>
          <strong>{data.profit.positive}%</strong>
        </div>
      </div>

      <p class="takeaway"><strong>Key takeaway:</strong> {data.s10Takeaway}</p>
    </article>
  </div>
</div>

<style>
  .interactive {
    margin-top: 48px;
    padding: 36px 32px;
    background: var(--swatch--white);
    border-radius: 28px;
    box-shadow: 1px 1px 12px #00000014;
  }

  .interactive__head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    margin-bottom: 28px;
    flex-wrap: wrap;
  }

  h4 {
    margin: 0;
    max-width: 34ch;
    font-size: clamp(1.35rem, 2.2vw, 1.85rem);
    line-height: 1.25;
  }

  .country-select {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: min(280px, 100%);
  }

  .country-select__label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--swatch--canopy);
  }

  .country-select__wrap {
    position: relative;
  }

  .country-select__wrap::after {
    content: '';
    position: absolute;
    right: 16px;
    top: 50%;
    width: 8px;
    height: 8px;
    border-right: 2px solid var(--swatch--canopy);
    border-bottom: 2px solid var(--swatch--canopy);
    transform: translateY(-60%) rotate(45deg);
    pointer-events: none;
  }

  select {
    width: 100%;
    appearance: none;
    border: 1.5px solid #d9d2c6;
    background: var(--swatch--beige);
    color: var(--swatch--dark-green);
    border-radius: 999px;
    padding: 14px 44px 14px 20px;
    font-family: var(--font-sans);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  select:focus {
    outline: none;
    border-color: var(--swatch--canopy);
    box-shadow: 0 0 0 3px rgba(0, 179, 140, 0.2);
  }

  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    padding: 20px 24px;
    border-radius: 20px;
    background: var(--swatch--canopy);
    color: white;
    margin-bottom: 24px;
  }

  .banner__eyebrow {
    margin: 0 0 4px;
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.75;
  }

  .banner__title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 800;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    padding: 8px 14px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.18);
    font-size: 0.85rem;
    font-weight: 600;
  }

  .kpi-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .kpi {
    background: var(--swatch--beige);
    border-radius: 18px;
    padding: 22px 20px;
  }

  .kpi__value {
    margin: 0 0 12px;
    font-size: clamp(2.4rem, 3.5vw, 3rem);
    font-weight: 800;
    line-height: 1;
    color: var(--swatch--canopy);
  }

  .kpi__text {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.4;
    color: var(--swatch--dark-green);
  }

  .kpi__text em {
    font-style: normal;
    font-weight: 700;
    color: var(--swatch--canopy);
  }

  .panels {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .panel {
    background: var(--swatch--beige);
    border-radius: 22px;
    padding: 24px;
    display: flex;
    flex-direction: column;
  }

  .panel__eyebrow {
    margin: 0 0 6px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--swatch--canopy);
  }

  h5 {
    margin: 0 0 20px;
    font-size: 1.2rem;
    color: var(--swatch--canopy);
    font-weight: 800;
  }

  .donut-row {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 20px;
    align-items: center;
    margin-bottom: 18px;
  }

  .donut {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    transition: background 0.45s ease;
  }

  .donut__hole {
    width: 92px;
    height: 92px;
    border-radius: 50%;
    background: var(--swatch--beige);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .donut__hole strong {
    font-size: 1.35rem;
    color: var(--swatch--canopy);
    line-height: 1;
  }

  .donut__hole span {
    font-size: 0.62rem;
    margin-top: 4px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    opacity: 0.7;
  }

  .legend {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .legend li {
    display: grid;
    grid-template-columns: 12px 1fr auto;
    gap: 10px;
    align-items: center;
    font-size: 0.82rem;
  }

  .swatch {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .legend__label {
    opacity: 0.85;
    line-height: 1.25;
  }

  .bars {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 18px;
  }

  .bar-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
    font-size: 0.88rem;
  }

  .bar-track {
    height: 12px;
    border-radius: 999px;
    background: rgba(26, 44, 37, 0.08);
    overflow: hidden;
  }

  .bar-fill {
    height: 100%;
    border-radius: 999px;
    transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .mini-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 18px;
  }

  .mini-stats div {
    background: var(--swatch--white);
    border-radius: 14px;
    padding: 12px 10px;
    text-align: center;
  }

  .mini-stats span {
    display: block;
    font-size: 0.68rem;
    opacity: 0.7;
    margin-bottom: 4px;
  }

  .mini-stats strong {
    font-size: 1.05rem;
    color: var(--swatch--canopy);
  }

  .takeaway {
    margin: auto 0 0;
    padding-top: 16px;
    border-top: 1px solid rgba(26, 44, 37, 0.12);
    font-size: 0.92rem;
    line-height: 1.45;
    color: var(--swatch--dark-green);
  }

  .takeaway strong {
    color: var(--swatch--canopy);
  }

  @media (max-width: 991px) {
    .kpi-grid,
    .panels {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 767px) {
    .interactive {
      padding: 24px 18px;
      border-radius: 22px;
    }

    .kpi-grid,
    .panels,
    .donut-row,
    .mini-stats {
      grid-template-columns: 1fr;
    }

    .donut {
      margin-inline: auto;
    }
  }
</style>
