const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

let notFound = "Not found";

const findFriend = function(contactsList, owner, contactInfo) {
  // check if owner exists
  // console.log(contactsList.length);
  if (owner === undefined) {
    console.log("Owner or contact list not provided");
    // process.exit("-1");
  }

  if (contactsList.length <= 0 && owner !== undefined) {
    console.log("Owner is not found");
    // process.exit("0");
  }

  let friend = "";
  let msg = "";
  let listHolder1 = contactsList.slice();

  // console.log("Before loop: ", listHolder1.length);
  friend = findFriendName(listHolder1, owner);
  // console.log("After loop #1: ", listHolder1.length, " ", contactsList.length);

  msg = findFriendFromList(contactsList, friend, contactInfo);
  
  // console.log(msg);
  return msg;
};

/*
Recursively find friend's name through the list
*/
const findFriendName = function(conList, owner) {
  let friend;
  if (conList.length <= 0) {
    return notFound;
    // process.exit("0");
  }

  if (conList[0].name !== owner) {
    // send it for a recursive loop
    friend = findFriendName(conList.slice(1), owner);
    
  } else if (conList[0].name === owner) {
    if ("friends" in conList[0]) {
      // find the first friend: remove friends from object and send it again
      friend = conList[0].friends[0];
      // console.log("Found your name:", friend);
    } else {
      console.log("Did you not find your friends");
      return notFound;
      // process.exit("0");
    }
  }
  return friend;
};

const findFriendFromList = function(contactsList, friend, contactInfo) {
  let friendInfo = {};
  // console.log(contactsList[0]);
  if (contactsList.length <= 0) {
    return notFound;
    // process.exit("0");
  }

  if (contactsList[0].name !== friend) {
    // send it for a recursive loop
    friendInfo = findFriendFromList(contactsList.slice(1), friend, contactInfo);
  } else if (contactsList[0].name === friend) {
    if (contactInfo in contactsList[0]) {
      // console.log(contactsList[0]);

      friendInfo.name = contactsList[0].name;
      friendInfo[contactInfo] = contactsList[0][contactInfo];
      // console.log(friendInfo);
    }
    else {
      // console.log("Field not found");
      return notFound;
      // process.exit("0");
    }
  }
  // console.log(friendInfo);
  return friendInfo;
};

// console.log(findFriend(contacts, "Abbott", "phone")); // { name: "Costello", phone: "767 676 7676" }
// console.log(findFriend(contacts, "Buster", "email")); // { name: "Hardy", email: "hardy@hardyharhar.com" }
// console.log(findFriend(contacts, "Bob", "phone")); // "Not found"
// console.log(findFriend(contacts, "Costello", "birthday")); // "Not found"