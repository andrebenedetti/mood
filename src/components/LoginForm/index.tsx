import Button from "../Button";
import TextInput from "../Input";

const LoginForm = () => {
  return (
    <div className="flex flex-col w-full">
      <TextInput />
      <TextInput className="mt-2" type="password" />
      <Button className="mt-2" label="Login" />
    </div>
  );
};

export default LoginForm;
