import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'


function App() {
  const [tasks, setTasks]= useState([{
        id:1,
        text: 'Doctors Appointment',
        day: 'Day 1',
        reminder: true,
    },
    {
        id:2,
        text: 'Book Bus Tickets',
        day: 'Day 2',
        reminder: true,
    },
    {
        id:3,
        text: 'Go to Museum',
        day: 'Day 3',
        reminder: false,
    }
    ])


   return(
     <div className="container">
 <Header />
<Tasks tasks={tasks}/>
  
   
 
 
     </div>
    
     
   )
  
}


export default App;
