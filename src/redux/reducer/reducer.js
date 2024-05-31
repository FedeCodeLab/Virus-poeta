import { OPEN_VIDEO, CLOSE_VIDEO } from "../actions/types";

const initialState = {
  isVideoOpen: false,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_VIDEO:
      return { ...state, isVideoOpen: true };
    case CLOSE_VIDEO:
      return { ...state, isVideoOpen: false };

    default:
      return state;
  }
}
