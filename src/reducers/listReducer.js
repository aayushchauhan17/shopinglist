const initialData = {
  list: [],
};

const listReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TO_LIST": {
      let newstate = state;
      newstate.list = [
        ...newstate.list,
        {
          ShopName: action.shopName,
          Area: action.areaa,
          Category: action.categoryy,
          OpenDate: action.opendate,
          CloseDate: action.closedate,
        },
      ];

      return newstate;
    }

    case "DELETE_TO_LIST": {
      let newstate = state;
      newstate.list = [
        ...newstate.list.filter((item, index) => {
          return index !== action.playload;
        }),
      ];
      return newstate;
    }
    case "FILTER": {
      let newstate = state;
      newstate.list = [
        ...newstate.list.filter((item) => {
          return (
            item.Area === action.are ||
            item.Category === action.cata ||
            (item.OpenDate <= action.opn && item.CloseDate >= action.opn)
          );
        }),
      ];
      return newstate;
    }

    default: {
      return state;
    }
  }
};

export default listReducer;
