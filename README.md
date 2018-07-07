# TsExpressReactScaffold
An scaffold for Express + React using typescript
# Provisioning
* Install [Nodejs](https://nodejs.org/en/)
* Install [yarn](https://yarnpkg.com/en/)
# Initial Project
* Develop environment: 
    > \> yarn install
* Production enviroment:
    > \> yarn install --prod
# Command
* Build 
    > \> npm run build
* Launch website
    > \> npm run nodemon
* Run Unit Test
    > \> npm run test
* Launch in Production
    > \> npm run forever
# Other
* Add dev dependency
    > \> yarn add xxxx -D
* Remove dependency
    > \> yarn remove xxxx

#Design
* How to store user info?
    > A lightweight database is enought for this project. At the beginning, we could leverage Memory(JSon) + File to storage the data. we could also think about Redis and mongoDB in the future.
* What's the Data structure?
    ***[userName].json***
    ```json
    {
        user:{
            name:yige,
            display:Abe Ge,
        },
        machines:[
            {
                name:yihanA,
                display: Client code Machine,
                group: Client
            }
        ],
   }
    ```

* Work flow
```sequence {theme="hand"}
Client-->>Client:check cookie contians user Info
Client -->> RDP Portal: GET Machines
RDP Portal -->> Client: [{name:yihanA,group:client,display:client Code},{...}]
Client ->> RDP Portal: POST login
Note right of Client: {user:yige,password:xxx,display:Abe Ge}
RDP Portal ->> DB:Creat/UpdateData({user:yige,display:Abe Ge})
RDP Portal ->> Client:cookie={user:yige,password:xxx,display:Abe Ge}
RDP Portal ->> Client: [{name:yihanA,group:client,display:client Code},{...}]
Client->> RDP Portal:POST machine
note right of Client:body:{name:yihanA,group:client,display:client Code},cookie{user:yige}
RDP Portal ->>DB:Create/UpdateData({...//machineInfo})
RDP Portal ->> Client: Success
Client ->> RDP Portal: PUT LaunchMachine
Note right of Client: body:{name:yihanA}
RDP Portal->> RDP Agent: Launch RDP
RDP Portal ->> Client: success
RDP Agent->> RDP Portal: Close RDP
```