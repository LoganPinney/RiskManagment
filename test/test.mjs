import assert from 'assert';
import { calculateRiskPerTrade, calculateTotalPotentialLoss, calculateTotalPotentialGain } from '../src/utils/calculations.js';

assert.strictEqual(calculateRiskPerTrade({ capital: 100000, riskPercent: 1 }), 1000, 'risk per trade');
assert.strictEqual(
  calculateTotalPotentialLoss({ sharePrice: 50, shares: 100, stopAfterReds: 3 }),
  15000,
  'total potential loss'
);
assert.strictEqual(
  calculateTotalPotentialGain({ target: 1, shares: 100 }),
  100,
  'total potential gain'
);

console.log('All tests passed');
