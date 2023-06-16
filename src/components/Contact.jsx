import styles from '../styles/contact.module.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Icon } from '@mui/material';
export default function Contact(){
    return (
        <div className={`${styles.master}`}>
            <h3 className={`${styles.h3}`}>Contact</h3>
            <div className={`${styles.contact_container}`}>
                <div><p><EmailOutlinedIcon/></p> <p>khalilbenyahia2@gmail.com</p></div>
                <div><p><PhoneAndroidOutlinedIcon/></p> <p>+213792017322</p></div>
            </div>
            <div className={`${styles.social}`}>
                <a target='_blank' href='https://github.com/ibrahim4informatics'><GitHubIcon fontSize='50px' /></a>
                <a target='_blank' href='https://www.facebook.com/ibrahimelkhalil.benyahia.9'><FacebookIcon fontSize='50px' /></a>
                <a target='_blank' href='https://instagram.com/ibrahimelkhalil.benyahia.9'><InstagramIcon fontSize='50px' /></a>
            </div>
            <p>designed by ibrahim</p>
        </div>
    );
}