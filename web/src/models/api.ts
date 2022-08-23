import { create_account_path, get_data_path, server, set_data_path } from "./repo";

export async function endpointCall(data: any, endpoint: string) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };
    return new Promise((resolve, reject) => {
        fetch(server + endpoint, requestOptions)
            .then((response) => response.json())
            .then((data) => resolve(data));
    });
}

export async function createAccount(data: any) {
    return endpointCall(data, create_account_path)
}

export async function setData(data: any) {
    return endpointCall(data, set_data_path)
}

export async function getData(data: any) {
    return endpointCall(data, get_data_path)
}

