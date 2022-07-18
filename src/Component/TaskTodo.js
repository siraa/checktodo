
import react, {useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addTask ,deleteTask ,completeTask,editTask} from '../actions/todoActions';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


const TaskTodo = () => {


    const [todo,setTodo] =useState("");
    const [filter,setFilter] =useState("all");
    const [edit,setEdit] =useState("");


     const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const taskdo =  useSelector(state=>state.taskReducer)
    const dispatch=useDispatch();


  return (
    <div>
      <input type ="text" placeholder="add your task...." onChange={(e)=>setTodo(e.target.value)}></input>
        <button onClick={()=>dispatch(addTask(todo))}>Add Todo</button>
       <button onClick={()=>setFilter("all")}>All</button>
       <button onClick={()=>setFilter("completed")}>Complete</button>
       <button onClick={()=>setFilter("undone")}>Undone</button>
        {filter==="all" ?
          taskdo.map(e=>
            <div>
            <h2>{e.description}</h2>
            <Button variant="primary"  onClick={handleShow}>
    <span role="img" aria-label="edit">  🖊️ </span>{" "}
      </Button>
            <button onClick={()=>dispatch(deleteTask(e.id))}>Delete</button>
            {/* <button onClick={()=>dispatch(editTask(e.id))}>Edit</button> */}
           
            <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>
          <input type ="text" placeholder="Edit your task...." onChange={(e)=>setEdit(e.target.value)}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(editTask(edit,e.id));handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            <button onClick={()=>dispatch(completeTask(e.id))}>{e.complete ? "completed": "undone"}</button>
            </div>
            ) 
           : filter==="completed" ? taskdo.filter(el=>el.complete===true)
            .map(e=>
              <div>
              <h2>{e.description}</h2>
              <button onClick={()=>dispatch(deleteTask(e.id))}>🗑️</button>
              <button onClick={()=>dispatch(completeTask(e.id))}>{e.complete ? "completed": "undone"}</button>
              </div>
              ) :  taskdo.filter(el=>el.complete===false)
              .map(e=>
                <div>
                <h2>{e.description}</h2>
                <button onClick={()=>dispatch(deleteTask(e.id))}>Delete</button>
                <button onClick={()=>dispatch(completeTask(e.id))}>{e.complete ? "completed": "undone"}</button>
                </div>
                ) 
          }
    </div>
  )
}

export default TaskTodo