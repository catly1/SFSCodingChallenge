import React from 'react';
import {update} from '../util/bank_api';

function BalanceDetail(props) {
    const [editing, setEditing] = React.useState(true);
    const [balance, setBalance] = React.useState("");

    const handleUpdate = () => {
        let bank = {
            id: props.props.id,
            balanace: balance
        }

        // update(bank);
    }

    if (editing) {
        return <td>
            <input
                value={balance}
                type="number"
                onChange={e => {
                    setBalance(e.target.value);
                }}
                onBlur={e => {
                    handleUpdate();
                    setEditing(false);
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