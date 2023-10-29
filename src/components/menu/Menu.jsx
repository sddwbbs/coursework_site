import './Menu.css'

function Menu({ isOpen, onClose }) {
    const menuStyles = {
      width: isOpen ? '30%' : 0,
      top: '10%',
      bottom: '5%',
      right: '-15px',
    };
  
    return (
      <div className="menu" style={menuStyles}>
        <button onClick={onClose}>Закрыть меню</button>
      </div>
    );
  }
  
  export default Menu;