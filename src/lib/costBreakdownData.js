export const countryOptions = [
  { value: 'ALL', label: 'All ASEAN' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'Malaysia', label: 'Malaysia' },
  { value: 'Indonesia', label: 'Indonesia' },
  { value: 'Philippines', label: 'Philippines' },
  { value: 'Thailand', label: 'Thailand' },
  { value: 'Vietnam', label: 'Vietnam' }
];

/**
 * Exact figures from public/data Excel embeds:
 * - EmbeddedFile.xlsx → B1 energy cost change
 * - EmbeddedFile (1).xlsx → B2 profitability impact
 * Percentages stored as whole numbers (e.g. 79 = 79%).
 */
export const countryData = {
  ALL: {
    title: 'All ASEAN Markets (Total Benchmark)',
    sample: 'Total N=514',
    // B1
    increaseNet: 79,
    cost: {
      verySignificant: 5, // >50%
      significant: 17, // 30–50%
      moderate: 34, // 10–29%
      slight: 23, // <10%
      unchanged: 10,
      decreased: 11
    },
    // B2
    negativeNet: 76,
    profit: {
      significant: 14,
      moderate: 30,
      minor: 32,
      none: 13,
      positive: 11,
      notSure: 1
    },
    s9Takeaway:
      'Overall, 79% of ASEAN firms report higher energy costs, most commonly at moderate levels of 10–29% (34%).',
    s10Takeaway:
      '44% of companies across ASEAN experience moderate-to-significant profit erosion; Negative (NET) stands at 76%.'
  },
  Singapore: {
    title: 'Singapore Market',
    sample: 'N=84',
    increaseNet: 82,
    cost: {
      verySignificant: 2,
      significant: 19,
      moderate: 38,
      slight: 23,
      unchanged: 12,
      decreased: 6
    },
    negativeNet: 81,
    profit: {
      significant: 15,
      moderate: 30,
      minor: 36,
      none: 14,
      positive: 5,
      notSure: 0
    },
    s9Takeaway:
      '82% of Singapore firms report higher energy costs, with moderate increases (10–29%) the most common at 38%.',
    s10Takeaway:
      '81% report a negative impact on profitability (NET), above the ASEAN average of 76%.'
  },
  Malaysia: {
    title: 'Malaysia Market',
    sample: 'N=76',
    increaseNet: 83,
    cost: {
      verySignificant: 5,
      significant: 21,
      moderate: 33,
      slight: 24,
      unchanged: 9,
      decreased: 8
    },
    negativeNet: 84,
    profit: {
      significant: 13,
      moderate: 29,
      minor: 42,
      none: 8,
      positive: 5,
      notSure: 3
    },
    s9Takeaway:
      '83% of Malaysian firms report higher energy costs, among the highest incidence rates in ASEAN.',
    s10Takeaway:
      'Malaysia records the highest Negative (NET) at 84%, with 42% reporting a minor negative impact.'
  },
  Indonesia: {
    title: 'Indonesia Market',
    sample: 'N=88',
    increaseNet: 81,
    cost: {
      verySignificant: 6,
      significant: 15,
      moderate: 36,
      slight: 24,
      unchanged: 7,
      decreased: 13
    },
    negativeNet: 81,
    profit: {
      significant: 8,
      moderate: 32,
      minor: 41,
      none: 6,
      positive: 11,
      notSure: 2
    },
    s9Takeaway:
      '81% of Indonesian firms report higher energy costs, closely tracking the regional Increase (NET) of 79%.',
    s10Takeaway:
      '81% report a negative profitability impact (NET), with minor negative impact the largest single category at 41%.'
  },
  Philippines: {
    title: 'Philippines Market',
    sample: 'N=88',
    increaseNet: 74,
    cost: {
      verySignificant: 8,
      significant: 17,
      moderate: 26,
      slight: 23,
      unchanged: 15,
      decreased: 11
    },
    negativeNet: 74,
    profit: {
      significant: 14,
      moderate: 32,
      minor: 28,
      none: 9,
      positive: 17,
      notSure: 0
    },
    s9Takeaway:
      '74% of Philippine firms report higher energy costs, below the ASEAN Increase (NET) of 79%.',
    s10Takeaway:
      '74% report a negative profitability impact (NET), while 17% report a positive impact — the highest in ASEAN.'
  },
  Thailand: {
    title: 'Thailand Market',
    sample: 'N=88',
    increaseNet: 68,
    cost: {
      verySignificant: 6,
      significant: 15,
      moderate: 32,
      slight: 16,
      unchanged: 16,
      decreased: 16
    },
    negativeNet: 73,
    profit: {
      significant: 20,
      moderate: 22,
      minor: 31,
      none: 14,
      positive: 13,
      notSure: 1
    },
    s9Takeaway:
      'Thailand reports the lowest Increase (NET) at 68%, with 16% saying costs decreased and 16% unchanged.',
    s10Takeaway:
      '73% report a negative profitability impact (NET); significant negative impact is highest in the region at 20%.'
  },
  Vietnam: {
    title: 'Vietnam Market',
    sample: 'N=90',
    increaseNet: 87,
    cost: {
      verySignificant: 1,
      significant: 17,
      moderate: 39,
      slight: 30,
      unchanged: 3,
      decreased: 10
    },
    negativeNet: 61,
    profit: {
      significant: 14,
      moderate: 33,
      minor: 14,
      none: 26,
      positive: 11,
      notSure: 1
    },
    s9Takeaway:
      'Vietnam tops the region with an Increase (NET) of 87%, most commonly at moderate levels of 10–29% (39%).',
    s10Takeaway:
      'Despite high cost incidence, Vietnam has the lowest Negative (NET) at 61%, with 26% reporting no impact on profits.'
  }
};

/** Derived KPI helpers */
export function kpis(d) {
  const highCost = d.cost.verySignificant + d.cost.significant;
  const profitErosion = d.profit.significant + d.profit.moderate;
  const resilient = d.profit.positive + d.profit.none + d.profit.minor;
  return {
    increased: `${d.increaseNet}%`,
    highImpact: `${highCost}%`,
    profitImpact: `${profitErosion}%`,
    lowProfitImpact: `${resilient}%`
  };
}
