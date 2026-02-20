// export default function Footer() {
//   return (
//     <footer className="bg-[#2f2f2f] text-white py-10">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">
//         <div>
//           <h4 className="font-semibold mb-2">Contact Us</h4>
//           <p>Mumbai, India</p>
//           <p>Email: info@healthforall.org</p>
//           <p>Phone: +91 9XXXXXXXXX</p>
//         </div>

//         <div>
//           <h4 className="font-semibold mb-2">Quick Links</h4>
//           <ul className="space-y-1">
//             <li>Privacy Policy</li>
//             <a href="/volunteer">Volunteer</a>
//             <a href="/blog">Blog</a>
//             <li>
//               <a href="/crisis-helpline" className="hover:underline">
//                 Crisis Helpline
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-semibold mb-2">Follow Us</h4>
//           <p><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  About: [
    { label: "Our Story", to: "/about/our-story" },
    { label: "How We Work", to: "/about/how-we-work" },
    { label: "Research & Evaluation", to: "/about/research" },
    { label: "People", to: "/about/people" },
  ],
  "Our Work": [
    { label: "Maternal & Child Health", to: "/work#maternal" },
    { label: "Adolescent Health", to: "/work#adolescent" },
    { label: "Violence Prevention", to: "/work#violence" },
    { label: "Palliative Care", to: "/work#palliative" },
  ],
  "Get Involved": [
    { label: "Donate", to: "/donate" },
    { label: "Volunteer", to: "/volunteer" },
    { label: "Partner With Us", to: "/contact" },
    { label: "Events", to: "/events" },
    { label: "Resources", to: "/resources" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0d2d3a] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f7b6c] to-[#18a290] flex items-center justify-center">
                <Heart size={18} className="text-white fill-white" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                HealthForAll
              </span>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              A community-driven NGO improving health, safety, and well-being of women, children, and adolescents in vulnerable urban settlements since 2002.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 text-sm text-white/50 mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#0f7b6c]" />
                <span>123 Community Health Lane, Mumbai – 400 001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="flex-shrink-0 text-[#0f7b6c]" />
                <span>+91 22 0000 0000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="flex-shrink-0 text-[#0f7b6c]" />
                <span>info@healthforall.org</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-2">
              {["𝕏", "in", "f", "▶"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 bg-white/8 rounded-xl flex items-center justify-center text-sm text-white/60 hover:bg-[#0f7b6c] hover:text-white transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-5">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-white/8">
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              "80G Tax Exemption",
              "FCRA Registered",
              "ISO 9001 Certified",
              "GuideStar Platinum",
            ].map((cert) => (
              <span
                key={cert}
                className="text-xs text-white/40 border border-white/10 px-3 py-1.5 rounded-full"
              >
                ✓ {cert}
              </span>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-white/30 text-xs">
            <span>© {new Date().getFullYear()} HealthForAll NGO. All rights reserved.</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              <a href="/blog">Blog</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}