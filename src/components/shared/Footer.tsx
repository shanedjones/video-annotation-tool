'use client';

import Link from 'next/link';
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Video Annotation Tool
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              A comprehensive platform for collaborative video review with synchronized audio
              feedback and visual annotations.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/" className="text-sm text-gray-500 hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-gray-500 hover:text-primary-600">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-gray-500 hover:text-primary-600">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-sm text-gray-500 hover:text-primary-600">
                  Videos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-primary-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-500 hover:text-primary-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Video Annotation Tool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
