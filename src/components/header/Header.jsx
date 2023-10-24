import logoImg from '../../assets/html-folder.png'
import './Header.css'

function Header () {

    return <header className="header">
        <div className="container">
            <div className="header__row">
                <div className="header__logo">
                    <img src={logoImg} width="70px" alt="Logo" />
                </div>
                <div className="header__text">TEXT</div>
            </div>
        </div>
    </header>

}

export default Header;