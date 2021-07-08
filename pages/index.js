import Head from "next/head";
import { Grid, Flex, Heading } from "theme-ui";
import ProjectCard from "../components/ProjectCard";
import Article from "../components/Article";

export default function Home(pageProps) {
  const { projects, articles } = pageProps;

  return (
    <>
      <Head>
        <title>Chiu Yat (Cyrus) Tang</title>
      </Head>

      <Flex sx={{ flexDirection: "column", py: 3 }}>
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
        Projects 🔧
      </Heading>
      <Grid columns={["auto", null, 2]} sx={{ m: 5 }}>
        {projects.map((project, index) => 
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        )}
      </Grid>

      <Heading sx={{ pl: 3 }} as="h3">
        Articles 📝
      </Heading>
      <Flex sx={{ flexDirection: "column" }}>
        {articles.map((article, index) => (
          <Article key={index} title={article.title} link={article.link} />
        ))}
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  const projects = [
    {
      title: "👍 TTwist Hoodies",
      image: "ttwist.jpg",
      description: "A simple WooCommerence hoodie shop",
      link: "https://ttwist.co.uk/",
    },
    {
      title: "🤞 WoW Fishing Bot",
      image: "fishing.jpg",
      description: "Use OpenCV to make a fishing Bot in World Of Warcarft",
      link: "https://github.com/superoverflow/opencv_example",
    },
    {
      title: "👌 Home Karaoke",
      image: "karaoke.png",
      description: "Using docker to boot up a home karaoke",
      link: "https://github.com/superoverflow/myweb",
    },
    {
      title: "✔ Reviewer Rota",
      image: "rota.jpg",
      description: "Reviewer Rota built by React",
      link: "https://superoverflow.github.io/react-reviewer-rota",
    },
  ];

  const articles = [
    {
      title: "📈 Visualising Data",
      link: "https://dev.to/superoverflow/visualising-data-52je",
    },
    {
      title: "🔽 Making a Dropdown",
      link: "https://dev.to/superoverflow/making-a-dropdown-1li0",
    },
  ];
  return {
    props: {
      projects,
      articles,
    },
  };
}
