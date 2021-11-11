import { Http } from './http'
import { SendMessagePayload } from './interfaces'

export class BulkSmsSdk {
  private appId: string
  private appSecret: string
  private http: Http

  constructor(id: string, secret: string) {
    this.appId = id
    this.appSecret = secret

    this.init()
  }

  private init() {
    this.http = new Http('https://api.bulksms.com/v1', this.appId, this.appSecret)
    return this
  }

  public sendMessage(payload: SendMessagePayload) {
    if (!this.http) throw new Error('Http not init')

    return this.http.instance.post('/messages', JSON.stringify(payload))
  }
}
