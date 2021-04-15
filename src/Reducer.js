const initialState = {
  data: [
    {
      id: 1,
      username: "Aravind",
      mobileno: "785660756",
      address: "no:132,76th street,mathur,chennai:69",
    },
    {
      id: 3,
      username: "Sam",
      mobileno: "785660756",
      address: "no:132,76th street,mathur,chennai:69",
    },
    {
      id: 4,
      username: "Aakash",
      mobileno: "785660756",
      address: "no:132,76th street,mathur,chennai:69",
    },
    {
      id: 7,
      username: "Aakash",
      mobileno: "785660756",
      address: "no:132,76th street,mathur,chennai:69",
    },
  ],
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_DATA") {
    const arrCopy = [...state.data];

    arrCopy.push({
      id: Math.round(Math.random() * 1000),
      username: action.username,
      mobileno: action.mobileno,
      address: action.address,
    });

    return { ...state, data: arrCopy };
  }

  return state;
};
export default reducer;
