// project imports
import mock from '../mockAdapter';
// assets
import image1 from '@/assets/images/profile/license.jpg';
import image2 from '@/assets/images/profile/agreement.jpg';
import image3 from '@/assets/images/profile/sales_chart.jpeg';
import image4 from '@/assets/images/profile/img-gal-4.png';
import image5 from '@/assets/images/profile/img-gal-5.png';
import image6 from '@/assets/images/profile/img-gal-6.png';
import image7 from '@/assets/images/profile/img-gal-7.png';
import image8 from '@/assets/images/profile/img-gal-8.png';
import image9 from '@/assets/images/profile/img-gal-9.png';
import image10 from '@/assets/images/profile/img-gal-10.png';
import image11 from '@/assets/images/profile/img-gal-11.png';
import image12 from '@/assets/images/profile/img-gal-12.png';

// types
export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};

// gallery components

const gallery: KeyedObject[] = [
  {
    id: '#1File',
    image: image1,
    title: 'Insurnace_license.jpg',
    dateTime: 'Tue Aug 24 2022'
  },
  {
    id: '#2Gallery',
    image: image2,
    title: 'contract.pdf',
    dateTime: 'Fri Mar 30 2022'
  },
  {
    id: '#3Gallery',
    image: image3,
    title: 'profile.png',
    dateTime: 'Fri Jan 25 2023'
  },
  // {
  //   id: '#4Gallery',
  //   image: image4,
  //   title: 'invoice.pdf',
  //   dateTime: 'Sat Oct 23 2021'
  // },
  // {
  //   id: '#5Gallery',
  //   image: image5,
  //   title: 'benchmark_forge.m1v',
  //   dateTime: 'Fri Jan 21 2022'
  // },
  // {
  //   id: '#6Gallery',
  //   image: image6,
  //   title: 'violet_withdrawal.png',
  //   dateTime: 'Wed Sep 22 2021'
  // },
];

// ==============================|| MOCK SERVICES ||============================== //

mock.onGet('/api/gallery/list').reply(200, { gallery });
