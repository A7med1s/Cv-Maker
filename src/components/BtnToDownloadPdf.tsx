import html2pdf from 'html2pdf.js';
const BtnToDownloadPdf = (prop) => {
    const pdfDate = new Date().getUTCMilliseconds()
    const handleDownload = () => {
        const element = document.getElementById(prop.id);
        if (element) {
          html2pdf()
            .from(element)
            .set({
              margin: 1,
              filename: `${pdfDate}.pdf`,
              html2canvas: { scale: 1 },
              jsPDF: { orientation: 'portrait' }
            })
            .save();
        }
      };
    return (
   <>
   <div className='btn-download-div'>
   <button onClick={handleDownload}>Dwonload As PDF</button>
   </div>
   </>
  )
}

export default BtnToDownloadPdf
