import { Box, Text } from "theme-ui"

const Footer = (props) => (
  <Box
    sx={{
      p: 4,
      color: "#666",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Maintained by{" "}
      <a href="https://twitter.com/shafeeqonline">Shafeeq Ur Rahman</a>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Source code on{" "}
      <a href="https://github.com/shafeeqonline/personal-blog">Github</a>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Follow <a href="https://twitter.com/shafeeqonline">@shafeeqonline</a>
    </Text>
  </Box>
)

export default Footer
