export interface Tutor {
  id: string;
  name: string;
  image: string;
  subjects: string[];
  experience: number;
  rating: number;
  reviews: number;
  hourlyRate: number;
  location: string;
  bio: string;
  verified: boolean;
  availability: string[];
}

export const mockTutors: Tutor[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop',
    subjects: ['Mathematics', 'Physics'],
    experience: 8,
    rating: 4.9,
    reviews: 124,
    hourlyRate: 600,
    location: 'New Delhi, Delhi',
    bio: 'Highly experienced math and physics tutor with a focus on JEE preparation. I believe in making concepts simple and intuitive.',
    verified: true,
    availability: ['Mon', 'Wed', 'Fri'],
  },
  {
    id: '2',
    name: 'Priya Verma',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    subjects: ['English', 'History'],
    experience: 5,
    rating: 4.8,
    reviews: 89,
    hourlyRate: 500,
    location: 'Mumbai, Maharashtra',
    bio: 'Passionate about literature and history. I help students not just memorize dates but understand the "why" behind events.',
    verified: true,
    availability: ['Tue', 'Thu', 'Sat'],
  },
  {
    id: '3',
    name: 'Amit Patel',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    subjects: ['Chemistry', 'Biology'],
    experience: 10,
    rating: 4.7,
    reviews: 210,
    hourlyRate: 750,
    location: 'Ahmedabad, Gujarat',
    bio: 'Medical professional turned tutor. I provide in-depth knowledge of chemical reactions and biological systems.',
    verified: true,
    availability: ['Mon', 'Tue', 'Wed', 'Thu'],
  },
  {
    id: '4',
    name: 'Sneha Gupta',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    subjects: ['Coding', 'Computer Science'],
    experience: 4,
    rating: 4.9,
    reviews: 56,
    hourlyRate: 1000,
    location: 'Bangalore, Karnataka',
    bio: 'Software engineer teaching Python, Java, and Data Structures. Get ready to build real-world projects.',
    verified: true,
    availability: ['Sat', 'Sun'],
  },
  {
    id: '5',
    name: 'Deepak Rao',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    subjects: ['Economics', 'Business Studies'],
    experience: 12,
    rating: 4.6,
    reviews: 145,
    hourlyRate: 800,
    location: 'Hyderabad, Telangana',
    bio: 'Specialist in entrance exam preparation for commerce students. Clear logic and exam-oriented approach.',
    verified: false,
    availability: ['Mon', 'Fri'],
  },
  {
    id: '6',
    name: 'Anjali Das',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    subjects: ['Hindi', 'Sanskrit'],
    experience: 15,
    rating: 5.0,
    reviews: 320,
    hourlyRate: 400,
    location: 'Kolkata, West Bengal',
    bio: 'Language expert with a deep understanding of Indian literature. Focus on correct pronunciation and grammar.',
    verified: true,
    availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  },
];
