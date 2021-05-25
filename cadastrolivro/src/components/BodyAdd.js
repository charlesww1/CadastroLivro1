import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BodyAdd = (props) => {
  
    const [ book, setBook ] = useState ({
      bookname: props.book ? props.book.bookname : '',
      bookauthor: props.book ? props.book.author : '',
      price: props.book ? props.book.price : ''
    });

    const { bookname, author, price} = book;

    const OnSubmit = (ev) => {
      const values = [ bookname, author, price ];
    
      const AllFields = values.every((field) =>{
        const value = `${field}`;
        return value !== '' && value !== '0';
      });

      if(AllFields) {
        const book = {
          id: uuidv4(),
          bookname,
          author,
          price
        };
        props.OnSubmit(book);
      }
    };

    const InputChange = (ev) => {
      const { name, value } = ev.target;
      switch (name){
        case 'price':
          if(value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {             {/*estudar -> value.match(/^\d{1,}(\.\d{0,2})?$/)*/}
          setBook((prevState) => (
            {...prevState, [name]: value}
          ));
        }
        break;
        default:
          setBook((prevState) => ({
            ...prevState, [name]: value}
          ));
      }
    }

    return (
        <div className="img-site">
            <div className="form-add">
                <Form onSubmit={OnSubmit}>
                    <Form.Group>
                        <Form.Label className="formlabel">NOME DO LIVRO</Form.Label>
                        <Form.Control className="input-label" type="text" name="bookname" value={bookname}
                        placeholder="Digite o nome do livro" onChange={InputChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label  className="formlabel">AUTOR(A)</Form.Label>
                        <Form.Control className="input-label" type="text" name="author" value={author}
                        placeholder="Digite o nome do autor" onChange={InputChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label  className="formlabel">PREÇO</Form.Label>
                        <Form.Control className="input-label" type="text" name="price" value={price}
                        placeholder="Informe o preço" onChange={InputChange}>
                        </Form.Control>
                    </Form.Group>
                    <Button className="btn btn-light" type="submit">
                        Adicionar
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default BodyAdd;