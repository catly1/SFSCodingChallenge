import React from 'react';
import { fetchBanks } from '../util/bank_api';
import Bank from './bank'

function Home(props){
    const [banks, setBanks] = React.useState([]);
    const [checkRowCount, setCheckRowCount] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const [tempEntries, setTempEntries] = React.useState({});
    const [newId, setNewId] = React.useState(0);

    React.useEffect(() => {
        fetchBanks().then(res => {
            setBanks(res)
            setNewId(res[res.length - 1].id)
        })

    }, [])

    const handleAllCheckBoxes = () =>{
        const table = document.getElementById("table");
        const val = table.rows[0].cells[0].children[0].checked;
        for (let i = 1; i < table.rows.length; i++) {
            table.rows[i].cells[0].children[0].checked = val;
        }
        updateTotal();
    }


    const renderBanks = () => {
        return(
            <table id="table" onClick={updateTotal}>
                <tbody>
                <tr id="columnName">
                    <th><input type="checkbox" name="all" onChange={handleAllCheckBoxes} /></th>
                    <th>
                        Creditor
                    </th>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Min Pay%
                    </th>
                    <th>
                        Balance
                    </th>
                </tr>
                {banks.map(bank => <Bank props={bank} key={bank.id}/>)}
                </tbody>
            </table>
        )
    }

    const handleRemove = () =>{
        const table = document.getElementById("table");
        let bankIdsToBeRemoved = []
        for (let i = 0; i < table.rows.length; i++) {
            let row = table.rows[i]
            let checked = row.cells[0].children[0].checked;
            if (checked) {
                bankIdsToBeRemoved.push(row.id)
            }
        }
        removeBanks(bankIdsToBeRemoved);
    }


    const removeBanks = (bankIds) => {
        let update = banks.slice();

        bankIds.forEach(id => {
            let index = update.findIndex(bank => bank.id == id);
            update.splice(index, 1);
        })

        setBanks(update);
    }

    const createDebtBox = () =>{
        const id = newId + 1;
        setNewId(id);

        const temp = {id, state: true};
        banks.push(temp);
    }

    const updateTotal = () =>{
        const table = document.getElementById("table");
        let checkCount = 0;
        let tempTotal = 0;
        for (let i = 1; i < table.rows.length; i++) {
            let row = table.rows[i]
            let checked = row.cells[0].children[0].checked;
            if (checked){
                checkCount += 1;
                let num = parseFloat(row.cells[5].innerText);
                if (num) tempTotal += num;
                // console.log(row.cells[5].innerText)
            }
        }

        setCheckRowCount(checkCount);
        setTotal(tempTotal)
    }


    return (
        <div className="home">
            {renderBanks()}
            <div className="buttons">
                <button onClick={createDebtBox}>Add Debt</button>
                <button onClick={handleRemove}>Remove Debt</button>
            </div>
            <div className="totalRow">
                <div>
                    Total
                </div>
                <div>
                    {"$" + total}
                </div>
            </div>
            <div className="countRow">
                <div>
                    {"Total Row Count: " + banks.length}
                </div>
                <div>
                    {"Check Row Count: " + checkRowCount}
                </div>
            </div>
        </div>
    )
}

export default Home