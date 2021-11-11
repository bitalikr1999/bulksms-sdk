
# bulksms-sdk



Install ```npm install bulksms-sdk --save```

```
const client = new BulkSmsSdk(
    [login or appId],
    [password or secret],
)

client.send({
    to: 'number' or ['number', 'number],
    text: 'Message',
})

```