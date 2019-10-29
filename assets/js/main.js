const MESSAGES = [
  "We architect faithful softwares for everyone.",
  "We drive sustainable digital transformations."
];
const TYPESPEED = 40;
const TYPESLEEP = 2000;
const DELETESPEED = 10;
const DELETESLEEP = 200;

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const typeChars = async (message_id = 0, cursor = 0) => {
  const message = MESSAGES[message_id];
  if (cursor < message.length) {
    document.getElementById("message").innerHTML += message.charAt(cursor);
    setTimeout(typeChars, TYPESPEED, message_id, cursor + 1);
  } else {
    await sleep(TYPESLEEP);
    deleteChars(message_id);
  }
};

const deleteChars = async message_id => {
  let currentMessage = document.getElementById("message").innerHTML;
  if (currentMessage.length > 0) {
    document.getElementById("message").innerHTML = currentMessage.substring(
      0,
      currentMessage.length - 1
    );
    setTimeout(deleteChars, DELETESPEED, message_id);
  } else {
    await sleep(DELETESLEEP);
    typeChars((message_id + 1) % MESSAGES.length, 0);
  }
};
