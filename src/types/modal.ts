export interface ModalState {
  isActive: boolean;
}

export enum ModalActionTypes {
  SWITCH_ON_MODAL = 'SWITCH_ON_MODAL',
  SWITCH_OFF_MODAL = 'SWITCH_OFF_MODAL',
}

interface SwitchOnAction {
  type: ModalActionTypes.SWITCH_ON_MODAL;
  payload: true;
}

interface SwitchOffAction {
  type: ModalActionTypes.SWITCH_OFF_MODAL;
  payload: false;
}

export type ModalAction = SwitchOnAction | SwitchOffAction;