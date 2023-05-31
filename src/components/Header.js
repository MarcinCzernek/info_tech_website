import './Header.scss';
import 'font-awesome/css/font-awesome.min.css';




const Header = () => {
    return(
        <div className="Header">
            <h1>Logo</h1>
            <a href="https://github.com/MarcinCzernek/info_tech_website" target='_blank'><button><p>All source Code on Github</p></button></a>
        </div>
    )
}

export default Header;