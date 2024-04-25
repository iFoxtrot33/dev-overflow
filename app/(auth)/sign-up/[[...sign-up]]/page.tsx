import { SignUp } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <SignUp path="/sign-up" />
    </div>
  );
};

export default page;
