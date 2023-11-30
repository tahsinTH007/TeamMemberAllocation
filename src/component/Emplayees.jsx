import React from 'react'
import FemaleImage from '../images/femaleProfile.jpg'
import MaleImage from '../images/maleProfile.jpg'
import '../App.css';

const Emplayees = ({emplayees, selectedTeam, handleTeamSelectionChange, handleEmplayeeCardClick}) => {
 
  return (
    <main className='fluid-container'>
      <div className="row justify-content-center">
         <div className="col-6">
             <select className='form-select form-select-lg' value={selectedTeam} onChange={handleTeamSelectionChange}>
               <option value="TeamA">TeamA</option>
               <option value="TeamB">TeamB</option>
               <option value="TeamC">TeamC</option>
               <option value="TeamD">TeamD</option>
             </select>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
            <div className="card-collection">
            {
             emplayees.map((emplayee) => {
               return (
                 <>
                  <div id={emplayee.id} className={(emplayee. teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')}  style={{width: '18rem',cursor:"pointer"}} onClick={handleEmplayeeCardClick}>
                       < img src={emplayee.gender == 'male' ? MaleImage : FemaleImage} className="card-img-top" />
                      <div className="card-body">
                        <h5 className="card-title">Full Name: {emplayee.fullName}</h5>
                        <p className="card-text">Designation: {emplayee.designation}</p>
                      </div>
                    </div>
                </>
              )
             })
            }
            </div>
        </div>
      </div>
    </main>
  )
}

export default Emplayees