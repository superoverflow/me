import Head from "next/head";
import { Grid, Flex, Heading, Card, Text, Image } from "theme-ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chiu Yat (Cyrus) Tang</title>
      </Head>

      <Flex sx={{ flexDirection: "column", bg: "skyblue", py: 3 }}>
        <Heading sx={{ pl: 3 }} as="h1">
          Chiu Yat (Cyrus) Tang
        </Heading>
        <Heading sx={{ pl: 3 }} as="h2">
          Python Dev · London
        </Heading>
        <Heading sx={{ pl: 3 }} as="h3">
          Python · React · DevOps
        </Heading>
      </Flex>

      <Grid columns={["auto", null, 2]} sx={{ m: 5 }}>
        
        <Flex sx={{ justifyContent: "center" }}>
          <Card>
            <Text>👍 TTwist Hoodies</Text>
            <Image src="ttwist.jpg" alt="TTwist Hoodies"/>
            <Text>Help client to setup WooCommerce online shop</Text>
          </Card>
        </Flex>

        <Flex sx={{ justifyContent: "center" }}>Project 2 🤞</Flex>
      </Grid>
    </>
  );
}
