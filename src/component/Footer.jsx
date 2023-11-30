import React from 'react'

const Footer = () => {
  return (
    <footer className='container'>
      <div className="row justify-content-center mt-3 md-4">
        <div className="col-8">
          <h5>Team Member Allocation App - {new Date().getFullYear()}</h5>
        </div>
      </div>
    </footer>
  )
}

export default Footer