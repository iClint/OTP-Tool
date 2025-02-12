export interface AppConfig {
  tabs: Tab[];
}

export interface Tab {
  label: string;
  icon: string;
  tabContent: TabContent;
}

export interface TabContent {
  proposition: string;
  presetMessages: PresetMessages;
  otpPreview: OtpPreview;
  customPayload: CustomPayLoad;
}

export interface PresetMessages {
  showComponent: boolean;
  previewButtons: PreviewButton[];
}

export interface PreviewButton {
  label: string;
  fixture: string;
  submenuButtons: SubmenuButton[];
}

export interface SubmenuButton {
  label: string;
  fixture: string;
}

export interface OtpPreview {
  showComponent: boolean;
  previewUrl: string;
  previewUrls: PreviewUrls[];
}

export interface PreviewUrls {
  label: string;
  url: string;
}

export interface CustomPayLoad {
  showComponent: boolean;
}
