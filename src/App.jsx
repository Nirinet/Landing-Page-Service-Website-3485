import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './common/SafeIcon';
import InteractiveForm from './components/InteractiveForm';
import './App.css';

const { FiArrowDown, FiCheck, FiStar, FiLayout, FiSearch, FiSmartphone, FiFileText, FiZap, FiShield } = FiIcons;

function App() {
  const [showForm, setShowForm] = useState(false);

  const features = [
    {
      title: "עיצוב מותאם אישית",
      description: "נתאים את העיצוב לזהות המותג שלך",
      icon: FiLayout
    },
    {
      title: "אופטימיזציה למנועי חיפוש",
      description: "נמקסם את החשיפה שלך בגוגל",
      icon: FiSearch
    },
    {
      title: "מותאם לנייד",
      description: "נוודא שהעמוד נראה מושלם בכל מכשיר",
      icon: FiSmartphone
    },
    {
      title: "טפסים חכמים",
      description: "נשלב טפסי לידים אפקטיביים",
      icon: FiFileText
    },
    {
      title: "מהירות טעינה",
      description: "ביצועים מהירים לחוויית משתמש מעולה",
      icon: FiZap
    },
    {
      title: "אבטחה מתקדמת",
      description: "הגנה מלאה על המידע שלך ושל הלקוחות",
      icon: FiShield
    }
  ];

  const testimonials = [
    {
      name: "רונן כהן",
      business: "מאמן כושר אישי",
      text: "תוך שבוע הכפלתי את כמות הלידים! העמוד פשוט עובד מצוין",
      rating: 5
    },
    {
      name: "מיכל לוי",
      business: "קוסמטיקאית",
      text: "ההשקעה הכי טובה שעשיתי לעסק. התוצאות מדברות בעד עצמן",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-indigo-50" dir="rtl">
      {/* Rest of the JSX remains the same... */}
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <img src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752758360210-sitechs_logo_one-line.png" 
                 alt="Sitechs" 
                 className="h-12" />
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#features" className="text-blue-800 hover:text-blue-600 transition-colors font-medium">יתרונות</a>
              <a href="#process" className="text-blue-800 hover:text-blue-600 transition-colors font-medium">איך זה עובד</a>
              <a href="#form" className="text-blue-800 hover:text-blue-600 transition-colors font-medium">צור עמוד</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjU2M2ViMTAiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-800 via-blue-600 to-teal-500 bg-clip-text text-transparent">
              עמוד נחיתה מקצועי
              <br />
              <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                רק ב-1000 ₪
              </span>
            </h1>
            <p className="text-xl text-blue-800 mb-8 max-w-3xl mx-auto">
              צור עמוד נחיתה מותאם אישית שימשוך לקוחות חדשים לעסק שלך
              <br />
              <span className="font-semibold">תוך 5 ימי עבודה בלבד!</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)]"
              onClick={() => {
                document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
                setShowForm(true);
              }}
            >
              צור עמוד נחיתה עכשיו
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-4">
              למה לבחור בנו?
            </h2>
            <p className="text-xl text-blue-600">
              מקבלים הרבה יותר מסתם עמוד נחיתה
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.1)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.2)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <div className="relative">
                  <div className="text-blue-600 mb-4 transform transition-transform group-hover:scale-110">
                    <SafeIcon icon={feature.icon} className="text-4xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-blue-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmMTAiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          {showForm ? (
            <InteractiveForm />
          ) : (
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowForm(true)}
                className="bg-white text-blue-600 px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-blue-50"
              >
                התחל ליצור עמוד נחיתה
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-12">
              מה הלקוחות אומרים
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.1)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.2)] transition-all duration-300"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <SafeIcon key={i} icon={FiStar} className="text-blue-500 text-xl fill-current" />
                    ))}
                  </div>
                  <p className="text-blue-800 mb-4 text-lg">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-blue-900">{testimonial.name}</p>
                    <p className="text-blue-600">{testimonial.business}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752758389840-Square-logo-512x512.png"
                alt="Sitechs Logo"
                className="h-16 mb-4"
              />
              <p className="text-blue-200">פתרונות דיגיטליים מתקדמים לעסקים</p>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold mb-4 text-blue-100">צור קשר</h3>
              <p className="text-blue-200">טלפון: XXX-XXXXXXX</p>
              <p className="text-blue-200">אימייל: info@sitechs.co.il</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-800/50 text-center text-blue-200">
            <p>© {new Date().getFullYear()} Sitechs. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;