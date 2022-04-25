import { useMediaQuery } from "@mui/material"

type ViewportType = {
  isDesktop: boolean
}

function useViewport(): ViewportType {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return { isDesktop }
}

export default useViewport
