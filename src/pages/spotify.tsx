import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"
import { Grid } from "@mui/material"
import useViewport from "../utils/useViewport"
import Slide from "@mui/material/Slide"
import { rainbow } from "../utils/colors"
import { getTopTracks } from "../api/SpotifyAPIClient"

type ArtistObject = {
  external_urls: Object
  href: string
  id: string
  name: string
  type: string
  uri: string
}

type TrackObject = {
  album: Object
  artists: Array<ArtistObject>
  available_markets: Array<string>
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: Object
  external_urls: { spotify: string }
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}

type FilteredTrackObject = {
  id: string
  artist: string
  songURL: string
  title: string
  popularity: number
}

declare module "axios" {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}

const SpotifyPage = ({
  _,
  serverData,
}: {
  _: any
  serverData: { test: any, trackProp: FilteredTrackObject[] }
}) => {
  const { test, trackProp } = serverData
  console.log(test)
  const { isDesktop } = useViewport()
  const [checked, setChecked] = React.useState(false)
  const containerRef = React.useRef(null)
  const direction = isDesktop ? "up" : "right"

  React.useEffect(() => {
    setChecked(true)
  }, [])

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

  const TopTracks = ({ tracks }: { tracks: FilteredTrackObject[] }) => {
    return (
      <>
        <ol>
          {tracks.map((track: FilteredTrackObject) => (
            <li key={track.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <a href={track.songURL} target="_blank" rel="noreferrer">
                    <strong>{track.title}</strong>
                  </a>{" "}
                </div>
                <div>
                  <i style={{ fontSize: "14px" }}>{track.artist}</i>
                  <span
                    style={{
                      padding: "0.25rem",
                      backgroundColor: `${getPopularityColor(
                        track.popularity
                      )}`,
                      borderRadius: "10px",
                      marginLeft: "1rem",
                      fontSize: "0.75rem",
                    }}
                  >
                    {track.popularity}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <hr style={{ margin: "2rem 0 2rem 0" }} />
        <p style={{ fontSize: "14px", lineHeight: "2rem" }}>
          Popularity index:
          <span
            style={{
              padding: "0.5rem",
              backgroundColor: rainbow["green"],
              borderRadius: "10px",
              marginLeft: "1rem",
            }}
          >
            {">"}= 80
          </span>
          <span
            style={{
              padding: "0.5rem",
              backgroundColor: rainbow["indigo"],
              borderRadius: "10px",
              marginLeft: "1rem",
            }}
          >
            {">"}= 60
          </span>
          <span
            style={{
              padding: "0.5rem",
              backgroundColor: rainbow["red"],
              borderRadius: "10px",
              marginLeft: "1rem",
            }}
          >
            {">"}= 40
          </span>
          <span
            style={{
              padding: "0.5rem",
              backgroundColor: rainbow["yellow"],
              borderRadius: "10px",
              marginLeft: "1rem",
            }}
          >
            {"<"} 40
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
            <TopTracks tracks={trackProp} />
            {`${process.env.GATSBY_CLIENT_ID}:${process.env.GATSBY_CLIENT_SECRET}`}
            {process.env.GATSBY_REFRESH_TOKEN}
          </Grid>
        </Slide>
      </Grid>
    </Layout>
  )
}

export default SpotifyPage

export async function getServerData() {
  const { items } = await getTopTracks()
  console.log("ITEMS")
  console.log(items);

  return {
    props: {
      test: items,
      trackProp: [],
    },
  }

  // try {
  //   const { items } = await getTopTracks()
  //   if (!items) {
  //     throw new Error(`Response failed`)
  //   }

  //   const tracks: FilteredTrackObject[] = items
  //     .slice(0, 10)
  //     .map((track: TrackObject) => ({
  //       id: track.id,
  //       artist: track.artists.map(_artist => _artist.name).join(", "),
  //       songURL: track.external_urls.spotify,
  //       title: track.name,
  //       popularity: track.popularity,
  //     }))

  //   return {
  //     status: 200,
  //     props: {
  //       trackProp: tracks,
  //     },
  //     headers: {
  //       "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
  //     },
  //   }
  // } catch (error) {
  //   return {
  //     status: 500,
  //     headers: {},
  //     props: {},
  //   }
  // }
}
