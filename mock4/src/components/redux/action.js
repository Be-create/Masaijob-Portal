import { UpdateState } from "./actiontype";

export const updatestate = (payload)=>{
    return {
        type: UpdateState,
        payload
    }
}