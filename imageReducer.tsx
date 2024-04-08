export interface ImageState{
    selectedImage:string | null
}

const initialState: ImageState = {
    selectedImage: null
}

export type ImageAction = {type: 'select_image', payload: {image: string}};

export const imageReducer = (state: ImageState = initialState, action: ImageAction) :ImageState =>{
    switch(action.type){
        case 'select_image':
            return {...state, selectedImage: action.payload.image}
        default:
            return state
    }
}