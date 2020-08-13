import React from 'react';

function MinPayDetail(props) {
    const [editing, setEditing] = React.useState(true);
    const [minPay, setMinPay] = React.useState("");

    if (editing) {
        return <td>
            <input
                value={minPay}
                type="number"
                onChange={e => {
                    setMinPay(e.target.value)
                }}
                onBlur={e => {
                    setEditing(false)
                }}
            />
        </td>
    } else {
        return <td>
            {parseFloat(minPay).toFixed(2) + "%"}
        </td>
    }
}

export default MinPayDetail;