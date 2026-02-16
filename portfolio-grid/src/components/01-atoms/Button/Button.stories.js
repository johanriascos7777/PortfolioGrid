import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    id: {
      control: 'text',
      description: 'ID del boton',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      }
    },
    buttonClass: {
      control: 'select',
      options: [
        'btnPrimaryLarge',
        'btnPrimaryMedium',
        'btnPrimarySmall',
        'btnSecondaryLarge',
        'btnSecondaryMedium',
        'btnSecondarySmall',
        'btnTertiaryLarge',
        'btnTertiaryMedium',
        'btnTertiarySmall'
      ],
      description: 'Clase que define variante y tamano',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'btnPrimaryLarge' },
      }
    },
    buttonText: {
      control: 'text',
      description: 'Texto del boton',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Mas programas' },
      }
    },
    ariaLabel: {
      control: 'text',
      description: 'Etiqueta para lectores de pantalla',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      }
    },
    href: {
      control: 'text',
      description: 'URL destino',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      }
    },
    target: {
      control: 'select',
      options: ['_self', '_blank'],
      description: 'Como abrir el link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '_self' },
      }
    },
    iconRight: {
      control: 'boolean',
      description: 'Icono a la derecha',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    iconLeft: {
      control: 'boolean',
      description: 'Icono a la izquierda',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    dark: {
      control: 'boolean',
      description: 'Modo oscuro',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    full: {
      control: 'boolean',
      description: 'Ancho completo',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#2B2B2B' },
      ],
    },
  }
};

export const PrimaryButton = {
  args: {
    id: '',
    buttonClass: 'btnPrimaryLarge',
    buttonText: 'Mas programas',
    ariaLabel: '',
    href: 'none',
    target: '_self',
    iconRight: false,
    iconLeft: false,
    dark: false,
    full: false
  }
};

export const SecondaryButton = {
  args: {
    id: '',
    buttonClass: 'btnSecondaryLarge',
    buttonText: 'Mas programas',
    ariaLabel: '',
    href: 'none',
    target: '_self',
    iconRight: false,
    iconLeft: false,
    dark: false,
    full: false
  }
};

export const TertiaryButton = {
  args: {
    id: '',
    buttonClass: 'btnTertiaryLarge',
    buttonText: 'Mas programas',
    ariaLabel: '',
    href: 'none',
    target: '_self',
    iconRight: false,
    iconLeft: false,
    dark: false,
    full: false
  }
};

export const WithIconRight = {
  args: {
    ...PrimaryButton.args,
    iconRight: true,
    buttonText: 'Siguiente'
  }
};

export const WithIconLeft = {
  args: {
    ...PrimaryButton.args,
    iconLeft: true,
    buttonText: 'Anterior'
  }
};

export const DarkMode = {
  args: {
    ...PrimaryButton.args,
    dark: true
  },
  parameters: {
    backgrounds: { default: 'dark' }
  }
};

export const FullWidth = {
  args: {
    ...PrimaryButton.args,
    full: true
  }
};

export const AsLink = {
  args: {
    ...PrimaryButton.args,
    buttonText: 'Ir a Google',
    href: 'https://www.google.com',
    target: '_blank'
  }
};