import React from 'react';
import Header from '../components/Header';
import Body from '../components/BodyAdd';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from '../components/List';
import LocalSave from '../components/LocalSave';
import BookAdd from '../components/BookAdd';

const Routes = () => {
    const [books, setBooks ] = LocalSave('books', []);

    return (
        <BrowserRouter>
        <div>
            <Header />
            <div>
                <Switch>
                    <Route render={(props) => (
                        <BookAdd {...props} books={books} setBooks={setBooks} />
                        )}
                        path="/"
                        exact={true}
                    />
                    <Route render={(props) => (
                        <List {...props} books={books} setBooks={setBooks} />
                        )}
                        path="/list"
                    />
                </Switch>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default Routes;