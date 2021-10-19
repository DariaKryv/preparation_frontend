import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appLoading, appDoneLoading, setMessage } from "../appState/actions";

export const fetchSpacesSuccess = (spaces) => ({
  type: "FETCH_SPACES_SUCCESS",
  payload: spaces,
});

const spaceDetailsFetched = (space) => ({
  type: "SPACE_DETAILS_FETCHED",
  payload: space,
});

export function fetchSpaces() {
  return async (dispatch, getState) => {
    try {
      dispatch(appLoading());

      const response = await axios.get(`${apiUrl}/spaces`);
      console.log("result", response.data);
      dispatch(fetchSpacesSuccess(response.data));

      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
}

export function fetchSpaceById(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(appLoading());
      const response = await axios.get(`${apiUrl}/spaces/${id}`);
      console.log("result", response.data);
      dispatch(spaceDetailsFetched(response.data));

      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
}
