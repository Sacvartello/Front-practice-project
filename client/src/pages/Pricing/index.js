import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './pricing.module.css';
import Card from '../../components/Card';
import CONSTANTS from '../../constants';
const Pricing = (props) => {
return (
    <>
      <Header />
      <main>
        <div className={styles.containerPricing}>
          <div className={styles.selectWrapper}>
            <span className={styles.pricingSpan}>Pricing for </span>
            <select className={styles.selectType}>
              <option>Name</option>
              <option>Logo</option>
              <option>Tagline</option>
              <option>Name and Logo</option>
              <option>Name and Tagline</option>
              <option>Name, Tagline and Logo</option>
              <option>Name, Logo and Business Cards</option>
              <option>Logo and Business Cards</option>
              <option>Logo, Business Cards and Stationery</option>
              <option>Logo and Tagline</option>
              <option>Business Cards</option>
              <option>Stationery</option>
              <option>Product Feedback and Research</option>
            </select>
          </div>
          <div className={styles.vidWrapper}>
            <img className={styles.vid} src='https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg'/>
          </div>
        </div>
        <div className={styles.cardWrapper}>
          <Card planName='Bronze' aboutPlan='Branding on a budget' price='US$299' mainColor={CONSTANTS.CARDS_COLORS.BRONZE}>
            <p>Prize to Winner - $135 (Included)</p>
            <ul>
              Validation Services & Upgrades ($39 value)
              <li> Matching .com URL</li>
            </ul>
            <p>Expected 300+ Entries</p>
          </Card>
          <Card planName='Gold' aboutPlan='Increase participation and basic brand validation' price='US$449' mainColor={CONSTANTS.CARDS_COLORS.GOLD}>
            <p>Prize to Winner - $200 (Included)</p>
            <ul>
              Validation Services & Upgrades ($305 value)
              <li>Matching .com URL</li>
              <li>Instant Trademark Check (One Database)</li>
              <li>NDA and More Privacy</li>
              <li>Project Promotion (Basic)</li>
              <li>Comprehensive Trademark Research</li>
            </ul>
            <p>Expected 600+ Entries</p>
            <p>Partial Refund Option</p>
          </Card>
          <Card planName='Platinum' aboutPlan='Work with top-level creatives, plus agency-style brand validation' price='US$749' mainColor={CONSTANTS.CARDS_COLORS.PLATINUM}>
          <p>Prize to Winner - $300 (Included)</p>
            <ul>
              Validation Services & Upgrades ($979 value)
              <li>Audience Testing (Up to 6 Names) View Sample Report</li>
              <li>Comprehensive Trademark Research (3 Names)</li>
              <li>Linguistics Analysis (3 Names)</li>
              <li>Tier A Creatives</li>
              <li> Matching .com URL</li>
              <li>Instant Trademark Check (4 Database)</li>
              <li>NDA and More Privacy</li>
              <li>Project Promotion (Basic)</li>
              <li>Team Collaboration Tools</li>
            </ul>
            <p>Expected 1000+ Entries</p>
            <p>Partial Refund Option</p>
          </Card>
          <Card planName='Managed' aboutPlan='A full agency experience without the agency price tag' price='US$1499' mainColor={CONSTANTS.CARDS_COLORS.MANAGED}>
            <p>Receive optimum results from your Platinum Contest by launching a Managed Contest Package and working one-on-one with an experienced Squadhelp Branding Consultant.</p>
            <p>With significantly more validation services, professional brief creation, and daily management of your contest by your Branding Expert, you'll receive an enhanced branding experience to closeout your branding project.</p>
            <p>Learn More about Managed Contest Service</p>
          </Card>
        </div>
        <div className={styles.getStartNow}>
          <p>All packages include the award amount
          for the winning creative and all fees and commissions.</p>
          <button className={styles.getStartNowBtn}>Get started now</button>
        </div>
        <div className={styles.contactQuestions}>
          <div className={styles.contactUs}>
            <h2>Agency or Enterprise?</h2>
            <p className={styles.contactQuestionsP}>To learn more about volume discounts and additional
            services, please contact our business development team.</p>
            <p className={styles.contactQuestionsA}>Contact Us</p>
          </div>
          <div className={styles.Questions}>
            <h2>More questions?</h2>
            <p className={styles.contactQuestionsP}>We're here to help. Check out our FAQs, send us an email,
            or give us a call at +1 (877) 355-3585</p>
            <p className={styles.contactQuestionsA}>Schedule branding consultation</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
