import LinkButton from "../../components/LinkButton";
import useForm from "../../hooks/useForm";
import { initRegisterForm } from "./constants/constants";
import useRegister from "./hooks/useRegister";
import type { RegisterUser } from "./interfaces/registerUser";
import { Stack, Form, Button } from "react-bootstrap";
const Register = () => {
  const { email, username, password, formData, handleInputChange } =
    useForm<RegisterUser>(initRegisterForm);
  const { handleSubmit, isLoading, error } = useRegister();

  return (
    <>
      <Stack
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Form
          className="shadow p-3 rounded w-50"
          onSubmit={(e) => handleSubmit(e, formData)}
        >
          <legend>Register an account</legend>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter your user name"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </Form.Group>
          {error && <span className="text-danger">{error}</span>}
          <Form.Group className="mb-3">
            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={isLoading}
            >
              Register
            </Button>
          </Form.Group>
          <Form.Group className="d-flex justify-content-center align-items-center">
            <p className="m-0">Do you have an account?</p>
            <LinkButton
              className={"btn-link"}
              text={"Login here"}
              url="/login"
            />
          </Form.Group>
        </Form>
      </Stack>
    </>
  );
};

export default Register;
