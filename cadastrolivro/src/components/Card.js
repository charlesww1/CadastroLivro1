import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardBook = ({ id, bookname, author, price, deleteBook }) => {
    return (
    <div className="BodyList">
        <Card className="book">
            <Card.Body>
                <Card.Title className="book-title">{bookname}</Card.Title>
                <div className="CardBook">
                    <div>Autor(a): {author} </div>
                    <div>Preço: {price} </div>
                </div>
                <Button className="btn btn-dark" onClick={() => deleteBook(id)}>Deletar</Button>
                </Card.Body>
        </Card>
    </div>
    );
};

export default CardBook;