
import { levels } from '../../helpers/imc';
import styles from './GridItem.module.css';
import upImage from '../../assets/images/up.png';
import downImage from '../../assets/images/down.png';


export const GridItem = ( {item} ) => {

    
    return(
        <div className={styles.main} style={{backgroundColor: item.color}}>

            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width="30"></img>
            </div>

            <div className={styles.gridTitle}>
                {item.title}
            </div>

            {item.yourImc &&
                <div className={styles.yourImc}>
                    Seu IMC é de {item.yourImc} KG
                </div>
            }
           

            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
       
    );
}