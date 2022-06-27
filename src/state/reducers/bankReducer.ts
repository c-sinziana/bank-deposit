import { ActionType } from "../action-types/index";
import { Action } from "../actions";

const initialState = 0;

const reducer = (state: number = initialState, action: Action): number => {
  if (action.type === ActionType.DEPOSIT) return state + action.payload;
  else if (action.type === ActionType.WITHDRAW && state > 0)
    return state - action.payload;
  if (action.type === ActionType.BANKRUPT) return 0;
  else return state;
};

export default reducer;
