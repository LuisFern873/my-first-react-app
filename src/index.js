import React from 'react'
import ReactDOM from 'react-dom/client'

// Importing modules
import Greeting from './components/Greeting'

const root = ReactDOM.createRoot(document.getElementById('root'))

const user = new Map([
    ['name', 'Luis'],
    ['surname', 'Méndez'],
    ['email', 'luis.mendez.l@utec.edu.pe'],
    ['age', 19]
])

// Components and JSX
function Information(){
    return <div>
        <h3>{user.get('surname')}</h3>
        <h3>{user.get('email')}</h3>
        <h3>{user.get('age')}</h3>
    </div>
}

root.render(
    // Fragment and Self Closing Tags
    <> 
        <Greeting name = {user.get('name')} /> 
        <Information /> 
    </>
)