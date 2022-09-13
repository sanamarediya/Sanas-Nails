import Container from '../../node_modules/react-bootstrap/Container';
import Card from '../../node_modules/react-bootstrap/Card';
import Row from '../../node_modules/react-bootstrap/Row';
import Col from '../../node_modules/react-bootstrap/Col';
import gel from '../styles/img/gel.jpg';
import acrylic from '../styles/img/acrylic.jpg';
import dip from '../styles/img/dip.jpg';
import '../styles/main.css';

function ServCard() {
    return (
        <Container fluid className='back'>
            <div style={{color:'rgb(243, 238, 235)'}}>.</div>
            <h1 className='h1a'> Services </h1>

            <div className='servs'>
                <div className="info_image"> 
                    <div className="words">
                        <h2 className='h2s'> Gel Polish </h2>
                        <h3 className='h3s'> Time: 30-45 mins </h3>
                        <h3 className='h3s'> Base Price: $20 </h3>
                        <p className='ps' style={{textDecorationLine: 'underline'}}> Add Ons </p>
                        <p className='ps'> Designs, foils, etc: $1-$4 per nail </p>
                        <p className='ps'> Swarovski Crystals: $3-$6 per nail </p>
                    </div>
                    <div>
                        <img src={gel} alt='gel nails' className='pic'/> 
                    </div>
                </div>

                <div className="info_image"> 
                    <div>
                        <img src={acrylic} alt='acrylic nails' className='pic'/> 
                    </div>
                    <div className="words">
                        <h2 className='h2s'> Acrylic </h2>
                        <h3 className='h3s'> Time: 45 mins-1.5 hrs </h3>
                        <h3 className='h3s'> Base Price: $40 </h3>
                        <p className='ps' style={{textDecorationLine: 'underline'}}> Add Ons </p>
                        <p className='ps'> Designs, foils, etc: $1-$4 per nail </p>
                        <p className='ps'> Swarovski Crystals: $3-$6 per nail </p>
                        <p className='ps'> Nail tips length: medium: $5/set, </p>
                        <p className='ps'> long: $10/set, x-long: $15/set </p>
                    </div>
                </div>

                <div className="info_image"> 
                    <div className="words">
                        <h2 className='h2s'> Dip Powder </h2>
                        <h3 className='h3s'> Time: 30-45 mins </h3>
                        <h3 className='h3s'> Base Price: $30 </h3>
                        <p className='ps' style={{textDecorationLine: 'underline'}}> Add Ons </p>
                        <p className='ps'> Designs, foils, etc: $1-$4 per nail </p>
                        <p className='ps'> Swarovski Crystals: $3-$6 per nail </p>
                        <p className='ps'> Nail tips length: medium: $5/set, </p>
                        <p className='ps'> long: $10/set, x-long: $15/set </p>
                    </div>
                    <div>
                        <img src={dip} alt='dip nails' className='pic'/> 
                    </div>
                </div>
            </div>

                
      
        </Container>
    );
}

export default ServCard;