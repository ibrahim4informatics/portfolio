import styles from '../styles/personal.module.css';
export default function Personal() {
    return (
        <>
            <h1 className={`${styles.h2}`}>Personal Information</h1>
            <div className={`${styles.container}`}>

                <div className={`${styles.right}`}>
                    <div><h3>Firstname:</h3><p>Ibrahim Elkhalil</p></div>
                    <div><h3>Lastname:</h3><p>Benyahia</p></div>
                    <div><h3>Age:</h3><p>19</p></div>
                </div>
                <div className="sep"></div>
                <div className={`${styles.left}`}>
                    <div><h3>Nationality:</h3><p>Algerian</p></div>
                    <div><h3>Contient:</h3><p>Africa</p></div>
                    <div><h3>Address:</h3><p>Oran Es-Senia</p></div>
                </div>
            </div>
        </>
    );
}