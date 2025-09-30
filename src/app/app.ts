import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilePen, faHandSparkles, faHelmetSafety, faLeaf, faMagnifyingGlass, faMagnifyingGlassChart, faScaleBalanced, faShield, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

interface ContactForm {
  name: string;
  company: string;
  email: string;
  service: string;
  message: string;
}

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: any;
  gradient: string;
  bgColor: string;
}

interface TeamMember {
  name: string;
  position: string;
  description: string;
  initials: string;
  gradient: string;
  skills: string[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild('navbar') navbar!: ElementRef;

  faTriangleExclamation = faTriangleExclamation;
  faHelmetSafety = faHelmetSafety;
  faFilePen = faFilePen;
  faMagnifyingGlassChart = faMagnifyingGlassChart;
  faScaleBalanced = faScaleBalanced;
  faHandSparkles = faLeaf;

  title = 'Prevención Total - Seguridad e Higiene';
  mobileMenuOpen = false;
  formSubmitting = false;
  formSubmitted = false;

  form: ContactForm = {
    name: '',
    company: '',
    email: '',
    service: '',
    message: ''
  };

  navLinks = [
    { label: 'Inicio', target: 'inicio' },
    { label: 'Servicios', target: 'servicios', href: 'inicio' },
    { label: 'Nosotros', target: 'nosotros', href: 'inicio' },
    { label: 'Contacto', target: 'contacto', href: 'inicio' }
  ];

  floatingElements = [
    { style: { top: '80px', left: '40px', width: '80px', height: '80px', backgroundColor: 'rgb(59, 130, 246)' } },
    { style: { top: '160px', right: '80px', width: '64px', height: '64px', backgroundColor: 'rgb(245, 158, 11)', animationDelay: '-2s' } },
    { style: { bottom: '160px', left: '33%', width: '48px', height: '48px', backgroundColor: 'rgb(34, 197, 94)', animationDelay: '-4s' } }
  ];

  services: Service[] = [
    {
      title: 'Auditorías de Seguridad',
      description: 'Evaluaciones exhaustivas de riesgos laborales y cumplimiento normativo para mantener tu empresa protegida.',
      features: ['Identificación de riesgos', 'Planes de mejora', 'Certificaciones', 'C.A.A (Certificado de Aptitud Ambiental)', 'N.C.A (Nivel de Complejidad Ambiental)', 'Categorización'],
      icon: this.faHelmetSafety,
      gradient: 'bg-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100'
    },
    {
      title: 'Capacitación',
      description: 'Programas de formación especializados para crear una cultura de seguridad en tu organización.',
      features: ['Talleres presenciales', 'Cursos online', 'Material didáctico'],
      icon: this.faFilePen,
      gradient: 'bg-green-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100'
    },
    {
      title: 'Análisis de Riesgos',
      description: 'Estudios detallados para identificar y mitigar potenciales peligros en el ambiente laboral.',
      features: ['Matrices de riesgo', 'Planes preventivos', 'Monitoreo continuo'],
      icon: this.faMagnifyingGlassChart,
      gradient: 'bg-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100'
    },
    {
      title: 'Consultoría Legal',
      description: 'Asesoramiento especializado en normativas y regulaciones de seguridad e higiene laboral.',
      features: ['Cumplimiento normativo', 'Documentación legal', 'Representación oficial', 'Habilitaciones municipales', 'Habilitaciones en organismos (Ministerio de Ambiente, Energía, ADA, etc.)'],
      icon: this.faScaleBalanced,
      gradient: 'bg-orange-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100'
    },
    {
      title: 'Planes de Emergencia',
      description: 'Desarrollo de protocolos de actuación ante situaciones de emergencia y evacuación.',
      features: ['Simulacros', 'Señalización', 'Brigadas de emergencia'],
      icon: this.faTriangleExclamation,
      gradient: 'bg-red-600',
      bgColor: 'bg-gradient-to-br from-red-50 to-red-100'
    },
    {
      title: 'Higiene Industrial',
      description: 'Mediciones laborales y control de agentes físicos, químicos y biológicos.',
      features: ['Mediciones laborales', 'Control de contaminantes', 'Equipos de protección', 'E.I.A (Estudio de Impacto Ambiental)', 'A.S.P (Aparato Sometido a Presión)'],
      icon: this.faHandSparkles,
      gradient: 'bg-teal-600',
      bgColor: 'bg-gradient-to-br from-teal-50 to-teal-100'
    }
  ];

  companyStats = [
    { value: '500+', label: 'Empresas Asesoradas' },
    { value: '15k+', label: 'Trabajadores Capacitados' },
    { value: '98%', label: 'Satisfacción Cliente' },
    { value: '24/7', label: 'Soporte Técnico' }
  ];

  teamMembers: TeamMember[] = [
    {
      name: 'Javier Acerbo',
      position: 'Licenciado en Higiene y Seguridad Laboral y Ambiental',
      description: 'Acá un breve texto contando de la trayectoria y virtudes de cada uno',
      initials: 'JA',
      gradient: 'bg-gradient-to-br from-blue-500 to-purple-600',
      skills: ['Mat. LHS-007216 PBA']
    },
    {
      name: 'Julián Arbelo',
      position: 'Licenciado en Higiene y Seguridad Laboral y Ambiental',
      description: 'Acá un breve texto contando de la trayectoria y virtudes de cada uno',
      initials: 'JA',
      gradient: 'bg-gradient-to-br from-green-500 to-teal-600',
      skills: ['Mat. LHS-007220 PBA']
    }
  ];

  contactInfo = [
    {
      label: 'Teléfono',
      value: '+54 11 4567-8900',
      icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>'
    },
    {
      label: 'Email',
      value: 'contacto@segurihigpro.com.ar',
      icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>'
    },
    {
      label: 'Dirección',
      value: 'Av. Corrientes 1234<br>CABA, Argentina',
      icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>'
    }
  ];

  serviceOptions = [
    { value: 'auditoria', label: 'Auditoría de Seguridad' },
    { value: 'capacitacion', label: 'Capacitación' },
    { value: 'riesgos', label: 'Análisis de Riesgos' },
    { value: 'consultoria', label: 'Consultoría Legal' },
    { value: 'emergencia', label: 'Planes de Emergencia' },
    { value: 'higiene', label: 'Higiene Industrial' }
  ];

  socialLinks = [
    {
      url: '#',
      bgColor: 'bg-blue-600 hover:bg-blue-700',
      icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>'
    },
    {
      url: '#',
      bgColor: 'bg-blue-800 hover:bg-blue-900',
      icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>'
    },
    {
      url: '#',
      bgColor: 'bg-blue-700 hover:bg-blue-800',
      icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'
    }
  ];

  footerSections = [
    {
      title: 'Servicios',
      links: ['Auditorías', 'Capacitación', 'Análisis de Riesgos', 'Consultoría Legal', 'Higiene Industrial']
    },
    {
      title: 'Empresa',
      links: ['Sobre Nosotros', 'Nuestro Equipo', 'Certificaciones', 'Casos de Éxito', 'Blog']
    },
    {
      title: 'Contacto',
      links: ['+54 11 4567-8900', 'contacto@segurihigpro.com.ar', 'Av. Corrientes 1234', 'CABA, Argentina', '🟢 Atención 24/7']
    }
  ];

  ngOnInit(): void {
    // Initialize component
  }

  ngAfterViewInit(): void {
    // Setup scroll listener for navbar
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        const navbar = this.navbar.nativeElement;
        if (window.scrollY > 100) {
          navbar.classList.add('bg-gray-900', 'bg-opacity-95');
        } else {
          navbar.classList.remove('bg-gray-900', 'bg-opacity-95');
        }
      });

      // Setup intersection observer for animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-slide-up');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      // Observe service cards
      setTimeout(() => {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => observer.observe(card));
      }, 100);
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  scrollToSection(sectionId: string): void {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    this.mobileMenuOpen = false;
  }

  onSubmit(): void {
    if (this.formSubmitting || this.formSubmitted) return;

    this.formSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      this.formSubmitting = false;
      this.formSubmitted = true;

      // Reset form after 3 seconds
      setTimeout(() => {
        this.formSubmitted = false;
        this.resetForm();
      }, 3000);
    }, 1500);
  }

  getSubmitButtonText(): string {
    if (this.formSubmitting) return 'Enviando...';
    if (this.formSubmitted) return '¡Mensaje Enviado!';
    return 'Enviar Consulta';
  }

  resetForm(): void {
    this.form = {
      name: '',
      company: '',
      email: '',
      service: '',
      message: ''
    };
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}
