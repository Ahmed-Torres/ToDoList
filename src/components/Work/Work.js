import {useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./styles.css";
import shortId from "short-id";




const Work = () => {
    //[{id: string, title: string, description: string}]
    const [task, setTask]= useState([]);
    const [showForm, setShowForm] = useState(true);

    const createTask = (e)=>{
        //e -> referencia del formulario que disparo el evento
        e.preventDefault();
        let [title, description]= e.target.elements;
        title = title.value.trim();
        description = description.value.trim();
        setTask([...task, {id: shortId.generate(), title, description}]);
        e.target.reset();
    };
    const handleToggleForm = () => {
        setShowForm(!showForm);
    }

    return (
        <Container>        
            <Row className="justify-content-center">
                <Button className="mt-5 mb-5" onClick={handleToggleForm}>
                    {showForm ? "Ocultar formulario" : "Ver formulario"}
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
                            <Button className="mt-3 btn-lg" type="submit">Crear tarea</Button>
                        </Form>
                    </Col>
                )}
            </Row>
        </Container>
    );
}
 
export default Work;