import axios from 'axios'
import React from 'react'
import {Card,Alert,Button} from 'react-bootstrap'
import CommentSection from './CommentSection'

class CV extends React.Component{
    constructor(props){
    super(props)
    this.state={
        
    }
 }

 render(){
     let {candidateCV}=this.props;
     return(
         <React.Fragment><br /><br />

{
candidateCV===undefined?
         <Alert  variant="danger">
    There is no uploaded CV for the candidate chosen!
    </Alert>
:
<Card border="secondary" style={{ width: '100%', textAlign:'left'}}>
    <Card.Header>CURRICULUM VITAE</Card.Header>
    <Card.Body>
      <Card.Title>PERSONAL INFORMATION</Card.Title>
      <Card.Text>
        <p>Name: {candidateCV.name}</p>
        <p>Job Title: {candidateCV.jobTitle}</p>
        <p>Experience Level: {candidateCV.experience}</p>
      </Card.Text>
    </Card.Body>
  </Card>
}
{candidateCV===undefined?"":
<CommentSection />
}
   
</React.Fragment> 
     );
 }
}

export default CV;