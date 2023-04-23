import React from "react";
import NavbarDesktop from "../Components/NavbarDesktop";
import NavbarMobile from "../Components/NavbarMobile";
import Input from "../Components/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import Border from "../Components/Border"
import { IoMdArrowDropdown } from "react-icons/io";
import Swal from "sweetalert2";



const initialValues = {
  name: "",
  mobile: "",
  tel: "",
  company: "",
  number: "",
};

const onSubmit = (values, {resetForm}) => {
  Swal.fire({
    title: "کابر گرامی",
    text: "آیا از ارسال اطلاعات اطمینان دارید؟",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#00bd10",
    cancelButtonColor: "#d33",
    confirmButtonText: "بله",
    cancelButtonText: "نه",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "اطلاعات با موفقیت ارسال شد",
        text: "پرسنل ما در اسرع وقت با شما تماس حاصل می فرمایند",
        icon: "success",
        confirmButtonText: "باشه",
      }).then(
        
        resetForm(),
      );
    }
  });
};

const validationSchema = yup.object({
  name: yup
    .string().trim()
    .matches(/^[\u0600-\u06FF\s]*$/, "فقط حروف فارسی مجاز است")
    .required("این فیلد اجباری است"),
  mobile: yup
    .string()
    .matches(/^(09)\d{9}$/, "شماره تلفن باید با 09 شروع شده و 11 رقم باشد")
    .required("شماره تلفن الزامی است"),
  tel: yup
    .number()
    .typeError("فقط عدد مجاز است")
    .required("این فیلد اجباری است"),
  company: yup
    .string().trim()
    .matches(/^[\u0600-\u06FF\s]*$/, "فقط حروف فارسی مجاز است")
    .required("این فیلد اجباری است"),
  number: yup
    .number()
    .typeError("فقط عدد مجاز است")
    .required("این فیلد اجباری است"),
});

export default function HeaderCompanies() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div id="reza">
      <NavbarDesktop />
      <NavbarMobile />
      <div className="container p-2 mb-20 ">
        <div className="mt-16 flex flex-col justify-center items-center gap-6 lg:flex-row">
          <div className="md:w-[700px] xl:w-[900px] lg:order-1">
            <img src="./img/HeaderCompanies/enterprise-bg.jpg" alt="" />
          </div>
          <div className="w-[290px] xl:w-[320px] lg:mt-5">
            <h2 className="text-center font-bold text-xl mb-4 xl:text-2xl">
              سفارش غذای شرکتی
            </h2>
            <div className="rounded-xl bg-[#EBEBEB] p-4 w-[290px] xl:w-[320px] ">
              <form onSubmit={formik.handleSubmit}>
                <Input name="name" formik={formik} label="نام" />
                <Input name="mobile" formik={formik} label="موبایل" />
                <Input name="tel" formik={formik} label="تلفن ثابت" />
                <Input name="company" formik={formik} label="نام شرکت" />
                <Input name="number" formik={formik} label="تعداد پرسنل" />

                <button
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty)}
                  className="bg-mamanpaz text-white p-2 rounded-lg w-full mt-4 disabled:bg-gray-300"
                >
                  ارسال اطلاعات
                </button>
              </form>
            </div>
          </div>
        </div>

        <Border icon={true}>
        <IoMdArrowDropdown className="text-4xl" />

        </Border>
      </div>
    </div>
  );
}


// Add sweetAlert2  library to the project