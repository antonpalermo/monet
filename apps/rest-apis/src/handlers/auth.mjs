export async function getStatus(request, response) {
  return request.user
    ? response.status(200).json(request.user)
    : response.sendStatus(401)
}

export async function signOut(request, response, next) {
  request.logOut(error => {
    if (error) {
      next(error)
    }

    request.session.destroy(error => {
      if (error) {
        next(error)
      }
    })
    response.clearCookie("connect.sid")
    response.redirect(`${process.env.CLIENT_URL}/auth/signin`)
  })
}
