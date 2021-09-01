const MissionsList = (props: any) => {
    return(
        <div>
            {props.missions.map((mission: any, key: any) => (
                <div key={key} data-testid="mission">
                    {mission.mission_name}
                </div>
            ))}
        </div>
    );
}

export default MissionsList;