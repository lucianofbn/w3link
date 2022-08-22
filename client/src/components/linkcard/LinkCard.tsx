import { Switch, Input } from "@material-tailwind/react";
import { useState } from "react";
import '../linkcard/LinkCard.css'

type LinkCardProps = {
    id: string
    checked: boolean
    changeLinks?: any
    setLinks?: any
    links?: any
}

function LinkCard(props: LinkCardProps) {

    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");

    return (
        <div className='box-link'>
            <div className='switch'>
                <Switch id={props.id} color="blue" defaultChecked={props.checked} />
            </div>

            <div className='input-title'>
                <Input variant="standard" label="Title" onChange={(e) => newTitle(e, props.id, props.setLinks, link, setTitle, title, props.links, props.changeLinks)} />
            </div>

            <div className='input-url'>
                <Input variant="standard" label="Url" onChange={(e) => newLink(e, props.id, props.setLinks, link, setLink, title, props.links, props.changeLinks)} />
            </div>
        </div>
    );
}

function newTitle(e: any, id: any, setLinks: any, link: any, setTitle: any, title: string, links: any, changeLinks: any) {
    setTitle(e.target.value)
    changeLinks(e.target.value, link, setLinks, id, links)
}

function newLink(e: any, id: any, setLinks: any, link: any, setLink: any, title: string, links: any, changeLinks: any) {
    setLink(e.target.value)
    changeLinks(title, e.target.value, setLinks, id, links)
}

export default LinkCard