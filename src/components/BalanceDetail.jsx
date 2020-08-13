import React from 'react';

function BalanceDetail(props) {
    const [editing, setEditing] = React.useState(true);
    const [balance, setBalance] = React.useState("");

    

    if (editing) {
        return <td>
            <input
                value={balance}
                type="number"
                onChange={e => {
                    setBalance(e.target.value)
                }}
                onBlur={e => {
                    setEditing(false)
                }}
            />
        </td>
    } else {
        return <td>
            {parseFloat(balance).toFixed(2)}
        </td>
    }
}

export default BalanceDetail;