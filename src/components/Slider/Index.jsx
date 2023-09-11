import React from 'react'
import styles from './Index.module.css'
import { Carousel } from 'antd';

const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const Index = () => {
  return (
    <div className={styles.carouselMain}>
   <Carousel autoplay >
    <div >
      <div className={styles.carouselItem} style={contentStyle}>
        <div className="carouselItemLeft">
            <img src="https://unibank.az/uploads/banners/1693917765banner-tehsil-iscilerine.png" alt="" />
        </div>
        <div className={styles.carouselItemRight}>
            <h1 className={styles.carouselItemRighth1}>Təhsil işçilərinə 0% komissiya!</h1>
            <p className={styles.carouselItemRightp}>Sentyabrın 30-dək bütün təhsil işçiləri üçün 0% komissiyalı nağd kredit!</p>
            <div className="carouselItemRightBtns">
                <button className={styles.carouselItemRightFirstBtn}>Sifariş et <i class="fa-solid fa-arrow-right-long"></i></button>
                <button className={styles.carouselItemRightSecondtBtn}>Ətraflı</button>
            </div>
        </div>
      </div>
    </div>
    {/* // */}
    <div >
      <div className={styles.carouselItem} style={contentStyle}>
        <div className="carouselItemLeft">
            <img src="https://unibank.az/uploads/banners/1693902051banner-topla.png" alt="" />
        </div>
        <div className={styles.carouselItemRight}>
            <h1 className={styles.carouselItemRighth1}>Arzuların üçün daha çox topla!</h1>
            <p className={styles.carouselItemRightp}>Sentyabrın 30-dək bütün təhsil işçiləri üçün 0% komissiyalı nağd kredit!</p>
            <div className="carouselItemRightBtns">
                <button className={styles.carouselItemRightSecondtBtn}>Ətraflı</button>
            </div>
        </div>
      </div>
    </div>
    <div >
      <div className={styles.carouselItem} style={contentStyle}>
        <div className="carouselItemLeft">
            <img src="https://unibank.az/uploads/banners/1682404726kredit-xetti-ac1%20(1).png" alt="" />
        </div>
        <div className={styles.carouselItemRight}>
            <h1 className={styles.carouselItemRighth1}>Kredit xəttini dərhal aç!</h1>
            <p className={styles.carouselItemRightp}>Bunun üçün sadəcə UBank mobil tətbiqində UCard-nı seç və saniyələr ərzində pul kartına otursun! </p>
            <div className="carouselItemRightBtns">
                <button className={styles.carouselItemRightSecondtBtn}>Ətraflı</button>
            </div>
        </div>
      </div>
    </div>
    {/* // */}
    <div >
      <div className={styles.carouselItem} style={contentStyle}>
        <div className="carouselItemLeft">
            <img src="https://unibank.az/uploads/banners/16703977791661845566digerbank.gif" alt="" />
        </div>
        <div className={styles.carouselItemRight}>
            <h1 className={styles.carouselItemRighth1}>Marketdə hər alış-verişdə 5% keşbek</h1>
            <p className={styles.carouselItemRightp}>Artıq market alış-verişi üçün min. 10 AZN-lik ödənişə ehtiyac yoxdur! Sadəcə Apple Pay / Google Pay ilə ödə və 5% keşbek qazan!  </p>
            <div className="carouselItemRightBtns">
                <button className={styles.carouselItemRightSecondtBtn}>Ətraflı</button>
            </div>
        </div>
      </div>
    </div>
    {/* // */}
  </Carousel>
    </div>
  )
}

export default Index