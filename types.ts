import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  date: string;
  serviceType: string;
  notes: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}