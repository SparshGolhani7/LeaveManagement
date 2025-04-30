import React, { useEffect, useState } from "react";
import { Form, Input, Button, Typography, Checkbox } from "antd";
import { UserOutlined, LockOutlined, ArrowRightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const lines = ["Leave management", "Employee management","Time Management"];

const LoginPage: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = lines[lineIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < currentLine.length) {
          setDisplayedText((prev) => prev + currentLine.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setLineIndex((prev) => (prev + 1) % lines.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, lineIndex]);

  return (
    <>
      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          font-family: 'serif';
        }

        .typing-wrapper {
          font-size: 18px;
          color: #eee;
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .typing-text {
          border-right: 2px solid #eee;
          white-space: nowrap;
          overflow: hidden;
          font-size: 18px;
          color: #eee;
          padding-right: 5px;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
          .left, .right {
            width: 100% !important;
            height: 50vh;
          }
          .formBox {
            width: 90% !important;
          }
        }
      `}</style>

      <div style={styles.container} className="container">
        {/* Left Panel */}
        <div style={styles.left} className="left">
          <div style={styles.overlay}>
            <div>
              <Title level={1} style={{ color: "white", fontFamily: "serif", marginBottom: 10 }}>
                Nuance
              </Title>
              <Text style={{ color: "#aaa", fontSize: 16 }}>
                Relaxing Your Mind From Madness
              </Text>
            </div>

            <div style={{ marginTop: 40 }}>
              <div className="typing-wrapper">
                <Text style={{ fontSize: 18, color: "#fff" }}>Designed for</Text>
                <div className="typing-text">{displayedText}</div>
              </div>
            </div>

            <div style={{ color: "#ccc", fontSize: 14, marginTop: "auto" }}>
              <div><b style={{ color: "white" }}>calm & relaxed</b></div>
              <div>Contact : +62 891 7323 8801</div>
              <div>www.Nuance.in</div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div style={styles.right} className="right">
          <div style={styles.formBox} className="formBox">
            <Title level={3} style={{ marginBottom: 30, fontFamily: "serif" }}>
              Welcome Back
            </Title>
            <Form name="login_form" layout="vertical" onFinish={values => console.log("Login Data:", values)} requiredMark={false}>
              <Form.Item name="username" rules={[{ required: true, message: 'Please enter your username' }]}>
                <Input size="large" prefix={<UserOutlined />} placeholder="Username" style={styles.input} />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
                <Input.Password size="large" prefix={<LockOutlined />} placeholder="Password" style={styles.input} />
              </Form.Item>
              <div style={styles.options}>
                <Checkbox style={{ fontSize: 12 }}>Remember me</Checkbox>
                <a href="#" style={{ fontSize: 12 }}>Forgot password?</a>
              </div>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<ArrowRightOutlined />}
                  style={styles.loginBtn}
                >
                  LOGIN
                </Button>
              </Form.Item>
            </Form>
            <Text style={{ fontSize: 12 }}>
              Don't have an account? <a href="#">Create one here</a>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  left: {
    width: "50vw",
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    padding: "60px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
  },
  right: {
    width: "50vw",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formBox: {
    width: 340,
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: 12,
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
  },
  input: {
    borderRadius: 30,
    boxShadow: "0 3px 6px rgba(0,0,0,0.05)",
  },
  loginBtn: {
    width: "100%",
    borderRadius: 30,
    backgroundColor: "#1c1c1c",
    border: "none",
    height: 40,
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
  },
};

export default LoginPage;
