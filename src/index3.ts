// TYPE DATA CUSTOM

type TemanType = {
  nama: string;
  isKampret: boolean;
  hoetang?: number; //penggunaan ? bisa kosong
};

let temanSaya: TemanType;

temanSaya = {
  nama: 'Jupar',
  isKampret: true,
};

console.log({ temanSaya });
