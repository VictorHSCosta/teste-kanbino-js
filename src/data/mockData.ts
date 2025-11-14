import { Clinic } from '../types';

export const mockClinics: Clinic[] = [
  {
    id: '1',
    name: 'Hospital São Lucas',
    address: 'Av. Paulista, 2000 - Bela Vista, São Paulo - SP',
    phone: '(11) 3456-7890',
    specialties: ['Clínica Geral', 'Cardiologia', 'Pediatria', 'Ortopedia'],
    distance: '2.5 km'
  },
  {
    id: '2',
    name: 'Clínica Saúde Total',
    address: 'Rua Augusta, 1500 - Consolação, São Paulo - SP',
    phone: '(11) 2345-6789',
    specialties: ['Clínica Geral', 'Dermatologia', 'Ginecologia'],
    distance: '1.8 km'
  },
  {
    id: '3',
    name: 'Medical Center Jardins',
    address: 'Alameda Santos, 500 - Jardim Paulista, São Paulo - SP',
    phone: '(11) 3234-5678',
    specialties: ['Clínica Geral', 'Oftalmologia', 'Neurologia', 'Endocrinologia'],
    distance: '3.2 km'
  },
  {
    id: '4',
    name: 'Rede DOr São Luiz',
    address: 'Rua Teixeira da Silva, 341 - Paraíso, São Paulo - SP',
    phone: '(11) 3123-4567',
    specialties: ['Pronto Socorro', 'Cirurgia Geral', 'UTI', 'Radiologia'],
    distance: '4.1 km'
  },
  {
    id: '5',
    name: 'Clínica Viva Bem',
    address: 'Rua dos Pinheiros, 879 - Pinheiros, São Paulo - SP',
    phone: '(11) 3021-3456',
    specialties: ['Clínica Geral', 'Psiquiatria', 'Fisioterapia', 'Nutrição'],
    distance: '5.3 km'
  },
  {
    id: '6',
    name: 'Hospital Israelita Albert Einstein',
    address: 'Av. Albert Einstein, 627 - Morumbi, São Paulo - SP',
    phone: '(11) 2151-1234',
    specialties: ['Todas as especialidades', 'Hospital de referência'],
    distance: '8.7 km'
  }
];