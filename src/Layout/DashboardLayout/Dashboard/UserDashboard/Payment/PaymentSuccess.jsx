import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useSearchParams } from 'react-router'
import html2canvas from 'html2canvas-pro'
import jsPDF from 'jspdf'
import { FaDownload, FaReceipt, FaCheckCircle } from 'react-icons/fa';
import logo from "../../../../../assets/Maritaldesk.png"

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams({})
  const [transactionId, setTransactionId] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const receiptRef = useRef()

  const sessionId = searchParams.get('session_id')
  console.log(sessionId)

  const api = axios.create({
    baseURL: 'http://localhost:3000', // Backend server
    headers: {
      'Content-Type': 'application/json'
    }
  })

  useEffect(() => {
    if (sessionId) {
      api
        .post(`/payment-success`, {
          sessionId: sessionId
        })
        .then(res => {
          console.log(res.data)
          setTransactionId(res.data.transactionId)
        })
    }
  }, [sessionId, api])

  // Payment details
  const paymentDetails = [
    { name: 'Registry Fee', amount: 700 },
    { name: 'Kazi Fee', amount: 1500 },
    { name: 'Service Fee', amount: 250 },
    { name: 'Processing Charge', amount: 50 }
  ]

  const totalAmount = 2500

  const downloadPDF = async () => {
    if (isGenerating || !receiptRef.current) return

    setIsGenerating(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 300))

      const canvas = await html2canvas(receiptRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = pdfWidth / imgWidth
      const imgY = 10

      pdf.addImage(imgData, 'PNG', 0, imgY, imgWidth * ratio, imgHeight * ratio)

      const fileName = transactionId
        ? `Payment_Receipt_${transactionId}.pdf`
        : `Payment_Receipt_${Date.now()}.pdf`

      pdf.save(fileName)
    } catch (error) {
      console.error('PDF generation failed:', error)
      alert('Failed to generate PDF')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-800 p-4'>
      <div className='max-w-2xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4'>
            <FaCheckCircle className='w-8 h-8 text-green-600' />
          </div>
          <h1 className='text-3xl font-bold text-gray-800 dark:text-gray-300 mb-2'>
            Payment Successful
          </h1>
          <p className='text-gray-600 dark:text-gray-500'>
            Your payment has been processed successfully
          </p>
        </div>

        {/* Receipt */}
        <div
          ref={receiptRef}
          className='bg-white rounded-xl shadow-lg p-6 mb-8 relative'
        >
          
          <div className='flex items-center gap-3 mb-6'>
            {/* <FaReceipt className='w-6 h-6 text-green-600' /> */}
            <img src={logo} alt="logo" className='h-16 w-16'/>
            <h2 className='text-xl font-bold text-gray-800'>Payment Receipt</h2>
          </div>
          {/* water mark */}
          <div className='absolute inset-40 opacity-[0.07] pointer-events-none select-none text-[7rem] leading-none font-black text-center text-green-900'>
             Marital Desk
          </div>

          {/* Transaction ID */}
          <div className='mb-6 p-4 bg-gray-50 rounded-lg'>
            <p className='text-gray-600 mb-1'>Transaction ID</p>
            <p className='font-mono text-lg font-bold text-gray-800 break-all'>
              {transactionId || 'Loading...'}
            </p>
          </div>

          {/* Payment Details */}
          <div className='mb-6'>
            <h3 className='font-bold text-gray-700 mb-4'>Payment Details</h3>
            <div className='space-y-3'>
              {paymentDetails.map((item, index) => (
                <div
                  key={index}
                  className='flex justify-between items-center py-2 border-b border-gray-100'
                >
                  <span className='text-gray-600'>{item.name}</span>
                  <span className='font-medium'>৳{item.amount}</span>
                </div>
              ))}

              {/* Total */}
              <div className='flex justify-between items-center py-3 border-t border-gray-200 pt-4'>
                <span className='font-bold text-gray-800'>Total Amount</span>
                <span className='text-xl font-bold text-green-700'>
                  ৳{totalAmount}
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className='text-center text-gray-500 text-sm border-t pt-4'>
            <p>Thank you for using MaritalDesk</p>
            <p>Date: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* Download Button */}
        <div className='text-center'>
          <button
            onClick={downloadPDF}
            disabled={isGenerating}
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all ${
              isGenerating
                ? 'bg-gray-400 cursor-wait'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isGenerating ? (
              <>
                <span className='animate-spin inline-block w-5 h-5 border-2 border-current border-t-transparent rounded-full'></span>
                Generating PDF...
              </>
            ) : (
              <>
                <FaDownload className='w-5 h-5' />
                Download Receipt (PDF)
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess
