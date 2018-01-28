/*Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile= {
    name:"Valeria",
    friends:4000,
    messages :["happy","sad"],
    postMessage: function(message){
       return  facebookProfile.messages.push(message);
    },
    deleteMessage: function(index){
        return facebookProfile.messages.splice(index,1);
    },
    addFriend: function(){
        return facebookProfile.friends += 1;
    },
    removeFriend: function(){
        return facebookProfile.friends -= 1;
    }
};
console.log(facebookProfile.friends);
console.log(facebookProfile.addFriend());
console.log(facebookProfile.friends);