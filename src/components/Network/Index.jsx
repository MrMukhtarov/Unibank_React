import React from 'react'
import styles from './Index.module.css'

const Index = () => {
  return (
    <div className={styles.NetworkContainer}>
        <div className={styles.Network}>
            <div className={styles.NetworkLeft}>
                <div className={styles.NetworkLeftLeft}>
                    <h1 className={styles.NetworkLeftLeftH1}>Xidmət <br /> şəbəkəsi</h1>
                    <p className={styles.NetworkLeftLeftP}>Filial və UTM-lərin ünvanları, həmçinin - iş saatları və digər <br /> məlumatlar haqqında ətraflı.</p>
                    <button className={styles.NetworkLeftLeftButton}>Daha ətraflı</button>
                </div>
                <div className={styles.NetworkLeftRight}>
                    <img src="https://unibank.az/assets/images/Bitmap.png" alt="" />
                </div>
            </div>
            <div className={styles.NetworkRight}>
                <h1 className={styles.NetworkRightH1}>Sualın var? <br /> Bizimlə əlaqə saxla!</h1>
                <p className={styles.NetworkRightP}>Onlayn-məsləhətçi, 117 Çağrı mərkəzi <br /> və ya bank filiallarına müraciət et və <br /> suallarına cavab al. Rahat və asan!</p>
                <button className={styles.NetworkRightButton}>Daha ətraflı</button>
            </div>
        </div>
    </div>
  )
}

export default Index