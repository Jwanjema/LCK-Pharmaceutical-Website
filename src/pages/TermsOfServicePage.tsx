import { motion } from 'framer-motion';

export function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-[#003366] mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: January 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                These Terms of Service constitute a legally binding agreement made between you, whether personally 
                or on behalf of an entity ("you") and LCK Pharmaceutical Consulting ("Company," "we," "us," or "our"), 
                concerning your access to and use of the lckpharma.com website as well as any other media form, media 
                channel, mobile website or mobile application related, linked, or otherwise connected thereto 
                (collectively, the "Site").
              </p>
              <p className="text-gray-700 mb-4">
                You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of 
                these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY 
                PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
              </p>
              <p className="text-gray-700 mb-4">
                Supplemental terms and conditions or documents that may be posted on the Site from time to time are 
                hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to 
                make changes or modifications to these Terms of Service from time to time. We will alert you about 
                any changes by updating the "Last Updated" date of these Terms of Service, and you waive any right 
                to receive specific notice of each such change.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">2. Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, 
                functionality, software, website designs, audio, video, text, photographs, and graphics on the Site 
                (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") 
                are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and 
                various other intellectual property rights and unfair competition laws of the United States, international 
                copyright laws, and international conventions.
              </p>
              <p className="text-gray-700 mb-4">
                The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. 
                Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may 
                be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, 
                transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, 
                without our express prior written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">3. User Representations</h2>
              <p className="text-gray-700 mb-4">By using the Site, you represent and warrant that:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>All registration information you submit will be true, accurate, current, and complete;</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service;</li>
                <li>You are not a minor in the jurisdiction in which you reside;</li>
                <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise;</li>
                <li>You will not use the Site for any illegal or unauthorized purpose;</li>
                <li>Your use of the Site will not violate any applicable law or regulation.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">4. Services and Fees</h2>
              <p className="text-gray-700 mb-4">
                LCK Pharmaceutical Consulting provides regulatory affairs consulting services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>WHO Prequalification support and submissions</li>
                <li>Regulatory submissions to national authorities (FDA, EMA, etc.)</li>
                <li>GBT Maturity Assessments and improvement plans</li>
                <li>GMP auditing and quality systems consulting</li>
                <li>Bioequivalence and Clinical PK study support</li>
                <li>Training and capacity building programs</li>
              </ul>
              <p className="text-gray-700 mb-4">
                All services are provided subject to separate engagement agreements which shall specify the scope, 
                deliverables, timeline, and fees for each project. Fees are determined on a project-by-project basis 
                and may be structured as fixed fees, hourly rates, or retainer arrangements as mutually agreed upon 
                in writing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">5. Prohibited Activities</h2>
              <p className="text-gray-700 mb-4">
                You may not access or use the Site for any purpose other than that for which we make the Site available. 
                The Site may not be used in connection with any commercial endeavors except those that are specifically 
                endorsed or approved by us.
              </p>
              <p className="text-gray-700 mb-4">As a user of the Site, you agree not to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Systematically retrieve data or other content from the Site to create or compile a collection, database or directory without written permission from us.</li>
                <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
                <li>Engage in unauthorized framing of or linking to the Site.</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information.</li>
                <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                <li>Engage in any automated use of the system.</li>
                <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
                <li>Attempt to impersonate another user or person or use the username of another user.</li>
                <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
                <li>Use the Site as part of any effort to compete with us or otherwise use the Site for any revenue-generating endeavor or commercial enterprise.</li>
                <li>Upload or transmit viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Site.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">6. Submissions and User Content</h2>
              <p className="text-gray-700 mb-4">
                You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information 
                regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole 
                property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled 
                to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or 
                otherwise, without acknowledgment or compensation to you.
              </p>
              <p className="text-gray-700 mb-4">
                However, any confidential information or proprietary regulatory documentation that you provide to us in 
                the course of a consulting engagement shall be protected under separate confidentiality and non-disclosure 
                agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">7. Site Management</h2>
              <p className="text-gray-700 mb-4">We reserve the right, but not the obligation, to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Monitor the Site for violations of these Terms of Service;</li>
                <li>Take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service;</li>
                <li>Refuse, restrict access to, limit the availability of, or disable any user's contribution or any portion thereof;</li>
                <li>Remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems;</li>
                <li>Otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">8. Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We care about data privacy and security. Please review our Privacy Policy. By using the Site, you agree 
                to be bound by our Privacy Policy, which is incorporated into these Terms of Service. Please be advised 
                the Site is hosted in the United States and Kenya. If you access the Site from any other region of the 
                world with laws or other requirements governing personal data collection, use, or disclosure that differ 
                from applicable laws in the United States and Kenya, then through your continued use of the Site, you 
                are transferring your data to the United States and Kenya, and you agree to have your data transferred 
                to and processed in the United States and Kenya.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">9. Term and Termination</h2>
              <p className="text-gray-700 mb-4">
                These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING 
                ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND 
                WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), 
                TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY 
                REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR 
                REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE ANY CONTENT OR INFORMATION 
                THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">10. Modifications and Interruptions</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason 
                at our sole discretion without notice. However, we have no obligation to update any information on our 
                Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any 
                time. We will not be liable to you or any third party for any modification, price change, suspension, or 
                discontinuance of the Site.
              </p>
              <p className="text-gray-700 mb-4">
                We cannot guarantee the Site will be available at all times. We may experience hardware, software, or 
                other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, 
                or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the 
                Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever 
                for any loss, damage, or inconvenience caused by your inability to access or use the Site during any 
                downtime or discontinuance of the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">11. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms of Service and your use of the Site are governed by and construed in accordance with the laws 
                of the State of Maryland, United States, and the Republic of Kenya applicable to agreements made and to 
                be entirely performed within the respective jurisdictions, without regard to its conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">12. Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR 
                SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, 
                EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE 
                IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO 
                WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE'S CONTENT OR THE CONTENT OF 
                ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY ERRORS, MISTAKES, 
                OR INACCURACIES OF CONTENT AND MATERIALS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">13. Limitations of Liability</h2>
              <p className="text-gray-700 mb-4">
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY 
                DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST 
                PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE 
                BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">14. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the 
                Site, please contact us at:
              </p>
              <p className="text-gray-700 mb-2">
                <strong>LCK Pharmaceutical Consulting</strong>
              </p>
              <p className="text-gray-700 mb-2">
                Email: <a href="mailto:info@lckpharma.com" className="text-[#339966] hover:text-[#003366]">info@lckpharma.com</a>
              </p>
              <p className="text-gray-700">
                Address: Rockville, MD, USA & Lavington, Nairobi, Kenya
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
