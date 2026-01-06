import { ContactHero } from '../components/contact/ContactHero';
import { ContactForm } from '../components/contact/ContactForm';
import { OfficeLocations } from '../components/contact/OfficeLocations';

export function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <OfficeLocations />
    </div>
  );
}

export default ContactPage;