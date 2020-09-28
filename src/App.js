import React, { useEffect, useState } from 'react';
import Container from './components/Container/Container';
import SearchPanel from './components/SearchPanel/SearchPanel';
import CharacterList from './components/CharacterlList/CharacterList';
import { Switch, Route } from 'react-router-dom';
import CahracterPages from './components/CharacterPages/CharacterPages';


const App = () => {
    const [value, setValue] = useState('');

    const upDateValue = (event) => {
        setValue(event.target.value)
        console.log(value)
    }

    return (
        <Switch>
            <Route path='/character/:id' component={CahracterPages} />
            <Route render={() => (
                <>
                    <Container>
                        <SearchPanel value={value} onChange={upDateValue} />
                        <CharacterList value={value} />
                    </Container >
                </>
            )}
            />
        </Switch>
    )
}

export default App;
