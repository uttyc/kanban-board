import uuid from 'uuid';
const defaultState = [
    {
        _id: uuid.v4(),
        title: "Analysis",
        cards: [
            {
                _id : uuid.v4(),
                name : "Functional Reqs",
                label : {
                    name : 'func req',
                    color : 'text-warning'
                },
                isEditable : false
            }

        ]
    },
    {
        _id: uuid.v4(),
        title: "Design",
        cards: [

        ]
    },
    {
        _id: uuid.v4(),
        title: "Implementation",
        cards: [

        ]
    }
];

export default function cols(state = defaultState, action) {
    switch (action.type){
        case 'SELECT_COL':

            return action.payload;
            break;
        case "ADD_COL":
            console.log("Add col reducer");
            return state.concat(action.payload);
            break;
        case "UPDATE_CARD":
            return state.map(col => {
                if(col.id === action.payload.id) {
                    return Object.assign({}, col, action.payload);
                }

                return col;
            });
            break;
        case "DELETE_CARD":
            return state.filter(col => col.id !== action.payload.id);
            break;
        default:
            return state;

    }

}

