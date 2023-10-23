// third-party
import mock from '../mockAdapter';
import { add, set, sub } from 'date-fns';
import { Chance } from 'chance';
import back1 from '@/assets/images/profile/profile-back-1.png';
import back2 from '@/assets/images/profile/profile-back-2.png';
import back3 from '@/assets/images/profile/profile-back-3.png';
import back4 from '@/assets/images/profile/profile-back-4.png';

const chance = new Chance();
type taskType = {
  id: Number;
  opportunityName: String;
  name: String;
  followUp: String;
  estCloseDate: String;
  daysOpen: Number;
  agent:String,
  split: String,
  estIncome: String;
  temp: String;
 };

type KanbanItem = {
  title: String;
  id: Number;
  color: String,
  tasks: taskType[];
};

const KanbanData: KanbanItem[] = [
  {
    title: 'Lead In - Interested',
    color: '#158CCF ',
    id: 1,
    tasks: [
      {
        id: 1 ,
        opportunityName: 'Opportunity 1',
        name: 'John Doe',
        followUp: '2023-09-20',
        estCloseDate: '2023-10-05',
        daysOpen: 4,
        agent: 'Micheal Jordan',
        split: '90%',
        estIncome: '$1850',
        temp: 'Cold',
      },
      {
        id: 2 ,
        opportunityName: 'Opportunity 2',
        name: 'Oliver Lee',
        followUp: '2023-01-03',
        estCloseDate: '2023-05-20',
        daysOpen: 4,
        agent: 'Liam Noah',
        split: '100%',
        estIncome: '$3050',
        temp: 'Warm',
      },
      {
        id: 3,
        opportunityName: 'Opportunity 3',
        name: 'Sophia Smith',
        followUp: '2023-10-22',
        estCloseDate: '2023-03-05',
        daysOpen: 7,
        agent: 'Emma Johnson',
        split: '85%',
        estIncome: '$2500',
        temp: 'Warm',
      },
    ]
  },
  {
    title: 'Prospect - Quote',
    id: 2,
    color: '#eb7d35 ',
    tasks: [
      {
        id: 4,
        opportunityName: 'Opportunity 4',
        name: 'Liam Wilson',
        followUp: '2023-12-05',
        estCloseDate: '2023-20-06',
        daysOpen: 5,
        agent: 'Oliver Davis',
        split: '95%',
        estIncome: '$1700',
        temp: 'Hot',
      },
      {
        id: 5,
        opportunityName: 'Opportunity 5',
        name: 'Olivia Brown',
        followUp: '2023-10-22',
        estCloseDate: '2023-03-05',
        daysOpen: 9,
        agent: 'Ava Evans',
        split: '90%',
        estIncome: '$3000',
        temp: 'Cold',
      },
      {
        id: 6,
        opportunityName: 'Opportunity 6',
        name: 'Noah Lee',
        followUp: '2023-04-25',
        estCloseDate: '2023-05-05',
        daysOpen: 8,
        agent: 'Sophia White',
        split: '80%',
        estIncome: '$2200',
        temp: 'Hot',
      },
    ]
  },
  {
    title: 'Prospect - App Signed',
    id: 3,
    color: '#eb7d35 ',
    tasks: [
      {
        id: 7,
        opportunityName: 'Opportunity 7',
        name: 'Lucas Garcia',
        followUp: '2023-04-25',
        estCloseDate: '2023-05-05',
        daysOpen: 7,
        agent: 'Liam Martin',
        split: '100%',
        estIncome: '$2800',
        temp: 'Warm',
      },
    ]
  },
  {
    title: 'Prospect - Underwriting',
    id: 4,
    color: '#eb7d35 ',
    tasks: [
      {
        id: 8,
        opportunityName: 'Opportunity 8',
        name: 'Ava Lopez',
        followUp: '2023-01-03',
        estCloseDate: '2023-05-20',
        daysOpen: 5,
        agent: 'Mia Rodriguez',
        split: '85%',
        estIncome: '$1950',
        temp: 'Cold',
      },
      {
        id: 9,
        opportunityName: 'Opportunity 9',
        name: 'Mia Hernandez',
        followUp: '2023-04-25',
        estCloseDate: '2023-05-05',
        daysOpen: 3,
        agent: 'Lucas Wilson',
        split: '95%',
        estIncome: '$3200',
        temp: 'Hot',
      },

      {
        id: 10,
        opportunityName: 'Opportunity 10',
        name: 'Oliver Clark',
        followUp: '2023-09-20',
        estCloseDate: '2023-10-05',
        daysOpen: 5,
        agent: 'Noah Martinez',
        split: '90%',
        estIncome: '$2400',
        temp: 'Warm',
      },
    ]
  },
  {
    title: 'Client Won - In Force' ,
    id: 5,
    color:'#70ad47 ',
    tasks: [
      {
        id: 11,
        opportunityName: 'Opportunity 11',
        name: 'Charlotte Adams',
        followUp: '2023-01-03',
        estCloseDate: '2023-01-10',
        daysOpen: 10,
        agent: 'Olivia Baker',
        split: '80%',
        estIncome: '$1800',
        temp: 'Cold',
      },
    ]
  },
  {
    title: 'Lost' ,
    id:6 ,
    color:'#dc3545',
    tasks: [
      {
        id: 12,
        opportunityName: 'Opportunity 12',
        name: 'William Turner',
        followUp: '2023-04-25',
        estCloseDate: '2023-05-05',
        daysOpen: 8,
        agent: 'Aiden King',
        split: '100%',
        estIncome: '$3100',
        temp: 'Hot',
      }
    ]
  }


];

mock.onGet('/api/data/kanban').reply(() => {
  return [200, KanbanData];
});

export default KanbanData;
