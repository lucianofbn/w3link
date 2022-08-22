import { Switch, Input } from "@material-tailwind/react";
import '../linkcard/LinkCard.css'

type LinkCardProps = {
    id: string
    checked: boolean
}

function LinkCard(props: LinkCardProps) {
    return (
        <div className='box-link'>
            <div className='switch'>
                <Switch id={props.id} color="blue" defaultChecked={props.checked} />
            </div>

            <div className='input-title'>
                <Input variant="standard" label="Title" />
            </div>

            <div className='input-url'>
                <Input variant="standard" label="Url" />
            </div>
        </div>
    );
}

export default LinkCard