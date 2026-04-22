import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Ghar<span className="text-accent">Guru</span>
            </h3>
            <p className="text-slate-300 leading-relaxed">
              India's fairest tutoring marketplace. Empowering teachers with fair earnings and students with quality education.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">For Students</h4>
            <ul className="space-y-4 text-slate-300">
              <li><Link href="/find-tutor" className="hover:text-accent transition-colors">Find a Tutor</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-accent transition-colors">How it works</Link></li>
              <li><Link href="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
              <li><Link href="/auth" className="hover:text-accent transition-colors">Student Sign Up</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">For Tutors</h4>
            <ul className="space-y-4 text-slate-300">
              <li><Link href="/auth" className="hover:text-accent transition-colors">Become a Tutor</Link></li>
              <li><Link href="/#commission" className="hover:text-accent transition-colors">Commission Structure</Link></li>
              <li><Link href="/auth" className="hover:text-accent transition-colors">Tutor Login</Link></li>
              <li><Link href="/resources" className="hover:text-accent transition-colors">Teaching Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-300">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-700 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} GharGuru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
