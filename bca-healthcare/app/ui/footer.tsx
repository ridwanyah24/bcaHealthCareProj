import { faFacebook, faTiktok, faTwitter , faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '@/app/globals.css'


export default function Footer(){
    return(
        <div className="w-full h-8 bg-cyan-500 flex justify-between z-40">
            <div></div>
            <div className="flex justify-between w-1/5 p-2">
                <FontAwesomeIcon icon={faFacebook} className="font"/>
                <FontAwesomeIcon icon={faLinkedin} className="font"/>
                <FontAwesomeIcon icon={faInstagram} className="font"/>
                <FontAwesomeIcon icon={faTiktok} className="font"/>
            </div>
        </div>
    )
}