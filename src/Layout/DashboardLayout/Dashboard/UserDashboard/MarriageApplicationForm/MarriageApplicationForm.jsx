import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { imageUpload } from '../../../../../Components/Shared/utils'

const MarriageApplicationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const [currentStep, setCurrentStep] = useState(1)
  const navigate = useNavigate()

  const dowerPaidByProperty = watch('dowerPaidByProperty') === 'Yes'
  console.log(dowerPaidByProperty)
  const alreadyMarried = watch('alreadyMarried') === 'Yes'
  const divorceDocument = watch('divorceDocument') === 'Yes'
  const delegatedDivorcePower = watch('delegatedDivorcePower') === 'Yes'

  const onSubmit = async data => {
    toast.success('Marriage Application Submitted Successfully!')
    try {
      // Handle image uploads
      const uploadPromises = []

      if (data.husbandPhoto?.[0]) {
        uploadPromises.push(
          imageUpload(data.husbandPhoto[0]).then(url => ({ husbandPhoto: url }))
        )
      }
      if (data.wifePhoto?.[0]) {
        uploadPromises.push(
          imageUpload(data.wifePhoto[0]).then(url => ({ wifePhoto: url }))
        )
      }
      if (data.husbandSignature?.[0]) {
        uploadPromises.push(
          imageUpload(data.husbandSignature[0]).then(url => ({
            husbandSignature: url
          }))
        )
      }
      if (data.wifeSignature?.[0]) {
        uploadPromises.push(
          imageUpload(data.wifeSignature[0]).then(url => ({
            wifeSignature: url
          }))
        )
      }
      if (data.wakilSignature?.[0]) {
        uploadPromises.push(
          imageUpload(data.wakilSignature[0]).then(url => ({
            wakilSignature: url
          }))
        )
      }
      if (data.witness1Signature?.[0]) {
        uploadPromises.push(
          imageUpload(data.witness1Signature[0]).then(url => ({
            witness1Signature: url
          }))
        )
      }
      if (data.witness2Signature?.[0]) {
        uploadPromises.push(
          imageUpload(data.witness2Signature[0]).then(url => ({
            witness2Signature: url
          }))
        )
      }
      if (data.marriageCouncilPermission?.[0]) {
        uploadPromises.push(
          imageUpload(data.marriageCouncilPermission[0]).then(url => ({
            marriageCouncilPermission: url
          }))
        )
      }

      const uploadResults = await Promise.all(uploadPromises)
      const uploadedData = uploadResults.reduce(
        (acc, curr) => ({ ...acc, ...curr }),
        {}
      )

      const formData = { ...data, ...uploadedData }
      console.log('Form Data:', formData)

      navigate('/dashboard/payment')

    } catch (err) {
      console.error(err)
      toast.error('Failed to submit application. Please try again.')
    }
  }

  const nextStep = () => {
    setCurrentStep(2)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setCurrentStep(1)
    window.scrollTo(0, 0)
  }

  return (
    <div className='max-w-6xl mx-auto p-6 dark:bg-gray-900 dark:text-gray-100'>
      <div className='bg-white dark:bg-gray-800 shadow rounded-2xl px-8 py-10'>
        {/* Progress Steps */}
        <div className='mb-10'>
          <h1 className='text-3xl font-bold text-center text-green-900 dark:text-green-300 mb-2'>
            Marriage Application Form (Muslim)
          </h1>
          <div className='flex items-center justify-center mt-6'>
            <div
              className={`flex items-center ${
                currentStep >= 1
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-gray-400'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= 1
                    ? 'border-green-600 bg-green-50 dark:bg-green-900/20'
                    : 'border-gray-300'
                }`}
              >
                1
              </div>
              <div className='ml-2 font-medium'>Personal Details</div>
            </div>
            <div className='w-24 h-1 mx-4 bg-gray-300'></div>
            <div
              className={`flex items-center ${
                currentStep >= 2
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-gray-400'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= 2
                    ? 'border-green-600 bg-green-50 dark:bg-green-900/20'
                    : 'border-gray-300'
                }`}
              >
                2
              </div>
              <div className='ml-2 font-medium'>Marriage Details</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className='space-y-10'>
              {/* ----------------- GROOM'S INFORMATION ------------------ */}
              <section>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-1 h-6 bg-green-600 rounded-full'></div>
                  <h2 className='text-2xl font-semibold dark:text-gray-200'>
                    1. Groom's Information
                  </h2>
                </div>

                {/* Basic Info */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div>
                    <input
                      {...register('husbandName', {
                        required: "Groom's name is required"
                      })}
                      placeholder='Name *'
                      className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                    />
                    {errors.husbandName && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.husbandName.message}
                      </p>
                    )}
                  </div>
                  <input
                    {...register('husbandFather')}
                    placeholder="Father's Name *"
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('husbandMother')}
                    placeholder="Mother's Name *"
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    type='date'
                    {...register('husbandDob', {
                      required: 'Date of birth is required'
                    })}
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    type='number'
                    {...register('husbandAge', {
                      required: "Groom's age is required",
                      min: {
                        value: 21,
                        message: "Groom's age must be 21 or more"
                      },
                      max: {
                        value: 100,
                        message: 'Please enter a valid age'
                      }
                    })}
                    placeholder='Age *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  {errors.husbandAge && (
                    <p className='text-red-500 text-sm mt-1 flex items-center gap-1'>
                      <svg
                        className='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      {errors.husbandAge.message}
                    </p>
                  )}
                  <input
                    type='number'
                    {...register('husbandNid')}
                    placeholder='NID Number *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    type='number'
                    {...register('husbandTin')}
                    placeholder='TIN Number (Optional)'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                </div>

                {/* Address */}
                <h3 className='font-medium mt-8 mb-3 dark:text-gray-300'>
                  Address
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <input
                    {...register('husbandCityVillage')}
                    placeholder='City / Village *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('husbandWard')}
                    placeholder='Ward'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('husbandUnion')}
                    placeholder='Union *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('husbandThana')}
                    placeholder='Thana *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('husbandDistrict')}
                    placeholder='District *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('husbandDivision')}
                    placeholder='Division *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                </div>

                {/* Marriage Status */}
                <div className='mt-8'>
                  <h3 className='font-medium mb-3 dark:text-gray-300'>
                    Marriage Status
                  </h3>
                  <div className='flex gap-5 mb-4'>
                    {['Yes', 'No'].map(opt => (
                      <label
                        key={opt}
                        className='flex items-center gap-2 dark:text-gray-300'
                      >
                        <input
                          type='radio'
                          value={opt}
                          {...register('alreadyMarried')}
                          className='dark:accent-green-500'
                        />
                        Already married? {opt}
                      </label>
                    ))}
                  </div>

                  {alreadyMarried && (
                    <div className='mt-4 p-4 border border-yellow-200 dark:border-yellow-800 rounded-lg bg-yellow-50 dark:bg-yellow-900/20'>
                      <label className='font-medium dark:text-gray-300'>
                        Marriage Council Permission Document (Image)
                      </label>
                      <input
                        type='file'
                        accept='image/*'
                        {...register('marriageCouncilPermission')}
                        className='file-input file-input-bordered w-full mt-2 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                      />
                      <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
                        Upload scanned copy of permission from marriage council
                        according to 1961 Marriage Law
                      </p>
                    </div>
                  )}
                </div>

                {/* Image Uploads */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                  <div>
                    <label className='font-medium dark:text-gray-300'>
                      Upload Photo *
                    </label>
                    <input
                      type='file'
                      accept='image/*'
                      {...register('husbandPhoto', {
                        required: "Groom's photo is required"
                      })}
                      className='file-input file-input-bordered w-full mt-2 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                    />
                  </div>
                  <div>
                    <label className='font-medium dark:text-gray-300'>
                      Signature (Image) *
                    </label>
                    <input
                      type='file'
                      accept='image/*'
                      {...register('husbandSignature', {
                        required: "Groom's signature is required"
                      })}
                      className='file-input file-input-bordered w-full mt-2 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                    />
                  </div>
                </div>
              </section>

              {/* ----------------- BRIDE'S INFORMATION ------------------ */}
              <section className='mt-12'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-1 h-6 bg-pink-600 rounded-full'></div>
                  <h2 className='text-2xl font-semibold dark:text-gray-200'>
                    2. Bride's Information
                  </h2>
                </div>

                {/* Basic Info */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <input
                    {...register('wifeName', {
                      required: "Bride's name is required"
                    })}
                    placeholder='Name *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('wifeFather')}
                    placeholder="Father's Name *"
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('wifeMother')}
                    placeholder="Mother's Name *"
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    type='date'
                    {...register('wifeDob', {
                      required: 'Date of birth is required'
                    })}
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    type='number'
                    {...register('wifeAge', {
                      required: "Bride's age is required",
                      min: {
                        value: 18,
                        message: 'Bride must be at least 18 years old'
                      },
                      max: {
                        value: 120,
                        message: 'Please enter a valid age'
                      }
                    })}
                    placeholder='Age *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                    min='18'
                    max='120'
                  />
                  {errors.wifeAge && (
                    <p className='text-red-500 text-sm mt-1 flex items-center gap-1'>
                      <svg
                        className='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      {errors.wifeAge.message}
                    </p>
                  )}
                  <input
                    type='number'
                    {...register('wifeNid')}
                    placeholder='NID Number *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                </div>

                {/* Address */}
                <h3 className='font-medium mt-8 mb-3 dark:text-gray-300'>
                  Address
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <input
                    {...register('wifeCityVillage')}
                    placeholder='City / Village *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('wifeWard')}
                    placeholder='Ward'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('wifeUnion')}
                    placeholder='Union *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('wifeThana')}
                    placeholder='Thana *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('wifeDistrict')}
                    placeholder='District *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('wifeDivision')}
                    placeholder='Division *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                </div>

                {/* Marital Status */}
                <div className='mt-8'>
                  <h3 className='font-medium mb-3 dark:text-gray-300'>
                    Marital Status *
                  </h3>
                  <div className='flex flex-wrap gap-4'>
                    {['Unmarried', 'Divorced', 'Widow'].map(status => (
                      <label
                        key={status}
                        className='flex items-center gap-2 dark:text-gray-300'
                      >
                        <input
                          type='radio'
                          value={status}
                          {...register('wifeMaritalStatus', {
                            required: "Bride's marital status is required"
                          })}
                          className='dark:accent-green-500'
                        />
                        {status}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Image Uploads */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                  <div>
                    <label className='font-medium dark:text-gray-300'>
                      Upload Photo *
                    </label>
                    <input
                      type='file'
                      accept='image/*'
                      {...register('wifePhoto', {
                        required: "Bride's photo is required"
                      })}
                      className='file-input file-input-bordered w-full mt-2 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                    />
                  </div>
                  <div>
                    <label className='font-medium dark:text-gray-300'>
                      Signature (Image) *
                    </label>
                    <input
                      type='file'
                      accept='image/*'
                      {...register('wifeSignature', {
                        required: "Bride's signature is required"
                      })}
                      className='file-input file-input-bordered w-full mt-2 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                    />
                  </div>
                </div>
              </section>

              {/* Navigation Buttons */}
              <div className='flex justify-end mt-12 pt-6 border-t border-gray-200 dark:border-gray-700'>
                <button
                  type='button'
                  onClick={nextStep}
                  className='btn bg-green-900 text-white px-10 hover:bg-green-800 dark:bg-green-800 dark:hover:bg-green-700'
                >
                  Next Step →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Marriage Details */}
          {currentStep === 2 && (
            <div className='space-y-10'>
              {/* ----------------- PLACE OF MARRIAGE ------------------ */}
              <section>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-1 h-6 bg-blue-600 rounded-full'></div>
                  <h2 className='text-2xl font-semibold dark:text-gray-200'>
                    3. Place of Marriage Taking Place
                  </h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <input
                    {...register('cityOrVillage')}
                    placeholder='City/Village *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('ward')}
                    placeholder='Ward'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('union')}
                    placeholder='Union *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('thana')}
                    placeholder='Thana *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('district')}
                    placeholder='District *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                  <input
                    {...register('division')}
                    placeholder='Division *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />
                </div>
              </section>

              {/* ----------------- REPRESENTATIVE/WAKIL'S DETAILS ------------------ */}
              <section className='mt-12'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-1 h-6 bg-purple-600 rounded-full'></div>
                  <h2 className='text-2xl font-semibold dark:text-gray-200'>
                    4. Representative/Wakil's Details
                  </h2>
                </div>
                <div className='space-y-5 p-6 rounded-lg dark:bg-gray-900 border border-gray-200 dark:border-gray-700'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <input
                      {...register('wakilName')}
                      placeholder='Name *'
                      className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                    />
                    <input
                      {...register('wakilFather')}
                      placeholder="Father's Name *"
                      className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                    />
                    <input
                      {...register('wakilMother')}
                      placeholder="Mother's Name"
                      className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                    />
                    <input
                      {...register('wakilNid')}
                      placeholder='NID Number *'
                      type='number'
                      className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                    />
                  </div>
                  <input
                    {...register('wakilAddress')}
                    placeholder='Address / Residence *'
                    className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                  />

                  <div className='mt-4'>
                    <h3 className='font-medium mb-3 dark:text-gray-300'>
                      Assigned By *
                    </h3>
                    <div className='flex gap-5'>
                      {['Bride', 'Groom'].map(assigner => (
                        <label
                          key={assigner}
                          className='flex items-center gap-2 dark:text-gray-300'
                        >
                          <input
                            type='radio'
                            value={assigner}
                            {...register('wakilAssignedBy', {
                              required: 'Please specify who assigned the wakil'
                            })}
                            className='dark:accent-green-500'
                          />
                          {assigner}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className='font-medium dark:text-gray-300'>
                      Signature (Image) *
                    </label>
                    <input
                      type='file'
                      accept='image/*'
                      {...register('wakilSignature', {
                        required: "Wakil's signature is required"
                      })}
                      className='file-input file-input-bordered w-full mt-2 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                    />
                  </div>
                </div>
              </section>

              {/* ----------------- WITNESSES SECTION ------------------ */}
              <section className='mt-12'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-1 h-6 bg-orange-600 rounded-full'></div>
                  <h2 className='text-2xl font-semibold dark:text-gray-200'>
                    5. Witness Information
                  </h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {/* Witness 1 */}
                  <div className='space-y-4 p-6 border border-gray-200 dark:border-gray-700 rounded-2xl dark:bg-gray-900'>
                    <h3 className='font-medium text-lg mb-2 dark:text-gray-300'>
                      Witness 1
                    </h3>
                    <div className='grid grid-cols-1 gap-4'>
                      <input
                        {...register('witness1Name')}
                        placeholder='Name *'
                        className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                      />
                      <input
                        {...register('witness1Father')}
                        placeholder="Father's Name *"
                        className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                      />
                      <input
                        {...register('witness1Mother')}
                        placeholder="Mother's Name"
                        className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                      />
                      <input
                        {...register('witness1Nid')}
                        placeholder='NID Number *'
                        type='number'
                        className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                      />
                      <input
                        {...register('witness1Address')}
                        placeholder='Address / Residence *'
                        className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                      />
                      <div>
                        <label className='font-medium dark:text-gray-300'>
                          Signature (Image) *
                        </label>
                        <input
                          type='file'
                          accept='image/*'
                          {...register('witness1Signature', {
                            required: 'Witness 1 signature is required'
                          })}
                          className='file-input file-input-bordered w-full mt-2 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                        />
                      </div>
                    </div>
                  </div>

                  {/* Witness 2 */}
                  <div className='space-y-4 p-6 border border-gray-200 dark:border-gray-700 rounded-2xl dark:bg-gray-900'>
                    <h3 className='font-medium text-lg mb-2 dark:text-gray-300'>
                      Witness 2
                    </h3>
                    <div className='grid grid-cols-1 gap-4'>
                      <input
                        {...register('witness2Name')}
                        placeholder='Name *'
                        className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                      />
                      <input
                        {...register('witness2Father')}
                        placeholder="Father's Name *"
                        className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                      />
                      <input
                        {...register('witness2Mother')}
                        placeholder="Mother's Name"
                        className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                      />
                      <input
                        {...register('witness2Nid')}
                        placeholder='NID Number *'
                        type='number'
                        className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                      />
                      <input
                        {...register('witness2Address')}
                        placeholder='Address / Residence *'
                        className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                      />
                      <div>
                        <label className='font-medium dark:text-gray-300'>
                          Signature (Image) *
                        </label>
                        <input
                          type='file'
                          accept='image/*'
                          {...register('witness2Signature', {
                            required: 'Witness 2 signature is required'
                          })}
                          className='file-input file-input-bordered w-full mt-2 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ----------------- DOWER / MAHR SECTION ------------------ */}
              <section className='mt-12'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-1 h-6 bg-yellow-600 rounded-full'></div>
                  <h2 className='text-2xl font-semibold dark:text-gray-200'>
                    6. Dower / Mahr Information
                  </h2>
                </div>

                <div className='space-y-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl dark:bg-gray-900'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <input
                      {...register('dowerAmount', {
                        required: 'Dower amount is required'
                      })}
                      placeholder='Amount of Dower *'
                      className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                    />
                    <input
                      {...register('paidAmount')}
                      placeholder='Paid Amount'
                      type='number'
                      className='input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                    />
                  </div>

                  <div>
                    <h3 className='font-medium mb-3 dark:text-gray-300'>
                      Dower Payment Type *
                    </h3>
                    <div className='flex gap-5'>
                      {['Immediate', 'Deferred'].map(type => (
                        <label
                          key={type}
                          className='flex items-center gap-2 dark:text-gray-300'
                        >
                          <input
                            type='radio'
                            value={type}
                            {...register('dowerPayment', {
                              required: 'Payment type is required'
                            })}
                            className='dark:accent-green-500'
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className='font-medium mb-3 dark:text-gray-300'>
                      Was any document regarding dowry made? *
                    </h3>
                    <div className='flex gap-5 mb-4'>
                      {['Yes', 'No'].map(opt => (
                        <label
                          key={opt}
                          className='flex items-center gap-2 dark:text-gray-300'
                        >
                          <input
                            type='radio'
                            value={opt}
                            {...register('divorceDocument')}
                            className='dark:accent-green-500'
                          />
                          {opt}
                        </label>
                      ))}
                    </div>

                    {divorceDocument && (
                      <textarea
                        {...register('documentDetails')}
                        placeholder='Document details (type, date, witnesses, etc.)'
                        className='textarea textarea-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                        rows='3'
                      />
                    )}
                  </div>
                </div>
              </section>

              {/* ----------------- OTHERS SECTION ------------------ */}
              <section className='mt-12'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-1 h-6 bg-red-600 rounded-full'></div>
                  <h2 className='text-2xl font-semibold dark:text-gray-200'>
                    7. Other Information
                  </h2>
                </div>

                <div className='space-y-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl dark:bg-gray-900'>
                  <div>
                    <label className='font-medium dark:text-gray-300'>
                      Any special condition regarding marriage?
                    </label>
                    <textarea
                      {...register('specialConditions')}
                      placeholder='Special conditions (if any)'
                      className='textarea textarea-bordered w-full mt-2 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                      rows='3'
                    />
                  </div>

                  <div>
                    <h3 className='font-medium mb-3 dark:text-gray-300'>
                      Has the husband delegated the power to divorce his wife? *
                    </h3>
                    <div className='flex gap-5 mb-4'>
                      {['Yes', 'No'].map(opt => (
                        <label
                          key={opt}
                          className='flex items-center gap-2 dark:text-gray-300'
                        >
                          <input
                            type='radio'
                            value={opt}
                            {...register('delegatedDivorcePower')}
                            className='dark:accent-green-500'
                          />
                          {opt}
                        </label>
                      ))}
                    </div>

                    {delegatedDivorcePower && (
                      <textarea
                        {...register('delegationConditions')}
                        placeholder='Conditions for delegated divorce power'
                        className='textarea textarea-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600'
                        rows='2'
                      />
                    )}
                  </div>

                  <div>
                    <label className='font-medium dark:text-gray-300'>
                      Has the husband's right to divorce been curtailed in any
                      way?
                    </label>
                    <textarea
                      {...register('curtailedDivorce')}
                      placeholder='Explain any curtailment of divorce rights'
                      className='textarea textarea-bordered w-full mt-2 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                      rows='2'
                    />
                  </div>
                </div>
              </section>

              {/* Navigation Buttons */}
              <div className='flex justify-between mt-12 pt-6 border-t border-gray-200 dark:border-gray-700'>
                <button
                  type='button'
                  onClick={prevStep}
                  className='btn bg-gray-300 text-gray-800 px-10 hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                >
                  ← Previous
                </button>

                <button
                  type='submit'
                  className='btn bg-green-900 text-white px-10 hover:bg-green-800 dark:bg-green-800 dark:hover:bg-green-700'
                >
                  Submit Application
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default MarriageApplicationForm
