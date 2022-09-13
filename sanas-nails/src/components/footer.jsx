import Container from '../../node_modules/react-bootstrap/Container';
import Row from '../../node_modules/react-bootstrap/Row';
import Col from '../../node_modules/react-bootstrap/Col';
import logo from '../styles/img/logo.jpg'
import '../styles/foot.css';

function Footer() {
    return (
        <Container fluid style={{backgroundColor:'white',flex:'0'}}>
            <Row style={{height:'20vw'}}>
                <Col xs={3} style={{height:'20vw'}}>
                    <img src={logo} alt='logo' className='logo1'/> 
                </Col>

                <Col xs={5} className='text'>
                    <h5 className='h5f' style={{textAlign:'left',paddingBottom:'1vw'}}> CONTACT ME! </h5>
                    <p> email@gmail.com </p>
                    <p> 123-456-7890 </p>
                    <p> Location: 123 Main Street, TX, 71234 </p>
                </Col>

                <Col xs={4} className='box'>
                    <h5 className='h5f'> LEARN MORE </h5>
                    <p> Click below to see the services I offer! </p>
                    <div> <a class='footbut' href='services'> SERVICES </a></div>
                </Col>

            </Row>
        </Container>
    );
}


export default Footer;

