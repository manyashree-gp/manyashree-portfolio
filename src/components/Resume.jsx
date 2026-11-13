import { useState, useEffect } from 'react';
import {
  FileText,
  Printer,
  Download,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Eye,
  Info
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Resume.css';

export default function Resume() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [pdfStatus, setPdfStatus] = useState({
    loading: true,
    valid: true,
    errorMessage: ''
  });

  // Verified path to the actual PDF inside the public folder
  const resumeUrl = personalInfo.resumeUrl || '/resume/Manyashree_GP_Resume.pdf';

  // Verify that the PDF is available and not falling back to index.html
  useEffect(() => {
    let isMounted = true;

    fetch(resumeUrl, { method: 'HEAD' })
      .then((res) => {
        if (!isMounted) return;
        const contentType = res.headers.get('content-type') || '';

        // If the server returns a 404 or serves HTML (SPA rewrite fallback)
        if (!res.ok || contentType.includes('text/html')) {
          setPdfStatus({
            loading: false,
            valid: false,
            errorMessage: 'Resume PDF could not be found or returned an HTML fallback. Expected: /resume/Manyashree_GP_Resume.pdf'
          });
        } else {
          setPdfStatus({
            loading: false,
            valid: true,
            errorMessage: ''
          });
        }
      })
      .catch(() => {
        // In local/offline or restricted environments, proceed with embed
        if (isMounted) {
          setPdfStatus({
            loading: false,
            valid: true,
            errorMessage: ''
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [resumeUrl]);

  const handleDownloadClick = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4500);
  };

  // Open the actual PDF in a dedicated tab with native browser PDF viewer & print tools
  const handlePrint = () => {
    const printWindow = window.open(resumeUrl, '_blank');
    if (printWindow) {
      printWindow.focus();
    }
  };

  return (
    <section id="resume" className="portfolio-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FileText size={14} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">Professional Resume</h2>
          <p className="section-description">
            View or download my verified one-page resume outlining my technical skills, engineering projects, and leadership experience.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="resume-controls-bar">
          <a
            href={resumeUrl}
            download="Manyashree_GP_Resume.pdf"
            className="btn btn-primary"
            onClick={handleDownloadClick}
          >
            <Download size={16} />
            Download Official CV (PDF)
          </a>

          <button
            className="btn btn-outline"
            onClick={handlePrint}
            type="button"
          >
            <Printer size={16} />
            Print / Save as PDF
          </button>
        </div>

        {/* Download Feedback Banner */}
        {downloadSuccess && (
          <div className="resume-toast-banner" role="status">
            <Info size={18} className="toast-icon" />
            <span>
              Downloading <strong>Manyashree_GP_Resume.pdf</strong>. If your download doesn't begin automatically,{' '}
              <a href={resumeUrl} download="Manyashree_GP_Resume.pdf" className="toast-link">click here</a>.
            </span>
          </div>
        )}

        {/* Main Resume PDF Viewer Container */}
        <div className="resume-pdf-card">
          {/* Top Document Status Toolbar */}
          <div className="resume-pdf-toolbar">
            <div className="pdf-toolbar-info">
              <FileText size={18} className="pdf-file-icon" />
              <div className="pdf-title-stack">
                <span className="pdf-filename">Manyashree_GP_Resume.pdf</span>
                <span className="pdf-filesize">Verified Official Document • PDF</span>
              </div>
            </div>

            <div className="pdf-toolbar-actions">
              <span className="pdf-verified-tag">
                <CheckCircle2 size={13} className="tag-check" />
                Actual Resume
              </span>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="toolbar-action-btn"
                title="Open PDF in new tab"
                aria-label="Open PDF in new tab"
              >
                <Eye size={15} />
                <span>Full View</span>
              </a>

              <a
                href={resumeUrl}
                download="Manyashree_GP_Resume.pdf"
                className="toolbar-action-btn"
                title="Download PDF file"
                aria-label="Download PDF file"
              >
                <Download size={15} />
                <span>Download</span>
              </a>
            </div>
          </div>

          {/* Conditional Rendering: Real PDF Viewer vs. Error State */}
          {!pdfStatus.valid ? (
            <div className="resume-pdf-error" role="alert">
              <AlertCircle size={36} className="error-icon" />
              <h3 className="error-title">PDF Document Unavailable</h3>
              <p className="error-desc">
                {pdfStatus.errorMessage || 'Unable to locate the resume PDF file.'}
              </p>
              <div className="error-actions">
                <a href={resumeUrl} className="btn btn-outline btn-sm" target="_blank" rel="noreferrer">
                  <ExternalLink size={14} /> Check Direct Link
                </a>
              </div>
            </div>
          ) : (
            <div className="resume-embed-container">
              {/* Responsive PDF Viewer using native object & iframe embed */}
              <object
                data={`${resumeUrl}#toolbar=1&navpanes=0&view=FitH`}
                type="application/pdf"
                className="resume-pdf-embed"
                title="Manyashree GP - Official Resume PDF"
              >
                <iframe
                  id="resume-pdf-frame"
                  src={`${resumeUrl}#toolbar=1&navpanes=0&view=FitH`}
                  title="Manyashree GP - Official Resume PDF"
                  className="resume-pdf-embed"
                >
                  <p className="pdf-no-support-msg">
                    Your browser does not support inline PDF viewing. Please{' '}
                    <a href={resumeUrl} target="_blank" rel="noreferrer">
                      click here to view the PDF directly
                    </a>.
                  </p>
                </iframe>
              </object>
            </div>
          )}

          {/* Bottom Helper Bar for Mobile and High-Resolution Viewing */}
          <div className="resume-pdf-footer">
            <span className="footer-notice-text">
              Displaying official one-page resume from <code>/resume/Manyashree_GP_Resume.pdf</code>
            </span>
            <div className="footer-quick-actions">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-btn"
              >
                <ExternalLink size={14} /> Open in Dedicated Tab
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
