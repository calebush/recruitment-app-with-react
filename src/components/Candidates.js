import axios from 'axios'
import React from 'react'
import {ListGroup} from 'react-bootstrap'
import * as dataC from '../dummy-data/CV.json'

import CV from './CV'

class Candidates extends React.Component{
    constructor(props){
    super(props)
    this.state={
        allCandidates:[],
        candidateCV:{},
        showCV:false,
    }
 }

 /*Fetching users from json placeholder-fake  REST API*/
handleGetCandidates=()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/?_limit=5`)
    .then((response)=>{
        this.setState({
            allCandidates:response.data,
        });
    });
}

/*handle when candidate is selected*/
handleSelectCandidate=(event, candidateId)=>{
    this.setState({
        showCV:true
    })
    switch(candidateId){
        case 1:
            this.setState({
                candidateCV:dataC.cvContents[0],
            })
        break;
        case 2:
            this.setState({
                candidateCV:dataC.cvContents[1],
            })       
             break;
        case 3:
            this.setState({
                candidateCV:dataC.cvContents[2],
            })       
             break;
        case 4:
            this.setState({
                candidateCV:dataC.cvContents[3],
            })      
              break;
        case 5:
            this.setState({
                candidateCV:dataC.cvContents[4],
            })       
             break;
    }
}

 componentDidMount(){
     console.log(dataC.cvContents[0])

  /*calling handleGetCandidates when component mounts*/
this.handleGetCandidates();
 }
 render(){
     let {allCandidates}=this.state;
     return(
         <React.Fragment>
            <div className="row">
             <div className="candidates col-lg-4">
                 <h2>Candidates List</h2>
                 {allCandidates.map((candidate)=>
                 <ListGroup.Item action onClick={(event)=>this.handleSelectCandidate(event, candidate.id)} >
                     {candidate.name}
                     </ListGroup.Item>
                     )}
                     </div>
                     <div className="col-lg-4">
                         {
                             this.state.showCV===true?
                             <CV handleSelectCandidate={this.handleSelectCandidate} 
                         allCandidates={this.state.allCandidates}
                         candidateCV={this.state.candidateCV}
                         />
                         :""
                         }
                         
</div>
</div>
</React.Fragment> 
     );
 }
}

export default Candidates;