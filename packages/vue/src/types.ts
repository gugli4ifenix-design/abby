import type { AbbyConfig, GetVariantReturn } from "@tryabby/core";
import type { Ref } from "vue";

export interface UseAbbyReturn<T extends AbbyConfig> {
  variant: Readonly<Ref<GetVariantReturn<T>>>;
  onAct: (data?: Record<string, unknown>) => void;
}

export interface UseFeatureFlagReturn {
  isEnabled: Readonly<Ref<boolean>>;
}

export interface UseRemoteConfigReturn<T = unknown> {
  value: Readonly<Ref<T>>;
}