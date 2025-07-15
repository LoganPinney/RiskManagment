export function calculateRiskPerTrade({ capital, riskPercent }) {
  return (capital * riskPercent) / 100;
}

export function calculateTotalPotentialLoss({ sharePrice, shares, stopAfterReds }) {
  return sharePrice * shares * (stopAfterReds || 1);
}

export function calculateTotalPotentialGain({ target, shares }) {
  return target * shares;
}
