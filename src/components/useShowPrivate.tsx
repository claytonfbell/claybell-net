import React from "react"

type ShowPrivate = "yes" | "no" | "unknown"

export default function useShowPrivate() {
  const [showPrivate, setShowPrivate] = React.useState<ShowPrivate>("unknown")
  React.useEffect(() => {
    if (localStorage.getItem("sp") === "yes") {
      setShowPrivate("yes")
    } else {
      setShowPrivate("no")
    }
  }, [])

  React.useEffect(() => {
    if (showPrivate !== "unknown") {
      localStorage.setItem("sp", showPrivate)
    }
  }, [showPrivate])

  console.log(showPrivate)
  return showPrivate
}
