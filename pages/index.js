import Head from "next/head";
import { Container, Grid, Flex, Heading, Divider } from "theme-ui";
import ProjectCard from "../components/ProjectCard";
import Article from "../components/Article";
import Header from "../components/Header";
import SectionDivider from "../components/SectionDivider";
import { projects, articles } from "../src/data";

export default function Home(pageProps) {
  const { projects, articles } = pageProps;

  return (
    <Flex sx={{ bg: "muted" }}>
      <Head>
        <title>superoverflow</title>
      </Head>
      <Divider />

      <Container sx={{ maxWidth: 1024 }}>
        <Header />

        <SectionDivider title="🔧 Projects" />
        <Grid sx={{ pb: 5 }} columns={["auto", null, "1fr 1fr"]}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              link={project.link}
              tags={project.tags}
            />
          ))}
        </Grid>

        <SectionDivider title="📝 Articles" />
        <Flex sx={{ flexDirection: "column", pl: 3, pb: 5 }}>
          {articles.map((article, index) => (
            <Article
              key={index}
              title={article.title}
              link={article.link}
              description={article.description}
              tags={article.tags}
            />
          ))}
        </Flex>

        <Divider />
        <Flex sx={{ justifyContent: "center" }}>© 2022, Built with ❤️</Flex>
      </Container>
    </Flex>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects,
      articles,
    },
  };
}
