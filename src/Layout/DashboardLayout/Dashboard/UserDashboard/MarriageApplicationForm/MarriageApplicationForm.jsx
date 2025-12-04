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
        <div className="max-w-6xl mx-auto p-6 ">
            <div className="bg-white shadow rounded-2xl px-8 py-10">
                <h1 className="text-3xl font-bold text-center text-green-900 mb-6">
                    Marriage Application Form (Muslim)
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

                    {/* ----------------- HUSBAND INFORMATION ------------------ */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4">1. Husband's Information</h2>

                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input {...register("husbandName")} placeholder="Name" className="input input-bordered w-full" />
                            <input {...register("husbandFather")} placeholder="Father's Name" className="input input-bordered w-full" />
                            <input {...register("husbandMother")} placeholder="Mother's Name" className="input input-bordered w-full" />
                            <input type="date" {...register("husbandDob")} className="input input-bordered w-full" />
                        </div>

                        {/* Address */}
                        <h3 className="font-medium mt-6 mb-2">Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input {...register("husbandCityVillage")} placeholder="City / Village" className="input input-bordered w-full" />
                            <input {...register("husbandWard")} placeholder="Ward" className="input input-bordered w-full" />
                            <input {...register("husbandUnion")} placeholder="Union" className="input input-bordered w-full" />
                            <input {...register("husbandThana")} placeholder="Thana" className="input input-bordered w-full" />
                            <input {...register("husbandDistrict")} placeholder="District" className="input input-bordered w-full" />
                            <input {...register("husbandDivision")} placeholder="Division" className="input input-bordered w-full" />
                        </div>

                        {/* Image Upload */}
                        <div className="mt-6">
                            <label className="font-medium">Upload Photo</label>
                            <input type="file" accept="image/*" {...register("husbandPhoto")} className="file-input file-input-bordered w-full mt-2" />
                        </div>
                    </section>


                    {/* ----------------- WIFE INFORMATION ------------------ */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 mt-10">2. Wife's Information</h2>

                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input {...register("wifeName")} placeholder="Name" className="input input-bordered w-full" />
                            <input {...register("wifeFather")} placeholder="Father's Name" className="input input-bordered w-full" />
                            <input {...register("wifeMother")} placeholder="Mother's Name" className="input input-bordered w-full" />
                            <input type="date" {...register("wifeDob")} className="input input-bordered w-full" />
                        </div>

                        {/* Address */}
                        <h3 className="font-medium mt-6 mb-2">Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input {...register("wifeCityVillage")} placeholder="City / Village" className="input input-bordered w-full" />
                            <input {...register("wifeWard")} placeholder="Ward" className="input input-bordered w-full" />
                            <input {...register("wifeUnion")} placeholder="Union" className="input input-bordered w-full" />
                            <input {...register("wifeThana")} placeholder="Thana" className="input input-bordered w-full" />
                            <input {...register("wifeDistrict")} placeholder="District" className="input input-bordered w-full" />
                            <input {...register("wifeDivision")} placeholder="Division" className="input input-bordered w-full" />
                        </div>

                        {/* Image Upload */}
                        <div className="mt-6">
                            <label className="font-medium">Upload Photo</label>
                            <input type="file" accept="image/*" {...register("wifePhoto")} className="file-input file-input-bordered w-full mt-2" />
                        </div>
                    </section>


                    {/* -----------------------------------
                    3. PLACE OF MARRIAGE
                ------------------------------------*/}
                    <section>
                        <h2 className="text-xl font-semibold mb-4">3. Place of Marriage Taking Place</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <input {...register("cityOrVillage")} placeholder="City/Village" className="input input-bordered w-full" />
                            <input {...register("ward")} placeholder="Ward" className="input input-bordered w-full" />
                            <input {...register("union")} placeholder="Union" className="input input-bordered w-full" />
                            <input {...register("thana")} placeholder="Thana" className="input input-bordered w-full" />
                            <input {...register("district")} placeholder="District" className="input input-bordered w-full" />
                            <input {...register("division")} placeholder="Division" className="input input-bordered w-full" />
                        </div>
                    </section>

                    {/* -----------------------------------
                    4. WAKIL/REPRESENTATIVE'S DETAILS
                ------------------------------------*/}
                    <section>
                        <h2 className="text-xl font-semibold mb-4">7. Representative/Wakil's Details</h2>
                         <div className="space-y-3 p-4 rounded-lg ">
                                <input
                                    {...register("wakilName")}
                                    placeholder="Name"
                                    className="input input-bordered w-full"
                                />

                                <input
                                    {...register("wakilNid")}
                                    placeholder="NID Number"
                                    type="number"
                                    className="input input-bordered w-full"
                                />

                                <input
                                    {...register("wakilFather")}
                                    placeholder="Father's Name"
                                    className="input input-bordered w-full"
                                />

                                <input
                                    {...register("wakilAddress")}
                                    placeholder="Address / Residence"
                                    className="input input-bordered w-full"
                                />

                                <div>
                                    <label className="font-medium">Signature (Image)</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        {...register("wakilSignature")}
                                        className="file-input file-input-bordered w-full mt-1"
                                    />
                                </div>
                            </div>
                    </section>

                    {/* ----------------- WITNESSES SECTION ------------------ */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4">4. Witness Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                            {/* Witness 1 */}
                            <div className="space-y-3 p-4 border border-gray-100 rounded-2xl shadow">
                                <h3 className="font-medium text-lg mb-1">Witness 1</h3>

                                <input
                                    {...register("witness1Name")}
                                    placeholder="Name"
                                    className="input input-bordered w-full"
                                />

                                <input
                                    {...register("witness1Nid")}
                                    placeholder="NID Number"
                                    type="number"
                                    className="input input-bordered w-full"
                                />

                                <input
                                    {...register("witness1Father")}
                                    placeholder="Father's Name"
                                    className="input input-bordered w-full"
                                />

                                <input
                                    {...register("witness1Address")}
                                    placeholder="Address / Residence"
                                    className="input input-bordered w-full"
                                />

                                <div>
                                    <label className="font-medium">Signature (Image)</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        {...register("witness1Signature")}
                                        className="file-input file-input-bordered w-full mt-1"
                                    />
                                </div>
                            </div>

                            {/* Witness 2 */}
                            <div className="space-y-3 p-4 border border-gray-100 rounded-2xl shadow">
                                <h3 className="font-medium text-lg mb-1">Witness 2</h3>

                                <input
                                    {...register("witness2Name")}
                                    placeholder="Name"
                                    className="input input-bordered w-full"
                                />

                                <input
                                    {...register("witness2Nid")}
                                    placeholder="NID Number"
                                    type="number"
                                    className="input input-bordered w-full"
                                />

                                <input
                                    {...register("witness2Father")}
                                    placeholder="Father's Name"
                                    className="input input-bordered w-full"
                                />

                                <input
                                    {...register("witness2Address")}
                                    placeholder="Address / Residence"
                                    className="input input-bordered w-full"
                                />

                                <div>
                                    <label className="font-medium">Signature (Image)</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        {...register("witness2Signature")}
                                        className="file-input file-input-bordered w-full mt-1"
                                    />
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* -----------------------------------
                    5.DOWER / MAHR SECTION
                ------------------------------------*/}
                    <section>
                        <h2 className="text-xl font-semibold mb-4">5.Dower / Mahr Information</h2>

                        <input {...register("dowerAmount")} placeholder="Dower/Mahr Amount" className="input input-bordered w-full" />

                        <h3 className="font-medium mt-3">i. Dower Payment Type:</h3>
                        <div className="flex gap-5 mt-2">
                            <label className="flex items-center gap-2">
                                <input type="radio" value="Immediate" {...register("dowerPayment")} />
                                Immediate
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" value="Deferred" {...register("dowerPayment")} />
                                Deferred
                            </label>
                        </div>

                        <h3 className="font-medium mt-4">ii. Is Dower paid fully / partially with property?</h3>
                        <div className="flex gap-5 mt-2">
                            {["Yes", "No"].map((opt) => (
                                <label key={opt} className="flex items-center gap-2">
                                    <input type="radio" value={opt} {...register("dowerPaidByProperty")} />
                                    {opt}
                                </label>
                            ))}
                        </div>

                        {dowerPaidByProperty && (
                            <textarea {...register("propertyDetails")} placeholder="Describe property/valuables" className="textarea textarea-bordered w-full mt-3" />
                        )}
                    </section>

                    {/* -----------------------------------
                    6.COUNCIL PERMISSION
                ------------------------------------*/}
                    <section>
                        <h2 className="text-xl font-semibold mb-4">6.Council Permission</h2>

                        <h3 className="font-medium mt-2">i. Permission from Council to marry again?</h3>
                        <div className="flex gap-5 mt-2">
                            {["Yes", "No"].map((opt) => (
                                <label key={opt} className="flex items-center gap-2">
                                    <input type="radio" value={opt} {...register("permissionFromCouncil")} />
                                    {opt}
                                </label>
                            ))}
                        </div>

                        {permissionFromCouncil && (
                            <textarea {...register("councilPermissionDetails")} placeholder="Permission details (1961 Marriage Law)" className="textarea textarea-bordered w-full mt-3" />
                        )}
                    </section>

                    {/* -----------------------------------
                   7. DATE + FEE
                ------------------------------------*/}
                    <section>
                        <h2 className="text-xl font-semibold mb-4">7.Marriage Registration Info</h2>

                        <input type="date" {...register("marriageRegistrationDate")} className="input input-bordered w-full" />
                        <input {...register("registryFee")} type="number" placeholder="Registry Fee (Paid)" className="input input-bordered w-full mt-3" />
                    </section>

                    {/* -----------------------------------
                    SUBMIT
                ------------------------------------*/}
                    <button type="submit" className="btn bg-green-900 text-white w-full mt-5">
                        Submit Marriage Application
                    </button>

                </form>
            </div>
        </div>

    );
};

export default MarriageApplicationForm;
