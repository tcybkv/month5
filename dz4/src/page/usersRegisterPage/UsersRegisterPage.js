import React from 'react';
import {useState} from "react";
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import {addUserAction} from "../../store/postSlice";

function UsersRegisterPage() {

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    })

    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const [errors, setErrors] = useState({})

    const validate = () => {
        const newErrors = {};
        if (!user.name) newErrors.name = 'Напишите свое имя'
        if (user.name && !/^[a-zA-Z\s]*$/.test(user.name)) newErrors.name = 'Имя не должно содержать цивры'
        if (!user.username) newErrors.username = 'Напишите свой юзернейм'
        if (!user.email) newErrors.email = 'Неправильная почта'
        if (user.email && !/\S+@\S+\.\S+/.test(user.email)) newErrors.email = 'Почта должно содержать @'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const addUser = (event) => {
        event.preventDefault()
        if (validate()) {
            dispatch(addUserAction(user))
            setUser({ name: '', username: '', email: '' })
            setErrors({})
        }
    }

    return (
        <Container>
            <Form onSubmit={addUser}>
                <Row style={{ margin: '10px' }}>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={user.name}
                                onChange={formValue}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={user.username}
                                onChange={formValue}
                                isInvalid={!!errors.username}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={user.email}
                                onChange={formValue}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Button type="submit" variant="success" className="w-100">
                            Register User
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default UsersRegisterPage;
