import './Header.scss';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GitCat from '../assets/GitHub.png'



const Header = () => {
    return(
        <div className="Header">
            <h1>Logo</h1>
            <a href=""><button><p>All source Code on Github</p></button></a>
        </div>
    )
}

export default Header;