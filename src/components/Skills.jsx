import styles from '../styles/skills.module.css';

export default function Skills() {
    return (
        <div className={`${styles.container}`}>
            <h3 className={`${styles.h3}`}>My Skills</h3>
            <div className={`${styles.skillsContainer}`}>
                <div className={`${styles.frontend}`}>
                    <h3 className={`${styles.h3}`}>Front-end</h3>
                    <div>
                        <p>HTML/HTML5</p>
                        <p>CSS/CSS3</p>
                        <p>JS/+ES6</p>
                        <p>React/Vite</p>
                    </div>
                </div>
                <div className='sep'></div>
                <div className={`${styles.frontend}`}>
                <h3 className={`${styles.h3}`}>Back-end</h3>
                <div>
                    <p>JS/Node.js</p>
                    <p>Express.js</p>
                    <p>Mysql/Prisma ORM</p>
                    <p>JWT/Auth</p>
                </div>
            </div>
            </div>
        </div>
    )
}