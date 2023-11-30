import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Emplayees from './component/Emplayees';
import Header from './component/Header';
import Data from './component/Data';
import GroupTeamMember from './component/GroupTeamMember'
import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Error from './component/Error';



function App() {
  const [selectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamB')
  const [emplayees, setEmplayees] = useState (JSON.parse(localStorage.getItem('emplayees')) || Data)
   
  const handleTeamSelectionChange = (event) => {
    setSelectedTeam(event.target.value)
}

const handleEmplayeeCardClick = (event) => {
  const transformedEmployees = emplayees.map((emplayee) => {
      return(
        emplayee.id === parseInt(event.currentTarget.id) ?
                        emplayee.teamName === selectedTeam?
                        {...emplayee, teamName:''}:
                        {...emplayee, teamName:selectedTeam}:
                        emplayee
      )
  })
  setEmplayees(transformedEmployees)
}
useEffect(()=>{ 
  localStorage.setItem("emplayeeList" , JSON.stringify(emplayees))
},[emplayees])
useEffect(()=>{ 
  localStorage.setItem("selectedTeam" , JSON.stringify(selectedTeam))
},[selectedTeam])

  return (
    <BrowserRouter>
       <Navbar />
       <Header selectedTeam={selectedTeam}
               teamMemberCount = {emplayees.filter((emplayee) => emplayee.teamName === selectedTeam).length}
              />
              <Routes>
                <Route path='/' element={
                                    <Emplayees emplayees={emplayees}
                                    selectedTeam={selectedTeam}
                                    handleTeamSelectionChange={handleTeamSelectionChange}
                                    handleEmplayeeCardClick={handleEmplayeeCardClick} 
                                />
                }></Route>
                <Route path='/GroupTeamMember' element={
                  <GroupTeamMember
                    emplayees={emplayees}
                    selectedTeam={selectedTeam}
                    setSelectedTeam={setSelectedTeam}
                  />
                }></Route>
                <Route path='8' element={
                  <Error />
                }></Route>

                 </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;
