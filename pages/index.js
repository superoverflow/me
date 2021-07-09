import Head from "next/head";
import { Container, Grid, Flex, Heading } from "theme-ui";
import ProjectCard from "../components/ProjectCard";
import Article from "../components/Article";
import Header from "../components/Header";

export default function Home(pageProps) {
  const { projects, articles } = pageProps;

  return (
    <>
      <Head>
        <title>superoverflow</title>
      </Head>
      <Container>
        <Header />

        <Heading as="h3">🔧 Projects</Heading>
        <Grid columns={["auto", null, "1fr 1fr 1fr"]}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              link={project.link}
            />
          ))}
        </Grid>

        <Heading as="h3">📝 Articles</Heading>
        <Flex sx={{ flexDirection: "column" }}>
          {articles.map((article, index) => (
            <Article key={index} title={article.title} link={article.link} />
          ))}
        </Flex>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const projects = [
    {
      title: "👔 TTwist Hoodies",
      image: "ttwist.jpg",
      description: "A simple WooCommerence hoodie shop",
      link: "https://ttwist.co.uk/",
    },
    {
      title: "🤖 WoW Fishing Bot",
      image: "fishing.jpg",
      description: "Use OpenCV to make a fishing Bot in World Of Warcarft",
      link: "https://github.com/superoverflow/opencv_example",
    },
    {
      title: "🎤 Home Karaoke",
      image: "karaoke.png",
      description: "Using docker 🐳 to boot up a home karaoke",
      link: "https://github.com/superoverflow/myweb",
    },
    {
      title: "🔀 Reviewer Rota",
      image: "rota.jpg",
      description: "Reviewer Rota built by React",
      link: "https://superoverflow.github.io/react-reviewer-rota",
    },
  ];

  const articles = [
    {
      title: "📈 Visualising Data",
      link: "https://dev.to/superoverflow/visualising-data-52je",
      description:
        "Using React Library Vizx to display simple interactive chart",
    },
    {
      title: "🔽 Making a Dropdown",
      link: "https://dev.to/superoverflow/making-a-dropdown-1li0",
      description: "Using ",
    },
  ];
  return {
    props: {
      projects,
      articles,
    },
  };
}
