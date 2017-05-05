
export const selectColumn = (col) => {
    console.log(col.id);
    return {
        type: 'SELECT_COL',
        payload: col
    }
};
export const selectCard = (card) => {
    console.log("Selected card : "+ card.name);
    return {
        type: 'SELECT_CARD',
        payload: card
    }
};
export const addCard = (card) => {
    console.log("Added card : ");
    console.log(card);
    return {
        type: 'ADD_CARD',
        payload: card
    }
};
export const updateCard = (card) => {
    console.log("Update card");
    return {
        type: 'UPDATE_CARD',
        payload: card
    }
};

export const deleteCard = (id) => {

    return {
        type: 'DELETE_CARD',
        payload: id
    }
};

export const moveCard = (card) => {

    return {
        type: 'MOVE_CARD',
        payload: card
    }
};

export const addCol = (col) => {
    console.log(col);
    return {
        type: 'ADD_COL',
        payload: col
    }
};

export const updateCol = (col) => {

    return {
        type: 'UPDATE_COL',
        payload: card
    }
};

export const moveCol = (col) => {

    return {
        type: 'COL_MOVED',
        payload: col
    }
};
