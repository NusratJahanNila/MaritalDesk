import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';
import { toast } from 'react-toastify';

const MarriageCertificate = ({
  groomName = 'MD HABIBUR RAHMAN',
  groomFatherName = 'MD. HAFIZUR RAHMAN',
  groomAddress = 'Holding # 778, Ward # 5, Ruhul Amin Road, West Hazipara, Thakurgaon',
  groomDob = '25 AUG 1984',

  brideName = 'SUMANA KHANAM KABIR',
  brideFatherName = 'ALAUDDIN HALDER',
  brideMotherName = 'NASIMA BEGUM',
  brideAddress = 'Plot No. 122, Block-C, Eastern Housing, Pallabi, Dhaka',
  brideDob = '03 OCT 1993',

  marriageDate = '15/01/2025',
  registrationDate = '27/01/2025',
  issueDate = '03/07/2025',

  volumeNo = '01/25',
  bookNo = '"A"',
  serialNo = '27',
  year = '2025',

  wardNo = 'Ward No. 53, Dhaka North City Corporation, Turag, Dhaka-1230',
  registrarName = 'Md. Shahjahan'
}) => {
  const certificateRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPDF = async () => {
    if (isGenerating) return;
    if (!certificateRef.current) {
      alert('Certificate content not ready yet. Please wait a moment and try again.');
      return;
    }

    setIsGenerating(true);

    try {
      
      await new Promise(resolve => setTimeout(resolve, 300));

      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,                  
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        allowTaint: true,
        
      });

      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 8;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);

      const safeGroom = groomName.replace(/[^a-zA-Z0-9]/g, '_');
      const safeBride = brideName.replace(/[^a-zA-Z0-9]/g, '_');
      pdf.save(`Marriage_Certificate_${safeGroom}_and_${safeBride}.pdf`);
    } catch (error) {
      console.error('PDF generation failed:', error);
      toast.error('Sorry, something went wrong while creating the PDF.\nPlease check the console for details.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="py-8">
      <div
        ref={certificateRef}
        className="max-w-4xl mx-auto  bg-white shadow-2xl border-4 border-[#0a7d2c] rounded-sm font-serif overflow-hidden"
      >
        {/* Header border simulation */}
        <div className="relative border-b-4 border-[#0a7d2c] pb-1">
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none select-none text-[8rem] leading-none font-black text-center text-green-900">
            গণপ্রজাতন্ত্রী বাংলাদেশ
          </div>

          <div className="text-center pt-6 pb-4 px-10 bg-gradient-to-b from-blue-50 to-white">
            <h1 className="text-2xl md:text-3xl font-bold text-[#0a7d2c] tracking-wide">
              Government of the People's Republic of Bangladesh
            </h1>
            <p className="text-lg font-semibold mt-1">
              Office of The Muslim Marriage & Divorce Registrar & Kazi
            </p>
            <p className="text-base mt-1 font-medium">{wardNo}</p>

            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-green-700 to-transparent mx-auto my-3"></div>

            <h2 className="text-4xl md:text-5xl font-bold text-orange-700 mt-4 tracking-wider uppercase">
              MARRIAGE CERTIFICATE
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="p-8 md:p-12 bg-white relative">
          <div className="space-y-7 text-lg leading-relaxed">
            <p className="text-center font-semibold text-xl mb-10 underline decoration-2 decoration-green-800">
              This is to certify that,
            </p>

            <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-x-4 gap-y-5">
              <div className="font-semibold whitespace-nowrap">Groom:</div>
              <div>
                <span className="font-bold">{groomName}</span> son of{' '}
                <span className="font-bold">{groomFatherName}</span>
                <br />
                of {groomAddress}
                <br />
                Date of Birth: <span className="font-medium">{groomDob}</span>
              </div>

              <div className="font-semibold mt-4">Married with:</div>
              <div className="mt-4">
                <span className="font-bold">{brideName}</span>
                <br />
                Daughter of <span className="font-bold">{brideFatherName}</span> and{' '}
                <span className="font-bold">{brideMotherName}</span>
                <br />
                of {brideAddress}
                <br />
                Date of Birth: <span className="font-medium">{brideDob}</span>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-300">
              <p>
                The marriage was solemnized on <strong>{marriageDate}</strong>{' '}
                and registration was solemnized on <strong>{registrationDate}</strong>
              </p>
              <p className="mt-4">
                in my office and registered in <strong>Volume No. {volumeNo}</strong>, Book No.{' '}
                <strong>{bookNo}</strong>, Serial No. <strong>{serialNo}</strong> in the year{' '}
                <strong>{year}</strong>
              </p>
            </div>

            <div className="mt-12 flex flex-col md:flex-row justify-between items-end gap-12">
              <div className="text-center">
                <p className="italic text-gray-700">I wish them every success in life</p>
                <div className="mt-10">
                  <div className="w-48 h-0.5 bg-black mx-auto mb-1"></div>
                  <p className="font-semibold">{registrarName}</p>
                  <p className="text-sm text-gray-600">Muslim Marriage & Divorce Registrar</p>
                  <p className="text-sm text-gray-600">
                    Ward No. 53, Dhaka North City Corporation
                  </p>
                  <p className="text-sm text-gray-600">Turag, Dhaka-1230</p>
                </div>
              </div>

              {/* Right side - attested & stamps */}
              <div className="text-right space-y-3">
                <p className="font-bold text-xl italic text-blue-800 rotate-[-8deg] transform origin-bottom-right">
                  ATTESTED
                </p>
                <p className="text-sm font-medium">Date of Issue: {issueDate}</p>

                <div className="relative inline-block mt-4">
                  <div className="w-40 h-40 rounded-full border-8 border-blue-700/70 flex items-center justify-center rotate-[-6deg] opacity-80">
                    <div className="text-center">
                      <div className="text-xs font-bold">GOVT. OF BANGLADESH</div>
                      <div className="text-lg font-black mt-1">REGISTERED</div>
                      <div className="text-xs mt-1">{issueDate}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-blue-800/40 font-black text-5xl rotate-[-10deg]">
                    SEAL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-4 bg-gradient-to-t from-[#0a7d2c] to-green-900"></div>
      </div>

      {/* Download button */}
      <div className="mt-8 text-center">
        <button
          onClick={downloadPDF}
          disabled={isGenerating}
          className={`inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-lg shadow-lg transition-colors text-lg ${
            isGenerating
              ? 'bg-green-500 cursor-wait'
              : 'bg-green-700 hover:bg-green-800'
          }`}
        >
          {isGenerating ? (
            <>
              <span className="animate-spin inline-block w-5 h-5 border-2 border-current border-t-transparent rounded-full"></span>
              Generating PDF...
            </>
          ) : (
            <>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Certificate (PDF)
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default MarriageCertificate;