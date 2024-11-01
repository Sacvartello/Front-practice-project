import React from 'react';
import styles from './card.module.css'

const Card = (props) => {
    const {mainColor, children, price, planName, aboutPlan} = props
    return (
        <div className={styles.cardsWrapper}>
            <div style={{border: `10px solid ${mainColor}`}} className={styles.card}>
                <h3 style={{color:mainColor}} className={styles.planName}>{planName}</h3>
                <p className={styles.aboutPlan}>{aboutPlan}</p>
                <p style={{color:mainColor}} className={styles.price}>{price}</p>
            </div>
            <div className={styles.childrens}>
                {children}
            </div>
            <button style={{background:mainColor}} className={styles.startBtn}>Start</button>
        </div>
    );
}

export default Card;
