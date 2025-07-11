import {
  Landmark,
  CreditCard,
  Wifi,
  ArrowUpRight,
  Twitter,
  Linkedin,
  Facebook,
  Menu,
} from "lucide-react";

import { svg, img } from "./constants/media";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [dropDownActive, setDropDrownActive] = useState(false);

  const toggleDropDown = () => {
    setDropDrownActive(!dropDownActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <nav className="fixed w-full top-0 left-0 z-30 float-in float-in-0 transition-all duration-300">
        {/* Floating */}
        <div
          className={`absolute top-full left-0 w-full bg-secondary transition-all duration-300 overflow-clip fade-in ${
            dropDownActive ? "show h-auto" : "h-0"
          }`}
        >
          <div>
            <ul className="flex flex-col gap-y-2 p-4 font-helvetica">
              <li>Products</li>
              <li>Customers</li>
              <li>Pricing</li>
              <li>Learn</li>
              <li className="mt-4">
                <button className="border border-primary rounded-xl px-4 py-2">
                  Login
                </button>
              </li>
              <li>
                <button className="bg-primary text-white rounded-xl px-4 py-2">
                  Signup
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`font-helvetica-medium flex justify-between items-center gap-20 transition-all duration-300 ${
            scrolled
              ? "bg-secondary px-2 md:px-4 "
              : "bg-transparent px-3 md:px-8 py-2"
          }`}
        >
          <a href="#">
            <img src={img.logo} alt="logo" className="w-20" />
          </a>
          <ul className="hidden gap-8 text-sm mr-auto md:flex">
            <li>Products</li>
            <li>Customers</li>
            <li>Pricing</li>
            <li>Learn</li>
          </ul>
          <ul className="hidden gap-8 text-sm font-helvetica md:flex">
            <li>
              <button className="border border-primary rounded-xl px-4 py-2">
                Login
              </button>
            </li>
            <li>
              <button className="bg-primary text-white rounded-xl px-4 py-2">
                Sign Up
              </button>
            </li>
          </ul>
          <button className="flex md:hidden">
            <button onClick={() => toggleDropDown()}>
              <Menu />
            </button>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero">
        <div className="flex flex-col gap-y-24 justify-between px-3 pt-30 pb-20 font-helvetica bg-secondary md:flex-row md:pt-40 md:px-16">
          <div className="text-half md:w-1/2">
            <h1 className="text-dark text-4xl md:text-7xl float-in float-in-1">
              <span className="font-helvetica-bold">Get paid early</span> save
              automatically all your pay.
            </h1>
            <p className="text-xl text-gray-400 mt-8 float-in float-in-2">
              Support small businesses with simple invoicing, powerful
              integrations, and cash flow management tools.
            </p>
            <div className="form-control mt-8 float-in float-in-3">
              <input
                type="text"
                className="bg-white placeholder:text-gray-400 font-helvetica-medium rounded-l-2xl p-4 border-2 border-gray-200 text-sm"
                placeholder="Your business email"
              />
              <button className="bg-primary text-white rounded-2xl px-5 py-4 text-sm -ml-3">
                Get Started
              </button>
            </div>
            <div className="companies flex gap-6 mt-10 float-in float-in-4">
              <img src={svg.visa} alt="visa logo" className="w-20" />
              <img src={svg.coinbase} alt="coinbase logo" className="w-30" />
            </div>
          </div>
          <div className="img-half relative text-xs md:w-1/2">
            <div className="w-2/5 h-3/5 absolute bg-white top-0 right-5 rounded-2xl overflow-clip flex flex-col float-in float-in-6 z-20 md:w-1/3 md:right-0">
              <div className="w-full grow bg-primary py-5 px-7 text-secondary flex flex-col gap-2">
                <span className="text-gray-200">Credit Card</span>
                <span className="text-lg">234 *** *** ***</span>
              </div>
              <div className="bg-dark text-secondary py-5 px-7 flex justify-between items-center">
                {/* <span className="text-xl italic">VISA</span> */}
                <img
                  src={svg.visa}
                  alt="visa logo"
                  className="w-9 invert"
                  style={{ filter: "invert(1) brightness(2) grayscale(1)" }}
                />
                <Wifi size={30} className="rotate-90" />
              </div>
            </div>
            <div className="w-4/5 relative bg-white py-5 px-7 rounded-2xl mx-auto float-in float-in-5 z-10 md:w-3/5">
              <div className="heading flex flex-col">
                <span className="font-helvetica-medium">Dipa Inhouse</span>
                <span className="text-gray-400">dipahouse@gmail.com</span>
              </div>
              <div className="acct-info p-4 border-2 border-gray-200 rounded-2xl mt-4 flex flex-col gap-2 text-xs">
                <span className="text-gray-500 font-helvetica-medium">
                  Invoice
                </span>
                <span className="text-3xl font-helvetica-bold text-dark">
                  $1,876,580
                </span>
                <span className="text-gray-500 font-helvetica-medium">
                  April 21, 2024
                </span>
              </div>
              <div className="payment-select flex flex-col gap-2 font-helvetica-medium text-dark mt-6">
                <button className="flex gap-2 items-center border-2 border-primary py-3 px-4 rounded-xl text-left cursor-pointer">
                  <CreditCard size={17} />
                  <span>Credit Card</span>
                </button>
                <button className="flex gap-2 items-center border-2 border-gray-200 py-3 px-4 rounded-xl text-left hover:border-primary cursor-pointer">
                  <Landmark size={17} />
                  <span>Bank Account</span>
                </button>
                <button className="bg-dark text-secondary py-3 px-4 rounded-xl cursor-pointer mt-4">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div
          style={{
            background:
              "linear-gradient(180deg, var(--color-secondary) 50%, #fff 50%)",
          }}
          className="relative py-16"
        >
          <div
            className="relative bg-white font-helvetica w-4/5 px-12 py-12 rounded-3xl mx-auto shadow-2xl z-10"
            style={{ marginTop: "-4rem" }}
          >
            <div className="heading grid gap-y-4 md:grid-cols-2">
              <span className="text-primary text-sm md:col-span-2">
                FUTURE PAYMENT
              </span>
              <h2 className="w-2/3 text-3xl font-helvetica-medium">
                Experience that grows with your scale.
              </h2>
              <p className="text-gray-400">
                Design a financial operating system that works for your business
                and streamlined cash flow management.
              </p>
            </div>
            <div className="features grid grid-cols-1 gap-y-8 gap-x-8 mt-10 md:grid-cols-3">
              <div>
                <img
                  src={img.transfer}
                  alt="free transfer icon"
                  className="w-24"
                />
                <h3 className="text-xl font-helvetica-medium text-dark-blue">
                  Free transfers
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Create a financial experience today and automate repeat
                  purchases by scheduling recurrent payments
                </p>
              </div>
              <div>
                <img
                  src={img.accounts}
                  alt="free transfer icon"
                  className="w-24"
                />
                <h3 className="text-xl font-helvetica-medium text-dark-blue">
                  Multiple accounts
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Run your operations with cash from your account and generate
                  yield on funds stored in your account.
                </p>
              </div>
              <div>
                <img
                  src={img.security}
                  alt="free transfer icon"
                  className="w-24"
                />
                <h3 className="text-xl font-helvetica-medium text-dark-blue">
                  Unmatched Security
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Securely manage your finances with organization-MFA,
                  card-locking and account-level controls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose us */}
      <section id="whychooseus">
        <div className="py-16">
          <div className="heading text-center px-8">
            <span className="text-primary text-lg">WHY US</span>
            <h2 className="text-4xl font-helvetica-medium">
              Why they prefer Finpay
            </h2>
          </div>
          <div className="body grid gap-4 px-8 mt-16 md:grid-cols-2 md:px-16">
            <div className="bg-primary/10 rounded-2xl px-14 py-20">
              <h2 className="text-7xl text-primary font-helvetica-medium">
                3k+
              </h2>
              <p className="text-4xl font-helvetica-medium text-gray-600 mt-10">
                Business already running on Finpay
              </p>
            </div>
            <div className="bg-primary/10 rounded-2xl px-14 py-20">
              <h2 className="text-4xl font-helvetica-medium text-gray-600">
                Instant withdraw your funds at any time
              </h2>
            </div>
            <div className="bg-primary/10 rounded-2xl px-14 py-20 md:col-span-2">
              <h2 className="text-4xl font-helvetica-medium text-gray-600">
                No asset volatility
              </h2>
              <p className="text-gray-400 font-helvetica-medium">
                Generate returns on your cash reserves without making any
                investments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step */}
      <section>
        <div className="px-8 py-16 bg-dark-blue-2 text-white md:px-16">
          <span className="text-primary text-lg font-helvetica-medium">
            STEP
          </span>
          <h2 className="text-4xl font-helvetica-bold md:w-2/5">
            Maximize your returns with a Reserve account that generates
          </h2>
          <div className="steps grid gap-16 mt-10 md:grid-cols-3">
            <div className="flex flex-col gap-y-2 bg-dark-blue-3 rounded-2xl p-8">
              <h3 className="text-6xl text-secondary">1</h3>
              <h4 className="font-helvetica text-xl">Open your account</h4>
              <p className="text-gray-400">
                Sign up to finpay and set up your account from the dashboard
              </p>
            </div>
            <div className="flex flex-col gap-y-2 bg-dark-blue-3 rounded-2xl p-8">
              <h3 className="text-6xl text-secondary">2</h3>
              <h4 className="font-helvetica text-2xl">Transfer your money</h4>
              <p className="text-gray-400">
                Move money from one account to another and start earning up.
              </p>
            </div>
            <div className="flex flex-col gap-y-2 bg-dark-blue-3 rounded-2xl p-8">
              <h3 className="text-6xl text-secondary">3</h3>
              <h4 className="font-helvetica text-2xl">
                Watch your balance grow
              </h4>
              <p className="text-gray-400">
                Accessed instantly and remain insulated from market volatility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* our mission */}
      <section id="whychooseus">
        <div className="py-16">
          <div className="heading text-center font-helvetica-medium px-4 mx-auto md:w-1/3">
            <span className="text-primary">OUR MISSION</span>
            <h2 className="text-4xl">We've helped innovative companies</h2>
            <p className="text-gray-500 mt-4">
              Hundreds of all sizes and across all industries have made a big
              improvements with us.
            </p>
          </div>
          <div className="stats flex flex-wrap justify-center gap-24 text-center px-4 mt-16">
            <div>
              <h2 className="text-6xl font-helvetica">24%</h2>
              <p className="text-primary text-sm font-helvetica-medium mt-2">
                Revenue business
              </p>
            </div>
            <div>
              <h2 className="text-6xl font-helvetica">180K</h2>
              <p className="text-primary text-sm font-helvetica-medium mt-2">
                In annual revenue
              </p>
            </div>
            <div>
              <h2 className="text-6xl font-helvetica">10+</h2>
              <p className="text-primary text-sm font-helvetica-medium mt-2">
                Months of runway
              </p>
            </div>
          </div>
          {/* end of stats */}
          <h2 className="text-primary text-center font-helvetica-medium mt-16">
            CHOOSE PLAN
          </h2>
          <div className="plans grid gap-y-8 gap-x-16 px-8 mt-8 md:grid-cols-2 md:px-16 ">
            <div className="bg-primary/10 rounded-2xl p-8 flex flex-col gap-4">
              <h3 className="text-5xl font-helvetica-medium">Plus</h3>
              <p className="flex items-center justify-between mt-12">
                <span className="text-blue text-2xl text-dark-blue font-helvetica-medium">
                  £2.99/month
                </span>
                <ArrowUpRight />
              </p>
            </div>
            <div className="bg-primary text-secondary rounded-2xl p-8 flex flex-col gap-4">
              <h3 className="text-5xl font-helvetica-medium">Premium</h3>
              <p className="flex items-center justify-between mt-12">
                <span className="text-blue text-2xl font-helvetica-medium">
                  £6.99/month
                </span>
                <ArrowUpRight />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* tryitnow */}
      <section id="tryitnow">
        <div className="py-16">
          <div className="flex flex-col gap-y-8 justify-between gap-x-16 text-white bg-dark-blue-2 rounded-3xl p-8 mx-8 md:mx-16">
            <div className="heading font-helvetica-medium mx-auto md:w-1/2">
              <span className="text-primary">TRY IT NOW</span>
              <h2 className="text-4xl">
                Ready to level up your payment process?
              </h2>
              <p className="mt-4 font-helvetica text-gray-400">
                Supports small businesses with simple invoicing, powerful
                integrations and cash flow management tools.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center gap-x-4 font-helvetica md:w-1/2 md:justify-end md:flex-row md:mx-auto">
              <button className="w-full bg-primary text-white rounded-2xl px-5 py-4 text-sm">
                Get Started Now
              </button>
              <button className="w-full border border-primary flex justify-center gap-x-2 items-center text-white rounded-2xl px-5 py-4 text-sm">
                <span>Learn more</span>
                <ArrowUpRight size={16} className="inline ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer>
        <div className="grid gap-y-8 font-helvetica p-8 md:grid-cols-5 md:p-16">
          <div>
            <img src={img.logo} alt="logo" className="w-20" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-dark font-helvetica-medium text-lg">
              Solutions
            </h2>
            <ul className="text-gray-400 text-sm flex flex-col gap-y-2 mt-6">
              <li>Small businesses</li>
              <li>Freelancers</li>
              <li>Customers</li>
              <li>Taxes</li>
            </ul>
          </div>
          <div>
            <h2 className="text-dark font-helvetica-medium text-lg">Company</h2>
            <ul className="text-gray-400 text-sm flex flex-col gap-y-2 mt-6">
              <li>About us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="text-dark font-helvetica-medium text-lg">Learn</h2>
            <ul className="text-gray-400 text-sm flex flex-col gap-y-2 mt-6">
              <li>Blogs</li>
              <li>Ebooks</li>
              <li>Guides</li>
              <li>Templates</li>
            </ul>
          </div>
          <div>
            <h2>Follow us on</h2>
            <div className="links flex gap-x-2 mt-4">
              <Twitter size={20} />
              <Linkedin size={20} />
              <Facebook size={20} />
            </div>
          </div>
          <div></div>
        </div>
      </footer>
    </main>
  );
}

export default App;
