import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
    inputParamsLoad: "[Load Input Params Data] Action",
    algoParamsLoad: "[Load Algo Params Data] Action"
};

const initialState = {
    inputParams: undefined,
    algoParams: undefined
};

export const reducer = persistReducer(
    { storage, key: "algoParams", whitelist: ['inputParams', 'algoParams'] },
    (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.inputParamsLoad: {
                const { inputParams } = action?.payload?.inputParamsData
                return { ...state, inputParams };
            }
            case actionTypes.algoParamsLoad: {
                const { algoParams } = action?.payload?.algoParamsData
                return { ...state, algoParams };
            }
            default:
                return state;
        }
    }
);

export const actions = {
    loadInputParamsData: inputParamsData => ({ type: actionTypes.inputParamsLoad, payload: { inputParamsData } }),
    loadAlgoParamsData: algoParamsData => ({ type: actionTypes.algoParamsLoad, payload: { algoParamsData } })
};

