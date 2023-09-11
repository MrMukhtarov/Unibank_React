import React from 'react'
import styles from './Index.module.css'

const Index = () => {
  return (
    <div className={styles.ExchangeContainer}>
        <div className={styles.Exchange}>
            <h1 className={styles.ExchangeH1}>Valyuta məzənnələri</h1>
            <div className={styles.ExchangeBoxes}>
                <div className={styles.ExchangeBoxesBox}>
                    <h4 className={styles.ExchangeBoxesBoxH4}>Nağd</h4>
                    <span className={styles.ExchangeBoxesBoxDateSpan}>Yeniləndi 11.09.2023</span>
                    <table className={styles.ExchangeBoxesBoxTable}>
                        <thead>
                        <tr>
                            <th className={styles.ExchangeBoxesBoxTableTh}>Valyuta</th>
                            <th className={styles.ExchangeBoxesBoxTableTh}>Alış</th>
                            <th className={styles.ExchangeBoxesBoxTableTh}>Satış</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.ExchangeBoxesBoxTabletr}>
                                <td className={styles.ExchangeBoxesBoxTableTd}>USD</td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.6940 <i class="fa-solid fa-caret-down"></i></td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.7005  <i class="fa-solid fa-caret-down"></i></td>
                            </tr>
                            <tr className={styles.ExchangeBoxesBoxTabletr}>
                                <td className={styles.ExchangeBoxesBoxTableTd}>EUR</td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.6940 <i class="fa-solid fa-caret-down"></i></td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.7005  <i class="fa-solid fa-caret-down"></i></td>
                            </tr>
                            <tr className={styles.ExchangeBoxesBoxTabletr}>
                                <td className={styles.ExchangeBoxesBoxTableTd}>RUB</td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.6940 <i class="fa-solid fa-caret-down"></i></td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.7005  <i class="fa-solid fa-caret-down"></i></td>
                            </tr>
                            <tr className={styles.ExchangeBoxesBoxTabletr}>
                                <td className={styles.ExchangeBoxesBoxTableTd}>GBP</td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.6940 <i class="fa-solid fa-caret-down"></i></td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.7005  <i class="fa-solid fa-caret-down"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/*  */}
                <div className={styles.ExchangeBoxesBox}>
                    <h4 className={styles.ExchangeBoxesBoxH4}>Nağdsız</h4>
                    <span className={styles.ExchangeBoxesBoxDateSpan}>Yeniləndi 11.09.2023</span>
                    <table className={styles.ExchangeBoxesBoxTable}>
                        <thead>
                        <tr>
                            <th className={styles.ExchangeBoxesBoxTableTh}>Valyuta</th>
                            <th className={styles.ExchangeBoxesBoxTableTh}>Alış</th>
                            <th className={styles.ExchangeBoxesBoxTableTh}>Satış</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.ExchangeBoxesBoxTabletr}>
                                <td className={styles.ExchangeBoxesBoxTableTd}>USD</td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.6940 <i class="fa-solid fa-caret-down"></i></td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.7005  <i class="fa-solid fa-caret-down"></i></td>
                            </tr>
                            <tr className={styles.ExchangeBoxesBoxTabletr}>
                                <td className={styles.ExchangeBoxesBoxTableTd}>EUR</td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.6940 <i class="fa-solid fa-caret-down"></i></td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.7005  <i class="fa-solid fa-caret-down"></i></td>
                            </tr>
                            <tr className={styles.ExchangeBoxesBoxTabletr}>
                                <td className={styles.ExchangeBoxesBoxTableTd}>RUB</td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.6940 <i class="fa-solid fa-caret-down"></i></td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.7005  <i class="fa-solid fa-caret-down"></i></td>
                            </tr>
                            <tr className={styles.ExchangeBoxesBoxTabletr}>
                                <td className={styles.ExchangeBoxesBoxTableTd}>GBP</td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.6940 <i class="fa-solid fa-caret-down"></i></td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.7005  <i class="fa-solid fa-caret-down"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/*  */}
                <div className={styles.ExchangeBoxesBox}>
                    <h4 className={styles.ExchangeBoxesBoxH4}>Kart</h4>
                    <span className={styles.ExchangeBoxesBoxDateSpan}>Yeniləndi 11.09.2023</span>
                    <table className={styles.ExchangeBoxesBoxTable}>
                        <thead>
                        <tr>
                            <th className={styles.ExchangeBoxesBoxTableTh}>Valyuta</th>
                            <th className={styles.ExchangeBoxesBoxTableTh}>Alış</th>
                            <th className={styles.ExchangeBoxesBoxTableTh}>Satış</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.ExchangeBoxesBoxTabletr}>
                                <td className={styles.ExchangeBoxesBoxTableTd}>USD</td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.6940 <i class="fa-solid fa-caret-down"></i></td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.7005  <i class="fa-solid fa-caret-down"></i></td>
                            </tr>
                            <tr className={styles.ExchangeBoxesBoxTabletr}>
                                <td className={styles.ExchangeBoxesBoxTableTd}>EUR</td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.6940 <i class="fa-solid fa-caret-down"></i></td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.7005  <i class="fa-solid fa-caret-down"></i></td>
                            </tr>
                            <tr className={styles.ExchangeBoxesBoxTabletr}>
                                <td className={styles.ExchangeBoxesBoxTableTd}>RUB</td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.6940 <i class="fa-solid fa-caret-down"></i></td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.7005  <i class="fa-solid fa-caret-down"></i></td>
                            </tr>
                            <tr className={styles.ExchangeBoxesBoxTabletr}>
                                <td className={styles.ExchangeBoxesBoxTableTd}>GBP</td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.6940 <i class="fa-solid fa-caret-down"></i></td>
                                <td className={styles.ExchangeBoxesBoxTableTd}>1.7005  <i class="fa-solid fa-caret-down"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/*  */}
            </div>
            <div className={styles.ExchangeBottom}>
                <div className={styles.ExchangeBottomLeft}>
                    <h4 className={styles.ExchangeBottomLeftH4}>Valyuta kalkulyatoru</h4>
                    <span className={styles.ExchangeBottomLeftSpan}>Nağd məzənnə əsasında hesablanır</span>
                </div>
             <div>
             <div className={styles.ExchangeBottomRight}>
                    <div className={styles.ExchangeBottomRightUsd}>
                        <input className={styles.ExchangeBottomRightUsdInput} type="number" value={0} />
                       <div className={styles.ExchangeBottomRightUsdInputDiv}>
                       <img className={styles.ExchangeBottomRightImg} src="https://unibank.az/assets/images/usd.png" alt="" />
                        <span className={styles.ExchangeBottomRightSpan}>USD</span>
                        <i class="fa-solid fa-chevron-down"></i>
                       </div>
                    </div>
                        <i className={`fa-solid fa-arrow-right-long ${styles.ExchangeBottomRightArrowI}`}></i>
                    <div className={styles.ExchangeBottomRightAzn}>
                        <input className={styles.ExchangeBottomRightAznInput} type="number" value="0.0000" />
                        <div className={styles.ExchangeBottomRightAznInputDiv}>
                        <img className={styles.ExchangeBottomRightImg} src="https://unibank.az/assets/images/azn.png" alt="" />
                            <span className={styles.ExchangeBottomRightSpan}>AZN</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Index