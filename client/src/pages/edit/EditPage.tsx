import './EditPage.css'
import LinkCard from '../../components/linkcard/LinkCard'
import SocialMediaCard from '../../components/socialmediacard/SocialMediaCard'
import FloatButton from '../../components/fab/FloatButton'
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
import { injected, uauth, uauth2 } from '../../controller/udlogin/connectors';
import { useWeb3React } from '@web3-react/core';
import { useState } from 'react'


function EditPage() {
    const [form, setForm] = useState({});
    const [links, setLinks] = useState({});
    const [medias, setMedias] = useState({});
    var username = localStorage.getItem("udlogin-domain");
    const { deactivate } = useWeb3React();
    return (
        <div>
            <nav>
                <a href='/'>
                    <img className='logo' src={logo} alt='Logo'></img>
                </a>
                <div className='box-user'>
                    <p>{username}</p>
                    <a onClick={() => logout(deactivate)}>
                        <img src={logout_ic}></img>
                    </a>
                </div>
            </nav>

            <div className='edit-page'>

                <section className='url'>
                    <h1>
                        My W3Link
                    </h1>
                    <div className='frame-url'>
                        <div className='box-url'>
                            <a target="_blank" href={"https://w3link.vercel.app/" + username?.replace(".", "-")}>
                                <p>w3link.vercel.app/{username?.replace(".", "-")}</p>
                            </a>
                            <img src={copy_ic}></img>
                        </div>
                    </div>
                </section>

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
                                <Textarea id='bio' maxLength={120} label="Bio" onChange={(e) => handleOnChangeData(e, form, setForm, "bio")} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='socialmedias'>
                    <h1>
                        Social Medias
                    </h1>

                    <div className='grid-socialmedias'>
                        <SocialMediaCard label='E-mail' id={"email"} checked={true} icon={<img src={email_ic}></img>} changeMedias={changeMedias} setMedias={() => setMedias} medias={medias}></SocialMediaCard>
                        <SocialMediaCard label='Twitter' id={"twitter"} checked={true} icon={<img src={twitter_ic}></img>} changeMedias={changeMedias} setMedias={() => setMedias} medias={medias}></SocialMediaCard>
                        <SocialMediaCard label='Facebook' id={"facebook"} checked={true} icon={<img src={facebook_ic}></img>} changeMedias={changeMedias} setMedias={() => setMedias} medias={medias}></SocialMediaCard>
                        <SocialMediaCard label='LinkedIn' id={"linkedin"} checked={true} icon={<img src={linkedin_ic}></img>} changeMedias={changeMedias} setMedias={() => setMedias} medias={medias}></SocialMediaCard>
                        <SocialMediaCard label='Instagram' id={"instagram"} checked={true} icon={<img src={instagram_ic}></img>} changeMedias={changeMedias} setMedias={() => setMedias} medias={medias}></SocialMediaCard>
                        <SocialMediaCard label='Behance' id={"behance"} checked={true} icon={<img src={behance_ic}></img>} changeMedias={changeMedias} setMedias={() => setMedias} medias={medias}></SocialMediaCard>
                        <SocialMediaCard label='Youtube' id={"youtube"} checked={true} icon={<img src={youtube_ic}></img>} changeMedias={changeMedias} setMedias={() => setMedias} medias={medias}></SocialMediaCard>
                    </div>
                </section>

                <section className='links'>
                    <h1>
                        Links
                    </h1>
                    <div className='grid-links'>
                        <LinkCard id='link1' checked={true} changeLinks={changeLinks} setLinks={() => setLinks} links={links}></LinkCard>
                        <LinkCard id='link2' checked={true} changeLinks={changeLinks} setLinks={() => setLinks} links={links}></LinkCard>
                        <LinkCard id='link3' checked={true} changeLinks={changeLinks} setLinks={() => setLinks} links={links}></LinkCard>
                        <LinkCard id='link4' checked={true} changeLinks={changeLinks} setLinks={() => setLinks} links={links}></LinkCard>
                    </div>
                </section>
            </div>
            <FloatButton links={links} form={form} medias={medias}></FloatButton>

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

const handleOnChangeData = (e: any, functionValue: any, setFunction: any, prop: any) => {
    console.log(e)
    var currentValues = functionValue;
    var propValue = e.target.value;
    currentValues[prop] = propValue;
    setFunction(currentValues);
};

function changeLinks(title: any, link: any, setFunction: any, prop: any, links: any) {
    var currentValues = links;
    var propValue = { "title": title, "link": link }
    currentValues[prop] = propValue;
    setFunction(currentValues);
}

function changeMedias(media: any, setFunction: any, prop: any, medias: any) {
    var currentValues = medias;
    var propValue = { "media": media }
    console.log(currentValues)
    console.log(propValue)
    currentValues[prop] = propValue;
    setFunction(currentValues);
}

export default EditPage