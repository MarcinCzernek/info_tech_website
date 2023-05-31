import './Nav.scss';

const handleClickScroll = (id) => {
    const element = document.querySelector(id);
    if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth',block: 'start', inline: 'nearest' });
    }
};

const Nav = () => {
return(
    <div className="Nav">
    <ul>
        <li> <button className="btn-scroll" onClick={() => handleClickScroll('#about_title')}>About</button></li>
        <li><button className="btn-scroll" onClick={() => handleClickScroll('#opinion')}>Opinions</button></li>
        <li><button className="btn-scroll" onClick={() => handleClickScroll('.faq')}>FAQ</button></li>
        <li><button className="btn-scroll" onClick={() => handleClickScroll('.contact_form')}>Contact</button></li>
    </ul>
    </div>
);
}

export default Nav;