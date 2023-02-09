import React, { Component } from 'react';
import '../../styles/Home.css';
import TopBar from '../../components/home/TopBar';
import { UserData } from '../../root/App';
import BottomBar from '../../components/BottomBar';

export class PrivacyPolicy extends Component {

    goToConsolePage = () => {
        this.props.history.push("/console");
      }
    
    goToRegisterPage = () => {
        this.props.history.push("/authentication");
      }
    
    goToLoginPage = () => {
        this.props.history.push({
          pathname: "/authentication",
          state: {
            authTypeIsLogin: true
          }
        });
      }

    goToHomePage = () => {
        this.props.history.push("/");
      }
    
    goToPrivacyPolicyPage = () => {
        this.props.history.push("/privacy-policy");
      }
    
    goToTermsAndConditionsPage = () => {
        this.props.history.push("/terms-and-conditions");
      }


  render() {

    const pp = {
        width: '100%',
        color: '#253061',
        padding: '50px',
        textAlign: 'left',
    }

    return (
      <div className='home-body'>
        <TopBar
           userData={UserData}
           goToConsolePage={this.goToConsolePage}
           goToLoginPage={this.goToLoginPage}
           goToRegisterPage={this.goToRegisterPage}
           goToHomePage={this.goToHomePage}
           ppats={true}
           ppatst={<h1 style={{textAlign: 'center', color: '#8934FF', fontSize: '32px'}}>Privacy policy</h1>}
          />

          <div style={pp}>
          <div style={{marginTop: '50px'}}>
          {/* <h1 style={{margin: '100px 0 30px 0', textAlign: 'center', color: '#8934FF'}}>Privacy policy</h1> */}

            <p>This privacy policy (&quot;Policy&quot;) describes how Remphil Services Limited (&quot;Remphil Services Limited&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) collects, protects and uses the personally identifiable information (&quot;Personal Information&quot;) you (&quot;User&quot;, &quot;you&quot; or &quot;your&quot;) may provide in the Vistogram mobile application and any of its products or services (collectively, &quot;Mobile Application&quot; or &quot;Services&quot;). It also describes the choices available to you regarding our use of your Personal Information and how you can access and update this information. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.</p>

            <h2>Collection of personal information</h2>

            <p>We receive and store any information you knowingly provide to us when you create an account, publish content, fill any online forms in the Mobile Application.  When required this information may include your email address, name, phone number, address,  or other Personal Information. You can choose not to provide us with certain information, but then you may not be able to take advantage of some of the Mobile Application's features. Users who are uncertain about what information is mandatory are welcome to contact us.</p>

            <h2>Collection of non-personal information</h2>

            <p>When you open the Mobile Application our servers automatically record information that your device sends. This data may include information such as your device's IP address and location, device name and version, operating system type and version, language preferences, information you search for in our Mobile Application, access times and dates, and other statistics.</p>

            <h2>Managing personal information</h2>

            <p>You are able to access, add to, update and delete certain Personal Information about you. The information you can view, update, and delete may change as the Mobile Application or Services change. When you update information, however, we may maintain a copy of the unrevised information in our records. Some information may remain in our private records after your deletion of such information from your account. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. We may use any aggregated data derived from or incorporating your Personal Information after you update or delete it, but not in a manner that would identify you personally. Once the retention period expires, Personal Information shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after the expiration of the retention period.</p>

            <h2>Use and processing of collected information</h2>

            <p>Any of the information we collect from you may be used to personalize your experience; improve our Mobile Application; improve customer service and respond to queries and emails of our customers; send newsletters; send notification emails such as password reminders, updates, etc;  run and operate our Mobile Application and Services. Non-Personal Information collected is used only to identify potential cases of abuse and establish statistical information regarding Mobile Application traffic and usage. This statistical information is not otherwise aggregated in such a way that would identify any particular user of the system.</p>

            <p>We may process Personal Information related to you if one of the following applies: (i) You have given your consent for one or more specific purposes. Note that under some legislations we may be allowed to process information until you object to such processing (by opting out), without having to rely on consent or any other of the following legal bases below. This, however, does not apply, whenever the processing of Personal Information is subject to European data protection law; (ii) Provision of information is necessary for the performance of an agreement with you and/or for any pre-contractual obligations thereof; (ii) Processing is necessary for compliance with a legal obligation to which you are subject; (iv) Processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in us; (v) Processing is necessary for the purposes of the legitimate interests pursued by us or by a third party. In any case, we will be happy to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.</p>

            <h2>Information transfer and storage</h2>

            <p>Depending on your location, data transfers may involve transferring and storing your information in a country other than your own. You are entitled to learn about the legal basis of information transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by us to safeguard your information. If any such transfer takes place, you can find out more by checking the relevant sections of this document or inquire with us using the information provided in the contact section.</p>

            <h2>The rights of users</h2>

            <p>You may exercise certain rights regarding your information processed by us. In particular, you have the right to do the following: (i) you have the right to withdraw consent where you have previously given your consent to the processing of your information; (ii) you have the right to object to the processing of your information if the processing is carried out on a legal basis other than consent; (iii) you have the right to learn if information is being processed by us, obtain disclosure regarding certain aspects of the processing and obtain a copy of the information undergoing processing; (iv) you have the right to verify the accuracy of your information and ask for it to be updated or corrected; (v) you have the right, under certain circumstances, to restrict the processing of your information, in which case, we will not process your information for any purpose other than storing it; (vi) you have the right, under certain circumstances, to obtain the erasure of your Personal Information from us; (vii) you have the right to receive your information in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that your information is processed by automated means and that the processing is based on your consent, on a contract which you are part of or on pre-contractual obligations thereof.</p>

            <h2>The right to object to processing</h2>

            <p>Where Personal Information is processed for the public interest, in the exercise of an official authority vested in us or for the purposes of the legitimate interests pursued by us, you may object to such processing by providing a ground related to your particular situation to justify the objection. You must know that, however, should your Personal Information be processed for direct marketing purposes, you can object to that processing at any time without providing any justification. To learn, whether we are processing Personal Information for direct marketing purposes, you may refer to the relevant sections of this document.</p>

            <h2>How to exercise these rights</h2>

            <p>Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and always within one month.</p>

            <h2>Privacy of children</h2>

            <p>We do not knowingly collect any Personal Information from children under the age of 13. If you are under the age of 13, please do not submit any Personal Information through our Mobile Application or Service. We encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide Personal Information through our Mobile Application or Service without their permission. If you have reason to believe that a child under the age of 13 has provided Personal Information to us through our Mobile Application or Service, please contact us. You must also be at least 16 years of age to consent to the processing of your personal data in your country (in some countries we may allow your parent or guardian to do so on your behalf).</p>

            <h2>Newsletters</h2>

            <p>We offer electronic newsletters to which you may voluntarily subscribe at any time. You may choose to stop receiving our newsletter or marketing emails by following the unsubscribe instructions included in these emails or by contacting us. However, you will continue to receive essential transactional emails.</p>

            <h2>Links to other mobile applications</h2>

            <p>Our Mobile Application contains links to other mobile applications that are not owned or controlled by us. Please be aware that we are not responsible for the privacy practices of such other mobile applications or third-parties. We encourage you to be aware when you leave our Mobile Application and to read the privacy statements of each and every mobile application that may collect Personal Information.</p>

            <h2>Information security</h2>

            <p>We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal Information in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed. Therefore, while we strive to protect your Personal Information, you acknowledge that (i) there are security and privacy limitations of the Internet which are beyond our control; (ii) the security, integrity, and privacy of any and all information and data exchanged between you and our Mobile Application cannot be guaranteed; and (iii) any such information and data may be viewed or tampered with in transit by a third-party, despite best efforts.</p>

            <h2>Data breach</h2>

            <p>In the event we become aware that the security of the Mobile Application has been compromised or users Personal Information has been disclosed to unrelated third parties as a result of external activity, including, but not limited to, security attacks or fraud, we reserve the right to take reasonably appropriate measures, including, but not limited to, investigation and reporting, as well as notification to and cooperation with law enforcement authorities. In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm to the user as a result of the breach or if notice is otherwise required by law. When we do, we will post a notice in the Mobile Application, send you an email, get in touch with you over the phone, mail you a letter.</p>

            <h2>Legal disclosure</h2>

            <p>We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena, or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request. In the event we go through a business transition, such as a merger or acquisition by another company, or sale of all or a portion of its assets, your user account, and personal data will likely be among the assets transferred.</p>

            <h2>Changes and amendments</h2>

            <p>We reserve the right to modify this Policy relating to the Mobile Application or Services at any time, effective upon posting of an updated version of this Policy in the Mobile Application. When we do we will revise the updated date at the bottom of this page. Continued use of the Mobile Application after any such changes shall constitute your consent to such changes.</p>

            <h2>Acceptance of this policy</h2>

            <p>You acknowledge that you have read this Policy and agree to all its terms and conditions. By using the Mobile Application or its Services you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to use or access the Mobile Application and its Services.</p>

            <h2>Contacting us</h2>

            <p>If you have any questions about this Policy, please contact us.</p>

            <p>This document was last updated on May 1, 2019</p>
            </div>
            </div>

        <BottomBar 
          goToPrivacyPolicyPage={this.goToPrivacyPolicyPage}
          goToTermsAndConditionsPage={this.goToTermsAndConditionsPage}
        />  
                    
      </div>
    )
  }
}

export default PrivacyPolicy;

