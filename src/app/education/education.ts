import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrls: ['./education.css'],
  standalone: false,
})
export class Education {
  educationList = [
    {
      title: 'Learning Coordination in Multi-Agent Systems',
      subtitle: 'PhD Thesis',
      place: 'Universities of Aveiro, Porto, and Minho (2016–2020)',
      link: 'https://ria.ua.pt/handle/10773/30707',
      description: `This research project aims at using machine learning to develop general coordination and communication methodologies that enable teams of autonomous agents/robots, possibly with different skills and knowledge, to accomplish complex collective tasks. The coordination methodologies are based in deep learning techniques and solutions, focusing on reinforcement learning approaches, where coordination and communication can be jointly learned. Proposed solutions will be applied in several different cooperative and competitive domains, such as robotic soccer, maze-solving tasks, and pursuit games.`,
    },
    {
      title: 'Computer Science',
      subtitle: 'PhD',
      place: 'Universities of Aveiro, Porto, and Minho (2016–2020)',
      link: './assets/20PhD.pdf', // <-- PDF local
      gpa: '19/20',
    },
    {
      title:
        'Endowing NoSQL DBMS with SQL Features through Call Level Interfaces',
      subtitle: 'Master’s Thesis',
      place: 'University of Aveiro (2010–2015)',
      link: 'https://ria.ua.pt/handle/10773/18592',
      description: `This thesis focuses on deploying features that are not so commonly supported by NoSQL DBMS, such as Stored Procedures, Transactions, Save Points and interactions with local memory structures, through a framework based in a standard CLI. The feature implementation model is defined by modules of our framework, and allows for distributed and fault-tolerant systems to be deployed, which simulate the previously mentioned features and abstract the underlying database features from clients.`,
    },
    {
      title: 'Computer & Telematics Engineering',
      subtitle: 'MSc',
      place: 'University of Aveiro (2010–2015)',
      link: './assets/15ect.png', // <-- imagem local
      gpa: '17/20',
    },
    {
      title: 'Certificate of Proficiency in English (Europe Level C2)',
      subtitle: 'Grade A',
      place: 'University of Cambridge (2010)',
      link: './assets/CPE.jpg', // <-- imagem local
    },
  ];

  // Modal state
  showModal = false;
  modalSrc: string | null = null;
  modalType: 'pdf' | 'image' | null = null;

  openModal(link: string) {
    const extension = link.split('.').pop()?.toLowerCase();
    if (extension === 'pdf') {
      window.open(link, '_blank'); // PDF abre no navegador
      return;
    } else if (['jpg', 'jpeg', 'png', 'gif'].includes(extension || '')) {
      this.modalType = 'image';
    } else {
      window.open(link, '_blank');
      return;
    }

    this.modalSrc = link;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    if (this.modalSrc && this.modalType === 'pdf') {
      URL.revokeObjectURL(this.modalSrc);
    }
    this.modalSrc = null;
    this.modalType = null;
  }
}
