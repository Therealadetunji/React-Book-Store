import React from "react";


const categoriesReducer = (state = 'initial state', action) => {
        switch (action.type){
            case 'check_status':
                return 'nothing yet';
            default:
                return state;
        }
}

export const addCategories = () => {
    return {
        type: 'check_status',
    }
}

export default categoriesReducer;
