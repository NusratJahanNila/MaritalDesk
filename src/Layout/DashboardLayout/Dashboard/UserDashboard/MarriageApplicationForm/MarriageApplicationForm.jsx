import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { imageUpload } from "../../../../../Components/Shared/utils";

const MarriageApplicationForm = () => {
    const { register, handleSubmit, watch } = useForm();

    const dowerPaidByProperty = watch("dowerPaidByProperty") === "Yes";
    const permissionFromCouncil = watch("permissionFromCouncil") === "Yes";

    const onSubmit = async(data) => {
        const { husbandPhoto,wifePhoto ,wakilSignature,witness2Signature,witness1Signature } = data;
        
            // image file
            const husbandImage = husbandPhoto[0];
            const wifeImage = wifePhoto[0];
            const wakilSignatureImg = wakilSignature[0];
            const witness1SignatureImg = witness1Signature[0];
            const witness2SignatureImg = witness2Signature[0];


        
            try {
              // generate img url from file
              const husbandPhoto = await imageUpload(husbandImage);
              const wifePhoto = await imageUpload(wifeImage);
              const wakilSignature = await imageUpload(wakilSignatureImg);
              const witness1Signature = await imageUpload(witness1SignatureImg);
              const witness2Signature = await imageUpload(witness2SignatureImg);
        
              console.table(husbandPhoto,wifePhoto,wakilSignature,witness1Signature,witness2Signature)
              
            }
            catch (err) {
              console.log(err)
            }
        toast.success("Marriage Form Submitted Successfully!");
    };

    return (
        <div className="max-w-6xl mx-auto p-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="bg-white dark:bg-gray-800 shadow rounded-2xl px-8 py-10">
                <h1 className="text-3xl font-bold text-center text-green-900 dark:text-green-300 mb-6">
                    Marriage Application Form (Muslim)
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

                    {/* ----------------- HUSBAND INFORMATION ------------------ */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">1. Husband's Information</h2>

                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input {...register("husbandName")} placeholder="Name" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("husbandFather")} placeholder="Father's Name" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("husbandMother")} placeholder="Mother's Name" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input type="date" {...register("husbandDob")} className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                        </div>

                        {/* Address */}
                        <h3 className="font-medium mt-6 mb-2 dark:text-gray-300">Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input {...register("husbandCityVillage")} placeholder="City / Village" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("husbandWard")} placeholder="Ward" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("husbandUnion")} placeholder="Union" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("husbandThana")} placeholder="Thana" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("husbandDistrict")} placeholder="District" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("husbandDivision")} placeholder="Division" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                        </div>

                        {/* Image Upload */}
                        <div className="mt-6">
                            <label className="font-medium dark:text-gray-300">Upload Photo</label>
                            <input type="file" accept="image/*" {...register("husbandPhoto")} className="file-input file-input-bordered w-full mt-2 dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                        </div>
                    </section>


                    {/* ----------------- WIFE INFORMATION ------------------ */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 mt-10 dark:text-gray-200">2. Wife's Information</h2>

                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input {...register("wifeName")} placeholder="Name" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("wifeFather")} placeholder="Father's Name" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("wifeMother")} placeholder="Mother's Name" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input type="date" {...register("wifeDob")} className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                        </div>

                        {/* Address */}
                        <h3 className="font-medium mt-6 mb-2 dark:text-gray-300">Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input {...register("wifeCityVillage")} placeholder="City / Village" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("wifeWard")} placeholder="Ward" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("wifeUnion")} placeholder="Union" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("wifeThana")} placeholder="Thana" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("wifeDistrict")} placeholder="District" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("wifeDivision")} placeholder="Division" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                        </div>

                        {/* Image Upload */}
                        <div className="mt-6">
                            <label className="font-medium dark:text-gray-300">Upload Photo</label>
                            <input type="file" accept="image/*" {...register("wifePhoto")} className="file-input file-input-bordered w-full mt-2 dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                        </div>
                    </section>


                    {/* -----------------------------------
                    3. PLACE OF MARRIAGE
                ------------------------------------*/}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">3. Place of Marriage Taking Place</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <input {...register("cityOrVillage")} placeholder="City/Village" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("ward")} placeholder="Ward" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("union")} placeholder="Union" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("thana")} placeholder="Thana" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("district")} placeholder="District" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                            <input {...register("division")} placeholder="Division" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                        </div>
                    </section>

                    {/* -----------------------------------
                    4. WAKIL/REPRESENTATIVE'S DETAILS
                ------------------------------------*/}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">4. Representative/Wakil's Details</h2>
                         <div className="space-y-3 p-4 rounded-lg dark:bg-gray-900">
                                <input
                                    {...register("wakilName")}
                                    placeholder="Name"
                                    className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />

                                <input
                                    {...register("wakilNid")}
                                    placeholder="NID Number"
                                    type="number"
                                    className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />

                                <input
                                    {...register("wakilFather")}
                                    placeholder="Father's Name"
                                    className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />

                                <input
                                    {...register("wakilAddress")}
                                    placeholder="Address / Residence"
                                    className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />

                                <div>
                                    <label className="font-medium dark:text-gray-300">Signature (Image)</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        {...register("wakilSignature")}
                                        className="file-input file-input-bordered w-full mt-1 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                    />
                                </div>
                            </div>
                    </section>

                    {/* ----------------- WITNESSES SECTION ------------------ */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">5. Witness Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                            {/* Witness 1 */}
                            <div className="space-y-3 p-4 border border-gray-100 dark:border-gray-700 rounded-2xl shadow dark:bg-gray-900">
                                <h3 className="font-medium text-lg mb-1 dark:text-gray-300">Witness 1</h3>

                                <input
                                    {...register("witness1Name")}
                                    placeholder="Name"
                                    className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />

                                <input
                                    {...register("witness1Nid")}
                                    placeholder="NID Number"
                                    type="number"
                                    className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />

                                <input
                                    {...register("witness1Father")}
                                    placeholder="Father's Name"
                                    className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />

                                <input
                                    {...register("witness1Address")}
                                    placeholder="Address / Residence"
                                    className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />

                                <div>
                                    <label className="font-medium dark:text-gray-300">Signature (Image)</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        {...register("witness1Signature")}
                                        className="file-input file-input-bordered w-full mt-1 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                    />
                                </div>
                            </div>

                            {/* Witness 2 */}
                            <div className="space-y-3 p-4 border border-gray-100 dark:border-gray-700 rounded-2xl shadow dark:bg-gray-900">
                                <h3 className="font-medium text-lg mb-1 dark:text-gray-300">Witness 2</h3>

                                <input
                                    {...register("witness2Name")}
                                    placeholder="Name"
                                    className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />

                                <input
                                    {...register("witness2Nid")}
                                    placeholder="NID Number"
                                    type="number"
                                    className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />

                                <input
                                    {...register("witness2Father")}
                                    placeholder="Father's Name"
                                    className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />

                                <input
                                    {...register("witness2Address")}
                                    placeholder="Address / Residence"
                                    className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />

                                <div>
                                    <label className="font-medium dark:text-gray-300">Signature (Image)</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        {...register("witness2Signature")}
                                        className="file-input file-input-bordered w-full mt-1 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                    />
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* -----------------------------------
                    5.DOWER / MAHR SECTION
                ------------------------------------*/}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">6.Dower / Mahr Information</h2>

                        <input {...register("dowerAmount")} placeholder="Dower/Mahr Amount" className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />

                        <h3 className="font-medium mt-3 dark:text-gray-300">i. Dower Payment Type:</h3>
                        <div className="flex gap-5 mt-2">
                            <label className="flex items-center gap-2 dark:text-gray-300">
                                <input type="radio" value="Immediate" {...register("dowerPayment")} className="dark:accent-green-500" />
                                Immediate
                            </label>
                            <label className="flex items-center gap-2 dark:text-gray-300">
                                <input type="radio" value="Deferred" {...register("dowerPayment")} className="dark:accent-green-500" />
                                Deferred
                            </label>
                        </div>

                        <h3 className="font-medium mt-4 dark:text-gray-300">ii. Is Dower paid fully / partially with property?</h3>
                        <div className="flex gap-5 mt-2">
                            {["Yes", "No"].map((opt) => (
                                <label key={opt} className="flex items-center gap-2 dark:text-gray-300">
                                    <input type="radio" value={opt} {...register("dowerPaidByProperty")} className="dark:accent-green-500" />
                                    {opt}
                                </label>
                            ))}
                        </div>

                        {dowerPaidByProperty && (
                            <textarea {...register("propertyDetails")} placeholder="Describe property/valuables" className="textarea textarea-bordered w-full mt-3 dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                        )}
                    </section>

                    {/* -----------------------------------
                    6.COUNCIL PERMISSION
                ------------------------------------*/}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">7.Council Permission</h2>

                        <h3 className="font-medium mt-2 dark:text-gray-300">i. Permission from Council to marry again?</h3>
                        <div className="flex gap-5 mt-2">
                            {["Yes", "No"].map((opt) => (
                                <label key={opt} className="flex items-center gap-2 dark:text-gray-300">
                                    <input type="radio" value={opt} {...register("permissionFromCouncil")} className="dark:accent-green-500" />
                                    {opt}
                                </label>
                            ))}
                        </div>

                        {permissionFromCouncil && (
                            <textarea {...register("councilPermissionDetails")} placeholder="Permission details (1961 Marriage Law)" className="textarea textarea-bordered w-full mt-3 dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                        )}
                    </section>

                    {/* -----------------------------------
                   7. DATE + FEE
                ------------------------------------*/}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">8.Marriage Registration Info</h2>

                        <input type="date" {...register("marriageRegistrationDate")} className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                        <input {...register("registryFee")} type="number" placeholder="Registry Fee (Paid)" className="input input-bordered w-full mt-3 dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                    </section>

                    {/* -----------------------------------
                    SUBMIT
                ------------------------------------*/}
                    <button type="submit" className="btn bg-green-900 text-white w-full mt-5 hover:bg-green-800 dark:bg-green-800 dark:hover:bg-green-700">
                        Submit Marriage Application
                    </button>

                </form>
            </div>
        </div>

    );
};

export default MarriageApplicationForm;