export default function ({req, redirect}) {
  if (process.server) {
    if (!req.headers.cookie.match(new RegExp('auth=([^;]+)'))) redirect('/login')
  } else {
    if (!document.cookie.match(new RegExp('auth=([^;]+)'))) redirect('/login')
  }
}
