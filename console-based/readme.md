# How to use
| USAGE                                       | Method                                                                               | Details                                                                               |
| ------------------------------------------- | :----------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| Add contact                                 | addContact(id:string, name:string, last_name:string, username:string, phone:string); | Adding contact to data.json, the acctual way is clear by the usage                    |
| Edit contact                                | editContact(id:number, propertyToBeEdited:string, updatedValue:string)               | Editing a available contact in data.json                                              |
| Read data of a contact                      | readContacts(id:number, property:string)                                             | clear by usage                                                                        | 
| Cloning contacts using an id                | cloneContactWithId(id_1:number, id_2:number)                                         | Fisrt, you'll need two contacts, one to clone, one to clone to it                     | 
| Cloning contacts using an id and properties | cloneContactWithIdAndProperty(id_1:number, id_2:number, property_toBeCloned:string)  | As before, you need two contacts, one to clone, one to clone a written property to it |
| Get info about a property                   | importInformation(id:number, property:string)                                        | Import data of selected property                                                      |
| Get comprehensive info about contact        | importFullyInformation(id:number)                                                    | clear by usage









