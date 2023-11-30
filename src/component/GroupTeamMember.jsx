import React, { useState } from 'react'

const GroupTeamMember = ({emplayees,
  selectedTeam,setSelectedTeam}) => {
    const [groupEmplayee, setGroupEmplayee] = useState(groupTeamMembers())

    function groupTeamMembers() {
      var teams = [];
  
      var teamAMembers = emplayees.filter((employee) => employee.teamName === 'TeamA');
      var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true };
      teams.push(teamA);
  
      var teamBMembers = emplayees.filter((employee) => employee.teamName === 'TeamB');
      var teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true };
      teams.push(teamB);
  
      var teamCMembers = emplayees.filter((employee) => employee.teamName === 'TeamC');
      var teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true };
      teams.push(teamC);
  
      var teamDMembers = emplayees.filter((employee) => employee.teamName === 'TeamD');
      var teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true };
      teams.push(teamD);
  
      return teams;
    }

const handleTeamClick = (event) => {
  var newGroupedData = groupEmplayee.map((groupedData) => groupedData.team === event.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData);
  setGroupEmplayee(newGroupedData)
  setSelectedTeam(event.currentTarget.id)
}
    
    
  return (
    <main className='container'>
        {
          groupEmplayee.map((item) => {
            return(
              <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
                <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                    Team Name: {item.team}
                </h4>
                <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
                  <hr />
                  {
                    item.members.map((member) => {
                      return(
                        <div key={member.id} className="mt-2">
                          <h5 className="card-title mt-2">
                          <span className="text-dark"><b>Full Name:</b> {member.fullName}</span>
                          </h5>
                          <p className="card-text text-dark mt-2">
                             <b>Designation:</b> {member.designation}
                          </p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
    </main>
  )
}

export default GroupTeamMember