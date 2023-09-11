import React from 'react'
import styles from './Index.module.css'

const Index = () => {
  return (
        <div className={styles.UBankContainer}>
    <div className={styles.UBank}>
        <div className={styles.UBankLeft}>
            <h2 className={styles.UBankLeftH2}>UBank</h2>
            <p className={styles.UBankLeftP}>UBank 24/7 bank xidmətlərinə çıxışı smartfonunda təmin edən mobil tətbiqdir. 
            Ödənişlərini banka gəlmədən, telefonunda bir toxunuşla həyata keçir!</p>
            <div className={styles.UBankLeftImages}>
                <img src="https://unibank.az/assets/images/playstore.svg" alt="" />
                <img src="https://unibank.az/assets/images/appstore.svg" alt="" />
                <img src="https://unibank.az/assets/images/app-gallery.svg" alt="" />
            </div>
            <button className={styles.UBankLeftButton}>Haqqında</button>
        </div>
        <div className={styles.UBankRight}>
            <img src="https://unibank.az/assets/images/appbar2.png" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Index