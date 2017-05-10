import express from 'express'
// import เข้ามาโลด
import httpProxy from 'http-proxy'

const PORT = 8080
const app = express()
const targetUrl = 'http://127.0.0.1:5000'
const proxy = httpProxy.createProxyServer({
  target: targetUrl
})

app.use((req, res) => {
  const HTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset='utf-8'>
      <title>Wiki!</title>
    </head>
    <body>
      <div id='app'></div>
      <!-- ตอนนี้เราจะใช้พอร์ต 8081 กับ webpack dev server -->
      <script src='http://127.0.0.1:8081/dist/bundle.js'></script>
    </body>
  </html>
  `

  res.end(HTML)
})

app.use('/api', (req, res) => {
  proxy.web(req, res, { target: `${targetUrl}/api` });
})

app.listen(PORT, error => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> Listening on port ${PORT}.`)
  }
})