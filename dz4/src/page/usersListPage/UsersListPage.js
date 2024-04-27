import React from 'react';
import { useState } from 'react';
import {Button, Card} from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

function UsersListPage() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div style={{display: 'flex', gap: '20px', width: '1200px', margin: '0 auto', marginTop: '20px'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://png.pngitem.com/pimgs/s/150-1503945_transparent-user-png-default-user-image-png-png.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://png.pngitem.com/pimgs/s/150-1503945_transparent-user-png-default-user-image-png-png.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://png.pngitem.com/pimgs/s/150-1503945_transparent-user-png-default-user-image-png-png.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://png.pngitem.com/pimgs/s/150-1503945_transparent-user-png-default-user-image-png-png.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://png.pngitem.com/pimgs/s/150-1503945_transparent-user-png-default-user-image-png-png.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <Button variant="success" onClick={handleShow} style={{marginTop: '20px', marginLeft: '168px'}}>
                Info
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>UsersListPage</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Страница списка пользователей, или UsersListPage, является важным элементом многих веб-приложений и систем управления, где требуется организация и управление доступом пользователям. Этот интерфейс позволяет администраторам и управляющим эффективно управлять пользователями, предоставляя возможности для просмотра, добавления, редактирования и удаления пользовательских аккаунтов. Ниже представлены ключевые аспекты и функции, которые часто встречаются на странице списка пользователей.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default UsersListPage;