import { motion } from 'framer-motion';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-[#003366] mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: January 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                LCK Pharmaceutical Consulting ("we," "our," or "us") respects your privacy and is committed to 
                protecting your personal data. This privacy policy will inform you about how we look after your 
                personal data when you visit our website (regardless of where you visit it from) and tell you 
                about your privacy rights and how the law protects you.
              </p>
              <p className="text-gray-700 mb-4">
                This privacy policy is provided in a layered format so you can click through to the specific areas 
                set out below. Please also use the Glossary to understand the meaning of some of the terms used in 
                this privacy policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">2. Important Information and Who We Are</h2>
              <h3 className="text-xl font-semibold text-[#003366] mb-3">Purpose of this Privacy Policy</h3>
              <p className="text-gray-700 mb-4">
                This privacy policy aims to give you information on how LCK Pharmaceutical Consulting collects and 
                processes your personal data through your use of this website, including any data you may provide 
                through this website when you sign up to our newsletter, request a consultation, or download resources.
              </p>
              <p className="text-gray-700 mb-4">
                This website is not intended for children and we do not knowingly collect data relating to children.
              </p>
              
              <h3 className="text-xl font-semibold text-[#003366] mb-3">Controller</h3>
              <p className="text-gray-700 mb-4">
                LCK Pharmaceutical Consulting is the controller and responsible for your personal data (collectively 
                referred to as "we", "us" or "our" in this privacy policy).
              </p>
              <p className="text-gray-700 mb-4">
                We have appointed a data privacy manager who is responsible for overseeing questions in relation to 
                this privacy policy. If you have any questions about this privacy policy, including any requests to 
                exercise your legal rights, please contact us using the details set out below.
              </p>
              
              <h3 className="text-xl font-semibold text-[#003366] mb-3">Contact Details</h3>
              <p className="text-gray-700 mb-4">
                Full name of legal entity: LCK Pharmaceutical Consulting<br />
                Email address: info@lckpharma.com<br />
                Postal address: Rockville, MD, USA & Lavington, Nairobi, Kenya
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">3. The Data We Collect About You</h2>
              <p className="text-gray-700 mb-4">
                Personal data, or personal information, means any information about an individual from which that 
                person can be identified. It does not include data where the identity has been removed (anonymous data).
              </p>
              <p className="text-gray-700 mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have 
                grouped together as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Identity Data</strong> includes first name, last name, title, company name, job title.</li>
                <li><strong>Contact Data</strong> includes billing address, email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Profile Data</strong> includes your interests, preferences, feedback and survey responses.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
                <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We also collect, use and share <strong>Aggregated Data</strong> such as statistical or demographic data 
                for any purpose. Aggregated Data could be derived from your personal data but is not considered personal 
                data in law as this data will not directly or indirectly reveal your identity.
              </p>
              <p className="text-gray-700 mb-4">
                We do not collect any <strong>Special Categories of Personal Data</strong> about you (this includes 
                details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, 
                political opinions, trade union membership, information about your health, and genetic and biometric data).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">4. How Is Your Personal Data Collected?</h2>
              <p className="text-gray-700 mb-4">We use different methods to collect data from and about you including through:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Direct interactions.</strong> You may give us your Identity and Contact Data by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you request our services, subscribe to our publications, request marketing materials, or give us feedback.</li>
                <li><strong>Automated technologies or interactions.</strong> As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs and other similar technologies.</li>
                <li><strong>Third parties or publicly available sources.</strong> We will receive personal data about you from various third parties and public sources such as analytics providers like Google Analytics, advertising networks, and search information providers.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">5. How We Use Your Personal Data</h2>
              <p className="text-gray-700 mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your 
                personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-[#003366] mb-3">Purposes for Which We Will Use Your Personal Data</h3>
              <p className="text-gray-700 mb-4">We have set out below, in a table format, a description of all the ways we plan to use your personal data:</p>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Purpose/Activity</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Type of Data</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Lawful Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">To register you as a new client</td>
                      <td className="border border-gray-300 px-4 py-2">(a) Identity (b) Contact</td>
                      <td className="border border-gray-300 px-4 py-2">Performance of a contract with you</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">To provide and manage our services</td>
                      <td className="border border-gray-300 px-4 py-2">(a) Identity (b) Contact (c) Profile</td>
                      <td className="border border-gray-300 px-4 py-2">Performance of a contract with you</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">To manage our relationship with you</td>
                      <td className="border border-gray-300 px-4 py-2">(a) Identity (b) Contact (c) Profile (d) Marketing and Communications</td>
                      <td className="border border-gray-300 px-4 py-2">Necessary for our legitimate interests</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">To administer and protect our business and this website</td>
                      <td className="border border-gray-300 px-4 py-2">(a) Identity (b) Contact (c) Technical</td>
                      <td className="border border-gray-300 px-4 py-2">Necessary for our legitimate interests</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-xl font-semibold text-[#003366] mb-3">Marketing</h3>
              <p className="text-gray-700 mb-4">
                We strive to provide you with choices regarding certain personal data uses, particularly around 
                marketing and advertising. You will receive marketing communications from us if you have requested 
                information from us or used our services and you have not opted out of receiving that marketing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">6. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally 
                lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your 
                personal data to those employees, agents, contractors and other third parties who have a business need to 
                know. They will only process your personal data on our instructions and they are subject to a duty of 
                confidentiality.
              </p>
              <p className="text-gray-700 mb-4">
                We have put in place procedures to deal with any suspected personal data breach and will notify you and 
                any applicable regulator of a breach where we are legally required to do so.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">7. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we 
                collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or 
                reporting requirements. We may retain your personal data for a longer period in the event of a complaint 
                or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
              </p>
              <p className="text-gray-700 mb-4">
                To determine the appropriate retention period for personal data, we consider the amount, nature and 
                sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your 
                personal data, the purposes for which we process your personal data and whether we can achieve those 
                purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">8. Your Legal Rights</h2>
              <p className="text-gray-700 mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Request access</strong> to your personal data (commonly known as a "data subject access request").</li>
                <li><strong>Request correction</strong> of the personal data that we hold about you.</li>
                <li><strong>Request erasure</strong> of your personal data.</li>
                <li><strong>Object to processing</strong> of your personal data where we are relying on a legitimate interest.</li>
                <li><strong>Request restriction of processing</strong> your personal data.</li>
                <li><strong>Request transfer</strong> of your personal data to you or to a third party.</li>
                <li><strong>Withdraw consent at any time</strong> where we are relying on consent to process your personal data.</li>
              </ul>
              <p className="text-gray-700 mt-4 mb-4">
                If you wish to exercise any of the rights set out above, please contact us at info@lckpharma.com.
              </p>
              
              <h3 className="text-xl font-semibold text-[#003366] mb-3">No Fee Usually Required</h3>
              <p className="text-gray-700 mb-4">
                You will not have to pay a fee to access your personal data (or to exercise any of the other rights). 
                However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. 
                Alternatively, we could refuse to comply with your request in these circumstances.
              </p>
              
              <h3 className="text-xl font-semibold text-[#003366] mb-3">Time Limit to Respond</h3>
              <p className="text-gray-700 mb-4">
                We try to respond to all legitimate requests within one month. Occasionally it could take us longer than 
                a month if your request is particularly complex or you have made a number of requests. In this case, we 
                will notify you and keep you updated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this privacy policy from time to time to reflect changes to our practices or for other 
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new 
                privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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
                You have the right to make a complaint at any time to the relevant supervisory authority for data 
                protection issues in your jurisdiction. We would, however, appreciate the chance to deal with your 
                concerns before you approach the supervisory authority so please contact us in the first instance.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
