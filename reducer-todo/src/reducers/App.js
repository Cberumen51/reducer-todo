export const initialState = [
    {
        item: 'make dinner',
        completed: false,
        id: 34262345463
    },
    {
        item: 'wash dishes',
        completed: false,
        id: 54235623
    },
    {
        item: 'take out trash',
        completed: false,
        id: 5432525324
    },
    {
        item: 'relax',
        completed: false,
        id: 758645345
    }
]


export const simpleReducer = (state, action) => {
    switch(action.type){
        case "CHANGE_COMPLETED":
            return { ...state, editing: true };
    default:
return state;
    }
}