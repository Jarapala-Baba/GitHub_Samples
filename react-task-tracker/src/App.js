import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import{useState} from 'react';

function App() {
  const [showAddTask,setShowAddTask]=useState(true);
    const [tasks, setTasks]=useState([
        {
            id:1,
            text:'text_1',
            day: 'Feb 1st at 1pm',
            reminder:true
        },
        {
            id:2,
            text:'text_2',
            day: 'Feb 2nd at 2pm',
            reminder:false
        },
        {
            id:3,
            text:'text_3',
            day: 'Feb 3rd at 3pm',
            reminder:true
        }
    ]);

    //Add Task
    const addTask=(task)=>
    {
      console.log('Add Task Invoked',task)
      const id=Math.floor(Math.random()*1000)+1;
      const newTask={id:id,...task};
      setTasks([...tasks,newTask])
    }


    //Delete 
    const deleteTask=(id)=>
    {
      setTasks(tasks.filter((task)=>task.id!==id))
    }

    //Togglke Reminder
const toggleReminder=(id)=>
{
  setTasks(tasks.map((task)=>task.id===id?{...task, reminder : !task.reminder}:task));
  console.log('Toggle Reminder Invoking',id)
}



  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask&&<AddTask onAdd={addTask}/>}
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:"No Tasks To Show!"}
    </div>
  );
}



export default App;
