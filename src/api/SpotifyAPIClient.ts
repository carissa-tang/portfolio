import axios from "axios"

const getAccessToken = async () => {
  const params = {
    grant_type: "refresh_token",
    refresh_token: `${process.env.GATSBY_REFRESH_TOKEN}`,
  }

  const config = {
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.GATSBY_CLIENT_ID}:${process.env.GATSBY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }

  return axios
    .post("https://accounts.spotify.com/api/token", params, config)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export const getTopTracks = async () => {
  const { data: tokenData } = await getAccessToken()

  if (tokenData) {
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/top/tracks",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
        params: {
          time_range: "medium_term",
          limit: 10,
          offset: 0,
        },
      }
    )

    return data
  }
}
