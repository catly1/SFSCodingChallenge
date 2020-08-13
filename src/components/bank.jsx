import React from 'react';
import CreditorDetail from './CreditorDetail'
import FirstNameDetail from './FirstNameDetail';
import LastNameDetail from './LastNameDetail';
import MinPayDetail from './MinPayDetail';
import BalanceDetail from './BalanceDetail';

function Bank(props){
    const [ids, setId] = React.useState("");
    const [creditor, setCreditor] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [minPay, setMinPay] = React.useState("");
    const [balance, setBalance] = React.useState("");
    const [newBank, setState] = React.useState(false);

    React.useEffect(()=>{
        const { id, creditorName, firstName, lastName, minPaymentPercentage, balance, state} = props.props;
        setState(state);
        if(!state){
            setId(id);
            setCreditor(creditorName);
            setFirstName(firstName);
            setLastName(lastName);
            if (minPaymentPercentage) setMinPay(minPaymentPercentage.toFixed(2) + "%")
            if (balance) setBalance(balance.toFixed(2));
        }
    })

    if (!newBank) {
        return(
            <tr id={ids} className="bankRow">

                <td><input type="checkbox" className="bankCheckbox"></input></td>
                <td>{creditor}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{minPay}</td>
                <td>{balance}</td>
            </tr>
        )
    } else {
        return(
            <tr id={ids} className="bankRow">
                <td><input type="checkbox" className="bankCheckbox"></input></td>
                <CreditorDetail props={ids}/>
                <FirstNameDetail props={ids}/>
                <LastNameDetail props={ids}/>
                <MinPayDetail props={ids}/>
                <BalanceDetail props={ids}/>
            </tr>
        )
    }
}

export default Bank;