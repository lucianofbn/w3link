import { useState } from "react";
import { injected, uauth, uauth2 } from "../../controller/udlogin/connectors";
import { useWeb3React } from "@web3-react/core";
import { createAccount } from "../../models/api";

function UdLoginBt() {
    const { activate, deactivate } = useWeb3React();
    const [isConnected, setIsConnected] = useState(false);
    const [domain, setDomain] = useState("");
    fetchData(isConnected, setDomain, setIsConnected);
    const [udLoginState, setUdLoginState] = useState(0);
    return isConnected ? (
        //<div className="flex items-center text-center w-3/4">
        // <div className="absolute text-white text-center text-sm ml-24 pointer-events-none overflow-hidden whitespace-nowrap overflow-ellipsis w-36">{domain}</div>
        <img
            src={getUdLoginButtonLogged(udLoginState)}
            onMouseOver={() => setUdLoginState(1)}
            onMouseLeave={() => setUdLoginState(0)}
            onMouseDown={() => setUdLoginState(2)}
            onClick={() => logout(setIsConnected, setDomain, deactivate)}
        />

        // </div>
    ) : (
        //<div className="flex items-center text-center w-3/4">
        <img
            src={getUdLoginButton(udLoginState)}
            onMouseOver={() => setUdLoginState(1)}
            onMouseLeave={() => setUdLoginState(0)}
            onMouseDown={() => setUdLoginState(2)}
            className={["ud-login"].join(" ")}
            onClick={() => connectUnstoppable(activate)}
        />
        //</div>
    );
}

function getUdLoginButton(state: number) {
    switch (state) {
        case 0:
            return "/images/login/default-large.svg";
        case 1:
            return "/images/login/hover-large.svg";
        case 2:
            return "/images/login/pressed-large.svg";
    }
}

function getUdLoginButtonLogged(state: number) {
    switch (state) {
        case 0:
            return "/images/login/loading-large.svg";
        case 1:
            return "/images/login/ud-logged-hover.svg";
        case 2:
            return "/images/login/ud-logged-pressed.svg";
    }
}

async function connectUnstoppable(activate: any) {
    injected.deactivate();

    activate(uauth2, undefined, true)
        .then(async (res: any) => {
            uauth2
                .getAccount()
                .then(() => {
                    uauth2.uauth.user().then((user) => {
                        localStorage.setItem("udlogin-domain", user.sub);
                        //myfunction(user.sub).then(() => {});
                        createAccount({ "username": user.sub }).then(() => {
                            window.location.href = "/edit";
                        })
                    });
                })
                .catch((e) => {
                    alert(e);
                    console.error(e);
                });
        })
        .catch((e: any) => {
            alert(e);
            console.error(e);
        });
}

function fetchData(isConnected: boolean, setDomain: Function, setIsConnected: Function) {
    uauth2.uauth
        .user()
        .then((data) => {
            if (data) {
                if (isConnected === false) {
                    setIsConnected(true);
                    setDomain(data.sub);
                    localStorage.setItem("udlogin-domain", data.sub);
                    window.location.href = "/edit";
                }
            } else {
            }
        })
        .catch((_err) => { });
}

function logout(setIsConnected: Function, setDomain: Function, deactivate: any) {
    setIsConnected(false);
    setDomain("");
    uauth2.uauth.logout();
    deactivate();
    injected.deactivate();
    uauth.deactivate();
    localStorage.clear();
    window.location.reload();
}

export default UdLoginBt;