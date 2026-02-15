import { useState } from "react";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Volunteer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const submit = () => {
    alert("Volunteer application submitted!");
  };

  return (
    <>
      {/* <Navbar /> */}

      <section className="py-16 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-light mb-4">Volunteer With Us</h1>
        <p className="text-sm mb-8 text-gray-600">
          Join our team and help create safer, healthier communities.
        </p>
        <form className="grid gap-4">
          <div className="grid gap-4">
            <input className="input" placeholder="Full Name"
              onChange={e => setForm({ ...form, name: e.target.value })} />
            <input className="input" placeholder="Email"
              onChange={e => setForm({ ...form, email: e.target.value })} />
            <input className="input" placeholder="Phone"
              onChange={e => setForm({ ...form, phone: e.target.value })} />
            <textarea className="input h-28" placeholder="Why do you want to volunteer?"
              onChange={e => setForm({ ...form, message: e.target.value })} />

            <button onClick={submit}
              className="bg-blue-600 text-white py-2 rounded">
              Apply Now
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
}