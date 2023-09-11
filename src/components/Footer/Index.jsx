import React from 'react'
import styles from './Index.module.css'

const Index = () => {
  return (
    <div className={styles.footerContainer}>
        <footer className={styles.Footer}>
            <div className={styles.FooterTop}>
                <div className={styles.FooterTopBox}>
                    <h5 className={styles.FooterTopBoxH5}>Kartlar</h5>
                    <ul className={styles.FooterTopBoxUl}>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Kartlar</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Debet kartlar</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Digər</a></li>
                    </ul>
                </div>
                {/*  */}
                <div className={styles.FooterTopBox}>
                    <h5 className={styles.FooterTopBoxH5}>Kreditlər</h5>
                    <ul className={styles.FooterTopBoxUl}>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Nağd</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Mikro</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>İpoteka</a></li>
                    </ul>
                </div>
                {/*  */}
                <div className={styles.FooterTopBox}>
                    <h5 className={styles.FooterTopBoxH5}>Əmanətlər</h5>
                    <ul className={styles.FooterTopBoxUl}>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Müddətli</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Proqressiv</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Yığım</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Faizlər əvvəlcədən</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Topla</a></li>
                    </ul>
                </div>
                {/*  */}
                <div className={styles.FooterTopBox}>
                    <h5 className={styles.FooterTopBoxH5}>Köçürmələr</h5>
                    <ul className={styles.FooterTopBoxUl}>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Ölkəxarici</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Ölkədaxili</a></li>
                    </ul>
                </div>
                {/*  */}
                <div className={styles.FooterTopBox}>
                    <h5 className={styles.FooterTopBoxH5}>Rəqəmsal bankçılıq</h5>
                    <ul className={styles.FooterTopBoxUl}>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>UBank</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Şəxsi kabinet</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Unimiles şəxsi kabinet</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Onlayn kredit ödənişi</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Onlayn kredit müraciəti</a></li>
                    </ul>
                </div>
                {/*  */}
                <div className={styles.FooterTopBox}>
                    <h5 className={styles.FooterTopBoxH5}>Əlavə xidmətlər</h5>
                    <ul className={styles.FooterTopBoxUl}>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Hesablaşma-kassa xidməti</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>POS terminal / Smart kassa</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Depozit qutuları</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Onlayn kredit ödənişi</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Onlayn ticarət (eCommerce)</a></li>
                    </ul>
                </div>
                {/*  */}
                <div className={styles.FooterTopBox}>
                    <h5 className={styles.FooterTopBoxH5}>Bank haqqında</h5>
                    <ul className={styles.FooterTopBoxUl}>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Rəhbərlik</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Müxbir hesablar</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Təklif və Şikayətlər</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>İnsan resursları</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Hesabatlar</a></li>
                        <li className={styles.FooterTopBoxLi}><a href="" className={styles.FooterTopBoxA}>Digər sənədlər</a></li>
                    </ul>
                </div>
                {/*  */}
            </div>
            <div className={styles.FooterCenter}>
                <i class="fa-brands fa-apple"></i>
                <i class="fa-brands fa-android"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-telegram"></i>
            </div>
            <div className={styles.FooterBottom}>
                <div className={styles.FooterBottomLeft}>
                    <span className={styles.FooterBottomLeftSpan}>© 2023, Unibank - Sənin Bankın</span>
                    <p className={styles.FooterBottomLeftP}>Unibank Azərbaycan Respublikası Mərkəzi Bankının 73 saylı 14 dekabr 2010-cu il tarixli lisenziyası əsasında fəaliyyət göstərir. <br />
                        Bütün hüquqlar qorunur.</p>
                </div>
                <div className={styles.FooterBottomRight}>
                    <a href=""><img className={styles.FooterBottomRightImg} src="https://unibank.az/assets/images/adif.png" alt="" /></a>
                    <a href=""><img className={styles.FooterBottomRightImg} src="https://www.e-gov.az/ContentNew/assets/logo_1u4IDU.svg" alt="" /></a>
                    <a href=""><img className={styles.FooterBottomRightImg} src="https://unibank.az/assets/images/infobank.png?v4" alt="" /></a>
                    <a href=""><img className={styles.FooterBottomRightImg} src="https://unibank.az/assets/images/msp.png?v5" alt="" /></a>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Index