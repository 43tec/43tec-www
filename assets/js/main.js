const MESSAGES = [
  "We make software for everyone.",
  "We drive digital transformations.",
  "We value sustainable solutions."
];
const TYPESPEED = 40;
const TYPESLEEP = 2000;
const DELETESPEED = 10;
const DELETESLEEP = 200;

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const typeMessage = async (message_id = 0, cursor = 0) => {
  const message = MESSAGES[message_id];
  if (cursor < message.length) {
    document.getElementById("message").innerHTML += message.charAt(cursor);
    setTimeout(typeMessage, TYPESPEED, message_id, cursor + 1);
  } else {
    await sleep(TYPESLEEP);
    deleteMessage(message_id);
  }
};

const deleteMessage = async message_id => {
  let currentMessage = document.getElementById("message").innerHTML;
  if (currentMessage.length > 0) {
    document.getElementById("message").innerHTML = currentMessage.substring(
      0,
      currentMessage.length - 1
    );
    setTimeout(deleteMessage, DELETESPEED, message_id);
  } else {
    await sleep(DELETESLEEP);
    typeMessage((message_id + 1) % MESSAGES.length, 0);
  }
};
