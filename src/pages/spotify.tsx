import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"
import { Box, Button, Grid } from "@mui/material"
import useViewport from "../utils/useViewport"
import Slide from "@mui/material/Slide"
import axios from "axios"
import { rainbow } from "../utils/colors"

type ArtistObject = {
  external_urls: Object;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

type TrackObject = {
  album: Object;
  artists: Array<ArtistObject>;
  available_markets: Array<string>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: Object;
  external_urls: {spotify: string};
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

const BlogPage = () => {
  const { isDesktop } = useViewport()
  const [checked, setChecked] = React.useState(false)
  const containerRef = React.useRef(null)
  const direction = isDesktop ? "up" : "right"
  const [token, setToken] = React.useState("")
  const [searchResults, setSearchResults] = React.useState<TrackObject[]>([])
  const REACT_APP_CLIENT_ID = "9c8e351f062b4e2b8c71586581253882"
  const REACT_APP_REDIRECT_URI = "http://localhost:8000/spotify"
  const REACT_APP_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const REACT_APP_RESPONSE_TYPE = "token"

  React.useEffect(() => {
    const hash = window.location.hash
    let currToken = window.localStorage.getItem("token")

    if (!currToken && hash) {
      currToken = hash?.substring(1)?.split("&")?.find(e => e.startsWith("access_token"))?.split("=")[1] || ""
      window.location.hash = ""
      window.localStorage.setItem("token", currToken)
      console.log(currToken)
    }

    currToken && setToken(currToken)
    setChecked(true)
  }, [])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  const searchSongs = async () => {
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/top/tracks",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          time_range: "medium_term",
          limit: 10,
          offset: 0,
        },
      }
    )

    console.log("Data")
    console.log(data)
    console.log("Type")
    console.log(typeof data.items[0])
    setSearchResults(data.items)
  }

  const getPopularityColor = (n: number) => {
    if (n >= 80) {
      return rainbow["green"]
    } else if (n >= 60) {
      return rainbow["indigo"]
    } else if (n >= 40) {
      return rainbow["red"]
    } else if (n >= 0) {
      return rainbow["yellow"]
    }
  }

  const TopSongs = () => {
    return (
      <>
        <ol>
          {searchResults.map(result => (
            <li key={result.id}>
              <a
                href={result.external_urls.spotify}
                target="_blank"
                rel="noreferrer"
              >
                <strong>{result.name}</strong>
              </a>{" "}
              by {result.artists.map(artist => artist.name).join(", ")}
              <span
                style={{
                  padding: "0.25rem",
                  backgroundColor: `${getPopularityColor(result.popularity)}`,
                  borderRadius: "10px",
                  marginLeft: "1rem",
                  fontSize: "0.75rem",
                }}
              >
                {result.popularity}
              </span>
            </li>
          ))}
        </ol>
        <hr style={{ margin: "2rem 0 2rem 0" }} />
        <p>
          Popularity index:
          <span
            style={{
              padding: "0.5rem",
              backgroundColor: rainbow["green"],
              borderRadius: "10px",
              marginLeft: "1rem",
            }}
          >
            {'>'}= 80
          </span>
          <span
            style={{
              padding: "0.5rem",
              backgroundColor: rainbow["indigo"],
              borderRadius: "10px",
              marginLeft: "1rem",
            }}
          >
            {'>'}= 60
          </span>
          <span
            style={{
              padding: "0.5rem",
              backgroundColor: rainbow["red"],
              borderRadius: "10px",
              marginLeft: "1rem",
            }}
          >
            {'>'}= 40
          </span>
          <span
            style={{
              padding: "0.5rem",
              backgroundColor: rainbow["yellow"],
              borderRadius: "10px",
              marginLeft: "1rem",
            }}
          >
            {'<'} 40
          </span>
        </p>
      </>
    )
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
              >
                Login to spotify
              </a>
            ) : (
              <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '2rem' }}>
                <Button type="submit" onClick={searchSongs}>Get top songs!</Button>
                <Button onClick={logout}>Logout</Button>
              </Box>
            )}
            <TopSongs />
          </Grid>
        </Slide>
      </Grid>
    </Layout>
  )
}

export default BlogPage
