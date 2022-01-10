///Notes
//Build a tiny command line app that stores a multi-value string dictionary in memory.  
//This should be an application that is run on the command line and can be used interactively as shown in the examples.
// dict = {
//     key : []
// }

import inquirer from "inquirer";

var miniDictionary= {}

// #region Prompt Functions

export function cli() { //entry point
    inquirer.prompt([{
        type: 'input',
        name: 'operation',
        message: 'begin'
    }])
    .then(answer =>{
        let input = Object.values(answer)[0].split(" ");//[cmd, key, value]
        handleInput(input);
    }) 
}

function keepGoing(){
    inquirer.prompt([{
        type: 'input',
        name: 'operation',
        message: 'please enter next operation:'
    }])
    .then(answer =>{
        let input = Object.values(answer)[0].split(" ");//[cmd, key, value]
        handleInput(input);
    }) 
}


function handleInput(input){
    let cmd = input[0];
    let key = null;
    let value = null;

    if(input.length == 3){
        key = input[1];
        value = input[2]
    }

    if(input.length == 2){
        key = input[1];
    }

    if(input.length > 3 || input[0] == ''){
        cmd = 'INVALID INPUT';
    }

    switch (cmd.toUpperCase()) {
            case 'KEYS':
                keys(miniDictionary);
                keepGoing();
                break;
            case 'MEMBERS':
                members(key, miniDictionary);
                keepGoing();
                break;
            case 'ADD':
                add(key, value, miniDictionary);
                keepGoing();
                break;
            case 'REMOVE':
                remove(key, value, miniDictionary);
                keepGoing();
                break;
            case 'REMOVEALL':
                removeAll(key, miniDictionary);
                keepGoing();
                break;
            case 'CLEAR':
                clear(miniDictionary);
                keepGoing();
                break;
            case 'KEYEXISTS':
                keyExists(key, miniDictionary);
                keepGoing();
                break;
            case 'MEMBEREXISTS':
                memberExists(key, value, miniDictionary);
                keepGoing();
                break;
            case 'ALLMEMBERS':
                allMembers(miniDictionary);
                keepGoing();
                break;
            case 'ITEMS':
                items(miniDictionary)
                keepGoing();
                break;
            case 'EXIT':
                console.log('Exiting...')
                break;
            case 'INVALID INPUT':
                console.log('Invalid Input')
                keepGoing();
                break
            default:
                console.log('Invalid Input')
                keepGoing();
                break;
        }
}
   

// #endregion


// #region CLI cmd functions

//1.Returns all the keys in a dictionary
function keys(dict){
    if(!isDictEmpty(dict)){
        let keys = Object.keys(dict)
        for (const key of keys) {
            console.log(key);
        }
    }else{
        console.log('empty set')
    }
}

//2.Returns all the members for a given key
function members(key, dict){
    if(key == null){
        console.log('Invalid Input');
        return;
    }

    if(!keyCheck(key, dict)){
        console.log(`ERROR, key does not exist for ${key}`);
    }else{
        dict[key].forEach(x => {
            console.log(x);
        });
    }
}


//3.Add a member to a collection for a given key
function add(key, value, dict){
    if(key==null || value==null){
        console.log('invalid input');
        return;
    }

    if(memberCheck(key, value, dict)){
        console.log(`ERROR, member: ${value} already exists for key: ${key}`);
        return;
    } 

    addMember(key, value, dict)
    console.log('added');
}

//4.Removes a member from a key. 
function remove(key, value, dict){
    if(key==null || value==null){
        console.log('invalid input');
        return;
    }
    
    if(!keyCheck(key, dict)){
        console.log(`ERROR, key does not exist for ${key}`);
        return;
    }

    if(!memberCheck(key, value, dict)){
        console.log(`ERROR, member: ${value} does not exist for ${key}`);
        return;
    }

    deleteMember(key, value, dict)
    console.log('Removed')
}

//5.Removes all members for a key and removes the key from the dictionary. 
function removeAll(key, dict){
    if(key==null){
        console.log('invalid input');
        return;
    }

    if(!keyCheck(key, dict)){
        console.log(`ERROR, key does not exist for ${key}`);
        return;
    }

    deleteKey(key, dict);
    console.log('removed');
}

//6. Clear removes all keys and all members from the dictionary
function clear(dict){
    emptyDict(dict);
    console.log('cleared');
}

//7.KeyExists returns whether or not a key exists
function keyExists(key, dict){
    console.log(keyCheck(key, dict));
}

//8.MemberExists returns whether or not a member exists
function memberExists(key, value, dict){
    console.log(memberCheck(key, value, dict));
}

//9. returns all memmbers
function allMembers(dict){
    if(!isDictEmpty(dict)){
        let values = Object.values(dict)
        for (const value of values) {
            value.forEach(x => {
                console.log(x)
            })
        }
        
    }else{
        console.log('empty set');
    } 
}

//10. Returns all the keys in the dictionary and all their members
function items(dict){
    if(isDictEmpty(dict)){
        console.log('empty set');
    }else{
        let keys = Object.keys(dict)
        for (const key of keys) {
            dict[key].forEach(x => {
                console.log(`${key} : ${x}`)
            });
        }
    }
}

// #endregion


// #region Helper Functions
export function isDictEmpty(dict){
    return (Object.keys(dict).length === 0) ? true: false;
}

export function emptyDict(dict){
    Object.keys(dict).forEach(x => {
        deleteKey(x, dict)
    })
}

export function memberCheck(key, value, dict){
   return ((Object.keys(dict)).includes(key) && dict[key].includes(value)) ? true : false;
}

export function keyCheck(key, dict){
    return (Object.keys(dict)).includes(key) ? true : false;
}

export function deleteKey(key, dict){
    delete dict[key];
}

export function deleteMember(key, value, dict){
    let newValue = dict[key].filter(x => x != value);
    dict[key] = newValue;
    return newValue;
}

export function addMember(key, value, dict){
    if(!keyCheck(key, dict)){
        dict[key] = new Array(value);
    }else{
        dict[key].push(value);  
    } 
}
// #endregion