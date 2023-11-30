import style from './navbar.module.css';
import OptionBanner from "./optionbanner/OptionBanner";

const Navbar = () =>
{
    return (
        <div className={style.Navbar}>
            <h1>
                Medical Database
            </h1>
            <OptionBanner />
        </div>
    );
}

export default Navbar;