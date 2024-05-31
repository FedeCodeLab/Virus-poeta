import { OPEN_VIDEO, CLOSE_VIDEO } from "./types";

export const openVideo = () => {
  return { type: OPEN_VIDEO };
};

export const closeVideo = () => {
  return { type: CLOSE_VIDEO };
};
