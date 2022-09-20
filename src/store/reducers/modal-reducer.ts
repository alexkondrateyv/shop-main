import { ModalAction, ModalActionTypes, ModalState } from "../../types/modal";

const defaultState: ModalState = {
  isActive: false,
};

export const ModalReducer = (state: ModalState = defaultState, action: ModalAction): ModalState => {
  switch (action.type) {
    case ModalActionTypes.SWITCH_ON_MODAL:
      return { isActive: true }
    case ModalActionTypes.SWITCH_OFF_MODAL:
      return { isActive: false }
    default:
      return state
  }
}