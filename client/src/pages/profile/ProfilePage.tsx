import './ProfilePage.css'
import profile from '../../assets/images/profile.svg'
import twitter_ic from '../../assets/images/twitter-ic.svg'
import instagram_ic from '../../assets/images/instagram-ic.svg'
import facebook_ic from '../../assets/images/facebook-ic.svg'
import logo from '../../assets/images/w3link-logo.svg'
import email_ic from '../../assets/images/email-ic.svg'
import behance_ic from '../../assets/images/behance-ic.svg'
import youtube_ic from '../../assets/images/youtube-ic.svg'
import linkedin_ic from '../../assets/images/linkedin-ic.svg'
import { Button } from "@material-tailwind/react";

function ProfilePage() {
    return (
        <div className='full-profile-page'>
            <div className='profile-page'>
                <div className='top-body'>
                    <section className='user-profile'>
                        <div className='frame-user-profile'>
                            <div className='frame-profile-img'>
                                <img src={profile} alt='user profile image'></img>
                            </div>
                            <div className='frame-profile-username'>
                                <p> w3link.crypto</p>
                            </div>
                            <div className='frame-profile-bio'>
                                <p>This is my web3 profile! <br /> Obrigado pela visita</p>
                            </div>
                        </div>
                    </section>

                    <section className='user-socialmedia'>
                        <div className='grid-mail-icons'>
                            <div className='box-email'>
                                <img src={email_ic} alt='e-mail'></img>
                                <p>lfbncel@gmail.com</p>
                            </div>
                            <div className='frame-profile-icons'>
                                <img src={twitter_ic} alt='twitter'></img>
                                <img src={instagram_ic} alt='instagram'></img>
                                <img src={facebook_ic} alt='facebook'></img>
                                <img src={behance_ic} alt='behance'></img>
                                <img src={youtube_ic} alt='youtube'></img>
                                <img src={linkedin_ic} alt='linkedin'></img>
                            </div>
                        </div>
                    </section>

                    <section className='bt-links'>
                        <div className='grid-buttons'>
                            <Button color='blue' size="lg" variant="gradient">Botão 1</Button>
                            <Button color='blue' size="lg" variant="gradient">Botão 2</Button>
                            <Button color='blue' size="lg" variant="gradient">Botão 3</Button>
                            <Button color='blue' size="lg" variant="gradient">Botão 4</Button>
                        </div>
                    </section>
                </div>
                <div className='bottom-body'>
                    <section className='footer'>
                        <img className='logo' src={logo} alt='W3link'></img>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage