# Coinview dApp debugger

> The debugger for Coinview dApp.

## Install

```
npm install @coinjinja/dapp-debugger -g
```

## Guide

Start debugger.
```
coinview-dapp-debugger
```

It will show your local IP address.
```
Host: 192.168.1.100:9000
```

Init Coinview SDK with debug on.
```
const app = await coinview.init(YOUR_APP_ID, true, '192.168.1.10')
```

Print your log
```
coinview.log('TAG', 'Hello world!')
```

Done!
