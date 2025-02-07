import { FleetTabComponent } from './tabs/fleet-tab/fleet-tab.component';
import { P2pTabComponent as P2PTabComponent } from './tabs/p2p-tab/p2p-tab.component';
import { SettingsTabComponent } from './tabs/settings-tab/settings-tab.component';

export const homeTabsComponentConfig = {
  tabs: [
    {
      label: 'Fleet',
      component: FleetTabComponent,
      icon: '/icons/fleet.png',
    },
    {
      label: 'P2P',
      component: P2PTabComponent,
      icon: 'icons/p2p.png',
    },
    {
      label: 'Settings',
      component: SettingsTabComponent,
      icon: 'icons/settings.png',
    },
  ],
};
