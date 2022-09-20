import { Dispatch } from "redux";

import { ModalAction, ModalActionTypes } from './../../types/modal';

export const turnOnModal = () => {
  return (dispatch: Dispatch<ModalAction>) => {
    dispatch({
      type: ModalActionTypes.SWITCH_ON_MODAL,
      payload: true
    })
  }
}

export const turnOffModal = () => {
  return (dispatch: Dispatch<ModalAction>) => {
    dispatch({
      type: ModalActionTypes.SWITCH_OFF_MODAL,
      payload: false
    })
  }
}