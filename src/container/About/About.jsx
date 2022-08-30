import React from "react";
import "./About.scss";

import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { images } from "../../constants";

const About = () => {
  const abouts = [
    {
      title: "Web Development",
      description:
        "I am a good web developer who is constantly learning new things to improve my skills.",
      imgUrl: images.about01,
    },
    {
      title: "React Developer",
      description:
        "I gained experience with the React framework while developing personal projects.",
      imgUrl: images.about03,
    },
    {
      title: "Vue Developer",
      description:
        "With the Vue framework I developed user-facing web applications and reusable components.",
      imgUrl: images.about02,
    },
    {
      title: "Frontend Development",
      description:
        "I love to create websites and add great functionality to them.",
      imgUrl: images.about04,
    },
  ];

  return (
    <>
      <h2 className="head-text">
        {" "}
        I Know That <span>Good Development</span> <br /> means{" "}
        <span>Good Busines</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
