/*

* In the name of Developer of universe
* Console Contact Manager project
* By qu.cipherr 

*/

// required lib
const fs = require("fs");

// console.log ==> write()
function write(message) {
    console.log(message)
}

// datafile importation
let dataFile;
try {
    dataFile = fs.readFileSync("./data.json", "utf8");
} catch (error) {
    write("Error with reading data.json file");
}

// datafile changing config
let contacts;
if (dataFile) {
    try {
        contacts = JSON.parse(dataFile);
    } catch (error) {
        write("Error parsing JSON");
    }
} else {
    contacts = {};
}

// main codeblock (more information -> helper.txt)
const codeBlock = {
    addContact(id, name, lastName, username, phone) {
        const newContact = {
            id,
            name,
            lastName,
            username,
            phone
        };
    
        contacts[id] = newContact;

        write('Contact added!')
    },

    deleteContact(id) {
        try {
            delete contacts[id]
            write("Contact deleted!")
        }
        catch {
            write("Error with deleting contact, maybe that contact isn't available or you entered a wrong id.")
        }
    },

    editContact(id, property, editedProperty){
        try {
        contacts[id][property] = editedProperty
        } catch {
            write("Error with editing contact")
        }
    },

    cloneContactWithId(first_id, second_id) {
        Object.assign(contacts[first_id], contacts[second_id])

        write("Operation was successful!")
    },

    cloneContactWithIdAndProperty(first_id, second_id, property_toBeCloned) {
        Object.assign(contacts[first_id], contacts[second_id][property_toBeCloned])
        write("Operation was successful!")

    },

    importInformation(id, property) {
        let info = contacts[id][property]
        write(info)
    },
    
    importFullyInformation(id) {
        let name = contacts[id]['name']
        let lastname = contacts[id]['lastName']
        let username = contacts[id]['username']
        let phone = contacts[id]['phone']

        write(`
Id: \x1b[31m${id}\x1b[0m
        
Name: \x1b[32m${name}\x1b[0m
Last Name: \x1b[32m${lastname}\x1b[0m
Phone Number: \x1b[33m${phone}\x1b[0m

Username: \x1b[34m${username}\x1b[0m
`)}
}

fs.writeFileSync('./data.json', JSON.stringify(contacts, null, 2), { flag: 'w' });