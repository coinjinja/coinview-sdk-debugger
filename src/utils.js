import dns from 'dns'
import os from 'os'

export const getLocalIp = () => {
  return new Promise((resolve, reject) => {
    dns.lookup(os.hostname(), (err, addr) => {
      if (err) {
        return reject(err)
      }
      return resolve(addr)
    })
  })
}
