const baseUsers = [
  {
    id: 1,
    firstName: "Sarah",
    lastName: "Connor",
    fullName: "Sarah Connor",
    username: "sconnor",
    email: "sarah.connor@example.com",
    gender: "female",
    age: 29,
    phone: "+1-202-555-0143",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    role: "developer",
    company: {
      name: "Cyberdyne Systems",
      title: "Senior Full Stack Engineer",
      department: "Engineering"
    },
    address: {
      street: "742 Evergreen Terrace",
      city: "Springfield",
      state: "Oregon",
      zipCode: "97477",
      country: "United States"
    },
    website: "https://sarahconnor.dev"
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    fullName: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    gender: "male",
    age: 34,
    phone: "+1-202-555-0189",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80",
    role: "manager",
    company: {
      name: "Acme Corporation",
      title: "Product Manager",
      department: "Product"
    },
    address: {
      street: "123 Market Street",
      city: "San Francisco",
      state: "California",
      zipCode: "94105",
      country: "United States"
    },
    website: "https://johndoe.me"
  },
  {
    id: 3,
    firstName: "Elena",
    lastName: "Rostova",
    fullName: "Elena Rostova",
    username: "erostova",
    email: "elena.rostova@example.com",
    gender: "female",
    age: 26,
    phone: "+44-20-7946-0912",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    role: "designer",
    company: {
      name: "PixelCraft Studio",
      title: "Lead UI/UX Designer",
      department: "Design"
    },
    address: {
      street: "45 Oxford Circus",
      city: "London",
      state: "Greater London",
      zipCode: "W1D 1BS",
      country: "United Kingdom"
    },
    website: "https://elenarostova.design"
  },
  {
    id: 4,
    firstName: "Liam",
    lastName: "Chen",
    fullName: "Liam Chen",
    username: "liamc",
    email: "liam.chen@example.com",
    gender: "male",
    age: 31,
    phone: "+1-415-555-0199",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&auto=format&fit=crop&q=80",
    role: "developer",
    company: {
      name: "Nexis Cloud",
      title: "DevOps Architect",
      department: "Infrastructure"
    },
    address: {
      street: "88 King St E",
      city: "Toronto",
      state: "Ontario",
      zipCode: "M5C 1G5",
      country: "Canada"
    },
    website: "https://liamchen.io"
  },
  {
    id: 5,
    firstName: "Amina",
    lastName: "Diallo",
    fullName: "Amina Diallo",
    username: "aminad",
    email: "amina.diallo@example.com",
    gender: "female",
    age: 28,
    phone: "+33-1-4268-5500",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
    role: "admin",
    company: {
      name: "Global Data Labs",
      title: "Data Operations Lead",
      department: "Operations"
    },
    address: {
      street: "12 Rue de Rivoli",
      city: "Paris",
      state: "Île-de-France",
      zipCode: "75001",
      country: "France"
    },
    website: "https://aminadiallo.com"
  },
  {
    id: 6,
    firstName: "Marcus",
    lastName: "Vance",
    fullName: "Marcus Vance",
    username: "mvance",
    email: "marcus.vance@example.com",
    gender: "male",
    age: 42,
    phone: "+1-512-555-0165",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    role: "manager",
    company: {
      name: "Apex Ventures",
      title: "VP of Product",
      department: "Executive"
    },
    address: {
      street: "500 Congress Ave",
      city: "Austin",
      state: "Texas",
      zipCode: "78701",
      country: "United States"
    },
    website: "https://marcusvance.biz"
  },
  {
    id: 7,
    firstName: "Chloe",
    lastName: "Dubois",
    fullName: "Chloe Dubois",
    username: "cdubois",
    email: "chloe.dubois@example.com",
    gender: "female",
    age: 24,
    phone: "+1-604-555-0128",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    role: "editor",
    company: {
      name: "Chronicle Media",
      title: "Content Strategist",
      department: "Marketing"
    },
    address: {
      street: "320 Granville St",
      city: "Vancouver",
      state: "British Columbia",
      zipCode: "V6C 1S9",
      country: "Canada"
    },
    website: "https://chloedubois.me"
  },
  {
    id: 8,
    firstName: "Arjun",
    lastName: "Patel",
    fullName: "Arjun Patel",
    username: "arjunp",
    email: "arjun.patel@example.com",
    gender: "male",
    age: 30,
    phone: "+91-98200-12345",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    role: "developer",
    company: {
      name: "InfiniTech Solutions",
      title: "Cloud Solutions Architect",
      department: "Engineering"
    },
    address: {
      street: "14 Bandra Kurla Complex",
      city: "Mumbai",
      state: "Maharashtra",
      zipCode: "400051",
      country: "India"
    },
    website: "https://arjunpatel.tech"
  },
  {
    id: 9,
    firstName: "Sofia",
    lastName: "Martinez",
    fullName: "Sofia Martinez",
    username: "smartinez",
    email: "sofia.martinez@example.com",
    gender: "female",
    age: 33,
    phone: "+34-91-123-4567",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    role: "user",
    company: {
      name: "Solaria Energy",
      title: "Environmental Analyst",
      department: "Sustainability"
    },
    address: {
      street: "Paseo de la Castellana 80",
      city: "Madrid",
      state: "Madrid",
      zipCode: "28046",
      country: "Spain"
    },
    website: "https://sofiamartinez.es"
  },
  {
    id: 10,
    firstName: "David",
    lastName: "Kim",
    fullName: "David Kim",
    username: "dkim",
    email: "david.kim@example.com",
    gender: "male",
    age: 27,
    phone: "+82-2-555-0134",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
    role: "developer",
    company: {
      name: "Quantum Logic",
      title: "Mobile App Developer",
      department: "Mobile"
    },
    address: {
      street: "123 Teheran-ro, Gangnam-gu",
      city: "Seoul",
      state: "Seoul",
      zipCode: "06134",
      country: "South Korea"
    },
    website: "https://davidkim.dev"
  }
];

const firstNamesM = ["James", "Alexander", "Ethan", "Benjamin", "Lucas", "Noah", "Oliver", "William", "Daniel", "Henry"];
const firstNamesF = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Mia", "Harper", "Evelyn", "Abigail", "Emily"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson"];
const roles = ["developer", "designer", "manager", "admin", "editor", "user"];
const companies = [
  { name: "Acme Corp", dept: "Product" },
  { name: "TechNova", dept: "Engineering" },
  { name: "Starlight Labs", dept: "Research" },
  { name: "CloudNine", dept: "Infrastructure" },
  { name: "Horizon Health", dept: "Healthcare" }
];
const cities = [
  { city: "New York", state: "NY", country: "United States", zip: "10001" },
  { city: "London", state: "Greater London", country: "United Kingdom", zip: "EC1A 1BB" },
  { city: "Berlin", state: "Berlin", country: "Germany", zip: "10115" },
  { city: "Tokyo", state: "Tokyo", country: "Japan", zip: "100-0001" },
  { city: "Sydney", state: "NSW", country: "Australia", zip: "2000" }
];

function generateUser(id) {
  const isFemale = id % 2 !== 0;
  const firstName = isFemale 
    ? firstNamesF[(id - 1) % firstNamesF.length]
    : firstNamesM[(id - 1) % firstNamesM.length];
  const lastName = lastNames[(id * 3) % lastNames.length];
  const username = `${firstName.toLowerCase()}${lastName.toLowerCase()}${id}`;
  const gender = isFemale ? "female" : "male";
  const role = roles[id % roles.length];
  const comp = companies[id % companies.length];
  const loc = cities[id % cities.length];
  const age = 22 + (id * 7) % 38;

  return {
    id,
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    username,
    email: `${username}@example.com`,
    gender,
    age,
    phone: `+1-555-${String(1000 + (id * 123) % 9000)}`,
    avatar: `https://images.unsplash.com/photo-${1500000000000 + id}?w=200&auto=format&fit=crop&q=80`,
    role,
    company: {
      name: comp.name,
      title: `${role.charAt(0).toUpperCase() + role.slice(1)} Specialist`,
      department: comp.dept
    },
    address: {
      street: `${100 + id * 5} Main Street`,
      city: loc.city,
      state: loc.state,
      zipCode: loc.zip,
      country: loc.country
    },
    website: `https://${username}.dev`
  };
}

function getUsers(optionsOrCount) {
  let count = 10;
  let filters = {};

  if (typeof optionsOrCount === "number") {
    count = optionsOrCount <= 0 ? 0 : optionsOrCount;
  } else if (typeof optionsOrCount === "object" && optionsOrCount !== null) {
    if (typeof optionsOrCount.count === "number") {
      count = optionsOrCount.count <= 0 ? 0 : optionsOrCount.count;
    } else if (typeof optionsOrCount.limit === "number") {
      count = optionsOrCount.limit <= 0 ? 0 : optionsOrCount.limit;
    }
    filters = optionsOrCount;
  }

  const result = [];
  const targetCount = count > 0 ? count : 0;
  const poolSize = Math.max(targetCount, baseUsers.length);

  for (let i = 0; i < poolSize; i++) {
    const user = i < baseUsers.length ? baseUsers[i] : generateUser(i + 1);
    
    if (filters.gender && user.gender !== filters.gender.toLowerCase()) continue;
    if (filters.role && user.role !== filters.role.toLowerCase()) continue;
    if (filters.company && !user.company.name.toLowerCase().includes(filters.company.toLowerCase())) continue;
    if (filters.q) {
      const q = filters.q.toLowerCase();
      const match = user.fullName.toLowerCase().includes(q) ||
                    user.email.toLowerCase().includes(q) ||
                    user.username.toLowerCase().includes(q);
      if (!match) continue;
    }

    result.push(user);
    if (result.length >= targetCount) break;
  }

  return result;
}

function getUserById(id) {
  const numericId = Number(id);
  if (!numericId || numericId <= 0) return null;
  if (numericId <= baseUsers.length) {
    return baseUsers.find(u => u.id === numericId) || null;
  }
  return generateUser(numericId);
}

module.exports = {
  getUsers,
  getUserById,
  baseUsers
};
