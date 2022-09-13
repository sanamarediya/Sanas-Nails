import Container from '../../node_modules/react-bootstrap/Container';
import Card from '../../node_modules/react-bootstrap/Card';
import Row from '../../node_modules/react-bootstrap/Row';
import Col from '../../node_modules/react-bootstrap/Col';
import one from '../styles/img/portfolio/1.jpg';
import two from '../styles/img/portfolio/2.jpg';
import three from '../styles/img/portfolio/3.jpg';
import four from '../styles/img/portfolio/4.jpg';
import five from '../styles/img/portfolio/5.jpg';
import six from '../styles/img/portfolio/6.jpg';
import '../styles/main.css';

function PortPage() {
    return(

        <Container fluid className='back'>
            <div style={{color:'rgb(243, 238, 235)'}}>.</div>
            <h1 className='h1a'> Welcome to my Portfolio </h1>


            <div style={{backgroundColor:'rgb(222, 210, 194)',height:'100%'}}>

                {/* CARD 1 */}
                <div className="column">
                    <div className="card">
                        <div style={{width: '100%'}}>
                            <div className="overlay"> 
                                <p style={{textAlign: 'center'}}> Additions: </p>
                                <p style={{textAlign:'left'}}> $5 medium nail tips </p>
                            </div> 
                            <img src={one} alt='acrylic nails' style={{width:'100%'}}/> 
                        </div>
                        <div style={{padding:'10px'}}>
                            <p style={{textAlign: 'center'}}> Acrylic Nails </p>
                            <p style={{textAlign: 'center'}}> Cost: $45 </p>
                        </div>
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="column">
                    <div className="card">
                        <div style={{width: '100%'}}>
                            <div className="overlay"> 
                                <p style={{textAlign: 'center'}}> Additions: </p>
                                <p style={{textAlign:'left'}}> $5 medium nail tips </p>
                            </div> 
                            <img src={two} alt='acrylic nails' style={{width:'100%'}}/> 
                        </div>
                        <div style={{padding:'10px'}}>
                            <p style={{textAlign: 'center'}}> Acrylic Nails </p>
                            <p style={{textAlign: 'center'}}> Cost: $45 </p>
                        </div>
                    </div>
                </div>

                {/* CARD 3 */}
                <div className="column">
                    <div className="card">
                        <div style={{width: '100%'}}>
                            <div className="overlay"> 
                                <p style={{textAlign: 'center'}}> Additions: </p>
                                <p style={{textAlign:'left'}}> $5 medium nail tips </p>
                            </div> 
                            <img src={three} alt='acrylic nails' style={{width:'100%'}}/> 
                        </div>
                        <div style={{padding:'10px'}}>
                            <p style={{textAlign: 'center'}}> Acrylic Nails </p>
                            <p style={{textAlign: 'center'}}> Cost: $45 </p>
                        </div>
                    </div>
                </div>

                {/* CARD 4 */}
                <div className="column">
                    <div className="card">
                        <div style={{width: '100%'}}>
                            <div className="overlay"> 
                                <p style={{textAlign: 'center'}}> Additions: </p>
                                <p style={{textAlign:'left'}}> $5 medium nail tips </p>
                            </div> 
                            <img src={four} alt='acrylic nails' style={{width:'100%'}}/> 
                        </div>
                        <div style={{padding:'10px'}}>
                            <p style={{textAlign: 'center'}}> Acrylic Nails </p>
                            <p style={{textAlign: 'center'}}> Cost: $45 </p>
                        </div>
                    </div>
                </div>

                {/* CARD 5 */}
                <div className="column">
                    <div className="card">
                        <div style={{width: '100%'}}>
                            <div className="overlay"> 
                                <p style={{textAlign: 'center'}}> Additions: </p>
                                <p style={{textAlign:'left'}}> $5 medium nail tips </p>
                            </div> 
                            <img src={five} alt='acrylic nails' style={{width:'100%'}}/> 
                        </div>
                        <div style={{padding:'10px'}}>
                            <p style={{textAlign: 'center'}}> Acrylic Nails </p>
                            <p style={{textAlign: 'center'}}> Cost: $45 </p>
                        </div>
                    </div>
                </div>

                {/* CARD 6 */}
                <div className="column">
                    <div className="card">
                        <div style={{width: '100%'}}>
                            <div className="overlay"> 
                                <p style={{textAlign: 'center'}}> Additions: </p>
                                <p style={{textAlign:'left'}}> $5 medium nail tips </p>
                            </div> 
                            <img src={six} alt='acrylic nails' style={{width:'100%'}}/> 
                        </div>
                        <div style={{padding:'10px'}}>
                            <p style={{textAlign: 'center'}}> Acrylic Nails </p>
                            <p style={{textAlign: 'center'}}> Cost: $45 </p>
                        </div>
                    </div>
                </div>

            </div>
            
            


        </Container>
    );
}

export default PortPage;