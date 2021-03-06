import Root from "../assets/components/root"
import Section from "../assets/components/document/section"
import Social from "../assets/components/home/social"
import Project from "../assets/components/home/project"

const generateProjects = (props) => {
  let projects = []
  let n = 0
  for(const [ key, value ] of Object.entries(props)) {
    const data = {
      name: key,
      key,
      n: n++,
      ...value
    }
    projects.push(
      <Project { ...data }/>
    )
  }

  return projects
}

const Home = (props) => {
  return (
    <Root title="Home">
      <Section>
        <img className="design-logo" src="/images/design.png" alt="Design Logo" />
        <div className="biography">
          <h1 className="big title-font">Nathan Pham</h1>
          <p className="big subtitle">Mathematician, designer, farmer, student. Engineer would be stretching the titles a bit.</p>
        </div>
      </Section>
      <Section>
        <div className="flex socials">
          <Social href="mailto:nathanpham.me@gmail.com" icon="fas fa-envelope" />
          <Social href="https://github.com/nathan-pham" icon="fab fa-github" />
          <Social href="https://twitter.com/phamn23" icon="fab fa-twitter" />
          <Social href="https://dev.to/phamn23" icon="fab fa-dev" />
        </div>
      </Section>
      <Section>
        <h2 className="title-font big subtitle">Selected Work 💻</h2>
        { generateProjects(props) }
        {/* <h2 className="title-font big subtitle">Experiments ⚗️ & Designs 📝</h2> */}
      </Section>
    </Root>
  )
}

const getStaticProps = async () => {
  const projects = await import("../assets/data/projects.json")
  return { props: projects.default }
}

export default Home
export { getStaticProps }