export async function fetchBanks(){
    const response = await fetch(`https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json`, {
        method: 'GET',
        mode: 'cors',
    })
    return await response.json(); 
}

export async function update(bank){
    const response = await fetch('SomethingGoingToTheBackendURL', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(bank),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return await response.json();
}