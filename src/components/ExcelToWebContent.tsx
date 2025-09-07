import React from "react";
import {
  FileSpreadsheet,
  FileInput,
  FileOutput,
  Sliders,
  Link,
  UploadCloud,
  Code,
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
const functionsIcons = {
  "App logic in Excel": FileSpreadsheet,
  "Inputs": FileInput,
  "Outputs":  FileOutput,
  "Data storage":  Database,
  "Import & export of data":UploadCloud,
  "Integrations ": Link,
  "Security ":  Shield,
  "Adaptation": Sliders,
};
const ExcelToWebContent: React.FC = () => {
  return (
    <div className="min-h-screen  nordic-bg nordic-text">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-44 pb-20 px-4 ">
        {/* Decorative background elements */}
        <div className="hero-decoration hero-decoration-1"></div>
        <div className="hero-decoration hero-decoration-2"></div>
        <div className="hero-decoration hero-decoration-3"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fadeInUp">
            Transform Excel to
            <span className="nordic-text-primary block mt-2">
              Web Applications
            </span>
          </h1>
          <p className="text-xl md:text-2xl nordic-text-muted mb-12 max-w-3xl mx-auto animate-fadeInUp animate-delay-1">
            Turn your Excel files and Google Sheets into powerful web
            applications - no coding required. Just upload, and your spreadsheet
            becomes a professional web app.
          </p>
        </div>
      </section>

      {/* Main Features Overview */}
      <section className="py-16 px-4 bg-sectionBg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title nordic-text">
              Our solutions – tailored for you
            </h2>
            <p className="text-xl nordic-text-muted max-w-5xl mx-auto">
              At Molnify, we specialize in turning Excel files and spreadsheets
              into Web applications. We know every business has unique needs,
              and our focus is on creating tailored solutions that help you
              achieve your goals and improve processes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Device Icons */}

            <div className="text-center">
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

            <div className="text-center">
              <div className="flex justify-center gap-4 mb-6">
                <Monitor className="w-8 h-8 nordic-text-primary" />
                <Tablet className="w-8 h-8 nordic-text-secondary" />
                <Smartphone className="w-8 h-8 nordic-text-muted" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 nordic-text">
                Into elegant and efficient web app solutions
              </h3>
              <p className="nordic-text-muted">
                With Molnify, an Excel file becomes a secure and professional
                web application. We deliver customized solutions tailored to
                your company's needs, making your Excel models more
                user-friendly and protected.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center gap-4 mb-6">
                <MessageSquare className="w-8 h-8 nordic-text-primary" />
                <Mail className="w-8 h-8 nordic-text-secondary" />
                <Users className="w-8 h-8 nordic-text-muted" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 nordic-text">
                Share and collaborate.
              </h3>
              <p className="nordic-text-muted">
                Send it to your best friends and your grandma. It'll work on
                their computers and phones. Send it to your best friends and
                your grandma. It'll work on their computers and phones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title nordic-text">
              Getting started is easy
            </h2>
            <p className="text-xl nordic-text-muted">
              Build your web application without any programming skills,
              directly in Excel or Google Sheets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 min-h-full">
            <div className="nordic-card rounded-lg p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 nordic-gradient-1 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 nordic-text">
                Inputs
              </h3>
              <p className="nordic-text-muted mb-6">
                Inputs are the parts of your app that you want the user to be
                able to interact with. It can be text fields, sliders, menus,
                buttons and much more.
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
                Output boxes are great for showing results and can include logic
                and functions. You can build apps just like in Excel or Google
                Sheets.
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
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 px-4 bg-sectionBg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title nordic-text">
              More than 200 functions
            </h2>
            <p className="text-xl nordic-text-muted">
              Molnify supports more than 200 Excel and Google Sheets functions.
              These include SUM, COUNTIF, IF/ELSE, SUMPRODUCT, VLOOKUP, and
              many, many more.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            
            <div className="service-card service-card-1 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <FileSpreadsheet className="w-8 h-8 nordic-text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 nordic-text">
                App logic in Excel
              </h3>
              <p className="nordic-text-muted text-sm">
                Your application's logic is contained entirely in your
                Excel/Sheets file. There are no other dependencies.
              </p>
            </div>

            <div className="service-card service-card-2 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <FileInput className="w-8 h-8 nordic-text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 nordic-text">Inputs</h3>
              <p className="nordic-text-muted text-sm">
                Inputs allow your user to interact with your application. Among
                Molnify's standard inputs are text fields, buttons, sliders,
                dropdown menus, and date/time pickers.
              </p>
            </div>

            <div className="service-card service-card-3 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/20 dark:to-green-800/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <FileOutput className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 nordic-text">
                Outputs
              </h3>
              <p className="nordic-text-muted text-sm">
                Outputs are used to display results in various ways, from simple
                values ​​to complex charts. You can also customize the content
                and style with an HTML panel.
              </p>
            </div>

           
            <div className="service-card service-card-1 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                < Database className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 nordic-text">
                Data storage
              </h3>
              <p className="nordic-text-muted text-sm">
                Flexible data storage with the ability to read and write to different types of data storage options such as Google Sheets, SQL databases and APIs.
              </p>
            </div>

            <div className="service-card service-card-2 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <UploadCloud className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibary mb-4 nordic-text">
                Import & export of data
              </h3>
              <p className="nordic-text-muted text-sm">
               Let your application import and export data. Generate PDFs and Excel files based on templates designed by you or construct processes for automatic import and export of data.
              </p>
            </div>

            <div className="service-card service-card-3 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/20 dark:to-red-800/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Link className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 nordic-text">
                Integrations
              </h3>
              <p className="nordic-text-muted text-sm">
               Integrate your Molnify app with a list of services such as email, SMS, Slack, Teams. Integrate with literally any API that supports HTTP POST/GET.
              </p>
            </div>

            <div className="service-card service-card-3 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/20 dark:to-red-800/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 nordic-text">
                Security
              </h3>
              <p className="nordic-text-muted text-sm">
               All data is encrypted, and you can easily restrict access to your apps to selected users. Molnify supports login with email/password, Google account, and Microsoft account, Token Authentication, as well as various types of SSO (Single Sign-On).
              </p>
            </div>

            <div className="service-card service-card-3 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/20 dark:to-red-800/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Sliders className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 nordic-text">
                Adaptation
              </h3>
              <p className="nordic-text-muted text-sm">
              Paste CSS code directly into the Excel file to customize your app just the way you want. Add your logo and colors. Write your JavaScript code directly in the Excel file or let us host your code separately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExcelToWebContent;
