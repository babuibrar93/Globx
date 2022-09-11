import React, { forwardRef } from "react";

import "./Team.css";
import Saif from "../../Assests/Saif.jpg";
import Ashwin from "../../Assests/ashwin.jpg";
import Ethan from "../../Assests/Ethan.jpg";
import Nicholas from "../../Assests/Nicholas.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const Team = forwardRef((props, ref) => {
  return (
    <div className="mainTeamDiv" ref={ref}>
      <div className="team">MEET THE TEAM</div>
      <div className="founders">Founders</div>

      <div className="teamMembers">
        <div className="individualcard">
          <img src={Saif} alt="team" className="individuals" />
          <br />

          <h3>Saif Jaffery</h3>
          <span className="bio">
            Forward thinking individual, that is
            <br /> always looking for more innovative <br />
            solutions. With a Business mind and
            <br /> a deep passion for technology. Saif <br />
            is able to create digital solutions that <br />
            are curated to your businesses needs.
            <br /> Saif also has a deep understanding of <br />
            marketing, cloud solutions & <br />
            blockchain technology.
          </span>
          <div className="icons" style={{ marginTop: "106px" }}>
            <br />

            <a href="https://www.linkedin.com/in/saif-jaffery-a69767115/">
              <LinkedInIcon />
            </a>
            <br />

            <a href="https://www.instagram.com/saifery/">
              <InstagramIcon />
            </a>
            <br />

            <a href="">
              <EmailIcon
                onClick={() => {
                  const url = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${"saif@globxcanada.ca"}`;
                  window.open(url, "_blank");
                }}
              />
            </a>
          </div>
        </div>

        <div className="individualcard">
          <img src={Ashwin} alt="team" className="individuals" />
          <br />

          <h3>
            Ashwin <br /> Sanmugananthan
          </h3>
          <span className="bio">
            Multi-faceted and forward-thinking <br />
            professional with 4+ years of technical, <br />
            data analysis & management, general <br />
            accounting, and finance experience, in <br />
            Business Management. Leverages <br />
            exceptional interpersonal skills to build <br />
            and maintain effective client relations, <br />
            providing consistently tailored solutions
            <br /> to unique customer needs to drive client
            <br /> retention and satisfaction.
          </span>
          <div className="icons" style={{ marginTop: "50px" }}>
            <br />

            <a href="https://www.linkedin.com/in/ashwin-sanmugananthan-0132ab181/">
              <LinkedInIcon />
            </a>
            <br />

            <a href=" https://www.instagram.com/ashwinshan/?hl=en">
              <InstagramIcon />
            </a>
            <br />

            <a href="">
              <EmailIcon
                onClick={() => {
                  const url = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${"ashwin@globxcanada.ca"}`;
                  window.open(url, "_blank");
                }}
              />
            </a>
          </div>
        </div>

        <div className="individualcard">
          <img src={Ethan} alt="team" className="individuals" />
          <br />
          <h3>Ethan Gomes</h3>
          <span className="bio">
            A flexible & multi passionate individual <br /> who carries
            knowledge within various
            <br /> industries. Skilled in sales, affiliate <br />
            marketing, media management, copy <br />
            writing and real estate tech. Able to put <br />
            you first and develop a comprehensive
            <br /> map for the growth outlook within your <br />
            organisation.
          </span>

          <div className="icons" style={{ marginTop: "132px" }}>
            <br />

            <a href="https://www.linkedin.com/in/ethan-gomes-0a798013a/ ">
              <LinkedInIcon />
            </a>
            <br />

            <a href="https://www.instagram.com/ethangomesss/">
              <InstagramIcon />
            </a>
            <br />

            <a href="">
              <EmailIcon
                onClick={() => {
                  const url = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${"ethan@globxcanada.ca"}`;
                  window.open(url, "_blank");
                }}
              />
            </a>
          </div>
        </div>

        <div className="individualcard">
          <img src={Nicholas} alt="team" className="individuals" />
          <br />

          <h3>Nicholas Phillibert</h3>
          <span className="bio">
            Adaptable and organised professional <br /> with high level
            experience of creating, <br />
            implementing ,and optimising social <br />
            media strategies for companies and <br />
            brands. Gained expertise in data analysis,
            <br /> publication marketing, and web-based
            <br /> advertisement. Focused on generating
            <br /> new revenue through the use of digital <br />
            technology.
          </span>
          <div className="icons" style={{ marginTop: "107px" }}>
            <br />

            <a href=": https://www.linkedin.com/in/nicholas-phillibert-276253163/">
              <LinkedInIcon />
            </a>
            <br />

            <a href="https://www.instagram.com/nicholasphillibert/">
              <InstagramIcon />
            </a>
            <br />

            <a href="">
              <EmailIcon
                onClick={() => {
                  const url = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${"NIcholas@globxcanada.ca"}`;
                  window.open(url, "_blank");
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Team;
