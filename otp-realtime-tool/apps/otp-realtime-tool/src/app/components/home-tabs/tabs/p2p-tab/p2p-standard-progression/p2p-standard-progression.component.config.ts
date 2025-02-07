export const P2PStandardProgressionComponentConfig = {
  buttons: [
    {
      label: 'Received',
      action: 'standardProgression',
      submenu: true,
      submenuItems: [
        {
          label: 'Change My Order Open',
          action: 'standardProgression',
        },
      ],
    },
    {
      label: 'Preparing',
      action: 'standardProgression',
      submenu: false,
      submenuItems: [],
    },
    {
      label: 'Prepared',
      action: 'standardProgression',
      submenu: false,
      submenuItems: [],
    },
    {
      label: 'Preparing Handover',
      action: 'standardProgression',
      submenu: false,
      submenuItems: [],
    },
    {
      label: 'Handing Over',
      action: 'standardProgression',
      submenu: false,
      submenuItems: [],
    },
    {
      label: 'On Its Way',
      action: 'standardProgression',
      submenu: false,
      submenuItems: [
        {
          label: 'Restricted Items Vic',
          action: 'standardProgression',
        },
        {
          label: 'Restricted Items Default',
          action: 'standardProgression',
        },
      ],
    },
    {
      label: 'Arriving',
      action: 'standardProgression',
      submenu: false,
      submenuItems: [
        {
          label: 'Restricted Items Vic',
          action: 'standardProgression',
        },
        {
          label: 'Restricted Items Default',
          action: 'standardProgression',
        },
      ],
    },
    {
      label: 'Delivered',
      action: 'standardProgression',
      submenu: false,
      submenuItems: [],
    },
    {
      label: 'Canceled',
      action: 'standardProgression',
      submenu: false,
      submenuItems: [],
    },
  ],
};
