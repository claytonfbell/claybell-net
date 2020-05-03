import React from "react"

type ShowPrivate = "yes" | "no" | "unknown"

type ShowPrivateContextType = {
  showPrivate: ShowPrivate
  setShowPrivate: React.Dispatch<React.SetStateAction<ShowPrivate>>
}

const ShowPrivateContext = React.createContext<
  ShowPrivateContextType | undefined
>(undefined)
export function useShowPrivate() {
  const context = React.useContext(ShowPrivateContext)
  if (!context) {
    throw new Error(`useShowPrivate must be used within a ShowPrivateProvider`)
  }
  return context
}

export function ShowPrivateProvider(props: any) {
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

  const value = React.useMemo(
    () => ({
      showPrivate,
      setShowPrivate,
    }),
    [showPrivate, setShowPrivate]
  )

  return <ShowPrivateContext.Provider value={value} {...props} />
}
