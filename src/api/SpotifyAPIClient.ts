import axios from "axios"

const getAccessToken = async () => {
  const params = new URLSearchParams()
  params.append("grant_type", "refresh_token")
  params.append("refresh_token", "AQDK053MSaT0gdMJLtZPHVTpV4t26fsKVQBwq69Orph6ISil3d57l2h6IsVdkJWAAybHURONNjCxu5XnKuT5OXQqrYf6_y1PYoDD06IUIaNxbbt6IQ6SG6mudEhEkzGP2_A")

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
