import { Box, useMediaQuery, useTheme } from "@material-ui/core"
import {
  Document,
  Image,
  Link,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer"
import { useStoredState } from "material-ui-pack"
import React from "react"
import { employment } from "../employment"
import { technologies, TechnologyGroup } from "../technologies"
import "./Print.css"

// Font.register({
//   family: "Roboto",
//   src: "https://fonts.googleapis.com/css2?family=Roboto",
// })

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    fontSize: 10,
    lineHeight: 1.75,
    fontWeight: "normal",
  },
  header: {
    backgroundColor: "#414241",
    margin: 0,
    paddingLeft: 72,
    paddingTop: 48,
    flexShrink: 1,
    color: "#ffffff",
  },
  content: {
    margin: 0,
    paddingLeft: 72,
    paddingRight: 72,
    paddingTop: 12,
    flexShrink: 1,
  },
  h1: {
    fontSize: 28,
    lineHeight: 1.5,
  },
  h2: {
    fontSize: 18,
    color: "#aaaaaa",
  },
  spacer: { lineHeight: 1 },
  link: {
    color: "#25aae0",
  },
})

// Create Document Component
const MyDocument = () => {
  const groups: TechnologyGroup[] = ["Front-End", "Backend", "DevOps"]
  const [imageData, setImageData] = useStoredState<null | string>(
    "capture",
    null
  )

  const theme = useTheme()
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"))

  return (
    <Document>
      <Page size="letter" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.h1}>Clayton Bell</Text>
        </View>
        <View style={styles.content}>
          <Text>claytonfbell@gmail.com</Text>
          <Text>(971) 285-5666</Text>
          <Link src="https://claybell.net/resume" style={styles.link}>
            https://claybell.net
          </Link>
          <Text style={styles.spacer}> </Text>

          {isLgUp && imageData !== null ? (
            <>
              <Image src={imageData} />
              <Text style={styles.spacer}> </Text>
            </>
          ) : (
            <>
              {groups.map(group => (
                <>
                  <Text style={styles.h2}>{group}</Text>
                  <Text>
                    {technologies
                      .filter(x => x.group === group)
                      .map(x => x.name)
                      .join(", ")}
                  </Text>
                  <Text style={styles.spacer}> </Text>
                </>
              ))}
            </>
          )}
          {employment.map(e => (
            <>
              <Text style={styles.h2}>{e.employer}</Text>
              <Text>
                {e.position} {e.range}
              </Text>
              <Text>{e.text}</Text>
              <Text style={styles.spacer}> </Text>
            </>
          ))}
        </View>
      </Page>
    </Document>
  )
}

export default function PrintResume() {
  return (
    <Box style={{ overflow: "hidden" }}>
      <PDFViewer width="100%" style={{ height: "98vh" }}>
        <MyDocument />
      </PDFViewer>
    </Box>
  )
}
