import { useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

const createData = async (payload) => {
  const { data } = await api.post("/registration", {
    ...payload,
  });
  return data;
};

function App() {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  async function handleClick(e) {
    e.preventDefault();
    const res = await createData({
      fullName: nama,
      nim,
      email,
      phoneNumber: phone,
      address,
    });
    console.log(res);
  }

  return (
    <section>
      <div className="w-full h-screen bg-[#7B96FE] flex flex-col justify-center items-center gap-8">
        <h1 className="text-2xl text-white">Form Pendaftaran</h1>

        <form className="w-1/2 flex justify-between" onSubmit={handleClick}>
          {/* 4 input */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullname" className="text-white text-sm">
                Fullname
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                onChange={(e) => setNama(e.target.value)}
                className="rounded-2xl px-4 py-2 text-sm"
                placeholder="masukan nama"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="nim" className="text-white text-sm">
                NIM
              </label>
              <input
                id="nim"
                name="nim"
                type="text"
                onChange={(e) => setNim(e.target.value)}
                className="rounded-2xl px-4 py-2 text-sm"
                placeholder="masukan nim"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white text-sm">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-2xl px-4 py-2 text-sm"
                placeholder="masukan email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phoneNumber" className="text-white text-sm">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-2xl px-4 py-2 text-sm"
                placeholder="masukan phone number"
              />
            </div>

            <button
              type="submit"
              className="bg-[#66C770] mt-4 text-white rounded-md py-1 shadow-md"
            >
              Submit
            </button>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-white text-sm">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              className="rounded-2xl px-4 py-2 text-sm"
              placeholder="masukan address"
            />
          </div>
        </form>
      </div>
      <div className="mt-5">hello</div>
    </section>
  );
}

export default App;
