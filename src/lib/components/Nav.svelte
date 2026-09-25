<script>
  import { onMount } from 'svelte';

  let { open = $bindable(false) } = $props();

  const links = [
    { id: 'welcome', num: '01', label: 'Welcome' },
    { id: 'executive-summary', num: '02', label: 'Executive Summary' },
    { id: 'energy-cost', num: '03', label: 'Energy cost inflation bites' },
    { id: 'sustainability', num: '04', label: 'Is sustainability taking a backseat?' },
    { id: 'digital-surge', num: '05', label: 'The digital surge meets the energy barrier' },
    { id: 'will-invest', num: '06', label: 'Will businesses invest?' }
  ];

  let scrolled = $state(false);

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 40;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  function toggle() {
    open = !open;
  }

  function close() {
    open = false;
  }

  function go(id) {
    close();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function onKey(e) {
    if (e.key === 'Escape') close();
  }
</script>

<svelte:window onkeydown={onKey} />

{#if open}
  <button class="backdrop" aria-label="Close menu" onclick={close}></button>
{/if}

<header class="nav-wrap" class:scrolled>
  <nav class="navbar" aria-label="Primary">
    <a class="brand" href="#top" onclick={close}>
      <span class="brand-mark" aria-hidden="true">BT</span>
      <span class="brand-text">
        <strong>The Business Times</strong>
        <em>Powering Asean’s Future</em>
      </span>
    </a>

    <button
      class="menu-button"
      class:open
      aria-expanded={open}
      aria-controls="contents-menu"
      aria-label="Contents menu"
      onclick={toggle}
    >
      <span class="menu-label">{open ? 'Close' : 'Menu'}</span>
      <span class="burger" aria-hidden="true">
        <i></i><i></i><i></i>
      </span>
    </button>
  </nav>

  <div
    id="contents-menu"
    class="nav-menu"
    class:open
    role="menu"
    aria-hidden={!open}
  >
    {#each links as link}
      <a
        class="nav-link"
        role="menuitem"
        href={`#${link.id}`}
        onclick={(e) => {
          e.preventDefault();
          go(link.id);
        }}
      >
        <span class="num">{link.num}</span>
        <span class="label">{link.label}</span>
      </a>
    {/each}
  </div>
</header>

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    z-index: 90;
    background: transparent;
    border: none;
    cursor: default;
  }

  .nav-wrap {
    position: fixed;
    top: 24px;
    left: 24px;
    z-index: 100;
    width: min(420px, calc(100vw - 48px));
    transition: top 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .nav-wrap.scrolled {
    top: 16px;
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    background: var(--swatch--white);
    border-radius: var(--nav-radius);
    padding: 10px 12px 10px 16px;
    box-shadow: 1px 1px 8px #0000001f;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    color: var(--swatch--canopy);
  }

  .brand-mark {
    flex: none;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: var(--swatch--canopy);
    color: white;
    display: grid;
    place-items: center;
    font-weight: 800;
    font-size: 0.85rem;
    letter-spacing: 0.02em;
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
    line-height: 1.15;
  }

  .brand-text strong {
    font-family: var(--font-serif);
    font-size: 1.05rem;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .brand-text em {
    font-style: normal;
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--swatch--canopy);
    opacity: 0.75;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .menu-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    flex: none;
    background: var(--swatch--canopy);
    color: var(--swatch--white);
    border-radius: 24px;
    padding: 12px 18px;
    font-size: 1.05rem;
    font-weight: 600;
    transition: background-color 0.25s ease;
  }

  .menu-button:hover,
  .menu-button.open {
    background: color-mix(in srgb, var(--swatch--canopy) 82%, black);
  }

  .burger {
    width: 16px;
    height: 12px;
    position: relative;
    display: inline-block;
  }

  .burger i {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease, top 0.3s ease;
  }

  .burger i:nth-child(1) {
    top: 0;
  }
  .burger i:nth-child(2) {
    top: 5px;
  }
  .burger i:nth-child(3) {
    top: 10px;
  }

  .menu-button.open .burger i:nth-child(1) {
    top: 5px;
    transform: rotate(45deg);
  }
  .menu-button.open .burger i:nth-child(2) {
    opacity: 0;
  }
  .menu-button.open .burger i:nth-child(3) {
    top: 5px;
    transform: rotate(-45deg);
  }

  .nav-menu {
    background: var(--swatch--menu);
    border-radius: var(--nav-radius);
    margin-top: 12px;
    padding: 16px 0 20px;
    display: flex;
    flex-direction: column;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
    transform: translateY(-8px);
    transition:
      max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1),
      opacity 0.3s ease,
      transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
    box-shadow: 1px 1px 16px #00000033;
  }

  .nav-menu.open {
    max-height: 70vh;
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    overflow-y: auto;
  }

  .nav-link {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    color: var(--swatch--white);
    padding: 14px 28px;
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 130%;
    transition: color 0.2s ease, background 0.2s ease;
  }

  .nav-link:hover {
    color: var(--swatch--mint-wash);
    background: rgba(255, 255, 255, 0.04);
  }

  .num {
    flex: none;
    color: var(--swatch--mint-soft);
    font-weight: 800;
    min-width: 1.8rem;
  }

  @media (max-width: 767px) {
    .nav-wrap {
      top: 12px;
      left: 12px;
      width: calc(100vw - 24px);
    }

    .brand-text em {
      display: none;
    }

    .menu-label {
      display: none;
    }

    .menu-button {
      padding: 12px 14px;
    }
  }
</style>
