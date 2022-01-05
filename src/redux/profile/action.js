export const SHOW_NAME = "SOMETHING";
export const SET_NAME = "SOMETHING2";

export const showName = {
  type: SHOW_NAME,
};

export const expName = (newName) =>({ //функция action creator
  type: SET_NAME,
  payload: newName,
})