export default function Footer() {
  return (
    <footer className="bg-[#2f2f2f] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p>Mumbai, India</p>
          <p>Email: info@healthforall.org</p>
          <p>Phone: +91 9XXXXXXXXX</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <a href="/volunteer">Volunteer</a>
            <a href="/blog">Blog</a>
            <li>
              <a href="/crisis-helpline" className="hover:underline">
                Crisis Helpline
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <p>Facebook | Twitter | LinkedIn</p>
        </div>
      </div>
    </footer>
  );
}