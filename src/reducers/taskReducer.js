import { v4 as uuidv4 } from 'uuid';
import{ADD,DELETE,COMPLETE,UPDATE} from  "../actions/type"



const task=[

    {

        id:uuidv4(),
        complete:false,
        description:"task"
       

    }
]
//action=payload,type
const taskReducer=(state= task,action)=>{
switch (action.type) {
    
    case ADD: return [...state,{description:action.payload,id:uuidv4(),complete:false}]
    case DELETE: return state.filter(el=>el.id!==action.payload)
    case COMPLETE: return state.map(el=>el.id===action.payload  ? {...el,complete:!el.complete}:el)
    case UPDATE: return state.map(el=>el.id===action.payload.id  ? {...el,description:action.payload.edit}:el)
        
      
    default: return state
      
}


}

export default taskReducer