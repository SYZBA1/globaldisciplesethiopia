import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    eNewsletter: true,
    newsletterMail: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <footer
      className="relative text-white overflow-hidden bg-slate-950 bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://globaldisciples.org/wp-content/uploads/2023/05/6-17-2023-insta.jpg)',
      }}
    >
      {/* Dark vignette overlay matching the reference screenshot to keep text & form completely legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/60 to-black/85 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        
        {/* Top Centered Logo matching Reference Screenshot Exactly */}
        <div className="flex justify-center mb-12 sm:mb-14">
          <Link to="/" className="inline-block group focus:outline-none">
            <svg
              className="w-[140px] sm:w-[154px] h-auto transition-transform duration-300 group-hover:scale-105"
              viewBox="0 0 154 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Sky-Blue Umbrella Arc Emblem */}
              <g id="gdc-logo--arc">
                <path
                  d="M45.9,21.4C50.8,8.9,63.1,0.6,76.5,0.6c13.4,0,25.7,8.3,30.6,20.8H45.9z"
                  fill="#1B99FF"
                />
              </g>

              {/* White Disciples Wordmark */}
              <g id="gdc-logo--disciples">
                <path
                  fill="#FFFFFF"
                  d="M44.6,85.2l-1.8-0.5c-1.4-0.5-2.4-1-3-1.5c-0.6-0.5-0.9-1.2-0.9-2.1c0-0.9,0.4-1.6,1.1-2.1c0.8-0.5,1.6-0.8,2.6-0.8c0.9,0,1.6,0.2,2.1,0.5c0.5,0.3,0.9,1,1.3,1.8l1.3,2.3h1.1l0.2-4.4c-0.9-0.5-1.8-0.8-2.8-1.1c-0.9-0.3-2-0.4-3.1-0.4c-1.7,0-3.2,0.3-4.4,0.9c-1.2,0.6-2.1,1.4-2.8,2.3s-0.9,2.1-0.9,3.2c0,1.5,0.5,2.8,1.4,3.8c0.9,1,2.2,1.8,3.9,2.2l1.8,0.6c1.5,0.5,2.5,1,3.1,1.5c0.6,0.6,0.9,1.3,0.9,2.1c0,1-0.4,1.7-1.2,2.3c-0.8,0.6-1.8,0.8-3.1,0.8c-1,0-1.9-0.2-2.6-0.7c-0.7-0.5-1.3-1.3-1.8-2.3l-1.2-2.3h-1.1v4.9c1,0.5,2,0.9,3,1.2c1.1,0.3,2.2,0.4,3.6,0.4c2.8,0,5-0.6,6.6-1.8c1.5-1.2,2.3-2.8,2.3-4.7c0-1.5-0.4-2.7-1.3-3.8C48,86.7,46.6,85.9,44.6,85.2z"
                />
                <path
                  fill="#FFFFFF"
                  d="M67.1,94.5c-0.8,0.5-1.9,0.7-3.1,0.7c-2.1,0-3.7-0.7-4.7-2.1c-1-1.4-1.5-3.5-1.5-6.1c0-3.1,0.5-5.4,1.4-6.7c0.9-1.4,2.2-2.1,4-2.1c0.5,0,0.8,0.1,1.1,0.2c0.3,0.2,0.4,0.5,0.6,0.9c0.1,0.4,0.1,0.7,0,1.1c0,0.4-0.1,0.9,0,1.4c0.1,0.9,0.4,1.6,0.8,2.1c0.5,0.5,1.1,0.8,1.9,0.8c0.7,0,1.3-0.2,1.8-0.6c0.5-0.4,0.7-1,0.7-1.8c0-0.9-0.3-1.8-0.9-2.6c-0.6-0.8-1.4-1.5-2.5-2c-1.1-0.5-2.4-0.8-4-0.8c-1.9,0-3.7,0.4-5.3,1.3c-1.6,0.8-2.9,2-3.9,3.6c-1,1.6-1.4,3.5-1.4,5.7c0,2.2,0.4,4.1,1.3,5.7c0.9,1.6,2,2.7,3.6,3.5c1.5,0.8,3.2,1.2,5.1,1.2c1.9,0,3.6-0.4,5-1.3c1.4-0.9,2.5-2.1,3.2-3.8l-0.7-0.5C68.7,93.4,67.9,94.1,67.1,94.5z"
                />
                <path
                  fill="#FFFFFF"
                  d="M80.6,96.5c-0.5-0.2-0.9-0.4-1.1-0.7c-0.2-0.3-0.3-0.8-0.3-1.3V83.4l0.1-5.9l-0.5-0.5l0,0l0,0c0,0-2.2,2.5-7.2,2.5v0.6v0.4c0,0,0.8,0.1,0.9,0.1c0.2,0.1,0.5,0.1,0.7,0.3c0.2,0.2,0.3,0.4,0.4,0.6c0,0.2,0.1,0.4,0.1,0.6c0,0.8,0,1.5,0,2.2c0,0.7,0,1.5,0,2.4v7.6c0,0.5-0.1,1-0.3,1.3c-0.2,0.3-0.6,0.6-1.1,0.7l-0.6,0.2v0.8h9.4v-0.8L80.6,96.5z"
                />
                <path
                  fill="#FFFFFF"
                  d="M101.7,79.7c-1.4-1.8-3.3-2.6-5.6-2.6c-2.4,0-4.5,0.6-6.4,1.9l-0.4-1.5l-0.5-0.4l0,0c0,0-2,2.3-6.6,2.5v0v0.6v0.4c0.6,0,1.3,0.1,1.7,0.5c0.3,0.3,0.3,0.8,0.3,1.2c0,0.8,0,1.5,0,2.1s0,1.4,0,2.2v11.3c0,0.9,0,1.9,0,2.9c0,1,0,2.1,0,3.2c0,0.6-0.1,1-0.3,1.3c-0.2,0.3-0.6,0.5-1.2,0.7l-0.5,0.2v0.8h9.7v-0.8L91,106c-1-0.3-1.4-1-1.4-2.1c0-1.1,0-2.2,0-3.1c0-1,0-1.9,0-2.7v-1.2c0.7,0.4,1.6,0.7,2.5,0.9c0.9,0.2,2,0.3,3,0.3c2.7,0,4.8-0.9,6.3-2.8c1.6-1.9,2.3-4.4,2.3-7.8C103.8,84,103.1,81.4,101.7,79.7z M96.6,94.4c-0.8,1.3-2,2-3.4,2c-1.2,0-2.4-0.2-3.5-0.7V80.1c0.7-0.4,1.3-0.7,1.9-0.8c0.6-0.2,1.2-0.2,1.7-0.2c1.5,0,2.6,0.6,3.4,1.9c0.8,1.3,1.2,3.5,1.2,6.7C97.9,90.9,97.5,93.1,96.6,94.4z"
                />
                <path
                  fill="#FFFFFF"
                  d="M130.5,78.1c-1.2-0.7-2.7-1.1-4.4-1.1c-1.7,0-3.3,0.4-4.9,1.3c-1.6,0.8-2.8,2-3.8,3.6c-1,1.6-1.5,3.5-1.5,5.7c0,2.2,0.4,4,1.3,5.6c0.8,1.6,2,2.7,3.5,3.6c1.5,0.8,3.2,1.2,5.2,1.2c1.9,0,3.6-0.4,5-1.3c1.4-0.8,2.5-2,3.4-3.5l-0.7-0.6c-0.7,0.8-1.5,1.5-2.3,1.9c-0.8,0.5-2,0.7-3.3,0.7c-2,0-3.5-0.6-4.5-1.9c-1-1.2-1.6-3.3-1.6-6.1h12.4c0.1-0.3,0.1-0.6,0.2-0.9c0-0.3,0-0.7,0-1c0-1.6-0.3-3.1-1-4.3C132.7,79.8,131.8,78.8,130.5,78.1z M129.2,86.1h-7.4c0.1-2.1,0.3-3.7,0.6-4.8c0.3-1.1,0.8-1.9,1.4-2.4c0.6-0.5,1.3-0.7,2.1-0.7c1.5,0,2.4,0.6,3,1.9C129.4,81.3,129.5,83.3,129.2,86.1z"
                />
                <path
                  fill="#FFFFFF"
                  d="M151,87.8c-0.9-1-2.3-1.9-4.3-2.5l-1.8-0.5c-1.4-0.5-2.4-1-3-1.5c-0.6-0.5-0.9-1.2-0.9-2.1c0-0.9,0.4-1.6,1.1-2.1c0.8-0.5,1.6-0.8,2.6-0.8c0.9,0,1.6,0.2,2.1,0.5c0.4,0.3,0.9,1,1.3,1.8l1.3,2.3h1.1l0.2-4.4c-0.9-0.5-1.8-0.8-2.8-1.1c-0.9-0.3-2-0.4-3.1-0.4c-1.7,0-3.2,0.3-4.4,0.9c-1.2,0.6-2.1,1.4-2.8,2.3c-0.6,1-0.9,2.1-0.9,3.2c0,1.5,0.5,2.8,1.4,3.8c0.9,1,2.2,1.8,3.9,2.2l1.8,0.6c1.5,0.5,2.5,1,3.1,1.5c0.6,0.6,0.9,1.3,0.9,2.1c0,1-0.4,1.7-1.2,2.3c-0.8,0.6-1.8,0.8-3.1,0.8c-1,0-1.9-0.2-2.6-0.7c-0.7-0.5-1.3-1.3-1.8-2.3l-1.2-2.3h-1.1v4.9c1,0.5,2,0.9,3,1.2c1.1,0.3,2.2,0.4,3.6,0.4c2.8,0,5-0.6,6.6-1.8c1.5-1.2,2.3-2.8,2.3-4.7C152.3,90.1,151.8,88.8,151,87.8z"
                />
                <path
                  fill="#FFFFFF"
                  d="M112.9,95.8c-0.2-0.3-0.3-0.8-0.3-1.3V74.7l0.2-5.8l-0.8-0.6c-0.7,0.6-2.9,2.3-6.9,2.3v0v0.4v0.6c0.3,0,0.5,0.1,0.8,0.1c0.3,0.1,0.7,0.1,0.9,0.3c0.3,0.2,0.3,0.8,0.3,1.1v15.7c0,0.9,0,1.9,0,2.8c0,0.9,0,1.9,0,2.8c0,1.1-0.4,1.8-1.4,2.1l-0.6,0.2v0.8h9.6v-0.8l-0.6-0.2C113.4,96.4,113.1,96.2,112.9,95.8z"
                />
                <path
                  fill="#FFFFFF"
                  d="M32.2,96.5c-0.5-0.2-0.9-0.4-1.1-0.7c-0.2-0.3-0.3-0.8-0.3-1.3V83.4l0.1-5.9l-0.5-0.5l-0.1,0c0,0-2.2,2.5-7.1,2.5l0,0v1c0,0,1.6,0,1.9,0.7c0,0.1,0.1,0.2,0.1,0.2c0,0.2,0.1,0.4,0.1,0.7c0,0.8,0,1.5,0,2.2c0,0.7,0,1.5,0,2.4v7.6c0,0.5-0.1,1-0.3,1.3c-0.2,0.3-0.6,0.6-1.1,0.7l-0.6,0.2v0.8h9.4v-0.8L32.2,96.5z"
                />
                <path
                  fill="#FFFFFF"
                  d="M21,96.5c-0.5-0.1-0.8-0.4-1-0.7c-0.2-0.3-0.3-0.8-0.3-1.3V74.7l0.2-5.8l-1-0.7c-0.8,0.7-3,2.1-6.7,2.1c0,0,0,1,0,1c0-0.1,1,0.1,1.1,0.2c0.3,0.1,0.5,0.2,0.8,0.4c0.3,0.3,0.4,0.8,0.4,1.2v5.4c-0.7-0.5-1.5-0.8-2.4-1c-0.9-0.2-1.9-0.3-2.8-0.3c-1.6,0-3.2,0.4-4.5,1.2c-1.4,0.8-2.5,2-3.3,3.6C0.4,83.4,0,85.4,0,87.7c0,2.4,0.4,4.3,1.1,5.8c0.7,1.5,1.7,2.7,3,3.4C5.4,97.7,6.9,98,8.5,98c1.2,0,2.2-0.2,3.2-0.5c1-0.3,1.8-0.8,2.6-1.4l0.4,1.7l6.8-0.5v-0.8L21,96.5z M14.1,95c-1,0.8-2.2,1.2-3.3,1.2c-1.4,0-2.6-0.6-3.5-1.9c-0.9-1.3-1.4-3.5-1.4-6.6c0-3.1,0.5-5.4,1.4-6.8c1-1.4,2.1-2.1,3.5-2.1c1.2,0,2.3,0.3,3.3,0.9L14.1,95L14.1,95z"
                />
                <path
                  fill="#FFFFFF"
                  d="M75.9,68.7c-0.9,0-1.7,0.3-2.3,0.8c-0.6,0.6-0.9,1.3-0.9,2.2c0,0.9,0.3,1.6,0.9,2.2c0.6,0.6,1.4,0.9,2.3,0.9c0.9,0,1.7-0.3,2.3-0.9c0.6-0.6,0.9-1.3,0.9-2.2c0-0.9-0.3-1.6-0.9-2.2C77.6,69,76.8,68.7,75.9,68.7z"
                />
              </g>

              {/* White Global Wordmark */}
              <g id="gdc-logo--global">
                <path
                  fill="#FFFFFF"
                  d="M41.6,46.6c-0.8,0.3-1.6,0.5-2.5,0.7c-1.5-1.2-3.5-1.9-6.2-1.9c-2.7,0-4.7,0.6-6.1,1.9c-1.4,1.2-2.1,2.9-2.1,4.9c0,2.4,1,4.2,3,5.4l-1.5,1.9c-0.4,0.4-0.7,0.9-0.9,1.3c-0.2,0.4-0.4,0.9-0.4,1.4c0,1.4,0.8,2.4,2.5,3l1,0.3c0.1,0,0.2,0.1,0.3,0.1l7.4,1.4c1.3,0.2,2.3,0.6,2.8,1c0.6,0.4,0.8,1,0.8,1.8c0,1.2-0.6,2.2-1.7,3c-1.1,0.8-2.8,1.1-5.1,1.1c-0.7,0-1.4,0-2-0.1c-0.2,0-0.4,0-0.5-0.2c-0.2-0.2-0.1-0.5,0.1-0.9c0-0.1,0-0.1,0.1-0.2c0,0,0,0,0,0c0.1-0.2,0.1-0.5,0.1-0.8c0-0.9-0.3-1.6-0.9-2.2s-1.4-0.8-2.3-0.8s-1.7,0.3-2.3,0.8c-0.6,0.6-0.9,1.3-0.9,2.2c0,0.9,0.3,1.6,0.9,2.2c0.1,0.1,0.2,0.2,0.3,0.3c1,0.7,2.2,0.8,3.3,0.9c1.2,0.2,2.4,0.2,3.6,0.2c2.5,0,4.6-0.3,6.3-1.1c1.7-0.7,3-1.6,3.8-2.8c0.9-1.1,1.3-2.4,1.3-3.7c0-1.2-0.3-2.2-0.9-2.9c-0.6-0.7-1.4-1.3-2.5-1.7c-1.1-0.4-2.3-0.7-3.7-1l-7.3-1.4c-0.8-0.2-1.2-0.7-1.2-1.5v-1.5c1.3,0.6,2.8,0.9,4.7,0.9c2.7,0,4.7-0.6,6.1-1.9c1.4-1.2,2.1-2.8,2.1-4.8c0-1.6-0.4-2.9-1.3-4h5.2v-2.7L44.5,45C43.8,45.6,42.3,46.3,41.6,46.6z M35.4,56.3c-0.5,0.9-1.4,1.3-2.5,1.3c-1.1,0-1.9-0.4-2.4-1.3c-0.5-0.9-0.7-2.3-0.7-4.3c0-2,0.3-3.4,0.8-4.3c0.5-0.9,1.4-1.3,2.4-1.3c1.1,0,1.9,0.4,2.4,1.3c0.5,0.9,0.8,2.3,0.8,4.2C36.2,54,35.9,55.4,35.4,56.3z"
                />
                <path
                  fill="#FFFFFF"
                  d="M70.9,46.7c-1.5-0.8-3.2-1.3-5.2-1.3c-1.9,0-3.6,0.4-5.2,1.3c-1.5,0.8-2.7,2-3.6,3.6c-0.9,1.6-1.3,3.4-1.3,5.6c0,2.2,0.4,4,1.3,5.6c0.8,1.6,2,2.8,3.5,3.6c1.5,0.9,3.3,1.3,5.3,1.3c2.1,0,3.8-0.4,5.4-1.3c1.5-0.8,2.7-2,3.5-3.6c0.8-1.6,1.3-3.5,1.3-5.6c0-2.2-0.5-4.1-1.3-5.6C73.6,48.7,72.4,47.5,70.9,46.7z M69.4,61.6c-0.3,1.3-0.7,2.3-1.3,2.8c-0.6,0.5-1.4,0.8-2.4,0.8c-1,0-1.8-0.3-2.4-0.8c-0.6-0.5-1-1.5-1.3-2.8c-0.3-1.3-0.4-3.2-0.4-5.6c0-2.4,0.1-4.3,0.4-5.7c0.3-1.4,0.7-2.3,1.3-2.8c0.6-0.5,1.4-0.8,2.4-0.8c1,0,1.8,0.3,2.4,0.8c0.6,0.5,1.1,1.5,1.3,2.8c0.3,1.4,0.4,3.3,0.4,5.7C69.9,58.4,69.7,60.3,69.4,61.6z"
                />
                <path
                  fill="#FFFFFF"
                  d="M90.8,45.4c-2.3,0-4.4,0.7-6.3,2v-4.3l0.2-5.8l-0.8-0.5c-0.8,0.7-3,2.2-6.8,2.2v1c0.3,0,0.6,0,0.8,0.1c0.4,0.1,0.8,0.2,1,0.6c0.1,0.3,0.1,0.6,0.1,0.9v21.4c0,1.1-0.5,1.8-1.6,2.1L77,65.1v0.8l6.8,0.5l0.6-1.7c0.8,0.6,1.7,1,2.7,1.3c1,0.3,2.1,0.4,3.1,0.4c1.6,0,3-0.4,4.3-1.2c1.3-0.8,2.3-2,3.1-3.6c0.8-1.6,1.2-3.5,1.2-5.9c0-3.5-0.8-6.1-2.3-7.8C95,46.3,93.1,45.4,90.8,45.4z M92.3,61.1c-0.4,1.3-0.9,2.2-1.6,2.7c-0.7,0.5-1.5,0.8-2.4,0.8c-1.3,0-2.6-0.3-3.7-1v-15c1.3-0.7,2.6-1.1,3.8-1.1c0.9,0,1.7,0.2,2.4,0.7c0.7,0.5,1.2,1.4,1.5,2.6c0.4,1.2,0.5,3,0.5,5.2C92.9,58.1,92.7,59.9,92.3,61.1z"
                />
                <path
                  fill="#FFFFFF"
                  d="M119.1,63.9c-1.1,0-1.7-0.6-1.7-1.8V53c0-2.7-0.6-4.6-1.9-5.8c-1.3-1.2-3.2-1.8-5.6-1.8c-1.5,0-2.9,0.2-4.1,0.6c-1.3,0.4-2.3,1-3.1,1.7c-0.8,0.8-1.2,1.7-1.2,2.8c0,0.7,0.2,1.2,0.7,1.7c0.5,0.4,1,0.6,1.7,0.6c0.7,0,1.4-0.3,1.9-0.8c0.5-0.5,0.8-1.3,0.9-2.4l0.1-0.5c0.1-0.9,0.3-1.6,0.7-2c0.4-0.4,0.9-0.6,1.5-0.6h0.1c1,0,1.8,0.4,2.2,1.1c0.5,0.7,0.7,2,0.7,3.9v2.9c-0.6,0.1-1.2,0.2-1.8,0.3c-0.6,0.1-1.2,0.2-1.6,0.3c-2.7,0.5-4.8,1.3-6,2.4c-1.3,1.1-1.9,2.3-1.9,3.6c0,1.7,0.5,3,1.6,3.9c1.1,0.9,2.4,1.3,4,1.3c1.4,0,2.5-0.3,3.3-0.9c0.8-0.6,1.7-1.3,2.6-2.3c0.2,0.9,0.7,1.7,1.4,2.2c0.7,0.6,1.6,0.8,2.8,0.8c1,0,1.9-0.2,2.5-0.5c0.6-0.3,1.2-0.8,1.6-1.5l-0.4-0.5H119.1z M112,62.2c-0.7,0.6-1.4,1-1.9,1.2c-0.5,0.2-1,0.4-1.6,0.4c-0.8,0-1.4-0.3-2-0.8c-0.5-0.5-0.8-1.4-0.8-2.4c0-1.3,0.4-2.3,1.1-3c0.7-0.7,1.7-1.3,2.9-1.5c0.7-0.2,1.5-0.3,2.2-0.4V62.2z"
                />
                <path
                  fill="#FFFFFF"
                  d="M53.2,64.2c-0.2-0.3-0.3-0.8-0.3-1.3V43.2l0.2-5.8l-0.8-0.6c-0.7,0.6-2.9,2.3-6.9,2.3v0v0.4V40c0,0,1.6,0.1,1.9,0.6c0.1,0.3,0.1,0.6,0.1,1v15.7c0,0.9,0,1.9,0,2.8c0,0.9,0,1.9,0,2.8c0,1.1-0.5,1.8-1.4,2.1l-0.6,0.2v0.8h9.6v-0.8L54.3,65C53.8,64.8,53.4,64.6,53.2,64.2z"
                />
                <path
                  fill="#FFFFFF"
                  d="M130.2,65c-0.5-0.1-0.9-0.4-1.1-0.7c-0.2-0.3-0.3-0.8-0.3-1.3V43.2l0.2-5.8l-0.8-0.6c-0.7,0.6-2.9,2.3-6.9,2.3v1c0.5,0,0.9,0.1,1.4,0.2c0.2,0.1,0.4,0.2,0.5,0.4c0.1,0.3,0.1,0.6,0.1,0.9v15.7c0,0.9,0,1.9,0,2.8c0,0.9,0,1.9,0,2.8c0,1.1-0.5,1.8-1.4,2.1l-0.6,0.2v0.8h9.6v-0.8L130.2,65z"
                />
              </g>
            </svg>
          </Link>
        </div>

        {/* 3 Main Columns: Column 1 (Left), Column 2 (Middle), Column 3 (Newsletter Form) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Column 1: Get Involved & Ways to Give (md:col-span-3) */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <span className="text-xs font-semibold text-slate-300 block mb-2 font-sans border-b border-white/20 pb-1 max-w-[120px]">
                Get Involved
              </span>
              <div className="space-y-1 font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                <Link to="/get-involved/pray" className="hover:text-[#1EA5FC] transition-colors block">
                  Pray
                </Link>
                <Link to="/give" className="hover:text-[#1EA5FC] transition-colors block">
                  Give
                </Link>
                <Link to="/events" className="hover:text-[#1EA5FC] transition-colors block">
                  Events
                </Link>
              </div>
            </div>

            {/* Ways to Give */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-300 block mb-2 font-sans border-b border-white/20 pb-1 max-w-[140px]">
                {t('Ways to Give', 'የመስጠት መንገዶች')}
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                <li>
                  <Link to="/give" className="hover:text-[#1EA5FC] transition-colors">
                    {t('Sponsor an Event', 'ዝግጅትን ይደግፉ')}
                  </Link>
                </li>
                <li>
                  <Link to="/give#bank-details" className="hover:text-[#1EA5FC] transition-colors">
                    {t('Planned Giving', 'የታቀደ ስጦታ')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Icons matching Reference Exactly */}
            <div className="flex items-center gap-3 pt-3">
              {/* Facebook */}
              <a
                href="https://facebook.com/GlobalDisciplesEthiopia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 fill-[#1B99FF]" viewBox="0 0.712 24.833 24.682">
                  <path d="M12.417,0.712c6.858,0,12.417,5.558,12.417,12.417c0,6.198-4.54,11.334-10.477,12.266v-8.677h2.894l0.551-3.589h-3.444v-2.328c0-0.982,0.48-1.94,2.022-1.94h1.566V5.805c0,0-1.421-0.242-2.779-0.242c-2.837,0-4.689,1.719-4.689,4.831v2.736H7.324v3.589h3.153v8.677C4.54,24.463,0,19.327,0,13.129C0,6.271,5.558,0.712,12.417,0.712z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/globaldisciples"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 fill-[#1B99FF]" viewBox="0.383 0.639 24.834 24.83">
                  <path d="M12.795,6.68c-3.518,0-6.376,2.853-6.376,6.376c0,3.523,2.853,6.375,6.376,6.375c3.523,0,6.376-2.853,6.376-6.375C19.171,9.533,16.318,6.68,12.795,6.68z M12.795,17.189c-2.286,0-4.139-1.852-4.139-4.139c0-2.286,1.853-4.139,4.139-4.139s4.139,1.853,4.139,4.139C16.934,15.338,15.081,17.189,12.795,17.189z" />
                  <path d="M20.91,6.424c0,0.822-0.666,1.488-1.488,1.488c-0.821,0-1.488-0.666-1.488-1.488s0.667-1.488,1.488-1.488C20.244,4.936,20.91,5.602,20.91,6.424z" />
                  <path d="M12.795,0.639c-3.37,0-3.794,0.015-5.12,0.074c-1.32,0.059-2.222,0.271-3.011,0.576C3.847,1.604,3.157,2.033,2.467,2.723c-0.69,0.69-1.114,1.385-1.434,2.198c-0.306,0.788-0.518,1.69-0.577,3.016c-0.059,1.32-0.074,1.744-0.074,5.114c0,3.371,0.015,3.795,0.074,5.119c0.059,1.321,0.271,2.223,0.577,3.016c0.315,0.818,0.744,1.508,1.434,2.198c0.689,0.69,1.384,1.114,2.197,1.434c0.789,0.306,1.69,0.518,3.016,0.577c1.326,0.059,1.745,0.074,5.12,0.074c3.376,0,3.794-0.016,5.12-0.074c1.32-0.06,2.222-0.271,3.016-0.577c0.817-0.315,1.508-0.743,2.197-1.434s1.113-1.385,1.434-2.198c0.306-0.787,0.518-1.689,0.576-3.016c0.06-1.324,0.074-1.744,0.074-5.119s-0.015-3.794-0.074-5.119c-0.059-1.321-0.271-2.223-0.576-3.016c-0.315-0.818-0.744-1.508-1.434-2.198s-1.385-1.114-2.197-1.434c-0.789-0.305-1.69-0.517-3.016-0.576C16.589,0.654,16.166,0.639,12.795,0.639z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@globaldisciplesintl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <svg className="w-7 h-5 fill-[#1B99FF]" viewBox="0.766 0.645 29.547 20.817">
                  <path d="M29.691,3.902c-0.336-1.276-1.344-2.283-2.619-2.636c-2.3-0.621-11.533-0.621-11.533-0.621s-9.233,0-11.55,0.621C2.713,1.602,1.723,2.609,1.37,3.902c-0.604,2.317-0.604,7.152-0.604,7.152s0,4.835,0.621,7.151c0.336,1.275,1.343,2.283,2.619,2.636c2.3,0.621,11.533,0.621,11.533,0.621s9.233,0,11.55-0.621c1.276-0.336,2.267-1.343,2.619-2.636c0.604-2.316,0.604-7.151,0.604-7.151S30.313,6.219,29.691,3.902z M12.517,15.452V6.655l7.722,4.398L12.517,15.452z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/globaldisciples"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 fill-[#1B99FF]" viewBox="0 0 20 20">
                  <path d="M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM7.65 13.979h-1.944v-6.256h1.944v6.256zM6.666 6.955c-0.614 0-1.011-0.435-1.011-0.973 0-0.549 0.409-0.971 1.036-0.971s1.011 0.422 1.023 0.971c0 0.538-0.396 0.973-1.048 0.973zM14.75 13.979h-1.944v-3.467c0-0.807-0.282-1.355-0.985-1.355-0.537 0-0.856 0.371-0.997 0.728-0.052 0.127-0.065 0.307-0.065 0.486v3.607h-1.945v-4.26c0-0.781-0.025-1.434-0.051-1.996h1.689l0.089 0.869h0.039c0.256-0.408 0.883-1.010 1.932-1.010 1.279 0 2.238 0.857 2.238 2.699v3.699z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Get to Know Us, Connect, Participate (md:col-span-4) */}
          <div className="md:col-span-4 space-y-5">
            {/* Get to Know Us */}
            <div>
              <span className="text-xs font-semibold text-slate-300 block mb-1.5 font-sans border-b border-white/20 pb-1 max-w-[130px]">
                {t('Get to Know Us', 'ስለ እኛ ይወቁ')}
              </span>
              <ul className="space-y-1 text-xs sm:text-sm text-slate-200">
                <li>
                  <Link to="/about" className="hover:text-[#1EA5FC] transition-colors">
                    {t('About Us', 'ስለ እኛ')}
                  </Link>
                </li>
                <li>
                  <Link to="/give#transparency" className="hover:text-[#1EA5FC] transition-colors">
                    {t('Financials', 'የፋይናንስ መረጃ')}
                  </Link>
                </li>
                <li>
                  <Link to="/why-least-reached/our-beginnings" className="hover:text-[#1EA5FC] transition-colors">
                    {t('Our Origin', 'ጅማሬያችን')}
                  </Link>
                </li>
                <li>
                  <Link to="/stories" className="hover:text-[#1EA5FC] transition-colors">
                    {t('Blog', 'ብሎግ')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <span className="text-xs font-semibold text-slate-300 block mb-1.5 font-sans border-b border-white/20 pb-1 max-w-[130px]">
                {t('Connect', 'ይገናኙ')}
              </span>
              <ul className="space-y-1 text-xs sm:text-sm text-slate-200">
                <li>
                  <Link to="/contact" className="hover:text-[#1EA5FC] transition-colors">
                    {t('Contact Us', 'ያግኙን')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#1EA5FC] transition-colors">
                    {t('Request a Speaker', 'ተናጋሪ ይጠይቁ')}
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-[#1EA5FC] transition-colors">
                    {t('FAQ', 'ተደጋጋሚ ጥያቄዎች')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Participate */}
            <div>
              <span className="text-xs font-semibold text-slate-300 block mb-1.5 font-sans border-b border-white/20 pb-1 max-w-[130px]">
                {t('Participate', 'ይሳተፉ')}
              </span>
              <ul className="space-y-1 text-xs sm:text-sm text-slate-200">
                <li>
                  <Link to="/resources" className="hover:text-[#1EA5FC] transition-colors">
                    {t('Overseas', 'ዓለም አቀፍ')}
                  </Link>
                </li>
                <li>
                  <Link to="/about/partners" className="hover:text-[#1EA5FC] transition-colors">
                    {t('Church Resources', 'የቤተክርስቲያን ግብዓቶች')}
                  </Link>
                </li>
                <li>
                  <Link to="/get-involved/volunteer" className="hover:text-[#1EA5FC] transition-colors">
                    {t('Join Our Team', 'ቡድናችንን ይቀላቀሉ')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Newsletter Form Glass Card matching Reference (md:col-span-5) */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div
              className="w-full max-w-[420px] p-6 sm:p-7 border border-white/15 shadow-2xl"
              style={{
                background: 'rgba(0, 0, 0, 0.55)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
              }}
            >
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-4">
                {t('Sign up for our Newsletter', 'ለዜና መጽሔታችን ይመዝገቡ')}
              </h3>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    {t(
                      'Thank you for subscribing to Global Disciples frontline updates!',
                      'ለግሎባል ዲሳይፕልስ የግንባር ቀደም ዜናዎች ስለተመዘገቡ እናመሰግናለን!'
                    )}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-200 mb-1">
                      {t('First Name', 'ስም')}<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3 py-1.5 rounded bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6] border border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-200 mb-1">
                      {t('Last Name', 'የአባት ስም')}<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3 py-1.5 rounded bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6] border border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-200 mb-1">
                      {t('Email', 'ኢሜይል')}<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-1.5 rounded bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6] border border-transparent"
                    />
                  </div>

                  {/* Checkboxes matching reference */}
                  <div className="space-y-1 pt-1 text-xs text-slate-300">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.eNewsletter}
                        onChange={(e) => setFormData({ ...formData, eNewsletter: e.target.checked })}
                        className="rounded border-slate-300 text-[#0073E6] focus:ring-[#0073E6]"
                      />
                      <span>{t('E-Newsletter', 'የኢሜይል ዜና መጽሔት')}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.newsletterMail}
                        onChange={(e) => setFormData({ ...formData, newsletterMail: e.target.checked })}
                        className="rounded border-slate-300 text-[#0073E6] focus:ring-[#0073E6]"
                      />
                      <span>{t('Newsletter Mail', 'የፖስታ ዜና መጽሔት')}</span>
                    </label>
                  </div>

                  {/* reCAPTCHA Badge Simulation */}
                  <div className="p-2 rounded bg-white text-slate-700 flex items-center justify-between text-[11px] border border-slate-200 mt-2">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                      <span>protected by <strong>reCAPTCHA</strong></span>
                    </div>
                    <span className="text-slate-400 text-[10px]">Privacy - Terms</span>
                  </div>

                  {/* Blue Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2 rounded bg-[#0073E6] hover:bg-[#005bb5] text-white font-bold text-xs uppercase tracking-wide transition-colors shadow-md"
                    >
                      {t('Submit', 'ይላኩ')}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Site Info Bar */}
        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>{t('©2026 Global Disciples International', '©2026 ግሎባል ዲሳይፕልስ ኢንተርናሽናል')}</p>
          <p>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              {t('Privacy Policy', 'የግላዊነት ፖሊሲ')}
            </Link>
          </p>
          <p>
            Site by <span className="underline hover:text-white cursor-pointer">Crew</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
