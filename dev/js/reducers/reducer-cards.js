
export default function cards(state = [], action) {
    switch (action.type) {
        case "ADD_CARD":
            return state.concat(action.payload);

        case "UPDATE_CARD":
            return state.map(card => {
                if(card.id === action.payload._id) {
                    return Object.assign({}, card, action.payload);
                }
                return card;
            });

        case "DELETE_CARD":
            return state.filter(card => card.id !== action.payload._id);

        default:
            return state;
    }
}