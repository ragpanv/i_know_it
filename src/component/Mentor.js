import React from "react";
import "../css/Mentor.scss";

const img1 =
  "https://cdn.mentorcruise.com/cache/b7a1f2f189da8161fe50cca6a26dd652/e430ef86d16bcbf4/984c13f32acf2a406e86d483c502ebfa.jpg";
const img2 =
  "https://cdn.mentorcruise.com/cache/40b16bba114ffdfdaaf27b98d05760ad/123442125e67f125/d3b62ece680ef74523f941909f8258ac.jpg";
const img3 =
  "https://cdn.mentorcruise.com/cache/a061541d928bf4fef7f9d288bf8097a6/6012e1f87f39f887/9636cae8e95f6d5370eae34a52ce86dd.jpg";
const img4 =
  "https://cdn.mentorcruise.com/cache/232afa88447edb79756b09e51af8bf16/c44c5d0d23bd6154/b0c1da7195ed1d43162e2a467b8aec6b.jpg";
const img5 = "https://miro.medium.com/max/2400/1*TAW8T070D1us4BaQC3Byfg.png";
const img6 =
  "https://blog.hatchcoding.com/hs-fs/hubfs/Imported_Blog_Media/Screen-Shot-2017-07-10-at-2_12_08-PM.png?width=600&height=338&name=Screen-Shot-2017-07-10-at-2_12_08-PM.png";
const img7 =
  "https://livecodestream.dev/post/top-programming-blogs/stackabuse_hu7673d497e0867a04ce9d8d5f4b4c9950_208014_700x0_resize_box_2.png";
const img8 =
  "https://livecodestream.dev/post/top-programming-blogs/livecodestream_hu554048544216d4f02ee83e2227440db9_345037_700x0_resize_box_2.png";

function Mentor(){
    
    return(
  <>
    <div className="wrapper">
      <h1 className="header">MENTOR INFORMATION</h1>

      <div className="sin">
        <img src={img1} alt=" " />
        <h2>ROHAN DESHMUKH</h2>
        <h3>Lead Data Scientist & Quantitative Researcher @ S3 Partners</h3>
        <p>
          Lead Data Scientist at a FinTech company in NYC. 5 years of experience
          in ML and Data Science with focus in Time Series and NLP. If you are a
          student or professional aiming to become a Data Scientist or Machine
          Learning Engineer, feel free to connect and start your journey!
          Services offered: 1. Resume review 2. Data Science & ML Tutoring 3.
          Mock Interviews 4. Hands-on Project Implementation 5. Career
          Counselling Website: https://rohan-deshmukh.github.io/ Github:
          https://github.com/rohan-deshmukh
        </p>
      </div>

      <div className="row">
        <div className="column">
          <h3>
            The most popular coding language for absolute beginners: Python
          </h3>
          <p>
            No matter what list you check, Python is almost always listed as the
            most popular coding language for beginners — on Qvault’s post on
            best programming languages for beginners, GitHub’s ranking, Stack
            Overflow’s developer survey, and is even the top-most language
            universities are teaching to computer science majors. .
          </p>
          <img src={img5} alt=" " />
        </div>
      </div>

      <div className="sin">
        <img src={img2} alt=" " />

        <h2>ADHAN RAFIQUE</h2>
        <h3>Information Security Leader @ ATech</h3>
        <p>
          I work for a fortune 500 company here in NYC Metro area. I'm Certified
          Information Security manager (CISM) from ISACA.ORG. I help many
          organizations build their IT infrastructures. I build information
          security program and practice for large corporations. I speak
          regularly at many technical conferences. I have won awards from
          Microsoft, IEEE, British Computer Society and may other organizations.
          I've written a number of articles on cloud security and cloud
          computing which got published at Microsoft website.
          https://techcommunity.microsoft.com/t5/microsoft-mvp-award-program-blog/reconnect-series-adnan-rafique/ba-p/1751390
          https://techcommunity.microsoft.com/t5/enabling-remote-work-blog/why-remote-workplaces-remain-a-challenge-for-large-enterprises/ba-p/1468669
          https://techcommunity.microsoft.com/t5/it-resources-training/cloud-careers-friday-feature-adnan-rafique/m-p/58659
          If you want to take your career to the next level{" "}
        </p>
      </div>

      <div className="row">
        <div className="column">
          <h2>KNOW IT!!!!...</h2>
          <img src={img6} alt=" " />
          <h3>Stephen Hawking</h3>
          <p>
            “Whether you want to uncover the secrets of the universe, or you
            just want to pursue a career in the 21st century, basic computer
            programming is an essential skill to learn.”
          </p>
        </div>
      </div>

      <div className="sin">
        <img src={img3} alt=" " />
        <h2>KARUNA LAKHANI</h2>
        <h3>Founder, CTO @ Daten and Wissen</h3>
        <p>
          “If you can dream it, you can do it.” This quote by Walt Disney befits
          our mentor, Karuna Lakhani, who exemplified the outcome of
          determination and dedicated efforts. An electronics undergraduate from
          the Mumbai University, she worked with Accenture Technologies for
          three years before taking up masters in Data Science in 2019 at the
          renowned British Columbia, Canada. Today, she is a researcher, CTO and
          founder of Daten and Wissen. Data Scientist with certifications in
          SAS, Machine Learning, and programming languages SQL, Python. She is a
          certified Neo4j professional with expertise in Hadoop, Machine
          Learning, Neural Networks, Graph Database, Data Mining techniques for
          Predictive Modelling and Analytics, Data Integration and Natural
          Language Processing. Knowledgeable and detail-oriented data scientist
          with over five years of experience in utilizing statistical models,
          she has successfully delivered projects with customer-centric
          companies to build graph database from website logs. It aided in
          drawing fundamental analysis and subsequent impactful recommendations.
          Karuna can create easily understandable visualization reports from
          complex information. To satiate her quest for novelty, she
          concurrently continued her research and published a paper on how to
          use word embedding to analyze system logs at the SMCE 2019 Conference
          in Italy. Additionally, she has worked on Azure ML, AWS ML and Docker.
          Based on her interest and capabilities, she wishes to contribute to
          the revolutionary technological development individualistically and
          hence founded an AI research-driven company Daten and Wiseen.
          Mentor-ship for her is long term commitment. She has mentored lot of
          students through out her journey. She started tutoring when she was
          very young and today when she look back, all of them have achieved
          their aspirations and goals. She would like to mentor you in various
          skills required to be a good data scientist or data engineer using
          various tools and languages.
        </p>
      </div>

      <div className="row">
        <div className="column">
          <h2>Live Code Stream</h2>
          <img src={img8} alt=" " />
          <p>
            Here comes the blog you are reading right now. I’m Juan, who started
            this blog to share my development experience with you guys. You will
            see me writing about artificial intelligence, programming (mostly
            Python and JavaScript), machine learning, and the best way to use
            them in projects. By the way, did you noticed how quickly this web
            page loaded? Not sure? Try to reload this page again and see it for
            yourself. Actually, unlike many other bloggers, I used a Static Site
            Generator called Hugo to generate this website. Its major advantage
            is speed as compared to a CMS like WordPress. In case you want to
            know more about then check out my tutorial on Static Hosting With
            AWS and user-friendly URLs . [The habits I keep reminding myself to
            be a better developer]
          </p>
        </div>
      </div>

      <div className="sin">
        <img src={img4} alt=" " />
        <h2>ANAND SAFI</h2>
        <h3>
          Engineering Manager | Tech Advisor | Board of Directors @ Mark43
        </h3>
        <p>
          An established technical leader for product and commercial teams.
          Experience and interest with product development with a focus on UX
          and customers. I have provided mentorship over the last several years
          to 25+ mentees. I have helped aspiring and senior engineers alike.
          Whether it is trying to learn a new Frontend technology, trying to
          build projects with a timeline, trying to mimic industry-like agile
          processes, unblocking or brainstorming on an architectural decision or
          tech stack, solving a bug or code issue - I am happy to assist and
          work with you! My responsibilities revolve around active code
          contribution, championing technical vision, stakeholder management,
          technical product management and release coordination.
        </p>
      </div>

      <div className="row">
        <div className="column">
          <h2>Stack Abuse</h2>
          <img src={img7} alt=" " />
          <p>
            Stack Abuse mainly focuses on topics like Python, JavaScript, Java,
            and Unix operating system. It is managed by Scott Robinson with a
            team of content writers. They usually publish how-to guides and
            teach you through example code-snippets. It will be a useful
            resource to learn project-based concepts. But, before that, you must
            have some familiarity with the basics of JavaScript, Python, and
            Java.
          </p>
        </div>
      </div>
    </div>
  </>
    );
  }

  export default Mentor;