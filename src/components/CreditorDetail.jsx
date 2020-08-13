import React from 'react';

function CreditorDetail(props){
    const [editing, setEditing] = React.useState(true);
    const [creditor, setCreditor] = React.useState("");

    

    if (editing){
        return <td>
            <input
                value={creditor}
                onChange={e => {
                    setCreditor(e.target.value)
                }}
                onBlur={e => {
                    setEditing(false)
                }}
            />
        </td>
    } else {
        return <td>
            {creditor}
        </td>
    }
}

export default CreditorDetail;