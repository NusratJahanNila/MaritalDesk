import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import { imageUpload } from "../../Components/Shared/utils";

const BecomeKaziForm = () => {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // required information
  const requiredFields = [
    ["nid", "Upload NID (Image)"],
    ["passportPhoto", "Passport Size Photo"],
    ["cv", "Upload CV (Image)"],
    ["eduCert", "Academic Certificates (Image)"],
    ["noc", "No Objection Certificate"],
    ["medical", "Medical Fitness Certificate"],
    ["policeClearance", "Proof of No Criminal Records"],
  ]

  const onSubmit = async (data) => {
    const { name, nid, passportPhoto, email, licenceNumber } = data;

    // image file
    const imageFile = passportPhoto[0];

    try {
      // generate img url from file
      const imageURL = await imageUpload(imageFile);

      // Kazi info for backend
      const kaziInfo = {
        name,
        licenceNumber,
        email,
        nid,
        image: imageURL,
      }
      console.table(kaziInfo);
    }
    catch (err) {
      console.log(err)
    }
    Swal.fire({
      title: "Submit Application?",
      text: "Please confirm that all information is correct.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Submit",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(data);
        Swal.fire("Submitted!", "Your application has been sent.", "success");
        reset();
        setStep(1);
      }
    });
  };

  return (
    <div className="bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg border border-gray-200 ">
        <h1 className="text-3xl font-bold text-center text-green-900 mb-6">
          Become a Kazi - Application Form
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div className="space-y-3">
                {/* Personal Info */}
                <section>
                  <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="grid gap-1 text-gray-500">
                      Full Name
                      <input {...register("name", { required: true })} 
                      placeholder="Full Name" 
                      className="input input-bordered w-full" />
                      {errors.fullName && <span className="text-red-500 text-sm">Required</span>}
                    </label>


                    <label className="grid gap-1 text-gray-500">
                      Father's Name
                      <input
                        {...register("fatherName", { required: true })}
                        className="input input-bordered w-full"
                        placeholder="Enter fathers name"
                      />
                      {errors.fatherName && <span className="text-red-500 text-sm">Required</span>}
                    </label>


                    <label className="grid gap-1 text-gray-500">
                      Date of Birth
                      <input
                        type="date"
                        {...register("dob", { required: true })}
                        className="input input-bordered w-full"
                      />
                      {errors.dob && <span className="text-red-500 text-sm">Required</span>}
                    </label>


                    <label className="grid gap-1 text-gray-500">
                      National ID (NID)
                      <input
                        type="text"
                        {...register("nid", { required: true, maxLength: 10 })}
                        className="input input-bordered w-full"
                        placeholder="NID Number"
                      />
                      {errors.nid && <span className="text-red-500 text-sm">Valid NID required</span>}
                    </label>
                  </div>
                </section>
                {/* Contact */}
                <section>
                  <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="grid gap-1 text-gray-500">
                      Phone Number
                      <input
                        type="tel"
                        {...register("phone", { required: true })}
                        className="input input-bordered w-full"
                        placeholder="e.g. 01XXXXXXXXX"
                      />
                      {errors.phone && <span className="text-red-500 text-sm">Required</span>}
                    </label>


                    <label className="grid gap-1 text-gray-500">
                      Email Address
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        className="input input-bordered w-full"
                        placeholder="example@mail.com"
                      />
                      {errors.email && <span className="text-red-500 text-sm">Valid email required</span>}
                    </label>
                  </div>
                </section>
                {/* Address */}
                <section>
                  <h3 className="text-lg font-semibold mb-3">Address & Jurisdiction</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="grid gap-1 text-gray-500">
                      Village / Area
                      <input {...register("area", { required: true })} className="input input-bordered w-full" />
                      {errors.area && <span className="text-red-500 text-sm">Required</span>}
                    </label>
                    <label className="grid gap-1 text-gray-500">
                      Union / Ward
                      <input {...register("ward", { required: true })} className="input input-bordered w-full" />
                      {errors.ward && <span className="text-red-500 text-sm">Required</span>}
                    </label>
                    <label className="grid gap-1 text-gray-500">
                      Thana
                      <input {...register("thana", { required: true })} className="input input-bordered w-full" />
                      {errors.thana && <span class="text-red-500 text-sm">Required</span>}
                    </label>
                    <label className="grid gap-1 text-gray-500">
                      District
                      <input {...register("district", { required: true })} className="input input-bordered w-full" />
                      {errors.district && <span className="text-red-500 text-sm">Required</span>}
                    </label>
                  </div>
                </section>
                {/* Licence */}
                <section>
                  <h3 className="text-lg font-semibold mb-3">Kazi Licence Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="grid gap-1 text-gray-500">
                      Licence Number
                      <input
                        {...register("licenceNumber", { required: true })}
                        className="input input-bordered w-full"
                        placeholder="Licence Number"
                      />
                      {errors.licenceNumber && <span className="text-red-500 text-sm">Required</span>}
                    </label>
                    <label className="grid gap-1 text-gray-500">
                      Licence Document (JPG/JPEG/PNG)
                      <input
                        type="file"
                        accept="image/jpeg, image/jpg, image/png"
                        {...register("licenceFile", { required: true })}
                        className="file-input file-input-bordered"
                      />
                      {errors.licenceFile && <span className="text-red-500 text-sm">Required</span>}
                    </label>
                  </div>
                </section>
                {/* education */}
                <section>
                  <h3 className="text-lg font-semibold mb-3">Additional Information (Optional)</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="grid gap-1 text-gray-500">
                      Education Qualification
                      <input {...register("education")} className="input input-bordered w-full" />
                    </label>
                    <label className="grid gap-1 text-gray-500">
                      Previous Kazi Code (if any)
                      <input {...register("prevKaziCode")} className="input input-bordered w-full" />
                    </label>
                  </div>
                </section>
              </div>
              <div className="flex justify-end mt-5">
                <button type="button" onClick={() => setStep(2)} className="btn bg-gradient-to-r from-[#013223] to-[#006747] text-white">
                  Next
                </button>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <h2 className="text-xl  font-semibold mb-4">Required Documents</h2>

              <div className="space-y-5">
                {
                  requiredFields.map(([field, label]) => (
                    <div key={field}>
                      <label className="font-medium text-gray-500">{label}</label>
                      <input
                        type="file"
                        accept="image/*"
                        {...register(field, { required: true })}
                        className="file-input file-input-bordered w-full"
                      />
                    </div>
                  ))
                }

                {/* condition */}
                <div className="flex items-center gap-2">
                  <input type="checkbox" {...register("agree", { required: true })} className="checkbox text-green-900" />
                  <span>I confirm all information is correct and I agree to follow all legal requirements.</span>
                </div>
                {errors.agree && <p className="text-red-500 text-sm">You must agree before submitting</p>}
              </div>

              <div className="flex justify-between mt-5">
                <button type="button" className="btn btn-outline border border-green-900" onClick={() => setStep(1)}>Back</button>
                <button type="submit" className="btn bg-gradient-to-r from-[#013223] to-[#006747] text-white">Submit</button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default BecomeKaziForm;

