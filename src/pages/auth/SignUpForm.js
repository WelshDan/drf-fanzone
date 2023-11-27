import React, {useState} from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: '',
    password1: '',
    password2: ''
  });
  const { username, password1, password2 } = signUpData;
  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
        ...signUpData,
        [event.target.name]: event.target.value
    })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.post('/dj-rest-auth/registration/', signUpData)
        history.push('/signin')
    } catch(err){}
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label className="d-none">username</Form.Label>
                    <Form.Control
                        className={styles.Input}
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="password1">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control
                        className={styles.Input}
                        type="password"
                        placeholder="Password"
                        name="password1"
                        value={password1}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="password2">
                    <Form.Label className="d-none">Confirm password</Form.Label>
                    <Form.Control
                        className={styles.Input}
                        type="password"
                        placeholder="Confirm password"
                        name="password2"
                        value={password2}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button
                    className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                    type="submit"
                >
                    Sign up
                </Button>
            </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://img.freepik.com/free-photo/soccer-into-goal-success-concept_1150-5276.jpg?w=996&t=st=1701120297~exp=1701120897~hmac=2984ce82495eae7c82d6f801e1abee94362dd3f5da161fe078acf02b49a4c75f"
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;