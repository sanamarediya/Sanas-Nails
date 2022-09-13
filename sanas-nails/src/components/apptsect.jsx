import Container from '../../node_modules/react-bootstrap/Container';
import Row from '../../node_modules/react-bootstrap/Row';
import Col from '../../node_modules/react-bootstrap/Col';
import '../styles/appt.css';

import im2 from '../styles/img/blocks/2.jpg'
import im4 from '../styles/img/blocks/4.jpg'
import im7 from '../styles/img/blocks/7.jpg'
import im8 from '../styles/img/blocks/8.jpg'
import im1 from '../styles/img/blocks/1.jpg'
import im6 from '../styles/img/blocks/6.jpg'

function Appt() {
  return (
    <Container fluid>
      <Row className='r1a'>
        <Col xs={2} style={{padding:0}}>
            <img src={im2} alt="nail polish hand" className='im2a'/> 
            <img src={im4} alt="nail polish swipe" className='im4a'/> 
        </Col>
        <Col xs={2} style={{padding:0}}>
            <img src={im7} alt="nail polish hand" className='im7a'/> 
            <img src={im8} alt="nail polish hand" className='im8a'/> 
        </Col>
        <Col xs={6} className='xs6a' style={{padding:0}}>
            <h2> Continue Your Nail Journey </h2>
            <h5> 
                Book an appointment with me and experience the world of nails the right way. From gel to acylic, I offer all the 
                basic services your nails desire. 
            </h5>
            <div> <a className='appbut' href="appointments"> APPOINTMENTS </a></div>
        </Col>
        <Col xs={2} style={{padding:0}}>
            <img src={im1} alt="nail polish swipe" className='im1a'/> 
            <img src={im6} alt="nail polish hand" className='im6a'/> 
        </Col>
      </Row>
    </Container>
  );
}

export default Appt;