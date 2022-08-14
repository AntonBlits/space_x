import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuBurger from './MenuBurger';
import style from './Navigation.module.css';

export function Navigation() {

   const [menuActive, setMenuActive] = useState(false);

   const navigation = menuActive ? style.active : style.nav;

   return (
      <>
         <nav className={navigation}>
            <Link to="/">Главная</Link>
            <Link to="/technology">Технология</Link>
            <Link to="/timetable">График полетов</Link>
            <Link to="/guarantee">Гарантии</Link>
            <Link to="/about">О компании</Link>
            <Link to="/contacts">Контакты</Link>
         </nav>
         <MenuBurger active={menuActive} setActive={setMenuActive} />
      </>
   )
}