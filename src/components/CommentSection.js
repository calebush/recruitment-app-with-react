import axios from 'axios'
import React from 'react'
import {Modal, Button,Form} from 'react-bootstrap'

class CommentSection extends React.Component{
    constructor(props){
    super(props)
    this.state={
        show:false,
        comment:"",
        showSuccess:false,
    }
 }
handleSaveComment=()=>{
    let data =this.state.comment;
    axios.post(`https://jsonplaceholder.typicode.com/posts`, data )
    .then((res)=>{
        this.setState({
            successMessage:"Comment saved successfully",
            show:false,
           showSuccess:true,
        })
    })
    .catch((err)=>{
        console.log(err)
        this.setState({
            errorMessage:err.err
        })
    })
}

handleChange=(event)=>{
this.setState({
    comment:event.target.value,
})
}
  handleClose = () => this.setState({
      show:false
  });
  handleShow = () => this.setState({
      show:true
  });
 render(){
     return(
         <React.Fragment>
    <Button variant="info" onClick={this.handleShow}>
      Add Comment
    </Button>

    <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" name="comment" onChange={event=>this.handleChange(event)} rows={3}/>
  </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={this.handleSaveComment}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
         </React.Fragment> 
     );
 }

}

export default CommentSection;