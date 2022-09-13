import '../styles/nav.css';
import { Outlet, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Navb = () => {
    return (
        <>
        
            <ul className='uli'>
                <li> <NavLink className='new' to="/" > Home</NavLink> </li>
                <li> <NavLink to="/services" className='new'>Services</NavLink> </li>
                <li> <NavLink to="/appointments" className='new'>Appointments</NavLink> </li>
                <li> <NavLink to="/portfolio" className='new'>Portfolio</NavLink> </li>
            </ul>
        

        <Outlet />
        </>

    );
}


export default Navb;