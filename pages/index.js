import Head from "next/head";
import { Container, Grid, Flex, Heading, Divider, Text } from "theme-ui";
import ProjectCard from "../components/ProjectCard";
import Article from "../components/Article";
import Header from "../components/Header";

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

        <Heading as="h3" sx={{ pb: 3 }}>
          🔧 Projects
        </Heading>
        <Divider />
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
        
        <Heading as="h3" sx={{ pb: 3 }}>
          📝 Articles
        </Heading>
        <Divider />
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
        <Flex sx={{ justifyContent: "center" }}>© 2021, Built with ❤️</Flex>
      </Container>
    </Flex>
  );
}

export async function getStaticProps() {
  const projects = [
    {
      title: "👔 TTwist Hoodies",
      image: "ttwist.jpg",
      description: "A simple WooCommerce hoodie shop",
      link: "https://ttwist.co.uk/",
      tags: ["WooCommerce", "Revolut", "WordPress"],
    },
    {
      title: "🤖 WoW Fishing Bot",
      image: "fishing.jpg",
      description: "Use OpenCV to make a fishing Bot in World Of Warcarft",
      link: "https://github.com/superoverflow/opencv_example",
      tags: ["OpenCV", "Python"],
    },
    {
      title: "🎤 Home Karaoke",
      image: "karaoke.png",
      description: "Using docker 🐳 to boot up a home karaoke",
      link: "https://github.com/superoverflow/myweb",
      tags: ["Docker"],
    },
    {
      title: "🔀 Reviewer Rota",
      image: "rota.jpg",
      description: "Reviewer Rota built by React",
      link: "https://superoverflow.github.io/react-reviewer-rota",
      tags: ["React"],
    },
  ];

  const articles = [
    {
      title: "📈 Visualising Data",
      link: "https://dev.to/superoverflow/visualising-data-52je",
      description:
        "Using React Library Visx to display simple interactive chart",
      tags: ["visx"],
    },
    {
      title: "🔽 Making a Dropdown",
      link: "https://dev.to/superoverflow/making-a-dropdown-1li0",
      description: "Using React Library Downshift to make a simple dropdown",
      tags: ["downshiftJs"],
    },
  ];
  return {
    props: {
      projects,
      articles,
    },
  };
}
