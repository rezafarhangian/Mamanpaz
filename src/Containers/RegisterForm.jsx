import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../Components/Input";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";




const initialValues = {
  fullname: "",
  phonenumber: "",
  password: "",
  confirmPassword: "",
};

// ============== Validation of inputs ===============

const validationSchema = yup.object({
  fullname: yup
    .string()
    .required("این فیلد الزامی است")
    .matches(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز هستند"),
  phonenumber: yup
    .string()
    .matches(/^(09)\d{9}$/, "شماره تلفن باید با 09 شروع شده و 11 رقم باشد")
    .required("شماره تلفن الزامی است"),

  password: yup
    .string()
    .required("رمز عبور اجباری است")
    .max(8, "رمز عبور باید  8 رقم باشد")
    .matches(/^[0-9]*$/, "رمز عبور باید فقط شامل اعداد باشد"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "رمز عبور همخوانی ندارد")
    .required("تکرار رمز عبور اجباری است"),
});

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showrepeatpassword, setShowrepeatpassword] = useState(false);
  const onSubmit = (values, { resetForm }) => {};

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-[300px] m-auto  shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] rounded-lg p-3"
    >
      <h2 className="text-center font-bold my-3">ثبت نام در مامان پز</h2>
      <Input name="fullname" formik={formik} label="نام و نام خانوادگی" />
      <Input name="phonenumber" formik={formik} label="شماره همراه" />

      <div className="relative">
        <div className=" h-[85px]">
          <div>
            <label
              className="block text-gray-400 text-xs lg:text-sm "
              htmlFor=""
            >
              رمز عبور
            </label>

            <input
              className={`${
                formik.errors.password && formik.touched.password
                  ? "border-red-500 focus:border-b-red-500"
                  : "border-gray-300 focus:border-b-gray-700"
              } outline-0 rounded-lg p-2 border  w-full mt-1 focus:border-b `}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              {...formik.getFieldProps("password")}
            />
          </div>
          {formik.errors.password && formik.touched.password && (
            <p className="text-xs pr-1 text-red-500">
              {formik.errors.password}
            </p>
          )}
        </div>

        <button
          onClick={() => setShowPassword(!showPassword)}
          type="button"
          className="absolute left-2 top-8 cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEye className="text-xl text-gray-600" />
          ) : (
            <AiOutlineEyeInvisible className="text-xl text-gray-600" />
          )}
        </button>
      </div>
      <div className="relative">
        <div className=" h-[85px]">
          <div>
            <label
              className="block text-gray-400 text-xs lg:text-sm "
              htmlFor=""
            >
              تکرار رمز عبور
            </label>

            <input
              className={`${
                formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? "border-red-500 focus:border-b-red-500"
                  : "border-gray-300 focus:border-b-gray-700"
              } outline-0 rounded-lg p-2 border  w-full mt-1 focus:border-b `}
              type={showrepeatpassword ? "text" : "password"}
              name="confirmPassword"
              id="password"
              {...formik.getFieldProps("confirmPassword")}
            />
          </div>
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <p className="text-xs pr-1 text-red-500">
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          onClick={() => setShowrepeatpassword(!showrepeatpassword)}
          type="button"
          className="absolute left-2 top-8 cursor-pointer"
        >
          {showrepeatpassword ? (
            <AiOutlineEye className="text-xl text-gray-600" />
          ) : (
            <AiOutlineEyeInvisible className="text-xl text-gray-600" />
          )}
        </button>
      </div>

      <button
        type="submit"
        disabled={!(formik.isValid && formik.dirty)}
        className="bg-mamanpaz text-white p-2 rounded-lg w-full  my-5  disabled:bg-gray-300 "
      >
        ثبت نام
      </button>
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs text-gray-500">
          حساب کاربری دارید؟
          <Link to="/login" className="text-blue-700 mr-1 text-sm">
            ورود
          </Link>
        </p>
      </div>
    </form>
  );
}
