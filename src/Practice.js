import React, { useEffect, useState , useRef } from 'react';
import { Button} from 'reactstrap';
import { ModalBody,ModalHeader,ModalFooter,Modal} from 'reactstrap';
const Practice = () => {
    const [show, setShow] = useState(false);
    
    const [initialLoader, setInitialLoader] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [status, setStatus] = useState({
      selected:false,
      rejected : false
    })
    
   const initialRender = useRef(false);

  useEffect(() => {
    // Check if it's not the initial render
    if (initialRender.current) {
      // Update the ref value to mark the end of initial render
      initialRender.current = true;
    } else {
      console.log("request is calling");
      // Execute your logic here based on the status change
    }
  }, [status]);
  let summary = "Dolo is work for body pains"

  const product = {
    name :"Dolo",
    pid : "11AA22",
    info : () => {
      console.log("this.summary",this.summary);
    }
  }

  product.info()
  
    return (
      <React.Fragment>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal isOpen={show} onHide={handleClose}>
          <ModalHeader closeButton>
              Modal Heading
          </ModalHeader>
          <ModalBody>Woohoo, you're reading this text in a modal!</ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </ModalFooter>
        </Modal>
        <Button variant="primary" onClick={() =>{setStatus(!status.selected)}}>selected</Button>
        <Button variant="primary" onClick={() =>{setStatus(!status.rejected)}}>Rejected</Button>
        </React.Fragment>
    );
}

export default Practice