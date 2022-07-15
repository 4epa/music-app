import style from './Header.module.css'

const Header = (props) => {
  return (
    <header className="header">
      <div className={style.header_container}>
        <h1 className={style.app_name}>Music player</h1>
      </div>
    </header>
  )
}

export default Header;