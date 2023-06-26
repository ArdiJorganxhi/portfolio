const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <h3>Passionate Software Engineer open to self-improvement and prone to collaboration. Skillful on Backend Development using Java Spring Boot & Express.js/Node.js.</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
