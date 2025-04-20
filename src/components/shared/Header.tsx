'use client';

import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary-600">
              Video Annotation Tool
            </Link>
            <nav className="ml-10 hidden space-x-4 md:flex">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                Home
              </Link>
              <Link
                href="/dashboard"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                Dashboard
              </Link>
              <Link
                href="/projects"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                Projects
              </Link>
              <Link
                href="/videos"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                Videos
              </Link>
              <Link
                href="/ui-showcase"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                UI Showcase
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
