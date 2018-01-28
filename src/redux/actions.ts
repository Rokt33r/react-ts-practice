import { Action } from 'redux';

export enum ActionTypes {
  UpdateValue = 'UpdateValue'
}

export namespace Actions {
  export interface UpdateValueAction extends Action {
    type: ActionTypes.UpdateValue;
    payload: {
      value: string
    };
  }
}
export type Actions = Actions.UpdateValueAction;

export const ActionCreators = {
  updateValue: (value: string): Actions.UpdateValueAction => ({
    type: ActionTypes.UpdateValue,
    payload: {
      value
    }
  })
};
