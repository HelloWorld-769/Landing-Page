import Images from "../../assets";
import AutoTypingText from "../../components/AutoTypingText/AutoTypingText";
import Card from "../../components/Card/Card";
import CardContent from "../../components/CardContent/CardContent";
import Navbar from "../../components/Navbar/Navbar";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="header">
        <AutoTypingText text="Connect | Communicate | Build" />
        <h6>
          Elevate Your Business with Our Expertise Transforming Ideas into
          Reality.
        </h6>
        <h6>
          Your Partner in Success Where Creativity Meets Results, and Ambition
          Meets Opportunity.
        </h6>
      </div>
      <div className="card-wrapper">
        <Card
          content={
            <CardContent
              title="Frontend"
              src={Images.FrontendIcon}
              alt="frontend-icon"
            />
          }
        />
        <Card
          content={
            <CardContent
              title="Backend"
              src={Images.BackendIcon}
              alt="backend-icon"
            />
          }
        />
        <Card
          content={
            <CardContent
              title="Database"
              src={Images.DatabaseIcon}
              alt="database-icon"
            />
          }
        />
      </div>
    </>
  );
};

export default LandingPage;
