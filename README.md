# WhatsCrypt - Extra Encryption Layer To Your WhatsApp Conversations!
A script that provides an extra layer of client-end encryption on top of WhatsApp's claimed end-to-end encryption.

## Purpose
I've built a **JavaScript** script that allow a **Web WhatsApp** user to encrypt his conversation with another party using a crypographic shared encryption ke between both parties.

This is just a Proof-of-Concept (PoC) for an extra encryption layer over WhatsApp service. So, If you think WhatsApp, somehow, are getting an access to your private conversations, even after their end-to-end encryption mechanism!!, this script is perfect for you :sunglasses:

## How Does It Work?
The script is built to provide a user, who is using the WhatsApp web version, with a way to encrypt his messages sent to another user with a secret key. This secrey key can be selected by the user and must be shared with the recipient over an out-of-band communicaiton channel (e.g. SMS, voice call, or even better, phyically!). Once both communicated parties selected the same shared key for their WhatsApp conversation, the script will automatically encrypt outgoing messages and will decrypt incoming messages with that shared secret key.

So, what both communicating parties will see in their web version of WhatsApp is the secret messages in palaintext, whereas, all other thrid parties who might try to sniff, hijack or intercept your messages will only see the encrypted messages, unless they have an access to the shared secret key. Even the service provider (e.g. WhatsApp themselves!) will not have an access to your messages.

## Installation
1. Open **Chrome Browser** and go to **[https://web.whatsapp.com/](https://web.whatsapp.com/)**.
2. From the tool bar, select **View** > **Developer** > **JavaScript Console**.
3. Copy and paste the content of **WhatsCrypt.js** file into **console** tab.
4. Watch the demo video below to to see how to set encryption keys for your conversations.
5. Enjoy secret conversations! :lock:

## Video Demonstration
Check out the below demonstration video.
[TODO: Add dmeo video page]

## Limitation
This will only work on the **web version** of WhatsApp and will **NOT** work on the mobile version. This is because, up to my current knowledge, there is no easy way to inject foreign code into mobile apps codes. If you have a way to achieve that, please share it with us here!

If you open the encrypted conversation from they moile version of WhatsApp, you'll only see the messages in their encrypted form. Don't send secret messages from your mobile version as these messages will be sent in clear-text.

## Credits
- I have used the AES implementation wirrten by **[@Brix](https://github.com/brix): [crypto-js](https://github.com/brix/crypto-js)**

## Contact
Feel free to contact me on Twitter: **[@AKhalil_90](https://twitter.com/AKhalil_90)**
