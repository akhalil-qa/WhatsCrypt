/* called every 1 second to decrypt encrypted text in the chat */
setInterval(function(){
  /* get chat buttons  */
  var chatButtons = document.getElementsByClassName("_3Kxus")[1];

  /* get more buton of the chat buttons */
  var moreChatButton = chatButtons.children[2];

  /* once more chat button is clicked, call moreChatButtonClicked function */
  moreChatButton.onclick = moreChatButtonClicked;

  /* get active chat */
  var chats = getReactComponent(document.getElementsByClassName('chatlist-panel-body')[0]);

  /* get recipient user id */
  var recipientUserId = chats.chatlist.getActiveChat().id;

  /* if shared key is stored */
  if (localStorage.getItem("WhatsCrypt_" + recipientUserId)) {
    /* get all chat bubbles */
    var chatBubbles = document.getElementsByClassName("message-chat");

    /* loop over all chat bubbles */
    for (var i = 0; i < chatBubbles.length; i++) {
      try {
        /* get the chat bubble */
        var chatBubble = chatBubbles[i].getElementsByClassName("_3zb-j ZhF0n")[0].children[0];

        /* if already went through the decryption process */
        if (chatBubble.getAttribute("decrypt"))
          continue;

        /* get text from the bubble */
        var ciphertext = chatBubble.innerText;

        /* mark the bubble to not try to decrypt it again */
        chatBubble.setAttribute("decrypt", true);

        /* get active chat recipient user id */
        var chats = getReactComponent(document.getElementsByClassName('chatlist-panel-body')[0]);
        var recipientUserId = chats.chatlist.getActiveChat().id;

        /* get shared key with that recipient */
        var sharedKey = localStorage.getItem("WhatsCrypt_" + recipientUserId);

        /* decrypt ciphertext */
        var plaintext = decrypt(sharedKey, ciphertext);

        /* display decrypted text */
        chatBubble.innerText = plaintext;
      }
      catch (err) {
        // ignore errors
      }
    }
  }
}, 1000);

/* called once more chat button is clicked */
function moreChatButtonClicked(e){
  /* get list */
  var moreList = document.getElementsByClassName("_3s1D4")[0];

  /* build encrypt item */
  var encryptItem = document.createElement("li");
  encryptItem.setAttribute("id", "encryptItem");
  encryptItem.setAttribute("tabindex", "-1");
  encryptItem.setAttribute("class", "_10anr vidHz _28zBA");
  encryptItem.setAttribute("data-animate-dropdown-item", "true");
  encryptItem.setAttribute("style", "opacity: 1; transform: translateY(0px);");
  var div = document.createElement("div");
  div.setAttribute("class", "_3lSL5 _2dGjP");
  div.setAttribute("role", "button");
  div.setAttribute("title", "Encrypt chat");
  div.innerHTML = "Encrypt chat";
  encryptItem.appendChild(div);

  /* once encrypt item is clicked, call encryptItem function */
  encryptItem.onclick = encryptClicked;

  /* add the encrypt item to the list */
  moreList.appendChild(encryptItem);
};

/* called once encrypt chat item is clicked */
function encryptClicked(e){
  e.preventDefault();
  e.stopPropagation();

  /* get active chat recipient user id */
  var chats = getReactComponent(document.getElementsByClassName('chatlist-panel-body')[0]);
  var recipientUserId = chats.chatlist.getActiveChat().id;

  /* get shared key with that recipient */
  var sharedKey = localStorage.getItem("WhatsCrypt_" + recipientUserId);

  /* show empty string in the prompt text box rather than wired "null" string */
  if (!sharedKey)
    sharedKey = "";

  /* display prompt */
  sharedKey = prompt("Please enter the shared secret key for that recipient, or keep it blank to remove it.", sharedKey);

  /* if shared key entered, store it. Otherwise, remove it from the storage */
  if (sharedKey != null && sharedKey != "")
    localStorage.setItem("WhatsCrypt_" + recipientUserId, sharedKey);
  else {
    localStorage.removeItem("WhatsCrypt_" + recipientUserId);
  }
};

/* get React component */
function getReactComponent(dom) {
    for (var key in dom)
        if (key.startsWith("__reactInternalInstance$")) {
            var compInternals = dom[key]._currentElement;
            var compWrapper = compInternals._owner;
            var comp = compWrapper._instance;
            return comp;
        }
    return null;
};

/* encrypt plaintext */
function encrypt(key, plaintext) {
  return "[Encrypted] " + plaintext;
}

/* decrypt ciphertext */
function decrypt(key, ciphertext) {
  return "[Decreypted] " + ciphertext;
}
