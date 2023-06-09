import { useState } from "react";
import Input from "../Components/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useAuthActions } from "../Context/AuthProvider";

//========== Save form data ==========

const person = {
  name: "علی احمدی",
  phone: "09125552244",
  password: "12345678",
};

const initialValues = {
  phonenumber: "",
  password: "",
};

// ============== Validation of inputs ===============

const validationSchema = yup.object({
  phonenumber: yup
    .string()
    .matches(/^(09)\d{9}$/, "شماره تلفن باید با 09 شروع شده و 11 رقم باشد")
    .required("شماره تلفن الزامی است"),

  password: yup
    .string()
    .required("پسورد الزامی است")
    .matches(/^[0-9]{8}$/, "رمز عبور باید ۸ رقم باشد و تنها شامل اعداد باشد"),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);

  const setAuth = useAuthActions();
  const navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {

    if (
      values.phonenumber === person.phone &&
      values.password === person.password
    ) {
      setShowError(false);
      setAuth(person);

      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "با موفقیت وارد شدید.",
      }).then(navigate("/"));
      

    } else {
      setShowError(true);
    }
  };

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
      <h2 className="text-center font-bold my-3">ورود به حساب کاربری</h2>
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

            <div></div>
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
      <p
        className={`${
          showError ? "visible" : "invisible"
        } text-center text-sm text-red-600  `}
      >
        اطلاعات وارد شده صحیح نمیباشد
      </p>
      <button
        type="submit"
        disabled={!(formik.isValid && formik.dirty)}
        className="bg-mamanpaz text-white p-2 rounded-lg w-full  mb-5 mt-5 disabled:bg-gray-300 "
      >
        ورود
      </button>
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs text-gray-500">
          حساب کاربری ندارید؟{" "}
          <Link to="/register" className="text-blue-700">
            ثبت نام
          </Link>
        </p>
        <p className="text-xs text-gray-500 cursor-pointer">فراموشی رمز عبور</p>
      </div>
    </form>
  );
}
