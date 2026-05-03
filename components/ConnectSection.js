'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCalApi } from "@calcom/embed-react";
import styles from './ConnectSection.module.css';

function ConnectSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: '',
    inquiryType: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    role: false,
    inquiryType: false
  });
  const calInitialized = useRef(false);
  
  // TODO: Replace 'your-username' with your actual cal.com username
  const calComUsername = 'krishaynair';
  const contactEmail = 'krishay958@gmail.com';

  useEffect(() => {
    (async function () {
      if (!calInitialized.current) {
        const cal = await getCalApi({"namespace":"secret"});
        cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        calInitialized.current = true;
      }
    })();
  }, []);

  // Re-initialize when step 3 is reached
  useEffect(() => {
    if (step === 3 && isModalOpen) {
      (async function () {
        const cal = await getCalApi({"namespace":"secret"});
        cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      })();
    }
  }, [step, isModalOpen]);

  const roleOptions = [
    'Founder',
    'HR / Company representative',
    'Other (not related to job offer or freelance work)'
  ];

  const inquiryOptions = [
    'Want to hire you for job / job offer',
    'Have some freelance work',
    'None of the above'
  ];

  const handleButtonClick = () => {
    setIsModalOpen(true);
    setStep(1);
    setFormData({ role: '', inquiryType: '' });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setStep(1);
    setFormData({ role: '', inquiryType: '' });
    setIsDropdownOpen({ role: false, inquiryType: false });
  };

  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
    setIsDropdownOpen({ ...isDropdownOpen, role: false });
  };

  const handleInquirySelect = (inquiry) => {
    setFormData({ ...formData, inquiryType: inquiry });
    setIsDropdownOpen({ ...isDropdownOpen, inquiryType: false });
  };

  const handleContinue = () => {
    if (step === 1 && formData.role && formData.inquiryType) {
      setStep(3);
    }
  };

  const isContinueDisabled = () => {
    if (step === 1) return !formData.role || !formData.inquiryType;
    return false;
  };

  const handleBack = () => {
    if (step === 3) {
      setStep(1);
    }
  };

  return (
    <>
      <section id="contact" className={styles.connectSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.contentBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.message}>Hey, you scrolled this far, let's talk.</p>
          <div className={styles.ctaRow}>
          <motion.button
            className={styles.bookButton}
            onClick={handleButtonClick}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <svg
              className={styles.chatIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Book a Free Call</span>
          </motion.button>
          <motion.a
            href={`mailto:${contactEmail}`}
            className={styles.emailButton}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <svg
              className={styles.chatIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Email me</span>
          </motion.a>
          </div>
        </motion.div>
      </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
            />
            <motion.div
              className={`${styles.modal} ${step === 3 ? styles.bookingModal : ''}`}
              initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
              animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
              exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={handleCloseModal}
                aria-label="Close modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {step !== 3 && (
                <>
                  <h2 className={styles.modalTitle}>Tell me about yourself</h2>
                  <p className={styles.modalSubtitle}>Please select your inquiry type to continue.</p>
                </>
              )}

              {step === 1 && (
                <div className={styles.formStep}>
                  <div className={styles.formField}>
                    <label className={styles.questionLabel}>Are you a?</label>
                    <div className={styles.dropdownContainer}>
                      <button
                        className={styles.dropdownButton}
                        onClick={() => setIsDropdownOpen({ ...isDropdownOpen, role: !isDropdownOpen.role })}
                      >
                        <span className={formData.role ? styles.selectedValue : styles.placeholder}>
                          {formData.role || 'Select an option...'}
                        </span>
                        <svg
                          className={`${styles.chevron} ${isDropdownOpen.role ? styles.chevronOpen : ''}`}
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      {isDropdownOpen.role && (
                        <motion.div
                          className={styles.dropdownMenu}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {roleOptions.map((option, index) => (
                            <button
                              key={index}
                              className={`${styles.dropdownOption} ${formData.role === option ? styles.selected : ''}`}
                              onClick={() => handleRoleSelect(option)}
                            >
                              {option}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.questionLabel}>
                      What's your inquiry about?
                    </label>
                    <div className={styles.dropdownContainer}>
                      <button
                        className={styles.dropdownButton}
                        onClick={() => setIsDropdownOpen({ ...isDropdownOpen, inquiryType: !isDropdownOpen.inquiryType })}
                      >
                        <span className={formData.inquiryType ? styles.selectedValue : styles.placeholder}>
                          {formData.inquiryType || 'Select an option...'}
                        </span>
                        <svg
                          className={`${styles.chevron} ${isDropdownOpen.inquiryType ? styles.chevronOpen : ''}`}
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      {isDropdownOpen.inquiryType && (
                        <motion.div
                          className={styles.dropdownMenu}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {inquiryOptions.map((option, index) => (
                            <button
                              key={index}
                              className={`${styles.dropdownOption} ${formData.inquiryType === option ? styles.selected : ''}`}
                              onClick={() => handleInquirySelect(option)}
                            >
                              {option}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className={styles.bookingContainer}>
                  <h2 className={styles.modalTitle}>Book a Meeting</h2>
                  <p className={styles.modalSubtitle}>Schedule a time to connect and discuss opportunities</p>
                  <div className={styles.calEmbed}>
                    <iframe
                      src={`https://cal.com/${calComUsername}/secret?embed=true&embedType=inline`}
                      style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        display: 'block'
                      }}
                      title="Book a meeting"
                      allow="camera; microphone; geolocation"
                      scrolling="no"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              {step !== 3 && (
                <div className={styles.buttonGroup}>
                  <button
                    className={`${styles.continueButton} ${isContinueDisabled() ? styles.disabled : ''}`}
                    onClick={handleContinue}
                    disabled={isContinueDisabled()}
                  >
                    Continue
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default ConnectSection;

