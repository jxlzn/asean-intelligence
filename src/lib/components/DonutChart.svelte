<script>
  /**
   * @typedef {{ label: string, value: number, color: string }} Slice
   * @type {{
   *   title?: string,
   *   caption?: string,
   *   items: Slice[],
   *   centerLabel?: string,
   *   centerValue?: string
   * }}
   */
  let {
    title = '',
    caption = '',
    items = [],
    centerLabel = '',
    centerValue = ''
  } = $props();

  const gradient = $derived.by(() => {
    let start = 0;
    return items
      .map((item) => {
        const end = start + item.value;
        const slice = `${item.color} ${start}% ${end}%`;
        start = end;
        return slice;
      })
      .join(', ');
  });
</script>

<figure class="chart">
  {#if caption}
    <p class="caption">{caption}</p>
  {/if}
  {#if title}
    <figcaption class="chart__title">{title}</figcaption>
  {/if}

  <div class="chart__body">
    <div
      class="donut"
      style="background: conic-gradient({gradient})"
      role="img"
      aria-label={items.map((i) => `${i.label} ${i.value}%`).join(', ')}
    >
      <div class="donut__hole">
        {#if centerValue}
          <span class="donut__value">{centerValue}</span>
        {/if}
        {#if centerLabel}
          <span class="donut__label">{centerLabel}</span>
        {/if}
      </div>
    </div>

    <ul class="legend" role="list">
      {#each items as item}
        <li>
          <span class="swatch" style="background: {item.color}"></span>
          <span class="legend__label">{item.label}</span>
          <span class="legend__value">{item.value}%</span>
        </li>
      {/each}
    </ul>
  </div>
</figure>

<style>
  .chart {
    margin: 40px 0;
    padding: 28px;
    background: var(--swatch--white);
    border-radius: 24px;
    box-shadow: 1px 1px 8px #00000014;
  }

  :global(.section--dark) .chart {
    background: var(--swatch--mint-soft);
    box-shadow: none;
    color: var(--swatch--dark-green);
  }

  :global(.section--moss) .chart {
    background: var(--swatch--mint-soft);
    box-shadow: none;
    color: var(--swatch--dark-green);
  }

  .chart__title {
    margin: 0 0 24px;
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1.35;
    color: var(--default--heading);
  }

  :global(.section--dark) .chart__title,
  :global(.section--moss) .chart__title {
    color: var(--swatch--canopy);
  }

  .chart__body {
    display: grid;
    grid-template-columns: minmax(160px, 220px) 1fr;
    gap: 32px;
    align-items: center;
  }

  .donut {
    aspect-ratio: 1;
    width: 100%;
    max-width: 220px;
    margin-inline: auto;
    border-radius: 50%;
    display: grid;
    place-items: center;
    animation: pop 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  .donut__hole {
    width: 58%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--swatch--white);
    display: grid;
    place-content: center;
    text-align: center;
    gap: 2px;
    padding: 8px;
  }

  :global(.section--dark) .donut__hole,
  :global(.section--moss) .donut__hole {
    background: var(--swatch--mint-soft);
  }

  .donut__value {
    font-size: 1.6rem;
    font-weight: 800;
    line-height: 1;
    color: var(--swatch--canopy);
  }

  :global(.section--dark) .donut__value,
  :global(.section--moss) .donut__value {
    color: var(--swatch--canopy);
  }

  .donut__label {
    font-size: 0.72rem;
    line-height: 1.2;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .legend {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .legend li {
    display: grid;
    grid-template-columns: 12px 1fr auto;
    gap: 12px;
    align-items: start;
  }

  .swatch {
    width: 12px;
    height: 12px;
    border-radius: 3px;
    margin-top: 4px;
  }

  .legend__label {
    font-size: 0.95rem;
    line-height: 1.4;
  }

  .legend__value {
    font-weight: 800;
    font-variant-numeric: tabular-nums;
    color: var(--swatch--canopy);
  }

  :global(.section--dark) .legend__value,
  :global(.section--moss) .legend__value {
    color: var(--swatch--canopy);
  }

  @keyframes pop {
    from {
      opacity: 0;
      transform: scale(0.88);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 720px) {
    .chart__body {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .donut {
      max-width: 180px;
    }
  }
</style>
