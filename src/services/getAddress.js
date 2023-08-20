import axios from "axios"

export async function getAddress(data) {
    return axios.get(`https://viacep.com.br/ws/${data}/json/`)
        .then((data) => data)
        .catch(e => console.error("Error while fetching address data", e))
}