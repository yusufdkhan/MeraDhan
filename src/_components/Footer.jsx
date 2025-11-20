import Link from "next/link";
import ContentWrapper from "./ContentWrapper";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  Youtube,
} from "@deemlol/next-icons";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-orange-600 text-white py-8 mt-4">
        <div className="max-w-7xl mx-auto px-14 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-l font-semibold">
              Stay up-to-date with market updates!
            </h2>
            <p className="text-sm mt-1">Subscribe to our newsletter!</p>
          </div>

          <div className="w-full md:w-auto">
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Your Email ID"
                className="px-4 py-2 rounded-md text-black w-full bg-white sm:w-64 outline-none"
              />
              <button className="border border-white px-5 py-2 rounded-md text-white hover:bg-white hover:text-orange-600 transition">
                Subscribe
              </button>
            </div>

            <p className="text-xs max-w-sm mt-2 text-white/90">
              By clicking on "Subscribe" button, I agree to MeraDhan’s Privacy
              Policy and Terms of Use.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-6 px-40">
        <p className="text-xs text-gray-800 max-w-7xl mx-auto px-4 text-center leading-relaxed">
          Disclaimer : Investments in debt securities/ municipal debt
          securities/ securitised debt instruments are subject to risks
          including delay and/ or default in payment. Read all the offer related
          documents carefully.
        </p>
      </div>

      <ContentWrapper>
        <div className="bg-gray-100 border-t border-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
            <div>
              <h3 className="font-semibold text-lg">MeraDhan</h3>

              <div className="flex gap-3 my-4">
                <div className="bg-[#0b3a6e] p-2 rounded-full cursor-pointer">
                  <Facebook size={14} color="white" />
                </div>

                <div className="bg-[#0b3a6e] p-2 rounded-full cursor-pointer">
                  <Youtube size={14} color="white" />
                </div>

                <div className="bg-[#0b3a6e] p-2 rounded-full cursor-pointer">
                  <Twitter size={14} color="white" />
                </div>

                <div className="bg-[#0b3a6e] p-2 rounded-full cursor-pointer">
                  <Linkedin size={14} color="white" />
                </div>

                <div className="bg-[#0b3a6e] p-2 rounded-full cursor-pointer">
                  <Instagram size={14} color="white" />
                </div>
              </div>

              <div className="space-y-4 mt-4 text-gray-600 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full">
                    <MapPin size={14} color="black" />
                  </div>

                  <p className="leading-relaxed">
                    D 2703, Ashok Tower, Dr SSR Road, Parel (East), Mumbai -
                    400012, Maharashtra
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full">
                    <Mail size={16} color="black" />
                  </div>

                  <p>contact@meradhan.co</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Bonds</li>
                <li>Fixed Deposits</li>
                <li>DhanGPT</li>
                <li>Return Calculator</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Career</li>
                <li>Media Kit</li>
                <li>Press</li>
                <li>News</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Blog</li>
                <li>Tutorials</li>
                <li>Newsletter</li>
                <li>Events</li>
                <li>Help Center</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white py-4 text-sm">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              © 2024 MeraDhan. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-gray-600">
              <Link href="#">Terms of Use</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
}
