import { Button, Form, Stack } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import type { User } from "./interfaces/user";
import useLogin from "./hooks/useLogin";
import { initLoginForm } from "./constants/constants";
import LinkButton from "../../components/LinkButton";
const Login = () => {
  const { username, password, formData, handleInputChange } =
    useForm<User>(initLoginForm);
  const { handleSubmit, error, isLoading } = useLogin();
  return (
    <>
      <Stack direction="horizontal" className="vh-100 d-flex justify-content-between align-items-center" gap={2}>
        <div className="w-50 px-3">
          <Form
            className="shadow p-3 rounded"
            onSubmit={(e) => handleSubmit(e, formData)}
          >
            <legend>Login</legend>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="User name"
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
                Login
              </Button>
            </Form.Group>
            <Form.Group className="d-flex justify-content-center align-items-center">
              <p className="m-0">Don't have an account?</p>
              <LinkButton
                className={"btn-link"}
                text={"Register here"}
                url="/register"
              />
            </Form.Group>
          </Form>
        </div>

        <div className="w-50">
          <img
            src="/src/assets/img/Coffee.jpg"
            alt="Coffee"
            className="rounded"
            style={{ objectFit: "cover", height: "100vh", width: "100%" }}
          />
        </div>
      </Stack>
    </>
  );
};

export default Login;
