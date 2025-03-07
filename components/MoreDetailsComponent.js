const MoreDetailsComponent = ( {house, onBack} ) => {

    return (
        <tr>
            <td colSpan="6">
                <h4>More Details about {house.address}</h4>
                <p>Country: {house.country}</p>
                <p>Price: ${house.price}</p>
                <button className="btn btn-secondary" onClick={onBack}>
                    Go Back
                </button>
            </td>
        </tr>
    );
};

export default MoreDetailsComponent;