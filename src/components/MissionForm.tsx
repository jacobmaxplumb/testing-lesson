const MissionForm = (props: any): any => {
    return (
        <div>
            {props.isFetchingData ? (
                <div>We are fetching data</div>
            ) : (
                <button onClick={props.getData}>Get Data</button>
            )}
        </div>
    );
}

export default MissionForm;