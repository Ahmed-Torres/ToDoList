import { Table } from "react-bootstrap";
import PropTypes from 'prop-types'
import React from 'react'
import  '../../App.css'



const Task = ({tasks, deleteTask}) => {

  const removeTask = (id) =>{
    deleteTask(id)
  }
  return (
    <Table border hover responsive="xl">
      <thead className="titulistarea"> Lista de Tareas
        <tr>
          <th>#</th>
          <th>Tarea</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task)=>(
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.name}</td>
            <td>{task.description}</td>
            <td className="equis" onClick={()=> removeTask(task.id)}>X</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
};

Task.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default Task;