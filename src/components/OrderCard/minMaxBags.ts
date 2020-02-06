const minBagsEnv = process.env.REACT_APP_MIN_BAGS_PER_ORDER;
export const minBags = minBagsEnv ? Number(minBagsEnv) : 1;

const maxBagsEnv = process.env.REACT_APP_MAX_BAGS_PER_ORDER;
export const maxBags = maxBagsEnv ? Number(maxBagsEnv) : 5;
