import React from "react";
import { Typography, Button } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const HomePage: React.FC = () => {
  return (
    <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
      <Title>HyperNative - Video Browser</Title>
      <Paragraph>Explore Videos from all over the world</Paragraph>
      <Link to="/video-browser">
        <Button type="primary" size="large">
          Start Exploring
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
