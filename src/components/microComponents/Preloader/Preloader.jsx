import style from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.svg'

const Preloader = () =>{
    return(
        <div className={style.preloader}>
            <img src={preloader} alt=""/>
        </div>
    )
}

export default Preloader