import React from 'react'
import styles from './Index.module.css'

const Index = () => {
  return (
    <div className={styles.FrontNewsContainer}>
        <div className={styles.FrontNews}>
            <div className={styles.FrontNewsBox}>
                <p className={styles.FrontNewsBoxp1}>Unibank KB ASC Cloudflare Enterprise domeninin lisenziya uzadılması ilə 
                    bağlı kotirovka elan edir.</p>
                    <p className={styles.FrontNewsBoxp2}>Kotirovkada iştirak etmək istəyənlər qiymət təklifini bağlı və 
                    möhürlənmiş zərfdə, kotirovka komissiyasının sədri Tural Həsənovun adına göndərməlidirlər.</p>
                    <span className={styles.FrontNewsBoxspan}>05.09.2023</span>
            </div>
            {/*  */}
            <div className={styles.FrontNewsBox}>
                <p className={styles.FrontNewsBoxp1}>Unibank KB ASC Cloudflare Enterprise domeninin lisenziya uzadılması ilə 
                    bağlı kotirovka elan edir.</p>
                    <p className={styles.FrontNewsBoxp2}>Kotirovkada iştirak etmək istəyənlər qiymət təklifini bağlı və 
                    möhürlənmiş zərfdə, kotirovka komissiyasının sədri Tural Həsənovun adına göndərməlidirlər.</p>
                    <span className={styles.FrontNewsBoxspan}>05.09.2023</span>
            </div>
            {/*  */}
            <div className={styles.FrontNewsBox}>
                <p className={styles.FrontNewsBoxp1}>Unibank KB ASC Cloudflare Enterprise domeninin lisenziya uzadılması ilə 
                    bağlı kotirovka elan edir.</p>
                    <p className={styles.FrontNewsBoxp2}>Kotirovkada iştirak etmək istəyənlər qiymət təklifini bağlı və 
                    möhürlənmiş zərfdə, kotirovka komissiyasının sədri Tural Həsənovun adına göndərməlidirlər.</p>
                    <span className={styles.FrontNewsBoxspan}>05.09.2023</span>
            </div>
        </div>
        <div className={styles.FrontNewsButtonDiv}>
        <button className={styles.FrontNewsButton}>Bütün Xəbərlər</button>
        </div>
    </div>
  )
}

export default Index