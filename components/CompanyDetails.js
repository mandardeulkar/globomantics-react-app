import React from 'react'

const CompanyDetails = ( {companyname, ownername, ownercity, ownerstate, teamlocation} ) => {

  return (
    <div>
        <h3>Company Info :</h3>
        <h4>Company Name : {companyname}</h4>
        <h3>Owner Information :</h3>
        <h4>Owner Name : {ownername}</h4>
        <h4>Owner City : {ownercity}</h4>
        <h4>Owner State : {ownerstate}</h4>
        <h4>Team Location : {teamlocation}</h4>
    </div>
  )
}

export default CompanyDetails