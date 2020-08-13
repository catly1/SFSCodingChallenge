import React from 'react';

function LastNameDetail(props) {
    const [editing, setEditing] = React.useState(true);
    const [lastName, setLastName] = React.useState("");

    if (editing) {
        return <td>
            <input
                value={lastName}
                onChange={e => {
                    setLastName(e.target.value)
                }}
                onBlur={e => {
                    setEditing(false)
                }}
            />
        </td>
    } else {
        return <td>
            {lastName}
        </td>
    }
}

export default LastNameDetail;