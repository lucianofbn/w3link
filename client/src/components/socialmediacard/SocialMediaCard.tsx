import '../socialmediacard/SocialMediaCard.css'
import { Switch, Input } from "@material-tailwind/react";

type SocialMediaCardProps = {
    label: string
    checked: boolean
    icon: any
}

function SocialMediaCard(props: SocialMediaCardProps) {
    return (

        <div className='box-socialmedia'>
            <div className='switch'>
                <Switch id={props.label} color="blue" defaultChecked={props.checked} />
            </div>
            <div className='input-socialmedia'>
                <Input id={props.label} label={props.label} icon={props.icon} />
            </div>
        </div>
    )

}

export default SocialMediaCard