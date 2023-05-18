import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import provinces from "../Data/provinces";
import cities from "../Data/cities";
import { FaPlus } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export default function AddressVerification({
  setActiveStep,
  setAddress,
  address,
  setOrder,
}) {
   
  useEffect(() =>{
    setOrder(false);
  })

  const handleIconClick = async () => {
    const provinceResult = await Swal.fire({
      title: "انتخاب استان",
      input: "select",
      inputOptions: provinces.reduce((options, province) => {
        options[province.value] = province.name;
        return options;
      }, {}),

      inputPlaceholder: "یک استان را انتخاب کنید",
      showCancelButton: true,
      confirmButtonText: "بعدی",
      cancelButtonText: "لغو",
      inputValidator: (value) => {
        if (!value) {
          return "شما باید یک استان را انتخاب کنید";
        }
      },
    });

    if (provinceResult.isDismissed) return;
    const { value: province } = provinceResult;

    const selectedProvince = provinces.find(
      (province) => province.value === provinceResult.value
    );

    const filteredCities = cities.filter(
      (city) => city.province_id === selectedProvince.id
    );

    const cityOptions = filteredCities.reduce((options, city) => {
      options[city.slug] = city.name;
      return options;
    }, {});

    const cityResult = await Swal.fire({
      title: "انتخاب شهر",
      input: "select",
      inputOptions: cityOptions,
      inputPlaceholder: "یک شهر را انتخاب کنید",
      showCancelButton: true,
      confirmButtonText: "بعدی",
      cancelButtonText: "لغو",
      inputValidator: (value) => {
        if (!value) {
          return "شما باید یک شهر را انتخاب کنید";
        }
      },
    });

    if (cityResult.isDismissed) return;

    const streetResult = await Swal.fire({
      title: "آدرس",
      input: "textarea",
      inputPlaceholder: "آدرس خیابان و شماره پلاک و ... را وارد کنید",
      showCancelButton: true,
      confirmButtonText: "تأیید",
      cancelButtonText: "لغو",
      inputValidator: (value) => {
        if (!value) {
          return "شما باید آدرس را وارد کنید";
        }
      },
    });

    if (streetResult.isDismissed) return;

    // const { value: province } = provinceResult;
    const { value: city } = cityResult;
    const { value: street } = streetResult;

    setAddress({ province, city, street });
    Swal.fire({
      icon: "success",
      title: "آدرس ذخیره شد",
      text: `استان: ${province}، شهر: ${city}، آدرس: ${street}`,
      confirmButtonText: "باشه",
      confirmButtonColor: "#14b309",
    });
  };

  let price = 75_000;
  return (
    <div className="mt-8">
      <h2 className="text-center  font-semibold">
        {" "}
        لطفا آدرس خود را انتخاب کنید
      </h2>
      <div className="overflow-x-auto mt-12">
        <table className="w-[800px] m-auto">
          <thead>
            <tr>
              <th className="py-3 bg-gray-200">آدرس</th>
              <th className="py-3 bg-gray-200">هزینه ارسال</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="border-b">
              <td className="py-5 ">
                {address.province +
                  " - " +
                  address.city +
                  " - " +
                  address.street}
              </td>
              <td className="py-5 ">{price.toLocaleString("fa")} تومان</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        onClick={handleIconClick}
        className="outline-0 flex items-center text-gray-500 mt-7 mr-4"
      >
        {address.city ? (
          <FiEdit className="ml-1" />
        ) : (
          <FaPlus className="ml-1" />
        )}
        <span>{address.city ? "ویرایش آدرس" : "افزودن آدرس"}</span>
      </button>

      <div className="flex items-center  w-52 m-auto">
        <button
          onClick={() => setActiveStep(1)}
          className="flex items-center bg-mamanpaz text-white outline-0 py-[3px] px-4 rounded-sm m-auto mt-7 mb-3"
        >
          <MdArrowForwardIos className="text-lg ml-2" />
          <span>قبلی</span>
        </button>
        <button
          onClick={() => setActiveStep(3)}
          disabled={!address.province}
          className="flex items-center disabled:bg-gray-400 bg-mamanpaz text-white outline-0 py-[3px] px-4 rounded-sm m-auto mt-7 mb-3"
        >
          <span>بعدی</span>
          <MdArrowBackIosNew className="text-lg mr-2" />
        </button>
      </div>
    </div>
  );
}
