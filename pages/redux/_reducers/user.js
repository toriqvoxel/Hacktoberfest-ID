const initialState = {
    isLoading: true,
    contributor: [
        {
            name: 'Abdul Hakim'
        },
        {
            name: 'Toriq Ahmad Salam'
        },
    ],
    error: null
}

const user = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_USER':
            return {
                ...state,
                contributor: state.contributor
            }

        default:
            return state
    }
}

export default user