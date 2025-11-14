import React from 'react';
import { User } from '../../types';

interface UserProfileCardProps {
  user: User;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="h-20 w-20 rounded-full object-cover border-4 border-blue-100"
            src={user.photo || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format'}
            alt={`Foto de ${user.name}`}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">
            Bem vindo{user.name && `, ${user.name.split(' ')[0]}`}!
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Espero que você aproveite muito o plano de saúde
          </p>
          <div className="mt-3 flex items-center text-sm text-gray-500">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {user.email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;