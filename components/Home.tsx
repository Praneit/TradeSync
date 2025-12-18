import React from 'react';
import Hero from './Hero';
import Architecture from './Architecture';
import Workflow from './Workflow';
import MarketData from './MarketData';
import Moat from './Moat';
import Strategy from './Strategy';
import Pricing from './Pricing';
import { Phone } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Architecture />
      <Workflow />
      <div id="moat">
         <Moat />
      </div>
      <MarketData />
      <Strategy />
      <Pricing />
      
      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Invest in the Future of Settlement</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            NexSettlement is poised to capture the untapped $200T cross-border market. 
            Partner with us to build the infrastructure of Programmable Finance.
          </p>
          <div className="flex flex-col items-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Request Full Pitch Deck
              </button>
              <div className="flex items-center gap-2 text-blue-100 mt-2">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+917990779342" className="text-lg font-semibold hover:text-white transition-colors">
                      +91 79907 79342
                  </a>
              </div>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            London, UK &bull; Strategic Partners Welcome
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;