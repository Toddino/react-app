
export const getDefaultHeaders = () => {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
}

export const baseCurrAPI = ():string => {
    return process.env["WDS_SOCKET_HOST"]||"";
    // return "https://thor-web-dev.corp.awsedison.it"
    // return "http://localhost:8080"
}

export const urls = {
    news: (): string => `${baseCurrAPI()}/react-api/news`,
}

export async function client<T>(endpoint: any, tipo: string, customHeader: any, { body, ...customConfig }: any = {}): Promise<T> {
    const config = {
      method: tipo,
      ...customConfig,
      headers: {
          ...customHeader
      },
    }
  
    if (body) {
      config.body = body
    }
  
    let data
    try {
      const response = await window.fetch(endpoint, config)
      data = await response.json()
      if (response.ok) {
        return data
      }
      throw new Error(response.statusText)
    } catch (err) {
      return Promise.reject(err.message ? err.message : data)
    }
}
  
client.get = function <T>(endpoint: any, customHeader:any = getDefaultHeaders(), customConfig = {}) {
    return client<T>(endpoint, 'GET',customHeader, { ...customConfig, method: 'GET' })
}

client.delete = function <T>(endpoint: any, customHeader:any = getDefaultHeaders(), customConfig = {}) {
  return client<T>(endpoint, 'DELETE',customHeader, { ...customConfig, method: 'DELETE' })
}
  
client.post = function <T>(endpoint: any, body: any, customHeader:any = getDefaultHeaders(), customConfig = {}) {
    return client<T>(endpoint, 'POST',customHeader, { ...customConfig, body })
}

client.put = function <T>(endpoint: any, body: any, customHeader:any = getDefaultHeaders(), customConfig = {}) {
  return client<T>(endpoint, 'PUT',customHeader, { ...customConfig, body })
}