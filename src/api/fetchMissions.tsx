import axios from "axios"

const fetchMissions = async () => {
    try {
        const results = await axios.get("https://api.spacexdata.com/v3/missions");
        return results.data;
    } catch (error) {
        alert(error);
        throw error;
    }
    
}

export default fetchMissions;