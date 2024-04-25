import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <SignIn path="/sign-in" />
    </div>
  );
};

export default page;
