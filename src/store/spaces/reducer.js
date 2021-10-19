const initialState = {
  allSpaces: [],
  spaceDetails: null,
};

export default function spacesSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_SPACES_SUCCESS": {
      return {
        ...state,
        allSpaces: [...action.payload],
      };
    }
    case "SPACE_DETAILS_FETCHED": {
      return {
        ...state,
        spaceDetails: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
