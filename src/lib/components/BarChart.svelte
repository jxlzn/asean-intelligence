<script>
  /**
   * @typedef {{ label: string, value: number, note?: string }} BarItem
   * @type {{
   *   title?: string,
   *   caption?: string,
   *   items: BarItem[],
   *   max?: number,
   *   unit?: string,
   *   accent?: string
   * }}
   */
  let {
    title = '',
    caption = '',
    items = [],
    max = 100,
    unit = '%',
    accent = ''
  } = $props();

  const scaleMax = $derived(Math.max(max, ...items.map((i) => i.value), 1));
</script>

<figure class="chart" style={accent ? `--chart-accent: ${accent}` : undefined}>
  {#if caption}
    <p class="caption">{caption}</p>
  {/if}
  {#if title}
    <figcaption class="chart__title">{title}</figcaption>
  {/if}

  <ul class="bars" role="list">
    {#each items as item, i}
      <li class="bar" style="--i: {i}">
        <div class="bar__meta">
          <span class="bar__label">{item.label}</span>
          <span class="bar__value">{item.value}{unit}</span>
        </div>
        <div
          class="bar__track"
          role="img"
          aria-label="{item.label}: {item.value}{unit}"
        >
          <div class="bar__fill" style="width: {(item.value / scaleMax) * 100}%"></div>
        </div>
        {#if item.note}
          <p class="bar__note">{item.note}</p>
        {/if}
      </li>
    {/each}
  </ul>
</figure>

<style>
  .chart {
    margin: 40px 0;
    padding: 28px 28px 24px;
    background: var(--swatch--white);
    border-radius: 24px;
    box-shadow: 1px 1px 8px #00000014;
    --chart-accent: var(--swatch--moss);
  }

  :global(.section--dark) .chart {
    background: color-mix(in srgb, white 28%, var(--swatch--canopy));
    box-shadow: none;
    --chart-accent: var(--swatch--golden-gate-light-green);
  }

  :global(.section--moss) .chart {
    background: color-mix(in srgb, white 92%, var(--swatch--moss));
    box-shadow: none;
    color: var(--swatch--dark-green);
    --chart-accent: var(--swatch--canopy);
  }

  .chart__title {
    margin: 0 0 20px;
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1.35;
    color: var(--default--heading);
  }

  :global(.section--dark) .chart__title {
    color: var(--swatch--white);
  }

  :global(.section--moss) .chart__title {
    color: var(--swatch--canopy);
  }

  .bars {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .bar__meta {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: baseline;
    margin-bottom: 6px;
  }

  .bar__label {
    font-size: 0.98rem;
    line-height: 1.35;
    font-weight: 600;
  }

  .bar__value {
    flex-shrink: 0;
    font-size: 1rem;
    font-weight: 800;
    color: var(--chart-accent);
    font-variant-numeric: tabular-nums;
  }

  .bar__track {
    height: 10px;
    border-radius: 999px;
    background: rgba(26, 44, 37, 0.08);
    overflow: hidden;
  }

  :global(.section--dark) .bar__track {
    background: rgba(255, 255, 255, 0.14);
  }

  :global(.section--moss) .bar__track {
    background: rgba(26, 44, 37, 0.1);
  }

  .bar__fill {
    height: 100%;
    border-radius: inherit;
    background: var(--chart-accent);
    transform-origin: left center;
    animation: grow 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
    animation-delay: calc(var(--i) * 0.06s);
  }

  .bar__note {
    margin: 6px 0 0;
    font-size: 0.85rem;
    opacity: 0.7;
    line-height: 1.35;
  }

  @keyframes grow {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  @media (max-width: 640px) {
    .chart {
      padding: 22px 18px 18px;
    }
  }
</style>
