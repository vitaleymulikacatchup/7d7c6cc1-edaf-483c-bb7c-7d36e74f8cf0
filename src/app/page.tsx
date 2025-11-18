"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Coffee, Leaf, Handshake, Flame, User, Star, Globe, Thermometer, Palette, Home, TrendingUp, Users, MessageSquare, Laptop, Award, Heart, HelpCircle, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function CoffeeHavenPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="medium"
      background="aurora"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "features" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Coffee Haven"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Craft Coffee, Crafted with Passion"
          description="Experience the finest specialty coffee sourced from sustainable farms worldwide"
          tag="Premium Coffee"
          tagIcon={Coffee}
          buttons={[
            { text: "Explore Menu", href: "features" },
            { text: "Visit Us", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763480901553-63o68ckc.jpg",
              imageAlt: "Specialty coffee latte art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763480903262-14pffvfi.jpg",
              imageAlt: "Espresso brewing"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763480904961-hcondz2a.jpg",
              imageAlt: "Cappuccino with foam art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763480906196-qkyb602k.jpg",
              imageAlt: "Cold brew iced coffee"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763480907599-9ywwqh3a.jpg",
              imageAlt: "Premium coffee beans"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Coffee Story"
          description="We believe in serving exceptional coffee that tells the story of its origin. From bean to cup, we maintain the highest standards of quality and sustainability."
          tag="About Us"
          tagIcon={Leaf}
          bulletPoints={[
            {
              title: "Ethical Sourcing",
              description: "Direct relationships with farmers ensuring fair trade and sustainable practices",
              icon: Handshake
            },
            {
              title: "Expert Roasting",
              description: "Small-batch roasting in-house to achieve perfect flavor profiles",
              icon: Flame
            },
            {
              title: "Skilled Baristas",
              description: "Certified professionals dedicated to craft and customer experience",
              icon: User
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763480908945-4829955y.jpg"
          imageAlt="Coffee roastery interior"
          imagePosition="right"
          textboxLayout="default"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Why Choose Coffee Haven"
          description="Discover what makes our café the perfect destination for coffee lovers"
          tag="Our Specialty"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          carouselMode="buttons"
          features={[
            {
              title: "Single Origin Beans",
              description: "Carefully selected beans from renowned coffee regions around the globe",
              icon: Globe
            },
            {
              title: "Perfect Temperature",
              description: "Precisely controlled brewing temperatures for optimal flavor extraction",
              icon: Thermometer
            },
            {
              title: "Custom Blends",
              description: "Unique house blends crafted to balance flavor, body, and acidity",
              icon: Palette
            },
            {
              title: "Cozy Atmosphere",
              description: "Welcoming space designed for work, study, or meaningful conversation",
              icon: Home
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Coffee Haven by the Numbers"
          description="Celebrating our community of passionate coffee enthusiasts"
          tag="Our Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="blur-reveal"
          gridVariant="uniform-all-items-equal"
          carouselMode="buttons"
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Happy Customers",
              value: "12,000+"
            },
            {
              id: "2",
              icon: Coffee,
              title: "Cups Served",
              value: "500K+"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Love"
          description="Real reviews from coffee enthusiasts who visit us regularly"
          tag="Customer Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="scale-rotate"
          testimonials={[
            {
              id: "1",
              name: "Sarah Martinez",
              role: "Regular Customer",
              testimonial: "The best espresso in the city! The baristas really know their craft and always remember my order. This is my go-to café.",
              icon: Coffee
            },
            {
              id: "2",
              name: "James Chen",
              role: "Remote Worker",
              testimonial: "Perfect workspace with excellent WiFi and friendly staff. I practically live here while working on my projects.",
              icon: Laptop
            },
            {
              id: "3",
              name: "Emma Wilson",
              role: "Coffee Connoisseur",
              testimonial: "Their single-origin selections are outstanding. I love learning about where each bean comes from. Highly recommend!",
              icon: Award
            },
            {
              id: "4",
              name: "Michael Johnson",
              role: "Casual Visitor",
              testimonial: "Cozy atmosphere, knowledgeable staff, and amazing coffee. Every visit is a wonderful experience. Five stars!",
              icon: Heart
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our café, menu, and services"
          tag="Help & Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What are your operating hours?",
              content: "We're open Monday through Friday from 6:00 AM to 7:00 PM, Saturday 7:00 AM to 8:00 PM, and Sunday 8:00 AM to 6:00 PM. Closed major holidays."
            },
            {
              id: "2",
              title: "Do you have WiFi available?",
              content: "Yes! High-speed WiFi is complimentary for all customers. Simply ask for the password at the counter."
            },
            {
              id: "3",
              title: "Can I make private reservations?",
              content: "Absolutely. We offer a private event space suitable for meetings, tastings, and celebrations. Contact us at least 2 weeks in advance."
            },
            {
              id: "4",
              title: "Do you sell whole bean coffee?",
              content: "Yes! We offer a selection of our house blends and single-origin beans packaged for home brewing. Ask our baristas for recommendations."
            },
            {
              id: "5",
              title: "Are there dairy-free milk options?",
              content: "We provide oat milk, almond milk, soy milk, and coconut milk alternatives at no extra charge."
            },
            {
              id: "6",
              title: "Do you offer catering services?",
              content: "Yes! We provide catering packages for offices, events, and gatherings. Contact our manager for detailed pricing and options."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated with Coffee Haven"
          description="Subscribe to our newsletter for exclusive blend announcements, tasting events, and special member discounts."
          tagIcon={Mail}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763480922958-htf3hgps.jpg"
          imageAlt="Cozy coffee shop interior"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Coffee Haven"
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Espresso", href: "features" },
                { label: "Filter Coffee", href: "features" },
                { label: "Specialty Drinks", href: "features" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Careers", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Reservations", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            }
          ]}
          copyrightText="© 2025 Coffee Haven. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}