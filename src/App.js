import './App.css';
import Work from "./components/Work/Work";
import Task from "./components/Task/Task";
import {Col,Row,Container} from 'react-bootstrap'
import React, {useState} from 'react'
function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task)=>{
    setTasks([...tasks , task])
  };

  const deleteTask = (id) => {
    const finalTasks = tasks.filter((task)=> task.id !== id)
    setTasks(finalTasks);
  }

  return (
    <Container className="App">
      <Row>
        <Col>
          <Work addTask = {addTask} />
          <Task tasks = {tasks} deleteTask = {deleteTask} />
        </Col>
      </Row>

    </Container>
  );
}

export default App;
