import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container } from "../../reusecore/Layout";
import { Row } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import InternshipPage from "./Careers-Internship-grid";
import Five from "../../sections/Community/Community-pictures/community.png";
import JoinCommunity from "../Community/Join-community";
import CareersSectionWrapper from "./careers.style";

const Layer5_culture = "./img/layer5-culture.png";

const CareersPage = () => {
  return (
    <CareersSectionWrapper>
      <PageHeader title="Come Work with us" path="Careers" />
      <div className="careers-section-wrapper">
        <Container>
          <p className="centerTexts">If you’re a smart, curious person who can make contributions in and out of your areas of expertise, why not start now?</p>
        </Container>
        <Container>
          <Row className="videoText">
            <div className="introText">
              <h2>Layer5 Culture</h2>
              <p>All team members <strong>are expected to... </strong>
                take initiative, execute briskly, debate in the discussion, then execute post-haste on the decision, irrespective of the specific decision.</p>
              <p>All team members <strong>should expect to... </strong>
                be challenged, to work hard, to play hard, to be recognized, to grow and help others grow.</p>
              <p><strong>You should... </strong>
                pay attention to detail and take pride in your work. Know when to prioritize and have the discipline to adhere to those priorities. Focus on the customer. Pay it forward and enable others. Bring solutions with the problems. Take out the trash (do grunt work) as needed.</p>
            </div>
            <div className="introImage">
              <StaticImage src={Layer5_culture} alt="Five holding Layer5 banner" />
            </div>
          </Row>
        </Container>
        <div className="opportunity-section">
          <InternshipPage hide_heading={true} />
        </div>

        <JoinCommunity image={Five} />
        <Container>
          <br />
          <p className="center">Open source contributors come in all shapes, sizes, colors and so on. All are welcome in the Layer5 projects and community!!</p>

          <p className="center">Layer5 goes out of its way to welcome and encourage new contributors. We often assign newcomers an onboarding buddy, a MeshMate, to ensure that newcomers get both introduced to the projects within the community and introduced around to other individuals. We strive to help them get a foothold on a crevice of one of our initiatives, instilling and nurturing a sense of ownership, so that they feel at-home as they become a regular contributor.</p>
          <p className="center">
            We also spend a great deal of time trying to recognize and uplift contributors on the Layer5 and Meshery Twitter accounts whether “contribution” means code or any of the other various forms of being involved int the projects and community. Likewise, we try to lift up contributors’ works on the Layer5 and Meshery LinkedIn pages, too. And, while it’s not a world stage, we openly and publicly share our community meetings on YouTube.
          </p>

        </Container>
      </div>
    </CareersSectionWrapper>
  );
};

export default CareersPage;
