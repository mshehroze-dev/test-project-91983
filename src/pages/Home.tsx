import React from 'react';
import { Link } from 'react-router-dom';import { NuvraBadge } from '@/components/NuvraBadge';


import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import ContactUs from '@/components/ContactUs';


import Testimonials from '@/components/Testimonials';

import CallToAction from '@/components/CallToAction';

const Home: React.FC = () => {  const user = null;
  const componentRegistry: Record<string, React.ComponentType<any>> = {
    "Testimonials": Testimonials,    "CallToAction": CallToAction  };

  const heroData = {
    headline: 'Welcome to nuvra-landing',
    sub: 'A modern full-stack application.'
  }
  const featuresData = {} 
  const pricingData = { title: 'Pricing', subtitle: 'Plans', plans: [] }
  const faqData = { items: [] }


  return (
    <div className="min-h-screen bg-white">
      
      {/* --- RENDER SECTIONS --- */}
        
              <Hero data={ {"cta_text": "", "headline": "Build Your SaaS Product Faster", "image_url": "/images/hero-illustration.svg", "sub": "Accelerate development with our robust boilerplate, featuring React, TypeScript, Tailwind CSS, and Supabase.", "type": "hero"} } />

        
              <Features data={ {"items": [], "type": "features"} } />

        
           {(() => {
             const Component = componentRegistry["Testimonials"];
             if (Component) {
               return (
                <div className="w-full" key="3">
                  <Component
                    data={ {"data": [{"author": "Jane Doe", "avatar": "https://i.pravatar.cc/150?img=1", "quote": "This boilerplate saved me weeks of setup time. Highly recommend!", "title": "Founder, InnovateTech"}, {"author": "John Smith", "avatar": "https://i.pravatar.cc/150?img=2", "quote": "The integration with Supabase is seamless. My backend was ready in no time.", "title": "Lead Dev, Creative Solutions"}, {"author": "Alice Johnson", "avatar": "https://i.pravatar.cc/150?img=3", "quote": "Tailwind CSS and React-Router make the frontend development a breeze.", "title": "CTO, Digital Horizons"}], "description": "Hear from developers who are already building amazing things.", "title": "What Our Users Say"} }
                    title={ "" }
                    description={ "" }
                    className="w-full"
                  />
                </div>
                );
             }
             return null; 
           })()}


        
              <Pricing data={ {"description": "Choose a plan that fits your needs. Scale up or down anytime.", "plans": [{"buttonLink": "/signup", "buttonText": "Get Started Free", "cta": "Get started", "features": ["Up to 1 project", "Basic authentication", "Community support", "1GB storage"], "frequency": "per month", "highlight": false, "name": "Starter", "price": "$0"}, {"buttonLink": "/signup", "buttonText": "Start 14-day Trial", "cta": "Get started", "features": ["Up to 5 projects", "Advanced authentication", "Priority support", "50GB storage", "Custom domains"], "frequency": "per month", "highlight": true, "name": "Pro", "price": "$29"}, {"buttonLink": "/contact", "buttonText": "Contact Sales", "cta": "Get started", "features": ["Unlimited projects", "SSO \u0026 SAML", "Dedicated support", "Unlimited storage", "Advanced analytics"], "frequency": "per month", "highlight": false, "name": "Enterprise", "price": "Custom"}], "subtitle": "", "title": "Simple \u0026 Transparent Pricing", "type": "pricing"} } />

        
              <Faq data={ {"items": [], "title": "Frequently Asked Questions", "type": "faq"} } />

        
           {(() => {
             const Component = componentRegistry["CallToAction"];
             if (Component) {
               return (
                <div className="w-full" key="6">
                  <Component
                    data={ {"buttonLink": "/signup", "buttonText": "Start Building Now", "description": "Join thousands of developers leveraging our stack to ship faster.", "title": "Ready to build something amazing?"} }
                    title={ "" }
                    description={ "" }
                    className="w-full"
                  />
                </div>
                );
             }
             return null; 
           })()}



      {/* --- DEFAULT FALLBACK CONTENT (STRICTLY NON-REPLICA) --- */}
        <ContactUs />        
        <section className="bg-indigo-50 py-24">
           {/* Static CTA */}
           <div className="mx-auto max-w-7xl px-6 text-center">
             <h2 className="text-3xl font-bold">Ready to launch?</h2>
           </div>
        </section>

      <NuvraBadge />
    </div>
  )
}

export default Home;
