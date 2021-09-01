import axios from "axios"

const fetchMissions = (): Promise<any> => {
    return axios.get("https://api.spacexdata.com/v3/missions").then(result => {
        return result;
    })

}

export default fetchMissions;