import { UAuthConnector } from "@uauth/web3-react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import UAuth from "@uauth/js";

export const injected = new InjectedConnector({ supportedChainIds: [1, 137] });

export const walletconnect = new WalletConnectConnector({
    infuraId: import.meta.env.VITE_INFURA_ID,
    qrcode: true,
});

const ua = new UAuth({
    clientID: import.meta.env.VITE_CLIENT_ID!,
    redirectUri: import.meta.env.VITE_REDIRECT_URI!,
    scope: "openid wallet",
});

export const uauth2 = new UAuthConnector({
    uauth: ua,
    connectors: { injected, walletconnect },
});

export const uauth = new UAuthConnector({
    clientID: import.meta.env.VITE_CLIENT_ID,
    redirectUri: import.meta.env.VITE__REDIRECT_URI,
    scope: "openid wallet",
    connectors: { injected, walletconnect },
});

var connectors = {
    injected: injected,
    walletconnect: walletconnect,
    uauth: uauth,
};

export default connectors;