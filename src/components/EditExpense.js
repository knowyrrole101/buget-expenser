import React from 'react';

const EditExpensePage = (props) => {
    // Print params
    console.log(props);
    return (
        <div>
            Editing expense for id {props.match.params.id}
        </div>
    )
}

export default EditExpensePage;