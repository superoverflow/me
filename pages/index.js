import { Grid, Flex } from 'theme-ui'

export default function Home() {
  return (
    <Grid columns={["auto", null, 2]}>
      <Flex sx={{ justifyContent: "center"}}>Project 1 👍</Flex>
      <Flex sx={{ justifyContent: "center"}}>Project 2 🤞</Flex>
    </Grid>
  )
}
