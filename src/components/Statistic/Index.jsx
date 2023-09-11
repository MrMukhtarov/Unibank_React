import React from 'react'
import styles from './Index.module.css'

const Index = () => {
  return (
    <div className={styles.Statistic}>
        <div className={styles.StatisticBox}>
            <h4 className={styles.StatisticBoxh4}>Nağd kreditlər</h4>
            <span className={styles.StatisticBoxspan1}>16%</span>
            <span className={styles.StatisticBoxspan2}>-dən başlayaraq</span>
            <button className={styles.StatisticBoxButton}>Sifariş et</button>
        </div>

        <div className={styles.StatisticBox}>
            <h4 className={styles.StatisticBoxh4}>Əmanətlər</h4>
            <span className={styles.StatisticBoxspan1}>11%</span>
            <span className={styles.StatisticBoxspan2}>-dən illik gəlir</span>
            <button className={styles.StatisticBoxButton}>Ətraflı</button>
        </div>

        <div className={styles.StatisticBox}>
            <h4 className={styles.StatisticBoxh4}>Plastik kartlar</h4>
            <span className={styles.StatisticBoxspan1}>30%</span>
            <span className={styles.StatisticBoxspan2}>-dək keşbek xidməti</span>
            <button className={styles.StatisticBoxButton}>Ətraflı</button>
        </div>

        <div className={styles.StatisticBox}>
            <h4 className={styles.StatisticBoxh4}>Kredit kartı</h4>
            <span className={styles.StatisticBoxspan1}>40</span>
            <span className={styles.StatisticBoxspan2}>günədək güzəşt müddəti</span>
            <button className={styles.StatisticBoxButton}>Ətraflı</button>
        </div>  
    </div>
  )
}

export default Index