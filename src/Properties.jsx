function Properties(props) {
    console.log(props);
    return (
        <div>
            <h1>Properties</h1>
            <p>This is the Properties page.</p>
            <p>Name: {props.data}</p>
            <p>Duration: {props.duration}</p>
        </div>
    );
}


export default Properties;


