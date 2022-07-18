import {ADD ,DELETE,COMPLETE ,UPDATE} from  "./type"



export const addTask=(input)=>{

return{

    type:ADD,
    payload:input
};

}


export const deleteTask=(id)=>{

    return{
    
        type:DELETE,
        payload:id
    };
    
    }
   
    export const completeTask=(id)=>{

        return{
        
            type:COMPLETE,
            payload:id
        };
        
        }
        export const editTask=(edit,id)=>{

            return{
            
                type:UPDATE,
                payload:{edit,id}
            };
            
            }
    