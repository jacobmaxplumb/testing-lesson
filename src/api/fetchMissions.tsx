import axios from "axios"

export const fetchMissions = async () => {
    try {
        const results = await axios.get("https://api.spacexdata.com/v3/missions");
        console.log(results);
    } catch (error) {
        alert(error);
        throw error;
    }
    
}