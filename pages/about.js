import Root from "../assets/components/root"
import Section from "../assets/components/document/section"
import Post from "../assets/components/about/post"

const Home = ({ posts }) => {
  return (
    <Root title="About">
      <Section>
        <figure className="hero">
          <img src="/images/hero.jpeg" alt="Speaking at a YLA session" />
          <figcaption>
            Speaking at a YLA Session
          </figcaption>
        </figure>
      </Section>      
      <Section>
        <h1 className="title-font big">Hey, 👋 I'm Nathan. </h1>
        <p>I'm a student at Del Oro High School, where I've had the honor of learning under some of the world's best teachers (my unbiased opinion of course). </p>
        <p>
          <s>A large majority of my time is spent on side projects, scrolling through cat videos, and snacking on tamales.</s> I am committed towards making my community more just, safe, and environmetally clean by pursuing opportunities in leadership. Along my journey, I've gained valuable experience in advocacy and government.
        </p>
        <p> As a self taught programmer, I often analyze and address issues in my community through technology. For example, I created a website called Neuromates to help dementia patients greatly impacted by the pandemic understand neurodegenerative diseases.</p>
        <p>Currently, I am pursuing summer programs to help further my growth in STEM and research. If you'd like to chat about future adventures and projects, consider contacting me at <a className="link" href="mailto:nathanpham.me@gmail.com">nathanpham.me@gmail.com</a>.</p>
        <div className="resume">
          Interested in my skills & experience? Download my <a className="link" href="/resume.pdf">resume</a>.
        </div>
      </Section>
      <Section>
        <h2 className="title-font big subtitle">Latest Blog Posts 🖊️</h2>
        <div className="flex justify-between">
          {
            posts.slice(0, 2).map((v, i) => <Post { ...v } key={i}/>)
          }
        </div>
      </Section>
    </Root>
  )
}

const getServerSideProps = async () => {
  const posts = await fetch("https://dev.to/api/articles?username=phamn23").then(res => res.json())
  return {
    props: { posts }
  }
}

export default Home
export { getServerSideProps }