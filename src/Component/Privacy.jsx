import Footer from "./Footer";
import Header from "./Header";
import '../Styled/Faq.css'
const Privacy = () => {
    return (
        <>
            <div className="">
                <div className="bg-[#1F6CAB]">
                    <Header />
                </div>
                <div className="">

                    <h1 className="mt-4 text-3xl text-center font-semibold ">Privacy Policy</h1>
                    <h1 className="mt-4 text-xl text-center font-semibold ">Welcome To Paybills</h1>
                    <div className="text-center">
                        <p className="md:w-[600px] mx-auto mt-5">Effective Date: January 1 2025



This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use the PayBills mobile application and related services.

By using PayBills, you agree to the collection and use of information in accordance with this policy.
</p>
                    </div>

                    <div className=" px-6 md:px-20 lg:px-30 mt-8">
                        <div className="grid md:grid-cols-2">
                            <h1 className="text-lg font-semibod">Information You Provide </h1>
                            <div className="">
                                a. Information You Provide
                               
                                <ul className="ul">
                                    <li className="">Personal details:  Name, email address, phone number, date of birth.</li>
                                    <li className="">Payment details:  Bank or card information (processed via secure third-party gateways).</li>
                                    <li className="">Profile info: User preferences, settings, and contacts (for P2P transfers).</li>
                                    <li className="">Personal details: Name, email address, phone number, date of birth. ⁠Support requests:  Any info shared during customer support interactions.</li>
                                </ul>
                                <p className="mt-4 "> b. Automatically Collected Information

                                 

                                </p>


                                
                                <ul className="ul">
                                    <li className="">Device data:* IP address, device type, operating system, and unique device identifiers.</li>
                                    <li className="">Usage data:* Features used, actions taken within the app, log files, and crash reports.</li>
                                    <li className="">Location data:* If enabled, for location-based services (optional).
                                    </li>

                                </ul>
                            </div>
                        </div>


                        {/* 2 */}
                        <div className="grid md:grid-cols-2">
                            <h1 className="text-lg font-semibod">How We Use Your Information
                            </h1>
                            <div className=" mt-3">
                                We use your Data to:
                                <ul className="ul">


                                    <li className="">Process utility bill payments and P2P transfers
                                        .</li>
                                    <li className="">Improve, personalize, and maintain app performance
                                    </li>
                                    <li className="">Communicate important updates, receipts, and promotional content
                                        .</li>
                                    <li className="">Ensure account security and prevent fraud
                                        .</li>
                                    <li className="">Comply with legal and regulatory requirements

                                        .</li>
                                </ul>

                            </div>
                        </div>

                        {/* 3 */}
                        <div className="grid md:grid-cols-2">
                            <h1 className="text-lg font-semibod">How we Share Your Information </h1>
                            <div className="">
                                We do not sell your personal information. We may share data with
                                <ul className="ul">
                                    <li className="">Payment processors and utility providers* to complete transactions
                                    </li>
                                    <li className="">Service providers* who help operate the app (e.g., analytics, cloud storage)
                                    </li>
                                    <li className="">Law enforcement* or regulatory bodies if required by law
                                    </li>
                                    <li className="">Others with your consent*, such as contacts for P2P transfers

                                        .</li>
                                </ul>
                                All third parties are bound by confidentiality agreements and data protection standards.

                            </div>
                        </div>
                        {/* 4 */}
                        <div className="grid md:grid-cols-2">
                            <h1 className="text-lg font-semibold">Data Retention </h1>
                            <div className="">

                                We retain your information for as long as necessary to:

                                <ul className="ul">
                                    <li className="">Provide our services
                                    </li>
                                    <li className="">Comply with legal obligations
                                    </li>
                                    <li className="">Resolve disputes and enforce agreements</li>

                                </ul>
                                When no longer needed, your data is securely deleted or anonymized.


                            </div>
                        </div>
                        {/* 5 */}
                        <div className="grid md:grid-cols-2">
                            <h1 className="text-lg font-semibod">Your Rights and Choices
                            </h1>
                            <div className="">
                                You have the right to:
                                <ul className="ul">
                                    <li className="">Access and review your personal data
                                    </li>
                                    <li className="">Update or correct inaccurate information
                                    </li>
                                    <li className="">Delete your account and request data deletion
                                    </li>
                                    <li className="">Opt out of non-essential communications
                                        .</li>
                                </ul>

                                To exercise these rights, please contact us at: privacy@pay-bills.co


                            </div>
                        </div>
                        {/* 6 */}
                        <div className="grid md:grid-cols-2">
                            <h1 className="text-lg font-semibod">Security </h1>
                            <div className="">
                                <p>We use industry-standard encryption, secure servers, and other safeguards to protect your data. However, no system is 100% secure, so we encourage you to use strong passwords and keep your login credentials private.



                                </p>

                            </div>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <h1 className="text-lg font-semibod">Children's Privacy </h1>
                            <div className="">
                                <p>PayBills is not intended for users under the age of 13. We do not knowingly collect personal information from children. If we learn that a child has provided personal data, we will delete it promptly.



                                </p>

                            </div>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <h1 className="text-lg font-semibod">Changes to This Policy
                            </h1>
                            <div className="">
                                <p>We may update this Privacy Policy from time to time. You will be notified of significant changes via the app or email.



                                </p>

                            </div>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <h1 className="text-lg font-semibod">Contact us </h1>
                            <div className="">
                                <p>If you have questions or concerns about this Privacy Policy, please contact us at:
                                    <a href="mailto:
privacy@pay-bills.co">
                                        privacy@pay-bills.co</a>




                                </p>

                            </div>
                        </div>


                    </div>
                </div>
                <div className="">
                    <Footer />
                </div>
            </div>

        </>
    );
}

export default Privacy;

