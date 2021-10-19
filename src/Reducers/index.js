export const initialState = {
  productList: [],
  dataStatus: "",
  addedItem: [],
  clickedItem:[],
  favoriteItem: [],
  filters: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      state = {
        ...state,
        dataStatus: "LOADING",

      };
      return state;
      
    case "DONE":
      state = {
        ...state,
        productList: action.payload,
        dataStatus: "DONE",
   
      };
      return state;
    case "ERROR":
      state = {
        ...state,
        productList: action.payload,
        dataStatus: "ERROR",

      };
      return state;
    case "ADDED":
      state = {
        ...state,
        addedItem: action.payload,

      };
      return state;
    case "FAV":
      state = {
        ...state,
        favoriteItem: action.payload,
      };
      return state;
      case "CLICKED":
      state = {
        ...state,
        clickedItem: action.payload,
      };
      return state;
      case "FILTER":
      state = {
        ...state,
        filters: action.payload,
      };
      return state;
    default:
        return state;
  }
};
