"use client";

import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="escore logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Live sports scores. Zero delay. Get real-time updates across all major sports and e-sports.
            </p>
          </div>

          {/* Company Details */}
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-500 mb-1">Company Name</p>
              <p className="text-white">Example Corp Inc.</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Representative</p>
              <p className="text-white">John Doe</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Privacy Officer</p>
              <p className="text-white">Jane Smith</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Business Registration Number</p>
              <p className="text-white">123-45-67890</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-500 mb-1">Address</p>
              <p className="text-white">
                123 Main Street, Suite 100
                <br />
                (City, State 12345, Country)
              </p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Email</p>
              <a 
                href="mailto:contact@example.com" 
                className="text-white hover:text-[#c8ff01] transition-colors"
              >
                contact@example.com
              </a>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Phone</p>
              <a 
                href="tel:+15551234567" 
                className="text-white hover:text-[#c8ff01] transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex items-center justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-[#c8ff01] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#c8ff01] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#c8ff01] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#c8ff01] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#c8ff01] transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} Example Corp Inc. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#c8ff01] transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#c8ff01] transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
