import './ProfilePage.css'
import profile_ic from '../../assets/images/profile.svg'
import twitter_ic from '../../assets/images/twitter-ic.svg'
import instagram_ic from '../../assets/images/instagram-ic.svg'
import facebook_ic from '../../assets/images/facebook-ic.svg'
import logo from '../../assets/images/w3link-logo.svg'
import email_ic from '../../assets/images/email-ic.svg'
import github_ic from '../../assets/images/github-ic.svg'
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
    github?: string
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

function getDictDataWithHttp(dict: any, path: string): string {
    var dict: any = getDictData(dict, path)
    if (dict.toString().startsWith("http") || (dict === "")) {
    } else {
        dict = "http://" + dict
    }
    return dict
}

function ProfilePage() {
    const [profile, setProfile] = useState(undefined)

    let userprofile: Profile = {}
    if (profile !== undefined) {
        //bio
        userprofile.bio = getDictData(profile, 'bio')

        //socialmedias
        userprofile.behance = getDictDataWithHttp(profile, 'medias/behance/media')
        userprofile.email = getDictData(profile, 'medias/email/media')
        userprofile.facebook = getDictDataWithHttp(profile, 'medias/facebook/media')
        userprofile.instagram = getDictDataWithHttp(profile, 'medias/instagram/media')
        userprofile.linkedin = getDictDataWithHttp(profile, 'medias/linkedin/media')
        userprofile.twitter = getDictDataWithHttp(profile, 'medias/twitter/media')
        userprofile.youtube = getDictDataWithHttp(profile, 'medias/youtube/media')
        userprofile.github = getDictDataWithHttp(profile, 'medias/github/media')

        //links
        userprofile.title1 = getDictData(profile, 'links/link1/title')
        userprofile.link1 = getDictDataWithHttp(profile, 'links/link1/link')

        userprofile.title2 = getDictData(profile, 'links/link2/title')
        userprofile.link2 = getDictDataWithHttp(profile, 'links/link2/link')

        userprofile.title3 = getDictData(profile, 'links/link3/title')
        userprofile.link3 = getDictDataWithHttp(profile, 'links/link3/link')

        userprofile.title4 = getDictData(profile, 'links/link4/title')
        userprofile.link4 = getDictDataWithHttp(profile, 'links/link4/link')
    }

    let { username } = useParams();
    console.log(username)
    console.log(profile)
    useEffect(() => {
        fetchProfile(username!, setProfile)
    }, []);

    return (
        <div>
            <section className='user-profile'>
                <div className='frame-user-profile'>
                    <div className='frame-profile-img'>
                        <img src={profile_ic} alt='user profile image'></img>
                    </div>
                    <div className='frame-profile-username'>
                        <p>{username === undefined ? "" : username}</p>
                    </div>
                    {userprofile.bio === "" ? "" : <div className='frame-profile-bio'>
                        <p>{userprofile.bio}</p>
                    </div>
                    }
                </div>
            </section>

            <section className='user-socialmedia'>
                {userprofile.email === "" ? "" : <div className='box-email'>
                    <img src={email_ic} alt='email'></img>
                    <a onClick={() => window.location.replace("mailto:" + userprofile.email)}>
                        <p>{userprofile.email}</p>
                    </a>
                </div>}

                <div className='frame-profile-icons'>
                    {userprofile.twitter === "" ? "" : <img src={twitter_ic} onClick={() => window.open(userprofile.twitter!, '_blank')} alt='twitter'></img>}
                    {userprofile.instagram === "" ? "" : <img src={instagram_ic} onClick={() => window.open(userprofile.instagram!, '_blank')} alt='instagram'></img>}
                    {userprofile.facebook === "" ? "" : <img src={facebook_ic} onClick={() => window.open(userprofile.facebook!, '_blank')} alt='facebook'></img>}
                    {userprofile.behance === "" ? "" : <img src={behance_ic} onClick={() => window.open(userprofile.behance!, '_blank')} alt='behance'></img>}
                    {userprofile.youtube === "" ? "" : <img src={youtube_ic} onClick={() => window.open(userprofile.youtube!, '_blank')} alt='youtube'></img>}
                    {userprofile.linkedin === "" ? "" : <img src={linkedin_ic} onClick={() => window.open(userprofile.linkedin!, '_blank')} alt='linkedin'></img>}
                    {userprofile.github === "" ? "" : <img src={github_ic} onClick={() => window.open(userprofile.github!, '_blank')} alt='github'></img>}
                </div>

            </section>

            <section className='bt-links'>
                {userprofile.title1 === "" ? "" :
                    <div className='bt'>
                        <Button id='bt1' onClick={() => window.open(userprofile.link1!, '_blank')} color='blue' size="lg" fullWidth={true} variant="gradient">{userprofile.title1!}</Button>
                    </div>}

                {userprofile.title2 === "" ? "" :
                    <div className='bt'>
                        <Button id='bt2' onClick={() => window.open(userprofile.link2!, '_blank')} color='blue' size="lg" fullWidth={true} variant="gradient">{userprofile.title2!}</Button>
                    </div>
                }

                {userprofile.title3 === "" ? "" :
                    <div className='bt'>
                        <Button id='bt3' onClick={() => window.open(userprofile.link3!, '_blank')} color='blue' size="lg" fullWidth={true} variant="gradient">{userprofile.title3!}</Button>
                    </div>}

                {userprofile.title4 === "" ? "" :
                    <div className='bt'>
                        <Button id='bt4' onClick={() => window.open(userprofile.link4!, '_blank')} color='blue' size="lg" fullWidth={true} variant="gradient">{userprofile.title4!}</Button>
                    </div>}
            </section>

            <div className='bottom-body'>
                <section className='footer'>
                    <img className='logo' src={logo} alt='W3link'></img>
                </section>
            </div>
        </div>

    )
}

function fetchProfile(username: string, setProfile: any) {
    getData({ "username": username.replace("-", ".") }).then((result) => {
        setProfile(result);
    })
}

export default ProfilePage