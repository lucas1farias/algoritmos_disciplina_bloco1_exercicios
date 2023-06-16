

function n_aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) - min)
}

const paises_ = [
  'Japão', 'Alemanha', 'EUA', 'Coréia do Sul', 'Itália', 'Suécia', 'Reino Unido',
  'Suécia', 'China'
]

const montadoras_ = [
  'Toyota', 'Volkswagen', 'Ford', 'Honda', 'Chevrolet', 'Nissan', 'BMW', 'Mercedes-Benz', 'Audi', 'Hyundai', 'Kia',
  'Fiat', 'Renault', 'Volvo', 'Mitsubishi', 'Peugeot', 'Subaru', 'Chrysler', 'Jaguar', 'Land Rover', 'Mazda', 'Jeep',
  'Suzuki', 'Lexus', 'Tesla', 'Mini', 'Porsche', 'Acura', 'Dodge', 'Infiniti', 'Buick','Alfa Romeo', 'GMC',
  'Cadillac', 'Smart', 'Lamborghini', 'Maserati', 'Aston Martin', 'Bentley', 'Ferrari', 'McLaren', 'Rolls-Royce',
  'Lotus', 'Bugatti', 'Pagani', 'Koenigsegg', 'Genesis', 'Chery', 'Geely', 'BYD', 'Great Wall'
]

const veiculos_ = [
  'Corolla', 'Golf', 'Mustang', 'Civic', 'Camaro', 'Altima', '3 Series', 'E-Class', 'A4', 'Elantra', 'Sorento',
  '500', 'Clio', 'V60', 'Outlander', '208', 'Impreza', '300', 'F-Type', 'Range Rover', 'MX-5', 'Wrangler', 'Swift', 
  'IS', 'Model S', 'Cooper', '911', 'NSX', 'Challenger', 'Q50', 'Enclave', 'Giulia', 'Sierra', 'Escalade', 'ForTwo',
  'Aventador', 'Ghibli', 'DB11', 'Continental GT', '488 GTB', '720S', 'Phantom', 'Evora', 'Chiron', 'Huayra',
  'Regera', 'G70', 'Arrizo', 'Emgrand', 'Tang','Haval H6'
]

console.log(montadoras_.length, veiculos_.length)
