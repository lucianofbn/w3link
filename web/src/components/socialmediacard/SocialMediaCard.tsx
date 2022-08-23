import '../socialmediacard/SocialMediaCard.css'
import { Switch, Input } from "@material-tailwind/react";
import { useState } from 'react';

type SocialMediaCardProps = {
    id?: any
    label: string
    setMedias?: any
    medias?: any
    checked: boolean
    icon: any
    changeMedias?: any
}

function SocialMediaCard(props: SocialMediaCardProps) {
    const [media, setMedia] = useState("");

    return (
        <div className='box-socialmedia'>
            <div className='switch'>
                <Switch id={props.label} color="blue" defaultChecked={props.checked} />
            </div>
            <div className='input-socialmedia'>
                <Input id={props.label} label={props.label} icon={props.icon} onChange={(e) => newMedia(e, props.id, props.setMedias, media, setMedia, props.medias, props.changeMedias)} />
            </div>
        </div>
    )

    function newMedia(e: any, id: any, setMedias: any, media: any, setMedia: any, medias: any, changeMedias: any) {
        setMedia(e.target.value)
        console.log(medias)
        changeMedias(e.target.value, setMedias, id, medias)
    }
}

export default SocialMediaCard


