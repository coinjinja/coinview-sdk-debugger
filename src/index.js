#!/usr/bin/env node

import 'colors'
import WebSocket from 'ws'
import moment from 'moment'

import { getLocalIp } from './utils'

const port = process.env.PORT || 9000

const wss = new WebSocket.Server({ port })

getLocalIp().then(ip => {
  console.info('Host:', `${ip}:${port}`.green)
  wss.on('connection', ws => {
    console.log('connected')
    ws.on('message', message => {
      try {
        const { from: appId, method, payload } = JSON.parse(message)
        if (method === 'console') {
          console.log(
            `[${appId}][${moment().format('HH:mm:ss')}][${payload.tag}]`,
            ...payload.args,
          )
        }
        if (method === 'error') {
          console.error(`[${appId}][${moment().format('HH:mm:ss')}][ERROR]`)
          console.error(payload.msg.red)
          console.error(payload.stack.red)
        }
      } catch (err) {
        console.error('Parse data failed.'.red)
      }
    })
  })
})
