export async function fetchBanks(){
    const response = await fetch(`https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json`, {
        method: 'GET',
        mode: 'cors',
    })
    return await response.json(); 
}