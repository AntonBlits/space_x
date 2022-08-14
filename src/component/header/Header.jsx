import style from './Header.module.css';
import logo from '../../images/logo.png';
import { Navigation } from '../navigation/Navigation';

export function Header() {
   return (
      <div className={style.header}>
         <div className={style.logo}>
            <img alt='logo' src={logo} />
         </div>
         <Navigation />
      </div>
   )
}