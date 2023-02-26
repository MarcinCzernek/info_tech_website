import './Nav.scss';

const handleClickScroll = () => {
    const element = document.getElementById('about');
    if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const Nav = () => {
return(
    <div className="Nav">
    <ul>
        <li> <button className="btn-scroll" onClick={handleClickScroll}>About</button></li>
        <li><button className="btn-scroll" onClick={handleClickScroll}>Opinions</button></li>
        <li><button className="btn-scroll" onClick={handleClickScroll}>FAQ</button></li>
        <li><button className="btn-scroll" onClick={handleClickScroll}>Contact</button></li>
    </ul>
    </div>
);
}

export default Nav;