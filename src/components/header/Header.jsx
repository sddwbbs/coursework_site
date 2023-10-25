import logoImg from '../../assets/html-folder.png'
import menuImg from '../../assets/menu.svg'
import './Header.css'

function Header () {

    return <header className="header">
        <div className="container">
            <div className="header__row">
                <div className="header__logo">
                    <img src={logoImg} width="70px" alt="Logo" />
                </div>
                <span className="header__text">Курсовая работа Габрусевич Иван ИЦТМС 3-1</span>
                <div className="header__btn">
                    <img src={menuImg} width="40px" alt="Logo" />
                </div>
            </div>
        </div>
    </header>

}

export default Header;