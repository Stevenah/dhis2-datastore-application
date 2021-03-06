import * as actions from 'constants/jsonEditorTypes';


const initialState = {
    mode: 'tree',
    undo: false,
    redo: false,
};

const jsonEditor = (state = initialState, action) => {
    switch (action.type) {

    case actions.SEARCH_JSON:
        {
            return {
                ...state,
                jsonSearchValue: action.searchValue,
            };
        }

    case actions.COLLAPSE_JSON:
        {
            return {
                ...state,
                expand: false,
                collapse: true,
            };
        }
    case actions.EXPAND_JSON:
        {
            return {
                ...state,
                expand: true,
                collapse: false,
            };
        }

    case actions.COMPACT_JSON:
        {
            return {
                ...state,
                compact: false,
                format: true,
            };
        }
    case actions.FORMAT_JSON:
        {
            return {
                ...state,
                compact: true,
                format: false,
            };
        }

    case actions.REDO_JSON:
        {
            return {
                ...state,
                redo: true,
            };
        }

    case actions.UNDO_JSON:
        {
            return {
                ...state,
                undo: true,
            };
        }

    case actions.CHANGE_JSON_MODE:
        {
            return {
                ...state,
                mode: action.mode,
            };
        }

    case actions.VALUE_CHANGE:
        {
            return {
                ...state,
                undo: false,
                redo: false,
            };
        }

    default:
        {
            return {
                ...state,
            };
        }
    }
};

export default jsonEditor;
