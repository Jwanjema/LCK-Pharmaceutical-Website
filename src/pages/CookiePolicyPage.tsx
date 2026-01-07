import { motion } from 'framer-motion';

export function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-[#003366] mb-4">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: January 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                This Cookie Policy explains how LCK Pharmaceutical Consulting ("we", "us", or "our") uses cookies and 
                similar technologies to recognize you when you visit our website at lckpharma.com ("Website"). It 
                explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              <p className="text-gray-700 mb-4">
                In some cases we may use cookies to collect personal information, or that becomes personal information 
                if we combine it with other information. In such cases our Privacy Policy will apply in addition to this 
                Cookie Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">2. What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
                Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, 
                as well as to provide reporting information.
              </p>
              <p className="text-gray-700 mb-4">
                Cookies set by the website owner (in this case, LCK Pharmaceutical Consulting) are called "first party 
                cookies". Cookies set by parties other than the website owner are called "third party cookies". Third 
                party cookies enable third party features or functionality to be provided on or through the website 
                (e.g. like advertising, interactive content and analytics). The parties that set these third party cookies 
                can recognize your computer both when it visits the website in question and also when it visits certain 
                other websites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">3. Why Do We Use Cookies?</h2>
              <p className="text-gray-700 mb-4">
                We use first and third party cookies for several reasons. Some cookies are required for technical reasons 
                in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. 
                Other cookies also enable us to track and target the interests of our users to enhance the experience on 
                our Website. Third parties serve cookies through our Website for advertising, analytics and other purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">4. Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#003366] mb-3">Essential Website Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies are strictly necessary to provide you with services available through our Website and to 
                  use some of its features, such as access to secure areas.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700"><strong>Name:</strong> __Secure-SessionID</p>
                  <p className="text-sm text-gray-700"><strong>Purpose:</strong> Maintains user session state</p>
                  <p className="text-sm text-gray-700"><strong>Provider:</strong> lckpharma.com</p>
                  <p className="text-sm text-gray-700"><strong>Type:</strong> HTTP Cookie</p>
                  <p className="text-sm text-gray-700"><strong>Expires in:</strong> Session</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#003366] mb-3">Performance and Analytics Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies are used to enhance the performance and functionality of our Website but are non-essential 
                  to their use. However, without these cookies, certain functionality may become unavailable.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-3">
                  <p className="text-sm text-gray-700"><strong>Name:</strong> _ga</p>
                  <p className="text-sm text-gray-700"><strong>Purpose:</strong> Records a unique ID to generate statistics about how the visitor uses the website</p>
                  <p className="text-sm text-gray-700"><strong>Provider:</strong> Google Analytics</p>
                  <p className="text-sm text-gray-700"><strong>Type:</strong> HTTP Cookie</p>
                  <p className="text-sm text-gray-700"><strong>Expires in:</strong> 2 years</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-3">
                  <p className="text-sm text-gray-700"><strong>Name:</strong> _gid</p>
                  <p className="text-sm text-gray-700"><strong>Purpose:</strong> Registers a unique ID to generate statistics</p>
                  <p className="text-sm text-gray-700"><strong>Provider:</strong> Google Analytics</p>
                  <p className="text-sm text-gray-700"><strong>Type:</strong> HTTP Cookie</p>
                  <p className="text-sm text-gray-700"><strong>Expires in:</strong> 1 day</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700"><strong>Name:</strong> _gat</p>
                  <p className="text-sm text-gray-700"><strong>Purpose:</strong> Used by Google Analytics to throttle request rate</p>
                  <p className="text-sm text-gray-700"><strong>Provider:</strong> Google Analytics</p>
                  <p className="text-sm text-gray-700"><strong>Type:</strong> HTTP Cookie</p>
                  <p className="text-sm text-gray-700"><strong>Expires in:</strong> 1 minute</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#003366] mb-3">Functionality Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies are used to recognize you when you return to our Website. This enables us to personalize 
                  our content for you, greet you by name and remember your preferences (for example, your choice of 
                  language or region).
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700"><strong>Name:</strong> user_preferences</p>
                  <p className="text-sm text-gray-700"><strong>Purpose:</strong> Stores user preferences and settings</p>
                  <p className="text-sm text-gray-700"><strong>Provider:</strong> lckpharma.com</p>
                  <p className="text-sm text-gray-700"><strong>Type:</strong> HTTP Cookie</p>
                  <p className="text-sm text-gray-700"><strong>Expires in:</strong> 1 year</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#003366] mb-3">Targeting and Advertising Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies record your visit to our Website, the pages you have visited and the links you have 
                  followed. We will use this information to make our Website and the advertising displayed on it more 
                  relevant to your interests. We may also share this information with third parties for this purpose.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700"><strong>Name:</strong> _fbp</p>
                  <p className="text-sm text-gray-700"><strong>Purpose:</strong> Used by Facebook to deliver advertisement products</p>
                  <p className="text-sm text-gray-700"><strong>Provider:</strong> Facebook</p>
                  <p className="text-sm text-gray-700"><strong>Type:</strong> HTTP Cookie</p>
                  <p className="text-sm text-gray-700"><strong>Expires in:</strong> 3 months</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">5. How Can You Control Cookies?</h2>
              <p className="text-gray-700 mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by 
                setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select 
                which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are 
                strictly necessary to provide you with services.
              </p>
              <p className="text-gray-700 mb-4">
                The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to 
                reject cookies, you may still use our website though your access to some functionality and areas of our 
                website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.
              </p>
              
              <h3 className="text-xl font-semibold text-[#003366] mb-3">Browser Controls</h3>
              <p className="text-gray-700 mb-4">
                The specific types of first and third party cookies served through our Website and the purposes they 
                perform are described in the table above. Most web browsers allow you to control cookies through their 
                settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your 
                overall user experience.
              </p>
              <p className="text-gray-700 mb-4">Here are instructions for managing cookies in popular browsers:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
                <li><strong>Opera:</strong> Settings → Privacy & security → Cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">6. Other Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                In addition to cookies, we may use web beacons, pixel tags, and other tracking technologies on our 
                Website to help customize the Website and improve your experience. A "web beacon" or "pixel tag" is a 
                tiny object or image embedded in a web page or email. They are used to track the number of users who have 
                visited particular pages and viewed emails, and acquire other statistical data. They collect only a limited 
                set of data, such as a cookie number, time and date of a page or email view, and a description of the page 
                or email on which they reside. Web beacons cannot be declined. However, you can limit their use by 
                controlling the cookies that interact with them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">7. Do Not Track Signals</h2>
              <p className="text-gray-700 mb-4">
                Some web browsers may transmit "do-not-track" signals to websites with which the browser communicates. 
                As of the date of this Cookie Policy, an industry standard has not yet been established on how to respond 
                to these signals. Therefore, we do not currently respond to "do-not-track" signals. As the industry 
                consensus develops, we may revisit our policy on responding to these signals.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">8. Updates to This Cookie Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the 
                cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this 
                Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p className="text-gray-700 mb-4">
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">9. Where Can You Get Further Information?</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies or other technologies, please contact us at:
              </p>
              <p className="text-gray-700 mb-2">
                <strong>LCK Pharmaceutical Consulting</strong>
              </p>
              <p className="text-gray-700 mb-2">
                Email: <a href="mailto:info@lckpharma.com" className="text-[#339966] hover:text-[#003366]">info@lckpharma.com</a>
              </p>
              <p className="text-gray-700 mb-4">
                Address: Rockville, MD, USA & Lavington, Nairobi, Kenya
              </p>
              <p className="text-gray-700">
                For more information about cookies, including how to see what cookies have been set on your device and 
                how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#339966] hover:text-[#003366]">www.allaboutcookies.org</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
