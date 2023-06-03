import {
  getContainerEl,
  setupHooks
} from '@cypress/mount-utils';

export function mount(oComponent: any) {
  const root = getContainerEl();
  oComponent.placeAt(root);
  setupHooks(() => oComponent.destroy());
}
