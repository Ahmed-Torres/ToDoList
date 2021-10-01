import {useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./styles.css";
import shortId from "short-id";// esto nos sirve para que cada elemento tenga un id unico
import PropTypes from 'prop-types'

const Work = ({addTask}) => {
    const [showForm, setShowForm] = useState(true);

    const createTask = (e)=>{
        e.preventDefault();
        let [title, description]= e.target.elements;
        title = title.value.trim();
        description = description.value.trim();
        if (title === "" || description === "") {
            return alert("Complete Fields, Please");
        }else{
            addTask(
                {id: shortId.generate(), 
                name: title, 
                description: description
            })
            e.target.reset();
        }
    };

    const handleToggleForm = () => {
        setShowForm(!showForm);
    }

    const showButtonMessage = () => {
        if (showForm) {
          return "ocultar formulario";
        } else {
          return "Ver formulario";
        }
      };

    return (
        <Container className="mb-5">        
            <Row className="justify-content-center">
                <Button className="mt-5 mb-5" onClick={handleToggleForm}>
                    {showButtonMessage()}
                </Button>
                {showForm && (
                    <Col md={6} xs={12}>
                        <h3>Tasks</h3>
                        <Form onSubmit={createTask}>
                            <Form.Group>
                                <Form.Label>Titulo de la tarea</Form.Label>
                                <Form.Control placeholder="Tarea"  name="title"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Descripción de la tarea</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Descripción de la tarea" 
                                name="description"/>
                            </Form.Group>
                            <Button className="mt-3 btn-lg" style={{width: "100%"}} type="submit">Crear tarea</Button>
                        </Form>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

Work.propTypes = {
    addTask: PropTypes.func.isRequired
}

export default Work;