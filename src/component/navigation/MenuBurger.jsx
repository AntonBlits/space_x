import style from './MenuBurger.module.css';

export default function MenuBurger({ active, setActive }) {
   return (
      <div className={style.menuBurger} onClick={() => setActive(!active)}>
         <span></span>
      </div>
   )
}

