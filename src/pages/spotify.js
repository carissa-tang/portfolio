import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"
import { Button, Grid } from "@mui/material"
import useViewport from "../utils/useViewport"
import Slide from "@mui/material/Slide"
import axios from "axios"

const BlogPage = () => {
  const { isDesktop } = useViewport()
  const [checked, setChecked] = React.useState(false)
  const containerRef = React.useRef(null)
  const direction = isDesktop ? "up" : "right"
  const [token, setToken] = React.useState("")
  const [searchResults, setSearchResults] = React.useState([])
  const REACT_APP_CLIENT_ID = "9c8e351f062b4e2b8c71586581253882"
  const REACT_APP_REDIRECT_URI = "http://localhost:8000/spotify"
  const REACT_APP_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const REACT_APP_RESPONSE_TYPE = "token"

  React.useEffect(() => {
    const hash = window.location.hash
    let currToken = window.localStorage.getItem("token")

    if (!currToken && hash) {
      currToken = hash
        .substring(1)
        .split("&")
        .find(e => e.startsWith("access_token"))
        .split("=")[1]
      window.location.hash = ""
      window.localStorage.setItem("token", currToken)
      console.log(currToken)
    }

    setToken(currToken)
    setChecked(true)
  }, [])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  const searchArtists = async e => {
    const { data } = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        time_range: "medium_term",
        limit: 10,
        offset: 0,
      },
    })

    console.log("Data")
    console.log(data)
    setSearchResults(data.items)
  }

  const renderArtists = () => {
    return <ul>
        {searchResults.map(result => <li key={result.id}><a href={result.external_urls.spotify} target="_blank">{result.name}</a></li>)}
    </ul>
  }

  return (
    <Layout>
      <Seo title="projects" />
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-start"
        ref={containerRef}
      >
        <Grid item xs={12} sm={4} pr={1}>
          <Profile fullSize={false} />
        </Grid>
        <Slide
          direction={direction}
          in={checked}
          container={containerRef.current}
          {...(checked ? { timeout: 800 } : {})}
        >
          <Grid item xs={12} sm={8} pl={1} mt={4} pr={[0, 5]}>
            <h1>spotify</h1>
            {!token ? (
              <a
              href={`${REACT_APP_AUTH_ENDPOINT}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}&response_type=${REACT_APP_RESPONSE_TYPE}&scope=user-top-read`}
            >Login to spotify
              </a>
            ) : (
              <>
                <form onSubmit={searchArtists}>
                  <Button type="submit">Get top songs!</Button>
                </form>
                <Button onClick={logout}>Logout</Button>
              </>
            )}
            {renderArtists()}
          </Grid>
        </Slide>
      </Grid>
    </Layout>
  )
}

export default BlogPage
