// import './App.css';
// import Card from './components/Card';

// function App() {
//   return (
//     <div>
//       <Card />
//     </div>
//   );
// }

// export default App;


// import React from 'react'
// import Student from './components/Students/Student'


// const App = () => {
//     return (
//         <div>
//             <Student />
//         </div>
//     )
// }

// export default App


import React from 'react'
import GetAll from './components1/GetAll/GetAll'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InputCard from './components1/InputCard/InputCard'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<GetAll />} />
                    <Route path="/input" element={<InputCard />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App