import React from 'react'
import styles from './Index.module.css'

const Index = () => {
  return (
    <header>
        <div className={styles.headerTop}>
            <div className="header-top-left">
                <a href="">
                    <img className={styles.logoHeader} src="https://unibank.az/assets/images/logonew-orange1.png" alt="logo" />
                </a>
            </div>
            <div className={styles.headerTopCenter}>
                <ul className={styles.headerTopCenterUl}>
                    <li className={styles.headerTopCenterLi}><a href="" className={styles.headerCenterLink}>Xidmət Şəbəkəsi</a></li>
                    <li className={styles.headerTopCenterLi}><a href="" className={styles.headerCenterLink}>Bank Haqqında</a></li>
                    <li className={styles.headerTopCenterLi}><a href="" className={styles.headerCenterLink}>Keşbek</a></li>
                    <li className={styles.headerTopCenterLi}><a href="" className={styles.headerCenterLink}>Tariflər</a></li>
                    <li className={styles.headerTopCenterLi}><a href="" className={styles.headerCenterLink}>İnsan Resursları</a></li>
                    <li className={styles.headerTopCenterLi}><a href="" className={styles.headerCenterLink}>Bankla əlaqə və təkliflər</a></li>
                    <li className={styles.headerTopCenterLi}><a href="" className={styles.headerCenterLink}>F.A.Q</a></li>
                </ul>
            </div>
            <div className={styles.headerTopRight}>
                <button className={styles.headerTopRightBtnFirstActive}>Fərdi</button>
                <button className={styles.headerTopRightBtnFirst}>Biznes</button>
                <button className={styles.headerTopRightDarkLightBtn}><i class="fa-regular fa-lightbulb"></i></button>
                <button className={styles.headerTopRightLangBtn}>ENG</button>
                <button className={styles.headerTopRightLangBtn}>RUS</button>
                <button className={styles.headerTopRightSearchbar}><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
        <div className={styles.headerBottom}>
            <div className="headerBottomLeft">
                <ul className={styles.headerTopCenterUl}>
                    <li className={styles.headerTopCenterLi}><a className={styles.headerBottomLeftLink} href="">Kartlar</a></li>
                    <li className={styles.headerTopCenterLi}><a className={styles.headerBottomLeftLink} href="">Kreditlər</a></li>
                    <li className={styles.headerTopCenterLi}><a className={styles.headerBottomLeftLink} href="">Əmanətlər</a></li>
                    <li className={styles.headerTopCenterLi}><a className={styles.headerBottomLeftLink} href="">Köçürmələr</a></li>
                    <li className={styles.headerTopCenterLi}><a className={styles.headerBottomLeftLink} href="">Rəqəmsal bankçılıq</a></li>
                    <li className={styles.headerTopCenterLi}><a className={styles.headerBottomLeftLink} href="">Əlavə xidmətlər</a></li>
                </ul>
            </div>
            <div className={styles.headerBottomRight}>
                <i className={`fa-solid fa-phone ${styles.headerBottomRightIcon}`}></i>
                <span>117</span>
            </div>
        </div>
    </header>
  )
}

export default Index