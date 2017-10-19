import { Server, GET, Response, Path } from 'organiser'
import path from 'path'

class LandingPage {
  @GET
  async home () {
    return Response.static(path.join(__dirname, '../static/index.html')).build()
  }

  @GET
  @Path('logo.svg')
  async logo () {
    return Response.static(path.join(__dirname, '../static/logo.svg')).build()
  }
}

const server = new Server()
server.routes(LandingPage)
server.boot()
