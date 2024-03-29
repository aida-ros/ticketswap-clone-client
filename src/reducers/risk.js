import { RISK_CALCULATED } from '../actions/tickets';

export const riskRate = (state = null, action) => {
  switch (action.type) {
    case RISK_CALCULATED:
      return action.payload
    default:
      return state
  }
}