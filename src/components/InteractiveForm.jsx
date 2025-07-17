import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUpload, FiArrowLeft, FiArrowRight } = FiIcons;

const InteractiveForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    hasPhysicalStore: 'no',
    branches: [],
    phone: '',
    hasLogo: 'no',
    logo: null,
    colors: [],
    images: [],
    targetAudience: '',
    uniqueValue: '',
    mainServices: '',
    websiteExists: 'no',
    websiteUrl: '',
    socialMedia: [],
    name: '',
    email: '',
    contactPhone: ''
  });

  const questions = [
    {
      id: 'businessName',
      title: 'מה שם העסק שלך?',
      type: 'text',
      placeholder: 'הכנס את שם העסק'
    },
    {
      id: 'businessType',
      title: 'במה העסק עוסק?',
      type: 'textarea',
      placeholder: 'ספר לנו על העסק שלך'
    },
    {
      id: 'hasPhysicalStore',
      title: 'האם יש לעסק סניף פיזי?',
      type: 'radio',
      options: [
        { value: 'yes', label: 'כן' },
        { value: 'no', label: 'לא' }
      ]
    },
    {
      id: 'branches',
      title: 'מה כתובות הסניפים?',
      type: 'dynamic-list',
      placeholder: 'הכנס כתובת סניף',
      condition: (data) => data.hasPhysicalStore === 'yes'
    },
    {
      id: 'phone',
      title: 'מה מספר הטלפון אליו יתקשרו הלקוחות?',
      type: 'tel',
      placeholder: 'הכנס מספר טלפון'
    },
    {
      id: 'hasLogo',
      title: 'האם יש לעסק לוגו?',
      type: 'radio',
      options: [
        { value: 'yes', label: 'כן' },
        { value: 'no', label: 'לא' }
      ]
    },
    {
      id: 'logo',
      title: 'העלה את הלוגו',
      type: 'file',
      accept: 'image/*',
      condition: (data) => data.hasLogo === 'yes'
    },
    {
      id: 'colors',
      title: 'מה הצבעים שמייצגים את העסק שלך?',
      type: 'color-picker',
      multiple: true
    },
    {
      id: 'images',
      title: 'האם יש תמונות שתרצה להציג בעמוד?',
      type: 'file',
      multiple: true,
      accept: 'image/*'
    },
    {
      id: 'targetAudience',
      title: 'מי קהל היעד שלך?',
      type: 'textarea',
      placeholder: 'תאר את הלקוחות האידיאליים שלך'
    },
    {
      id: 'uniqueValue',
      title: 'מה הערך הייחודי שהעסק שלך מציע?',
      type: 'textarea',
      placeholder: 'מה מייחד אותך מהמתחרים?'
    },
    {
      id: 'mainServices',
      title: 'מה השירותים העיקריים שהעסק מציע?',
      type: 'textarea',
      placeholder: 'פרט את השירותים המרכזיים'
    },
    {
      id: 'websiteExists',
      title: 'האם יש לך כבר אתר אינטרנט?',
      type: 'radio',
      options: [
        { value: 'yes', label: 'כן' },
        { value: 'no', label: 'לא' }
      ]
    },
    {
      id: 'websiteUrl',
      title: 'מה כתובת האתר הקיים?',
      type: 'url',
      placeholder: 'https://',
      condition: (data) => data.websiteExists === 'yes'
    },
    {
      id: 'socialMedia',
      title: 'באילו רשתות חברתיות העסק שלך פעיל?',
      type: 'checkbox',
      options: [
        { value: 'facebook', label: 'פייסבוק' },
        { value: 'instagram', label: 'אינסטגרם' },
        { value: 'linkedin', label: 'לינקדאין' },
        { value: 'tiktok', label: 'טיקטוק' }
      ]
    },
    {
      id: 'contactDetails',
      title: 'פרטי התקשרות',
      type: 'contact',
      fields: [
        { id: 'name', type: 'text', placeholder: 'שם מלא' },
        { id: 'email', type: 'email', placeholder: 'אימייל' },
        { id: 'contactPhone', type: 'tel', placeholder: 'טלפון' }
      ]
    }
  ];

  const handleInputChange = (id, value) => {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFileUpload = (id, files) => {
    if (files.length > 0) {
      const fileArray = Array.from(files).map(file => URL.createObjectURL(file));
      handleInputChange(id, fileArray);
    }
  };

  const currentQuestion = questions[step];
  const isLastStep = step === questions.length - 1;

  const renderInput = () => {
    if (!currentQuestion) return null;

    switch (currentQuestion.type) {
      case 'text':
      case 'tel':
      case 'url':
        return (
          <input
            type={currentQuestion.type}
            value={formData[currentQuestion.id] || ''}
            onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
            placeholder={currentQuestion.placeholder}
            className="w-full px-4 py-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        );

      case 'textarea':
        return (
          <textarea
            value={formData[currentQuestion.id] || ''}
            onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
            placeholder={currentQuestion.placeholder}
            className="w-full px-4 py-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent min-h-[100px]"
            required
          />
        );

      case 'radio':
        return (
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <label key={option.value} className="flex items-center space-x-3 space-x-reverse">
                <input
                  type="radio"
                  value={option.value}
                  checked={formData[currentQuestion.id] === option.value}
                  onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                  className="form-radio text-teal-500 focus:ring-teal-500"
                  required
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        );

      case 'file':
        return (
          <div className="w-full">
            <label className="flex flex-col items-center px-4 py-6 border-2 border-teal-300 border-dashed rounded-lg cursor-pointer hover:bg-teal-50 transition-colors">
              <SafeIcon icon={FiUpload} className="text-3xl text-teal-500 mb-2" />
              <span className="text-sm text-gray-600">לחץ או גרור קבצים לכאן</span>
              <input
                type="file"
                className="hidden"
                accept={currentQuestion.accept}
                multiple={currentQuestion.multiple}
                onChange={(e) => handleFileUpload(currentQuestion.id, e.target.files)}
              />
            </label>
            {formData[currentQuestion.id]?.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {formData[currentQuestion.id].map((file, index) => (
                  <div key={index} className="relative">
                    <img src={file} alt="" className="w-full h-24 object-cover rounded-lg" />
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-4">
            {currentQuestion.fields.map((field) => (
              <input
                key={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.id] || ''}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                className="w-full px-4 py-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-6"
      >
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800">{currentQuestion?.title}</h3>
          <span className="text-sm text-gray-500">שלב {step + 1} מתוך {questions.length}</span>
        </div>

        <div className="min-h-[200px]">
          {renderInput()}
        </div>

        <div className="flex justify-between pt-6">
          <button
            onClick={() => setStep(prev => Math.max(0, prev - 1))}
            disabled={step === 0}
            className="flex items-center px-6 py-3 text-teal-600 hover:text-teal-700 disabled:opacity-50"
          >
            <SafeIcon icon={FiArrowRight} className="ml-2" />
            הקודם
          </button>

          <button
            onClick={() => {
              if (isLastStep) {
                // Handle form submission
                console.log('Form submitted:', formData);
              } else {
                setStep(prev => Math.min(questions.length - 1, prev + 1));
              }
            }}
            className="flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
          >
            {isLastStep ? 'סיום והזמנה' : (
              <>
                הבא
                <SafeIcon icon={FiArrowLeft} className="mr-2" />
              </>
            )}
          </button>
        </div>
      </motion.div>

      <div className="mt-8 bg-teal-50 p-4 rounded-lg">
        <div className="flex items-center text-teal-700">
          <SafeIcon icon={FiIcons.FiInfo} className="ml-2" />
          <p className="text-sm">המידע שתספק יעזור לנו ליצור עמוד נחיתה מותאם אישית שישרת את העסק שלך בצורה הטובה ביותר</p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveForm;