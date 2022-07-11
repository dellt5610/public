export function counterReducer(state = 1, action){
    if (action.type == 'INCREASE') return state + 1;
    else if (action.type == 'DECREASE') return state - 1;
    else if (action.type == 'RESET') state = 1;
    return state;
}