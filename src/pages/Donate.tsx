// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function Donate() {
//   return (
//     <>
//       <Navbar />
//       <div className="max-w-5xl mx-auto p-10">
//         <h1 className="text-3xl mb-4">Donate</h1>
//         <p>
//           Your contribution helps us improve health outcomes for
//           women and children.
//         </p>
//       </div>
//       <Footer />
//     </>
//   );
// }
import { useState } from "react";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Donate() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <Navbar /> */}

      <section className="py-16 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-light mb-6">Donate</h1>
        <p className="mb-10 text-gray-600">
          Your contribution helps improve the health and safety of women and children.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="bg-pink-600 text-white px-6 py-3 rounded"
        >
          Donate Now
        </button>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-[#eef3ff] p-8 rounded-lg w-full max-w-xl relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl mb-6">Donor Information</h2>

            <form className="grid grid-cols-2 gap-4 text-sm">
              <input placeholder="First Name" className="input" />
              <input placeholder="Last Name" className="input" />
              <input placeholder="Email" className="input" />
              <input placeholder="Mobile Number" className="input" />
              <input placeholder="Address" className="input col-span-2" />
              <input placeholder="City" className="input" />
              <input placeholder="PIN Code" className="input" />
              <input placeholder="PAN Card" className="input col-span-2" />

              <label className="col-span-2 flex items-start gap-2 text-xs">
                <input type="checkbox" />
                I declare that I am an Indian citizen and this donation is from my own funds.
              </label>

              <button className="col-span-2 bg-blue-600 text-white py-2 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}