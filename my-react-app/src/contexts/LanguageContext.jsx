import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    home: "Home",
    about: "About",
    vision: "Our Vision",
    mission: "Our Mission",
    values: "Our Values",
    whyShiksha: "Why Shiksha?",
    registration: "Registration",
    students: "Students",
    teachers: "Teachers",
    experts: "Experts",
    services: "Services",
    online: "Online",
    offline: "Offline",
    classroom: "Classroom",
    softwareDev: "Software Development",
    generalStudies: "General Studies",
    currentAffairs: "Current Affairs",
    counselling: "Counselling",
    forum: "Forum",
    redditRef: "Reddit-Ref",
    training: "Training",
    placements: "Placements",
    contact: "Contact",
    searchPlaceholder: "Search courses, teachers, topics...",
    login: "Login",
    signup: "Signup",
    loginTitle: "Login",
    signupTitle: "Sign Up",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    firstName: "First Name",
    lastName: "Last Name",
    address: "Address",
    class: "Class",
    subjectStream: "Subject Stream",
    selectClass: "Select Class",
    selectSubject: "Select Subject",
    science: "Science",
    arts: "Arts",
    commerce: "Commerce",
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: "Already have an account?",
    language: "EN"
  },
  hi: {
    home: "होम",
    about: "हमारे बारे में",
    vision: "हमारा विजन",
    mission: "हमारा मिशन",
    values: "हमारे मूल्य",
    whyShiksha: "शिक्षा क्यों?",
    registration: "पंजीकरण",
    students: "छात्र",
    teachers: "शिक्षक",
    experts: "विशेषज्ञ",
    services: "सेवाएं",
    online: "ऑनलाइन",
    offline: "ऑफलाइन",
    classroom: "कक्षा",
    softwareDev: "सॉफ्टवेयर विकास",
    generalStudies: "सामान्य अध्ययन",
    currentAffairs: "वर्तमान मामले",
    counselling: "परामर्श",
    forum: "फोरम",
    redditRef: "रेडिट-रेफ",
    training: "प्रशिक्षण",
    placements: "नियुक्ति",
    contact: "संपर्क",
    searchPlaceholder: "कोर्स, शिक्षक, विषय खोजें...",
    login: "लॉगिन",
    signup: "साइन अप",
    loginTitle: "लॉगिन",
    signupTitle: "साइन अप",
    email: "ईमेल",
    password: "पासवर्ड",
    confirmPassword: "पासवर्ड की पुष्टि करें",
    firstName: "पहला नाम",
    lastName: "अंतिम नाम",
    address: "पता",
    class: "कक्षा",
    subjectStream: "विषय स्ट्रीम",
    selectClass: "कक्षा चुनें",
    selectSubject: "विषय चुनें",
    science: "विज्ञान",
    arts: "कला",
    commerce: "वाणिज्य",
    dontHaveAccount: "खाता नहीं है?",
    alreadyHaveAccount: "पहले से खाता है?",
    language: "हिंदी"
  }
};

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
  switchLanguage: () => {},
});

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || key;
  };

  const switchLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};