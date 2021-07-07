/** @jsxImportSource theme-ui */

import Head from "next/head";
import Link from "next/link";
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

      <Heading sx={{ pl: 3 }} as="h3">
        Projects{" "}
      </Heading>
      <Grid columns={["auto", null, 2]} sx={{ m: 5 }}>
        <Flex sx={{ justifyContent: "center" }}>
          <Card variant="primary">
            <Text>👍 TTwist Hoodies</Text>
            <Image src="ttwist.jpg" alt="TTwist Hoodies" />
            <Text>Help client to setup WooCommerce online shop</Text>
            <Link href="https://ttwist.co.uk/" passHref> Link </Link>
          </Card>
        </Flex>

        <Flex sx={{ justifyContent: "center" }}>
          <Card variant="primary">
            <Text>🤞 WoW Fishing Bot</Text>
            <Image src="fishing.jpg" alt="WoW fishing bot" />
            <Text>
              Using OpenCV to perform fishing automatically in World of Warcraft
            </Text>
            <Link href="https://github.com/superoverflow/opencv_example" passHref> Link </Link>
          </Card>
        </Flex>

        <Flex sx={{ justifyContent: "center" }}>
          <Card variant="primary">
            <Text>🤞 Reviewer Rota</Text>
            <Image src="rota.jpg" alt="A pure ReactJS reviewer rota" />
            <Text>A pure ReactJS reviewer rota</Text>
            <Link href="https://github.com/superoverflow/react-reviewer-rota" passHref> Link </Link>
            <Link href="https://superoverflow.github.io/react-reviewer-rota" passHref> Demo </Link>
          </Card>
        </Flex>

        <Flex sx={{ justifyContent: "center" }}>
          <Card variant="primary">
            <Text>🤞 Home Karaoke</Text>
            <Text>A simple demo to use docker to build a Karaoke app</Text>
            <Link href="https://github.com/superoverflow/myweb" passHref> Link </Link>
          </Card>
        </Flex>
      </Grid>

      <Heading sx={{ pl: 3 }} as="h3">
        Articles
      </Heading>
      <Flex sx={{ flexDirection: "column"}}>
        <Link href="https://dev.to/superoverflow/visualising-data-52je" passHref>
          Visualising data
        </Link>

        <Link href="https://dev.to/superoverflow/making-a-dropdown-1li0" passHref>
          Making a Dropdown
        </Link>
      </Flex>
    </>
  );
}
