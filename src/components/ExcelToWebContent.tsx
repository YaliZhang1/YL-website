import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  FileSpreadsheet,
  FileInput,
  FileOutput,
  Sliders,
  Link,
  UploadCloud,
  Award,
  Database,
  Users,
  Shield,
  Zap,
  Smartphone,
  Monitor,
  Tablet,
  Calculator,
  PieChart,
  BarChart3,
  MessageSquare,
  Mail,
  Clock,
} from "lucide-react";
import { FadeInWhenVisible, animations } from "@/components/FadeInWhenVisible";
const functionsIcons = {
  "App logic in Excel": FileSpreadsheet,
  Inputs: FileInput,
  Outputs: FileOutput,
  "Data storage": Database,
  "Import & export of data": UploadCloud,
  Integrations: Link,
  Security: Shield,
  Adaptation: Sliders,
};
const functionsContent = {
  "App logic in Excel":
    "Your application's logic is contained entirely in your Excel/Sheets file. There are no other dependencies.",
  Inputs:
    "Inputs allow your user to interact with your application. Among Molnify's standard inputs are text fields, buttons, sliders, dropdown menus, and date/time pickers.",
  Outputs:
    "Outputs are used to display results in various ways, from simple values ​​to complex charts. You can also customize the content and style with an HTML panel.",
  "Data storage":
    "Flexible data storage with the ability to read and write to different types of data storage options such as Google Sheets, SQL databases and APIs.",
  "Import & export of data":
    "Let your application import and export data. Generate PDFs and Excel files based on templates designed by you or construct processes for automatic import and export of data.",
  Integrations:
    "Integrate your Molnify app with a list of services such as email, SMS, Slack, Teams. Integrate with literally any API that supports HTTP POST/GET.",
  Security:
    "All data is encrypted, and you can easily restrict access to your apps to selected users. Molnify supports login with email/password, Google account, and Microsoft account, Token Authentication, as well as various types of SSO (Single Sign-On).",
  Adaptation:
    "Paste CSS code directly into the Excel file to customize your app just the way you want. Add your logo and colors. Write your JavaScript code directly in the Excel file or let us host your code separately.",
};

const FunctionCard = ({ functionName, index, triggerAnimation }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const Icon = functionsIcons[functionName] || Award;

  useEffect(() => {
    if (triggerAnimation && !shouldAnimate) {
      const timer = setTimeout(() => setShouldAnimate(true), 200 + index * 150);
      return () => clearTimeout(timer);
    }
  }, [triggerAnimation, index, shouldAnimate]);

  return (
    <div
      className={`transition-all duration-700 transform h-full flex flex-col ${
        shouldAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`service-card service-card-1 rounded-lg p-8 text-center flex flex-col flex-1 ${
          isHovered ? "transform -translate-y-2" : ""
        }`}
      >
        {/* Background light effect */}
        <div
          className={`
          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
          bg-gradient-to-br from-blue-100/40 to-indigo-50/20
          transition-opacity duration-500
        `}
        />
        {/* Content Area */}
        <div className="relative z-10">
          <div className="flex flex-col items-center text-center ">
            <div
              className={`w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg flex items-center justify-center mx-auto mb-6 ${
                isHovered ? "scale-110" : ""
              }
              }`}
            >
              <Icon className="w-8 h-8 nordic-text-primary " />
            </div>
            <h3 className="text-xl font-semibold mb-4 nordic-text">
              {functionName}
            </h3>
            <p className="nordic-text-muted text-sm">
              {functionsContent[functionName]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ExcelToWebContent() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const sectionRef = useRef(null);
  const functionNames = [
    "App logic in Excel",
    "Inputs",
    "Outputs",
    "Data storage",
    "Import & export of data",
    "Integrations",
    "Security",
    "Adaptation",
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTriggerAnimation(true);
          }
        });
      },
      {
        threshold: 0.1, // Fires when 10% of the section enters the viewport
        rootMargin: "-50px 0px", // Optional: Adjust the trigger boundaries
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
  
      <div ref={sectionRef} className=" nordic-bg nordic-text ">
        {/* Background decoration*/}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />
        <div>
          {/* Hero Section */}
          <section className="relative  nordic-gradient-3 pt-44 pb-16 px-8">
            <FadeInWhenVisible variants={animations.fadeUp}>
              <div className="max-w-6xl mx-auto text-center relative z-10">
                <h1 className="page-title text-white ">
                  Transform{" "}
                  <span className="text-transparent bg-clip-text nordic-gradient-0 ">
                    Excel{" "}
                  </span>
                  to{" "}
                  <span className="text-transparent bg-clip-text nordic-gradient-0 ">
                    Web Applications
                  </span>
                </h1>
                <p className="page-description text-whiteGrey mb-6  ">
                  Turn your Excel files and Google Sheets into powerful web
                  applications - no coding required. Just upload, and your
                  spreadsheet becomes a professional web app.
                </p>
              </div>
            </FadeInWhenVisible>
          </section>

          {/* Main Features Overview */}
          <section className="py-16 px-8  bg-sectionBg">
            <div className="max-w-6xl mx-auto">
              <FadeInWhenVisible variants={animations.fadeUp}>
                <div className="text-center mb-16">
                  <h2 className="section-title text-text">
                    Our solutions –
                    <span className="color-section-title">tailored</span> for
                    you
                  </h2>
                  <p className="text-xl nordic-text-muted max-w-5xl mx-auto">
                    At Molnify, we specialize in turning Excel files and
                    spreadsheets into Web applications. We know every business
                    has unique needs, and our focus is on creating tailored
                    solutions that help you achieve your goals and improve
                    processes.
                  </p>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible variants={animations.fadeLeft}>
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Device Icons */}

                  <div className="text-center nordic-card rounded-lg p-8  group hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center gap-4 mb-6">
                      <Calculator className="w-8 h-8 nordic-text-primary" />
                      <PieChart className="w-8 h-8 nordic-text-secondary" />
                      <BarChart3 className="w-8 h-8 nordic-text-muted" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 nordic-text">
                      Convert outdated and clunky Excel files
                    </h3>
                    <p className="nordic-text-muted">
                      Create robust and interactive web applications without any
                      programming knowledge. Solve complex problems and simplify
                      administrative processes in record time.
                    </p>
                  </div>

                  <div className="text-center nordic-card rounded-lg p-8  group hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center gap-4 mb-6">
                      <Monitor className="w-8 h-8 nordic-text-primary" />
                      <Tablet className="w-8 h-8 nordic-text-secondary" />
                      <Smartphone className="w-8 h-8 nordic-text-muted" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 nordic-text">
                      Into elegant and efficient web app solutions
                    </h3>
                    <p className="nordic-text-muted">
                      With Molnify, an Excel file becomes a secure and
                      professional web application. We deliver customized
                      solutions tailored to your company's needs, making your
                      Excel models more user-friendly and protected.
                    </p>
                  </div>
                  <div className="text-center nordic-card rounded-lg p-8  group hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center gap-4 mb-6">
                      <MessageSquare className="w-8 h-8 nordic-text-primary" />
                      <Mail className="w-8 h-8 nordic-text-secondary" />
                      <Users className="w-8 h-8 nordic-text-muted" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 nordic-text">
                      Share and collaborate.
                    </h3>
                    <p className="nordic-text-muted">
                      Send it to your best friends and your grandma. It'll work
                      on their computers and phones. Send it to your best
                      friends and your grandma. It'll work on their computers
                      and phones.
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </section>

          {/* Feature Cards Section */}
          <section className="py-16 px-8 bg-gray-50 dark:bg-gray-900/20">
            <div className="max-w-6xl mx-auto">
              <FadeInWhenVisible variants={animations.fadeUp}>
                <div className="text-center mb-16">
                  <h2 className="section-title text-text">
                    <span className="color-section-title">
                      Getting started{" "}
                    </span>
                    is easy
                  </h2>
                  <p className="text-xl nordic-text-muted">
                    Build your web application without any programming skills,
                    directly in Excel or Google Sheets.
                  </p>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible variants={animations.fadeRight}>
                <div className="grid md:grid-cols-3 gap-8 min-h-full">
                  <div className="nordic-card rounded-lg p-8 text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 nordic-gradient-1 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 nordic-text">
                      Inputs
                    </h3>
                    <p className="nordic-text-muted mb-6">
                      Inputs are the parts of your app that you want the user to
                      be able to interact with. It can be text fields, sliders,
                      menus, buttons and much more.
                    </p>
                    <div className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
                      <img
                        src="img/molnify-inputs-1024x699.png"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="nordic-card rounded-lg p-8 text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 nordic-gradient-2 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 nordic-text">
                      Output boxes
                    </h3>
                    <p className="nordic-text-muted mb-6">
                      Output boxes are great for showing results and can include
                      logic and functions. You can build apps just like in Excel
                      or Google Sheets.
                    </p>
                    <div className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-md">
                      <img
                        src="img/monlify-output-boxar-1024x699.png"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="nordic-card rounded-lg p-8 text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 nordic-gradient-3 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 nordic-text">
                      Charts
                    </h3>
                    <p className="nordic-text-muted mb-6">
                      Add a charts and tables to present your data.
                    </p>
                    <div className="w-full h-32 mt-12 bg-gray-200 dark:bg-gray-700 rounded-md">
                      <img
                        src="img/molnify-diagram-1024x699.png"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </section>

          {/* Advanced Features */}
          <section className="py-16 px-8 bg-sectionBg">
            <div className="max-w-6xl mx-auto">
              <FadeInWhenVisible variants={animations.fadeUp}>
                <div className="text-center mb-16">
                  <h2 className="section-title text-text">
                    More than
                    <span className="color-section-title">200 functions</span>
                  </h2>
                  <p className="text-xl nordic-text-muted">
                    Molnify supports more than 200 Excel and Google Sheets
                    functions. These include SUM, COUNTIF, IF/ELSE, SUMPRODUCT,
                    VLOOKUP, and many, many more.
                  </p>
                </div>
              </FadeInWhenVisible>

              {/* Card Grid */}
              <FadeInWhenVisible variants={animations.fadeUpSpring}>
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-1 items-stretch max-w-7xl">
                  {functionNames.map((functionName, index) => (
                    <div
                      key={functionName}
                      className="flex flex-col rounded-lg p-3 text-center  h-full"
                    >
                      <FunctionCard
                        functionName={functionName}
                        index={index}
                        triggerAnimation={triggerAnimation}
                      />
                    </div>
                  ))}
                </div>
              </FadeInWhenVisible>
            </div>
          </section>
        </div>
      </div>
   
  );
}
