import { UpdateState } from "./actiontype";

const initstate = {
    jobs:[]
}

export const Jobsreducer = (state=initstate,{type,payload})=>{
    switch (type) {
        case UpdateState:
            
           return {
            jobs :[...payload]
        
        }
    
        default:
           return state
    }
}