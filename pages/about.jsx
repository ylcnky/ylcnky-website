const AboutPage = () => {
  return (
    <>
      <h1>About❔</h1>
      <br />
      <h3>I am a Sweden-based Senior Data Engineer experienced in Automotive 🚗, Machinery 🔨 and Construction🏡 industries.
        <br />
        Holding a PhD 🎓 degree focused in Information Technologies and Digitalization (BIM/IoT) in Construction Industry. 
        <br />
        A big fan of cloud-native solutions, skilled in big data, data structures and data/graph analytics. 
        <br />
        Experienced with various industry data standards (OMI-ODF, OPC-UA, IDS, BIM/IFC, COBie) with a focus on batch and streaming ETL, building data pipelines, cloud services, cloud native, micro services and virtualization. 
        <br />
        Currently working in Volvo Cars Corporation, Gothenburg-SWEDEN.
        <br />
        <br />
        My tech stack includes:
        <br />
        <li>Apache Spark</li>
        <li>Spark Streaming</li>
        <li>Spark SQL</li>
        <li>Hadoop, Hive</li>
        <li>Kafka</li>
        <li>Airflow</li>
        <li>AWS Big Data Stack</li>
        <li>Kubernetes (K8s), Docker</li>
        <li>DevOps Tools (Jenkins, GithubActions, ...)</li>
        <li>Protobuf - GRPC</li>
        <li>Python, Scala, JS</li>

        <br />
        Besides the tech competencies, I am the full-stack father👨‍🍼 of my baby-girl 💗Dena💗, enjoy Sailing⛵, Cycling🚲 and Photography📸.
      </h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
