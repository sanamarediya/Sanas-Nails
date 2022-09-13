import Container from '../../node_modules/react-bootstrap/Container';
import Form from '../../node_modules/react-bootstrap/Form';
import Row from '../../node_modules/react-bootstrap/Row';
import Col from '../../node_modules/react-bootstrap/Col';
import Button from '../../node_modules/react-bootstrap/Button';
import '../styles/main.css';
import Footer from "./footer";

function ApptForm() {
    return (
        
        <Container fluid className='back'>
            <div style={{color:'rgb(243, 238, 235)'}}>.</div>

    {/* Header  */}
            <h1 className='h1a'> Schedule an Appointment! </h1>

    {/* Form  */}
            <Form>
                <Row>
                    <Col xs={2}></Col>

                    <Col xs={5}>
{/* Basic Information  */}
                        <Form.Group className="labels" controlId="fname">
                            <Form.Label className='spce'>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Your first name" required/>
                        </Form.Group>

                        <Form.Group className="labels" controlId="lname">
                            <Form.Label className='spce'>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Your last name" required/>
                        </Form.Group>

                        <Form.Group className="labels" controlId="formBasicEmail">
                            <Form.Label className='spce'>Email</Form.Label>
                            <Form.Control type="email" placeholder="Your email" required/>
                        </Form.Group>

                        <Form.Group className="labels" controlId="pnum">
                            <Form.Label className='spce'>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Your phone number" required/>
                        </Form.Group>
{/* Service Dropdown  */}
                        <label for="service" className='spce'>Service</label>
                        <Form.Select id='service' required> 
                            <option>Select a Service</option>
                            <option value="1">Acrylic Nails</option>
                            <option value="2">Dip Poweder Nails</option>
                            <option value="3">Gel Nails</option>
                        </Form.Select>

{/* Appt Date and Time  */}
                        <div style={{display:'grid',gridTemplateColumns: '50% 50%'}}>
                            <div style={{paddingRight:'5px'}}>
                                <Form.Group className="labels" controlId="date">
                                    <Form.Label className='spce'>Appointment Date</Form.Label>
                                    <Form.Control type="date" placeholder="Date" required/>
                                </Form.Group>
                            </div>
                            
                            <div style={{paddingLeft:'5px'}}>
                                <Form.Group className="labels" controlId="time">
                                    <Form.Label className='spce'>Appointment Time</Form.Label>
                                    <Form.Control type="time" placeholder="Time" required/>
                                </Form.Group>
                            </div>
                        </div>   

{/* Submit Button  */}
                        <Button type="submit" style={{backgroundColor: 'rgb(169, 92, 104)',border:'none',marginTop:'2vw'}}>Submit</Button>
                    </Col>

                    <Col xs={1}></Col>

                    <Col xs={3} style={{paddingTop:'8vw'}}>
{/* Comment Sect  */}
                        <Form.Group className="labels" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='spce'>Comments / Special Requests (optional)</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            
            <div style={{padding:'2vw'}}> .</div>
        </Container>
    );
}

const Appointments = () => {
    return (
        <>
            <ApptForm></ApptForm>
            <Footer></Footer>
        </>
    );
}
  
export default Appointments;