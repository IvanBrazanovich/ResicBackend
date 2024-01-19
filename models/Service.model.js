import mongoose from 'mongoose'

const servicesEnum = [
  'Tailoring and Alterations',
  ' - Clothing alterations',
  ' - Custom tailoring',
  ' - Dressmaking',
  'Plumbing Services',
  ' - Leak repairs',
  ' - Pipe installations',
  ' - Drain cleaning',
  ' - Water heater installation and repair',
  'Computer and IT Services',
  ' - Computer repair and troubleshooting',
  ' - Software installation and updates',
  ' - Network setup and troubleshooting',
  ' - Data recovery',
  'Electrical Services',
  ' - Wiring and rewiring',
  ' - Electrical repairs',
  ' - Installation of lighting fixtures',
  ' - Circuit breaker installation and repair',
  'Home Cleaning',
  ' - Regular house cleaning',
  ' - Deep cleaning',
  ' - Carpet cleaning',
  ' - Window cleaning',
  'Landscaping and Gardening',
  ' - Lawn maintenance',
  ' - Garden design and planting',
  ' - Tree trimming and removal',
  ' - Irrigation system installation',
  'Appliance Repair',
  ' - Refrigerator repair',
  ' - Washing machine and dryer repair',
  ' - Dishwasher repair',
  ' - Oven and stove repair',
  'Painting Services',
  ' - Interior and exterior painting',
  ' - Wall repair and plastering',
  ' - Cabinet painting and refinishing',
  'HVAC (Heating, Ventilation, and Air Conditioning)',
  ' - HVAC system installation and repair',
  ' - Air duct cleaning',
  ' - Thermostat installation and calibration',
  'Auto Repair and Maintenance',
  ' - Basic car maintenance (oil changes, tire rotations)',
  ' - Brake system repairs',
  ' - Engine diagnostics and repairs',
  ' - Auto detailing',
  'Photography and Videography',
  ' - Event photography',
  ' - Portrait sessions',
  ' - Video production and editing',
  'Catering Services',
  ' - Event catering',
  ' - Personal chef services',
  ' - Meal planning and preparation',
  'Fitness and Personal Training',
  ' - Personal training sessions',
  ' - Fitness classes',
  ' - Nutrition counseling',
  'Tutoring and Education Services',
  ' - Academic tutoring (various subjects)',
  ' - Language lessons',
  ' - Test preparation assistance',
  'Interior Design',
  ' - Room layout and design consultation',
  ' - Furniture selection and arrangement',
  ' - Color scheme recommendations'
]

const argentinaProvincesEnum = [
  'Buenos Aires',
  'Catamarca',
  'Chaco',
  'Chubut',
  'Córdoba',
  'Corrientes',
  'Entre Ríos',
  'Formosa',
  'Jujuy',
  'La Pampa',
  'La Rioja',
  'Mendoza',
  'Misiones',
  'Neuquén',
  'Río Negro',
  'Salta',
  'San Juan',
  'San Luis',
  'Santa Cruz',
  'Santa Fe',
  'Santiago del Estero',
  'Tierra del Fuego',
  'Tucumán'
]

const serviceSchema = new mongoose.Schema({
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  title: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  category: {
    type: [String],
    enum: servicesEnum
  },
  location: {
    type: String,
    enum: argentinaProvincesEnum,
    required: true
  },
  pricing: {
    type: Number,
    required: true
  }
}
)

const Service = mongoose.model('Service', serviceSchema)

export default Service
// Include fields like ServiceID, ProviderID (FK to User), Title, Description, Category, Location, Pricing.
