import { Layout } from "antd";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/homePage";
import VideoBrowserPage from "./pages/videoBrowserPage";
import "./style/VideoBrowserPage.css";
import "./style/VideoCard.css";
import "./style/VideoGrid.css";

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Header>
          <Navbar></Navbar>
        </Header>
        <Content className="app-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/video-browser" element={<VideoBrowserPage />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
