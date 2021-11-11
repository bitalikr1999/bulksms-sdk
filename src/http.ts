import axios, { AxiosInstance } from "axios";

export class Http {
  private _instance: AxiosInstance;
  private accessString: string;

  constructor(
    private url: string,
    private appId: string,
    private secret: string
  ) {
    this.init();
  }

  public get instance() {
    return this._instance;
  }

  private init() {
    this.accessString = this.encode(`${this.appId}:${this.secret}`);

    console.log(this.accessString);
    this._instance = axios.create({
      baseURL: this.url,
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this._instance.interceptors.request.use((config: any) => {
      if (config.headers)
        config.headers["Authorization"] = `Basic ${this.accessString}`;
      return config;
    });
  }

  private encode(value: string) {
    return Buffer.from(value).toString("base64");
  }
}
