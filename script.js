import {displayUsers} from './components.js';
import {addEventBtn} from './helper.js';
export {getUsers,filteringData};

const getUsers = async () => {
    try{
        let queryUsers = await fetch("https://jsonplaceholder.typicode.com/users")
        let resp = await queryUsers.json()
        displayUsers(resp);
    }
    catch(err){ window.alert(err)};
}

const filteringData = async (filter,input) => {
    try{
        let queryUsers = await fetch("https://jsonplaceholder.typicode.com/users")
        let resp = await queryUsers.json()
        const filteredUser = resp.filter((element)=>{
            return element[filter].toLowerCase().includes(input.toLowerCase())
        })
        if (filteredUser != '') {
            displayUsers(filteredUser)
        }
        else{
            window.alert('No matches found');
            displayUsers(filteredUser);    
        }
    }
    catch(err){ window.alert(err)};
};

window.onload = getUsers;
addEventBtn();





