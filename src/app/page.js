"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import WagmiLogo from '../Images/WagmiLogo.png';

const COUNTDOWN_DURATION = 15 * 60; // Durée du compte à rebours en secondes

export default function dashboard() {

    //barVentesContent3 height
    const dataVentes = 5;
    let totaldataventes;
    let hauteurPourcentage;

    if(dataVentes<=1) {
        hauteurPourcentage = 15 + '%';
    }
    else if(dataVentes<4) {
        totaldataventes = dataVentes * 10;
        hauteurPourcentage = totaldataventes + '%';
    }
    else if(dataVentes<7) {
        totaldataventes = dataVentes * 7.5;
        hauteurPourcentage = totaldataventes + '%';
    }
    else if(dataVentes<10) {
        totaldataventes = dataVentes * 6.5;
        hauteurPourcentage = totaldataventes + '%';
    }
    else if(dataVentes<24) {
        totaldataventes = dataVentes * 6;
        hauteurPourcentage = totaldataventes + '%';
    }
    else{
        hauteurPourcentage = 140 + '%';
    }

    const [remainingTime, setRemainingTime] = useState(COUNTDOWN_DURATION);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (remainingTime === 0) {
            setRemainingTime(COUNTDOWN_DURATION);
        }
    }, [remainingTime]);

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${padZero(minutes)}:${padZero(seconds)}`;
    }

    function padZero(number) {
        return number.toString().padStart(2, '0');
    }

    return (
        <div className={styles.dashboardContainer}>



            <div className={styles.sidebarContainer}>

                <div className={styles.sidebarContentTop}>
                    <div className={styles.sidebarContentTopText}>
                        <h4>Solde total</h4>
                    </div>
                    <div className={styles.sidebarContentTopNumber}>
                        <h2>100k</h2>
                    </div>
                </div>


                <div className={styles.sidebarContent}>
                    <div className={styles.sidebarContentPolygon}></div>
                    <div className={styles.sidebarContentText}>
                        <h4>Ventes totales</h4>
                    </div>
                    <div className={styles.sidebarContentNumber}>
                        <h2>95k</h2>
                    </div>
                </div>

            </div>


            <div className={styles.mainContent}>

                <h1 className={styles.dashboardMainTitle}>DASHBOARD</h1>

                <div className={styles.propulsedContainer}>

                    <h2 className={styles.dashboardSecondTitle}>Propulsé par</h2>

                    <div>
                        <Image src={WagmiLogo} alt="WagmiLogo" width={113} height={46} />
                    </div>

                    <div className={styles.clock}>
                        <div className={styles.clockCircle}>
                            <div className={styles.time}>{formatTime(remainingTime)}</div>
                        </div>
                    </div>
                </div>



                <div className={styles.blueFrame1}>

                    <div className={styles.rectangleVisitorCornerLeft11}>
                        <div className={styles.rectangleVisitorCornerLeft12}>
                            <div className={styles.rectangleVisitorCornerLeft13}/>
                        </div>
                    </div>

                    <div className={styles.textCornerLeft1}>
                        <h4>Visiteurs</h4>
                    </div>

                    <div className={styles.textCornerRight1}>
                        <h4>Aujourd'hui</h4>
                    </div>

                    <div className={styles.textMiddle1}>
                        <h1>1.5K</h1>
                    </div>
                    <div className={styles.polygonMiddle1}/>
                    <div className={styles.textBottom1}>
                        <p>Visiteurs uniques sur le site NFTimbre sur une période donnée.</p>
                    </div>


                </div>



                <div className={styles.blueFrame2}>

                    <div>
                        <div className={styles.textPercentCornerLeft2}>
                            <p>%</p>
                        </div>

                        <div className={styles.textMiddleTop2}>
                            <h3>Répartition par pays :</h3>
                        </div>
                    </div>

                    <div>

                       <div id={"France"}>
                            <h1 className={styles.textFrancePercentMiddle2}>45%</h1>
                            <p className={styles.textFranceBottom2}>France</p>
                       </div>

                        <div id={"Japon"}>
                            <h1 className={styles.textJaponPercentMiddle2}>35%</h1>
                            <p className={styles.textJaponBottom2}>Japon</p>
                        </div>

                        <div id={"Suisse"}>
                            <h1 className={styles.textSuissePercentMiddle2}>15%</h1>
                            <p className={styles.textSuisseBottom2}>Suisse</p>
                        </div>

                        <div id={"Autre"}>
                            <h1 className={styles.textAutrePercentMiddle2}>5%</h1>
                            <p className={styles.textAutreBottom2}>Autre</p>
                        </div>

                    </div>

                </div>

                <div className={styles.blueFrame3}>

                    <div>

                        <div className={styles.rectangleVentesCornerLeft31}>
                            <div className={styles.polygonVentesCornerLeft32}/>
                        </div>
                        <div className={styles.textCornerLeft3}>
                            <h4>Ventes</h4>
                        </div>
                        <div className={styles.textCornerRight3}>
                            <h4>Semaine</h4>
                        </div>

                    </div>

                    <div className={styles.barVentesContentContainer3}>
                        <div className={styles.barVentesContent3} style={{ height: hauteurPourcentage }}>
                            <p className={styles.barVentesContentText3}>{dataVentes}k</p>
                        </div>
                        <div className={styles.barVentesContent3} style={{ height: hauteurPourcentage }}>
                            <p className={styles.barVentesContentText3}>{dataVentes}k</p>
                        </div>
                        <div className={styles.barVentesContent3} style={{ height: hauteurPourcentage }}>
                            <p className={styles.barVentesContentText3}>{dataVentes}k</p>
                        </div>
                        <div className={styles.barVentesContent3} style={{ height: hauteurPourcentage }}>
                            <p className={styles.barVentesContentText3}>{dataVentes}k</p>
                        </div>
                        <div className={styles.barVentesContent3} style={{ height: hauteurPourcentage }}>
                            <p className={styles.barVentesContentText3}>{dataVentes}k</p>
                        </div>
                        <div className={styles.barVentesContent3} style={{ height: hauteurPourcentage }}>
                            <p className={styles.barVentesContentText3}>{dataVentes}k</p>
                        </div>
                        <div className={styles.barVentesContent3} style={{ height: hauteurPourcentage }}>
                            <p className={styles.barVentesContentText3}>{dataVentes}k</p>
                        </div>
                    </div>

                </div>

                <div className={styles.bottomBar}>
                    <div className={styles.bottomBarContainer}>
                        <p className={styles.dateText}>04/06</p>
                        <p className={styles.dateText}>04/06</p>
                        <p className={styles.dateText}>04/06</p>
                        <p className={styles.dateText}>04/06</p>
                        <p className={styles.dateText}>04/06</p>
                        <p className={styles.dateText}>04/06</p>
                        <p className={styles.dateText}>04/06</p>
                    </div>
                </div>



            </div>

        </div>
    );
}

