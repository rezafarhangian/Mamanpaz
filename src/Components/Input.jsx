import React from "react";

export default function Input({ label, name, formik}) {
  return (
    <div className=" h-[85px]">
      <div>
        <label className="block text-gray-400 text-xs lg:text-sm " htmlFor="">
          {label}
        </label>
      
          <div>

          </div>
          <input
            className={`${
              formik.errors[name] && formik.touched[name]
                ? "border-red-500 focus:border-b-red-500"
                : "border-gray-300 focus:border-b-gray-700"
            } outline-0 rounded-lg p-2 border  w-full mt-1 focus:border-b `}
            type="text"
            name={name}
            id=""
            {...formik.getFieldProps({ name })}
          />
       
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <p className="text-xs pr-1 text-red-500">{formik.errors[name]}</p>
      )}
    </div>
  );
}
