
# bulksms-sdk



Install ```npm install bulksms-sdk --save```

```

import { BulkSmsSdk } from 'bulksms-sdk'

const client = new BulkSmsSdk(
    [login or appId],
    [password or secret],
)

client.send({
    to: 'number' or ['number', 'number],
    text: 'Message',
})

```