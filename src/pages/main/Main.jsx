import style from './Main.module.css';

export default function Main() {
   return (
      <div className={style.main}>
         <div className={style.title}>
            <h1>Путешествие</h1>
            <p>на красную планету</p>
            <button className={style.btn}>Начать путешествие</button>
         </div>

         <div className={style.advantage}>
            <div className={style.advantage__block}>
               <p className={style.advantage__title}>Мы</p>
               <p className={style.advantage__number}>1</p>
               <p>На рынке</p>
            </div>
            <div className={style.advantage__block}>
               <p className={style.advantage__title}>Гарантируем</p>
               <p className={style.advantage__number}>50%</p>
               <p>Безопастности</p>
            </div>
            <div className={style.advantage__block}>
               <p className={style.advantage__title}>Календарик за</p>
               <p className={style.advantage__number}>2001г.</p>
               <p>В подарок</p>
            </div>
            <div className={style.advantage__block}>
               <p className={style.advantage__title}>Путешествие</p>
               <p className={style.advantage__number}>597</p>
               <p>Дней</p>
            </div>
         </div>
      </div>
   )
}