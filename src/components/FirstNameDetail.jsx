import React from 'react';

function FirstNameDetail(props) {
    const [editing, setEditing] = React.useState(true);
    const [firstName, setFirstName] = React.useState("");

    if (editing) {
        return <td>
            <input
                value={firstName}
                onChange={e => {
                    setFirstName(e.target.value)
                }}
                onBlur={e => {
                    setEditing(false)
                }}
            />
        </td>
    } else {
        return <td>
            {firstName}
        </td>
    }
}

export default FirstNameDetail;