import React from 'react';
import { User } from '../types';
import DashboardHeader from './Dashboard/DashboardHeader';
import UserProfileCard from './Dashboard/UserProfileCard';
import ClinicsList from './Dashboard/ClinicsList';
import { mockClinics } from '../data/mockData';

interface DashboardPageProps {
  user: User;
  onLogout: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader user={user} onLogout={onLogout} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <UserProfileCard user={user} />
        <ClinicsList clinics={mockClinics} />
      </main>
    </div>
  );
};

export default DashboardPage;