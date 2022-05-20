import React, {useState} from 'react'
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Header from "./components/Header";


// rsc for function

// rccp for class



const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a front end JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use by creating components'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    }, {
        label: ' The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

const App = () => {

    const [selected, setSelected] = useState(options[0]);

    // get path name using: window.location.pathname


    return (
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items} />
            </Route>

            <Route path="/list">
                <Search/>
            </Route>

            <Route path="/dropdown">
                <Dropdown label = "Select a color" options = {options}
                selected = {selected} onSelectedChange = {setSelected}/>
            </Route>

            <Route path="/translate">
                <Translate items />
            </Route>

        </div>
    );

}

export default App;
