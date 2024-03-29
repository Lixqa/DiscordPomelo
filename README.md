# DiscordPomelo

### **[This website](https://lix.qa/pomelo) allows you to check if the new discord @usernames are available.**

The backend happends on my [API](https://api.lixqa.de/v2/discord/pomelo-lookup?username=xxxx) and isnt public but have fun with this simple website anyways.

I made this website for fun and didnt even know that it will be used so much. Thank you all for using it!

Let me know if you have any ideas and ill improve the website and add some more cool features!

**If you like this project feel free to click the ⭐.  Its free!**

# Limitations

The default non authorized user can send **2 requests per 10 seconds**. Only **5+ letters** and **6+ numbers** can be used for free. You need a private key for the other short names like "abc". You can get it on our discord.

Hitting rate limits and checking non permitted names will throw a error. Just test it and look how you can catch it in your application.

# Contact

## **[Discord Server - CLICK TO JOIN](https://lix.qa/pomelo-dc)**
^ For support and chat join my discord and open a ticket! If you join using the link above you automatically get access to the pomelo talk channel!

# API
You can use the API for free. The public API is limited and you can run into rate limits quickly. If you want increased rate limits, create a ticket on support discord.

How to get private access? Usually you can get private access by contributing, giving ressources or having a project that i like. But contact me for more information.

## **Endpoint**
- _URL_ : `https://api.lixqa.de/v3/discord/pomelo/{username}`
- _Method_: GET
- _Headers_: No header needed for public one. For private one use `authorization: KEY` header.

## **Response**
- `data->username` » Your checked username.
    
- `data->check->errors` » [Error](#Error)
- `data->check->status` » [Status](#Status)
- `data->check->attempt` » How many attempts it took until a valid response was returned by discord.
- `data->check->token` » Last 5 characters and id of token used for the check (Currently only in dev/private endpoints)
- `data->check->user` » [discord user object](https://discord.com/developers/docs/resources/user) of the user who has this username. ([Status 6](#Status))
- `data->check->suggestion` » If your name is taken ([Status 3](#Status)), a new name idea will be shown here. (Incoming) 
- `data->check->validated` » If your name is invalid ([Status 0](#Status)), the api will try to make a validated version. (Incoming)

### **Error**
Errors only in the _data->check->errors_. The errors outside the data are general api errors.

#### Discord errors:
- `USERNAME_ALREADY_TAKEN` » Your name is taken or reserved. ([Status](#Status))

#### Validator errors:
- `BAD_LENGTH` » The length of your username is invalid. Usernames must be between 2 and 32 chars.
- `NOT_NORMAL_NAME` » Using the public api version you cannot check 2 and 3 char names. This prevents spamming & sniping.
- `REPEATING_DOTS` » Repeating dots like ".." cant be put in your username.
- `INVALID_CHARS` » Discord usernames can only contain a-z, 0-9, underscores (_) and dots (.).
- `BLACKLISTED_WORD` » Your name contains a by discord blacklisted word. For a list visit our discord.

### **Status**
- `0` » Check wasnt sent to discord because your name doesnt passed the validator. ([Error](#Error))
- `1` » Failed to send check to discord or discord returned invalid response.
- `2` » Your username is **available**.
- `3` » Your username is **taken or reserved**.
- `4` » Your username is **taken**. (Incoming) `*`
- `5` » Your username is **reserved**. (Incoming) `*`
- `6` » Your username is **taken by**. (Incoming) `*²`

`*` In future i want to add a extra check to differentiate taken and reserved.

`*²` In future this status will return the [discord user object](https://discord.com/developers/docs/resources/user) of the user who has this username.

## **Webhook integration**
If you want to send webhooks automatically after every request, and you are too lazy to make your own webhook sender, you can add a body to the request and the webhooks will be sent automatically.

`webhookUrl: URL` » Thats the url for your discord webhook or custom endpoint.

`webhookOnly: STATUS (ARRAY)` » Send only specific [Status](#Status) (Example: Send only available checks to webhook using status `webhookOnly: [2]`). If you want to use multiple, do it like `[1,2,3]`.

# Credits
- [Lixqa](https://lix.qa/)