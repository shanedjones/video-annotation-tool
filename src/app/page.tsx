'use client';

import Link from 'next/link';

import { Button, Card, CardContent } from '@/components/ui';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-4xl font-bold mb-8 text-center">Video Annotation Tool</h1>
      </div>

      <div className="text-center mb-16 max-w-3xl">
        <p className="text-xl mb-8">
          A comprehensive platform enabling collaborative video review with synchronized audio
          feedback, visual annotations, and categorized feedback.
        </p>
        <div className="flex gap-6 justify-center">
          <Link href="/login">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" size="lg">
              View Dashboard
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-3">Video Review</h2>
            <p className="text-gray-600">
              Upload and review videos with frame-accurate playback controls.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-3">Audio Feedback</h2>
            <p className="text-gray-600">
              Record synchronized audio feedback while reviewing videos.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-3">Visual Annotations</h2>
            <p className="text-gray-600">
              Draw and highlight directly on the video to illustrate points.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
