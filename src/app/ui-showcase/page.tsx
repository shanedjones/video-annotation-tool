'use client';

import React, { useState } from 'react';

import {
  Button,
  Input,
  Dropdown,
  Modal,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Alert,
} from '@/components/ui';

export default function UIShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto py-10 px-4 space-y-8">
      <h1 className="text-3xl font-bold mb-8">UI Component Showcase</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
          <Button variant="danger">Danger Button</Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">🔍</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg">
          <Input placeholder="Default input" />
          <Input label="Labeled input" placeholder="With label" />
          <Input type="password" placeholder="Password" />
          <Input error="This field is required" placeholder="With error" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dropdown</h2>
        <Dropdown
          trigger={<Button variant="outline">Open Dropdown</Button>}
          items={[
            { label: 'Edit', onClick: () => {} },
            { label: 'Duplicate', onClick: () => {} },
            { label: 'Archive', onClick: () => {} },
            { label: 'Delete', onClick: () => {}, disabled: true },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Modal</h2>
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Example Modal"
          description="This is an example modal dialog using Headless UI."
        >
          <div className="mt-6">
            <p>Modal content goes here.</p>
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>Confirm</Button>
          </div>
        </Modal>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description text</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the main content area of the card.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardContent>
              <p>A simpler card without header or footer.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Alerts</h2>
        <div className="space-y-4 max-w-2xl">
          <Alert variant="info" title="Information">
            This is an informational alert.
          </Alert>
          <Alert variant="success" title="Success">
            Your action was completed successfully.
          </Alert>
          <Alert variant="warning" title="Warning">
            Be careful with this action.
          </Alert>
          <Alert variant="error" title="Error">
            There was an error processing your request.
          </Alert>
        </div>
      </section>
    </div>
  );
}
