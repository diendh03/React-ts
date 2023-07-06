import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../schema/signup";
import { IUser } from "../../interface/Interface";
export type SignupForm = Yup.InferType<typeof signupSchema>;
type Props = {
  onAdd: (data: SignupForm) => void;
};
const SignUp = (Props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: yupResolver(signupSchema),
  });
  const onSubmit = (data: SignupForm) => {
    Props.onAdd(data);
    navigate("/signin");
  };
  return (
    <div className="h-screen font-sans login bg-cover">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form
              className="max-w-xl m-4 p-10 bg-white rounded shadow-xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <p className="text-gray-800 font-medium">Register</p>
              <div className="">
                <label
                  className="block text-sm text-gray-00"
                  htmlFor="cus_name"
                >
                  Name
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  {...register("name")}
                />
                <p className="text-red-600 text-[10px]">
                  {errors.name && errors.name.message}
                </p>
              </div>
              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="cus_email"
                >
                  Email
                </label>
                <input
                  className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                  {...register("email")}
                />
                <p className="text-red-600 text-[10px]">
                  {errors.email && errors.email.message}
                </p>
              </div>
              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="cus_email"
                >
                  Password
                </label>
                <input
                  className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                  type="password"
                  {...register("password")}
                />
                <p className="text-red-600 text-[10px]">
                  {errors.password && errors.password.message}
                </p>
              </div>
              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="cus_email"
                >
                  Confirm Password
                </label>
                <input
                  className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                  type="password"
                  {...register("confirmPassword")}
                />
                <p className="text-red-600 text-[10px]">
                  {errors.confirmPassword && errors.confirmPassword.message}
                </p>
              </div>

              <div className="mt-2">
                <button
                  className="px-5 py-3 text-white font-light tracking-wider bg-gray-900 rounded"
                  type="submit"
                >
                  Register
                </button>
              </div>
              <a
                className="inline-block right-0 align-baseline font-bold text-sm text-500 hover:text-blue-800"
                href="/signin"
              >
                Already have an account ?
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
