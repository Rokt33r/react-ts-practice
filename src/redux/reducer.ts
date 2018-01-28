import { RootState } from './types';
import { ActionTypes, Actions } from './actions';

const initialState: RootState = {
  value: ''
};

export function reducer(state: RootState = initialState, action: Actions): RootState {
  switch (action.type) {
    case ActionTypes.UpdateValue:
      const { value } = action.payload;
      return {
        ...state,
        value
      };
    default:
      return state;
  }
}
