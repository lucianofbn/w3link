import './EditPage.css'
import copy_ic from '../../assets/images/copy-ic.svg'
import logo from '../../assets/images/w3link-logo.svg'
import logout_ic from '../../assets/images/logout-ic.svg'
import twitter_ic from '../../assets/images/twitter-ic.svg'
import instagram_ic from '../../assets/images/instagram-ic.svg'
import facebook_ic from '../../assets/images/facebook-ic.svg'
import email_ic from '../../assets/images/email-ic.svg'
import behance_ic from '../../assets/images/behance-ic.svg'
import youtube_ic from '../../assets/images/youtube-ic.svg'
import linkedin_ic from '../../assets/images/linkedin-ic.svg'
import profile from '../../assets/images/profile.svg'
import { Textarea, Button, } from "@material-tailwind/react";
import LinkCard from '../../components/linkcard/LinkCard'
import SocialMediaCard from '../../components/socialmediacard/SocialMediaCard'
import FloatButton from '../../components/fab/FloatButton'
import { injected, uauth, uauth2 } from '../../controller/udlogin/connectors';
import { useWeb3React } from '@web3-react/core';

function EditPage() {
    const { deactivate } = useWeb3React();
    return (
        <div>
            <nav>
                <a href='/'>
                    <img className='logo' src={logo} alt='Logo'></img>
                </a>
                <div className='box-user'>
                    <p>w3link.cypto</p>
                    <a onClick={() => logout(deactivate)}>
                        <img src={logout_ic}></img>
                    </a>
                </div>
            </nav>

            <section className='url'>
                <h1>
                    My W3Link
                </h1>
                <div className='frame-url'>
                    <div className='box-url'>
                        <p>w3link.vercel.app/w3link.crypto</p>
                        <img src={copy_ic}></img>
                    </div>
                </div>
            </section>

            <div className='divisor'></div>

            <section className='edit-profile'>
                <h1>
                    Profile
                </h1>
                <div className='frame-profile'>
                    <div className='box-profile'>
                        <div className='profile-image'>
                            <img src={profile} alt='Image Profile'></img>
                            <Button color='gray' variant="outlined">Change</Button>
                        </div>
                        <div className='description'>
                            <Textarea maxLength={120} label="Bio" />
                        </div>
                    </div>
                </div>
            </section>

            <div className='divisor'></div>

            <section className='socialmedias'>
                <h1>
                    Social Medias
                </h1>

                <div className='grid-socialmedias'>
                    <SocialMediaCard label='E-mail' checked={false} icon={<img src={email_ic}></img>}></SocialMediaCard>
                    <SocialMediaCard label='Twitter' checked={false} icon={<img src={twitter_ic}></img>}></SocialMediaCard>
                    <SocialMediaCard label='Facebook' checked={false} icon={<img src={facebook_ic}></img>}></SocialMediaCard>
                    <SocialMediaCard label='LinkedIn' checked={false} icon={<img src={linkedin_ic}></img>}></SocialMediaCard>
                    <SocialMediaCard label='Instagram' checked={false} icon={<img src={instagram_ic}></img>}></SocialMediaCard>
                    <SocialMediaCard label='Behance' checked={false} icon={<img src={behance_ic}></img>}></SocialMediaCard>
                    <SocialMediaCard label='Youtube' checked={false} icon={<img src={youtube_ic}></img>}></SocialMediaCard>
                </div>
            </section>
            <div className='divisor'></div>
            <section className='links'>
                <h1>
                    Links
                </h1>
                <div className='grid-links'>
                    <LinkCard id='link1' checked={false}></LinkCard>
                    <LinkCard id='link2' checked={false}></LinkCard>
                    <LinkCard id='link3' checked={false}></LinkCard>
                    <LinkCard id='link4' checked={false}></LinkCard>
                </div>
            </section>

            <FloatButton></FloatButton>

        </div>
    )
}

function logout(deactivate: any) {
    uauth2.uauth.logout();
    deactivate();
    injected.deactivate();
    uauth.deactivate();
    localStorage.clear();
    window.location.href = "/";
}

export default EditPage