import './ProfilePage.css'
import profile_ic from '../../assets/images/profile.svg'
import twitter_ic from '../../assets/images/twitter-ic.svg'
import instagram_ic from '../../assets/images/instagram-ic.svg'
import facebook_ic from '../../assets/images/facebook-ic.svg'
import logo from '../../assets/images/w3link-logo.svg'
import email_ic from '../../assets/images/email-ic.svg'
import behance_ic from '../../assets/images/behance-ic.svg'
import youtube_ic from '../../assets/images/youtube-ic.svg'
import linkedin_ic from '../../assets/images/linkedin-ic.svg'
import { Button } from "@material-tailwind/react";
import { useParams } from 'react-router-dom'
import { useEffect, useInsertionEffect, useState } from 'react'
import { getData } from '../../models/api'

interface Profile {
    bio?: string
    behance?: string
    email?: string
    facebook?: string
    instagram?: string
    linkedin?: string
    twitter?: string
    youtube?: string
    link1?: string
    link2?: string
    link3?: string
    link4?: string
    title1?: string
    title2?: string
    title3?: string
    title4?: string
}

function getDictData(dict: any, path: string): string {
    var path_split = path.split("/")
    for (var i = 0; i < path_split.length; i++) {
        if (dict[path_split[i]] === undefined) {
            return ""
        }
        else {
            dict = dict[path_split[i]]
        }
    }
    return dict
}

function ProfilePage() {
    const [profile, setProfile] = useState(undefined)

    let userprofile: Profile = {}
    if (profile !== undefined) {
        //bio
        userprofile.bio = profile["bio"]

        //socialmedias
        userprofile.behance = getDictData(profile, 'medias/behance/media')
        userprofile.email = getDictData(profile, 'medias/email/media')
        userprofile.facebook = getDictData(profile, 'medias/facebook/media')
        userprofile.instagram = getDictData(profile, 'medias/instagram/media')
        userprofile.linkedin = getDictData(profile, 'medias/linkedin/media')
        userprofile.twitter = getDictData(profile, 'medias/twitter/media')
        userprofile.youtube = getDictData(profile, 'medias/youtube/media')

        //links
        userprofile.title1 = getDictData(profile, 'links/link1/link')
        userprofile.link1 = getDictData(profile, 'links/link1/link')

        userprofile.title2 = getDictData(profile, 'links/link1/link')
        userprofile.link2 = getDictData(profile, 'links/link2/link')

        userprofile.title3 = getDictData(profile, 'links/link1/link')
        userprofile.link3 = getDictData(profile, 'links/link3/link')

        userprofile.title4 = getDictData(profile, 'links/link4/link')
        userprofile.link4 = getDictData(profile, 'links/link1/link')
    }

    let { username } = useParams();
    console.log(username)
    console.log(profile)
    useEffect(() => {
        fetchProfile(username!, setProfile)
    }, []);

    return (
        <div className='full-profile-page'>
            <div className='profile-page'>
                <div className='top-body'>
                    <section className='user-profile'>
                        <div className='frame-user-profile'>
                            <div className='frame-profile-img'>
                                <img src={profile_ic} alt='user profile image'></img>
                            </div>
                            <div className='frame-profile-username'>
                                <p>{username === undefined ? "" : username}</p>
                            </div>
                            <div className='frame-profile-bio'>
                                <p>{profile === undefined ? "" : profile["bio"]}</p>
                            </div>
                        </div>
                    </section>

                    <section className='user-socialmedia'>
                        <div className='grid-mail-icons'>
                            <div className='box-email'>
                                <img src={email_ic} alt='email'></img>
                                <p>{userprofile.email}</p>
                            </div>
                            <div className='frame-profile-icons'>
                                <img onClick={() => window.location.replace(userprofile.twitter!)} src={twitter_ic} alt='twitter'></img>
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
                            <Button onClick={() => window.location.replace(userprofile.link1!)} color='blue' size="lg" variant="gradient">{userprofile.title1!}</Button>
                            <Button onClick={() => window.location.replace(userprofile.link2!)} color='blue' size="lg" variant="gradient">{userprofile.title2!}</Button>
                            <Button onClick={() => window.location.replace(userprofile.link3!)} color='blue' size="lg" variant="gradient">{userprofile.title3!}</Button>
                            <Button onClick={() => window.location.replace(userprofile.link4!)} color='blue' size="lg" variant="gradient">{userprofile.title4!}</Button>
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

function fetchProfile(username: string, setProfile: any) {
    getData({ "username": username.replace("-", ".") }).then((result) => {
        setProfile(result);
    })
}

function redirectMedia(url: string) {

}


export default ProfilePage