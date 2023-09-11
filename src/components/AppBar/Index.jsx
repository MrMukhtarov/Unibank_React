import React from 'react'
import styles from './Index.module.css'

const Index = () => {
  return (
    <div className={styles.AppBar}>
        <div className={styles.AppBarLeft}>
            <img src="" alt="" />
            <img alt="UBank" src="https://unibank.az/assets/static/Ucard/ucard.webp"></img>
        </div>
        <div className={styles.AppBarRight}>
            <h2 className={styles.AppBarRightH2}>Sənin kartın - UCarddır!</h2>
            <p className={styles.AppBarRightP}>Bu kart sənə dünyanın istənilən yerində multivalyutalı hesablarla alış-veriş imkanı, 10 000 ₼-dək və 
                40 günədək faizsiz kredit xətti, 30%-dək keşbek 
                və illik 6%-dək gəlir əldə etmək imkanı verir. Bir sözlə, bütün ehtiyaclar tək kartda!</p>
                <div className={styles.AppBarRightButtons}>
                    <button className={styles.AppBarRightBtnActive}>Ətraflı</button>
                    <button className={styles.AppBarRightBtn}>Partnyorlar</button>
                    <button className={styles.AppBarRightBtn}>Şəxsi Kabinet</button>
                </div>
        </div>
    </div>
  )
}

export default Index