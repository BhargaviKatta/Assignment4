import './stylestwo.css';
import Navlink from './Navlink';
const Navbar = () => {

    return (

        <div className="navbar-section">

            <i className="react-icon">React</i>

            <Navlink linkname="Docs" link="https://reactjs.org/docs/getting-started.html"/>

            <Navlink linkname="Tutorial" link="https://reactjs.org/tutorial/tutorial.html"/>

            <Navlink linkname="Blog" link="https://reactjs.org/blog/"/>

            <Navlink linkname="Community" link="https://reactjs.org/community/support.html"/>

        </div>

    );

};

 

export default Navbar;