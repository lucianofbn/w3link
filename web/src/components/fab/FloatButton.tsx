import { setData } from "../../models/api";

type FloatButtonProps = {
	links?: any
	medias?: any
	form?: any
}

function FloatButton(props: FloatButtonProps) {
	return (
		<button onClick={() => sendForm(props.links, props.medias, props.form)} className="fixed z-90 bottom-10 mr-4 right-0 w-24 h-12 text-[#fff] bg-[#369CF0] rounded-lg hover:bg-[#59b3fd] active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">Save</button>
	);
}

function sendForm(links: any, medias: any, form: any) {
	var username = localStorage.getItem("udlogin-domain");

	var data: any = {}
	data["bio"] = form["bio"]
	data["links"] = links
	data["medias"] = medias
	data["username"] = username

	console.log(data)
	setData(data)
}

export default FloatButton