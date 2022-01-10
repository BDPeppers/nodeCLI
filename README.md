# NodeCommandLineApp

a tiny command-line app that stores a multi-value string dictionary in memory

## Installation


```bash
git clone <repo>
```

## User Commands

```bash

>start-app - Start the application

>KEYS - Returns all the keys in a dictionary
Return 'empty set' if empty
required parameters = KEY

>MEMEBERS - Returns all the members for a given key
Return 'empty set' if empty
required parameters = MEMBERS <key>

>ADD - Add a member to a collection for a given key
Displays an error if the key-value pair already exists 
Displays an error if a key-value pair isnt specified 
required parameters = ADD <key> <value>

>REMOVE - Removes a member from a key. 
If the last member is removed from the key, the key is removed from the dictionary 
If the key or member does not exist displays an error
required parameters = REMOVE <key> <value>

>REMOVEALL - Removes all members for a key and removes the key from the dictionary
Returns an error if the key does not exist
required parameters = REMOVEALL <key>

>CLEAR - Removes all keys and all members from the dictionary
required parameter = CLEAR

>KEYEXISTS - Returns whether or not a key exists
required parameters = KEYEXISTS <key>

>MEMEBEREXISTS - Returns whether or not a member exists
required parameters = MEMBEREXISTS <key> <value>


>ALLMEMEBERS - Returns all memmbers
required parameters = ALLMEMBERS

>ITEMS - Returns all the keys in the dictionary and all their members
required parameters = ITEMS

>EXIT - close the application

>npm test - run Mocha unit tests


```

## References
[How to build a CLI with Node.js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js?utm_source=youtube&utm_medium=video&utm_campaign=node-cli-howto)

[Inquirer.js](https://www.npmjs.com/package/inquirer#documentation)

[Mocha](https://mochajs.org/#getting-started)