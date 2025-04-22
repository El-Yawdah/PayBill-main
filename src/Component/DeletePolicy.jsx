import Footer from "./Footer";
import Header from "./Header";
import '../Styled/faq.css'
const DeletePolicy = () => {
    return (
        <>
            <div className="">
                <div className="bg-[#1F6CAB]">
                    <Header />
                </div>
                <div className="">

                    <h1 className="mt-4 text-3xl text-center font-semibold ">Delete Policy</h1>
                  
                    <div className="text-center">
                        <p className="md:w-[600px] mx-auto mt-5">At PayBills, we value your privacy and are committed to giving you control over your personal data. This Delete Policy outlines how users can request the deletion of their account and associated data from our platform.

</p>
                    </div>

                    <div className=" px-6 md:px-20 mt-8">
                        
                        <div className="grid md:grid-cols-2">
                            <h1 className="text-lg font-semibod">Account Deletion
                            </h1>
                            <div className=" mt-3">
                                
Users can request to delete their PayBills account at any time. Upon receiving a deletion request, we will:
                                <ul className="ul">


                                    <li className="">Deactivate the account immediately.

                                        .</li>
                                    <li className="">⁠Begin the process of permanently deleting user data from our systems within 7 business days.
                                    </li>
                                    <li className=""> ⁠Complete data deletion within a maximum of 30 days, in accordance with applicable data protection laws.

                                        .</li>
                                  
                                 
                                </ul>

                            </div>
                        </div>

                        {/* 3 */}
                        <div className="grid md:grid-cols-2">
                            <h1 className="text-lg font-semibod">How to Request Deletion </h1>
                            <div className="">
                            You can request account deletion by:

                                <ul className="ul">
                                    <li className=""> Navigating to the Settings {'> '}Account {'> '}Delete Account section within the app

                                    </li>
                                    <li className=""> Or, by sending a request to our support team at support@pay-bills.co using your registered email


                                    </li>
                                    <li className="">To protect your privacy, we may ask for identity verification before processing your request.
                                    </li>
                                   
                                </ul>
                            

                            </div>
                        </div>
                        {/* 4 */}
                        <div className="grid md:grid-cols-2">
                            <h1 className="text-lg font-semibold">Data That Will Be Deleted
                            </h1>
                            <div className="">

                            Upon deletion, we will remove:

                                <ul className="ul">
                                    <li className="">Personal account information (name, email, phone number, etc.)

                                    </li>
                                    <li className="">Payment history and transaction records (except where retention is required by law)

                                    </li>
                                    <li className="">Linked contacts and P2P data
                                    </li>

                                </ul>
                               


                            </div>
                        </div>
                        {/* 5 */}
                        <div className="grid md:grid-cols-2">
                            <h1 className="text-lg font-semibod">Data Retention Exceptions

                            </h1>
                            <div className="">
                            In some cases, we may retain certain data for a limited period to:
                                <ul className="ul">
                                    <li className="">Comply with legal or regulatory obligations

                                    </li>
                                    <li className="">⁠Resolve disputes or enforce our Terms of Service
                                    </li>
                                    <li className="">Maintain the integrity of our financial records

                                    </li>
                                  
                                </ul>

                                All retained data will be handled securely and only for the purpose required by law


                            </div>
                        </div>
                        {/* 6 */}
                        <div className="grid md:grid-cols-2">
                            <h1 className="text-lg font-semibod">Third Party Services </h1>
                            <div className="">
                                <p>If you have connected third-party services (such as payment gateways), please be aware that you may need to contact those providers separately to request deletion of your data from their systems



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

export default DeletePolicy;

