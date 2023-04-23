import React, { useEffect, useState } from "react";
import NavbarDesktop from "../Components/NavbarDesktop";
import NavbarMobile from "../Components/NavbarMobile";
import Input from "../Components/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import provinces from "../Data/provinces";
import cities from "../Data/cities";
import Border from "../Components/Border"
import { IoMdArrowDropdown } from "react-icons/io";


//========== Save form data ==========

const initialValues = {
  firstname: "",
  lastname: "",
  mobile: "",
  tel: "",
  provinces: "",
  cities: "",
  address: "",
  foodpress: "",
};

//  =============== Submit form data ===============

const onSubmit = (values) => {
  console.log(values);
};

// ============== Validation of inputs ===============

const validationSchema = yup.object({
  firstname: yup
    .string()
    .trim()
    .matches(/^[\u0600-\u06FF\s]*$/, "فقط حروف فارسی مجاز است")
    .required("این فیلد اجباری است"),
  lastname: yup
    .string()
    .trim()
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
  provinces: yup.string().required("استان را انتخاب کنید"),

  cities: yup.string().required("شهر را انتخاب کنید"),
  address: yup.string().required("لطفا آدرس را وارد کنید"),
  foodpress: yup
    .number()
    .typeError("فقط عدد مجاز است")
    .required("این فیلد اجباری است"),
});

export default function HeaderChefRegistration() {
  const [selectedProvince, setSelectedProvince] = useState();
  const [selectedCities, setSelectedCities] = useState([]);

  useEffect(() => {
    const newCities = cities.filter((city) => {
      return city.province_id == selectedProvince;
    });

    setSelectedCities(newCities);
  }, [selectedProvince]);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    setSelectedProvince(formik.values.provinces);
    if (!formik.values.provinces) formik.values.cities = "";
  }, [formik.values.provinces]);

  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />

      <div className="container">
        <div className="flex flex-col justify-center items-center gap-8 mt-16  lg:flex-row">
          <img className="lg:w-[600px]  xl:w-[900px] lg:order-1 xl:mt-16 xl:h-[658px] rounded-lg"  src="./img/HeaderChefRegistration/main-chef-bg.jpeg" alt="" />

          <div className="w-[290px] md:w-[350px] lg:mt-14  rounded-lg shadow-[rgba(0,0,0,0.24)_0px_3px_8px]">
            <h2 className="text-center my-4 text-xl font-bold">فرم ثبت نام</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex gap-3 w-60 md:w-80 m-auto ">
                <Input name="firstname" formik={formik} label="نام" />
                <Input name="lastname" formik={formik} label="نام خانوادگی" />
              </div>
              <div className="flex gap-3 w-60 md:w-80 m-auto">
                <Input name="mobile" formik={formik} label="موبایل" />
                <Input name="tel" formik={formik} label="تلفن ثابت" />
              </div>
              <div className="flex gap-3 w-60 md:w-80 mt-5 m-auto">
                <div className=" w-2/4  h-16">
                  <select
                    className="w-full p-2 rounded-lg border border-gray-300 outline-0"
                    {...formik.getFieldProps("provinces")}
                    name="provinces"
                  >
                    <option value="">استان</option>

                    {provinces.map((province) => (
                      <option key={province.id} value={province.id}>
                        {province.name}
                      </option>
                    ))}
                  </select>
                  {formik.errors.provinces && formik.touched.provinces && (
                    <p className="text-xs pr-1 text-red-500">
                      {formik.errors.provinces}
                    </p>
                  )}
                </div>

                <div className=" w-2/4 h-16">
                  <select
                    {...formik.getFieldProps("cities")}
                    name="cities"
                    className="w-full p-2 rounded-lg border border-gray-300 outline-0"
                    disabled={!formik.values.provinces}
                  >
                    <option value="">انتخاب شهر</option>
                    {selectedCities.length > 1 &&
                      selectedCities.map((city) => (
                        <option key={city.id} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                  </select>
                  {formik.errors.cities && formik.touched.cities && (
                    <p className="text-xs pr-1 text-red-500">
                      {formik.errors.cities}
                    </p>
                  )}
                </div>
              </div>

              <div className=" gap-3 h-40 w-60 md:w-80 mt-5 m-auto">
                <div className=" m-auto w-full ">
                  <label className="block text-gray-400 text-xs lg:text-sm mb-1">
                    آدرس
                  </label>
                  <textarea
                    {...formik.getFieldProps("address")}
                    name="address"
                    className={`${
                      formik.errors.address && formik.touched.address
                        ? "border-red-500 focus:border-b-red-500"
                        : "border-gray-300 focus:border-b-gray-700"
                    } resize-none outline-0 w-full h-28 rounded-lg border focus:border-b `}
                  ></textarea>
                </div>
                {formik.errors.address && formik.touched.address && (
                  <p className="text-xs pr-1 text-red-500">
                    {formik.errors.address}
                  </p>
                )}
              </div>

              <div className="w-60 md:w-80 mt-5 h-16 m-auto">
                <input
                  className={`${
                    formik.errors.foodpress && formik.touched.foodpress
                      ? "border-red-500 focus:border-b-red-500"
                      : "border-gray-300 focus:border-b-gray-700"
                  } placeholder:text-sm p-2 w-full rounded-lg border outline-0 focus:border-b `}
                  type="text"
                  placeholder="توانایی پخت چند پرس در روز را دارید؟"
                  name="foodpress"
                  {...formik.getFieldProps("foodpress")}
                />
                {formik.errors.foodpress && formik.touched.foodpress && (
                  <p className="text-xs pr-1 text-red-500">
                    {formik.errors.foodpress}
                  </p>
                )}
              </div>
 
              <div className="w-60 md:w-72  m-auto">
                 <button
                type="submit"
                disabled={!formik.isValid}
                className="bg-mamanpaz text-white p-2 rounded-lg w-full  mb-5 mt-4 disabled:bg-gray-300 "
              >
                ارسال اطلاعات
              </button>
              </div>
             
            </form>
          </div>
        </div>

        <div className="p-2">
        <Border icon="true">
          <IoMdArrowDropdown className="text-4xl" />
        </Border>
        </div>
      </div>
    </div>
  );
}
