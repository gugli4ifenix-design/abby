import type { AbbyConfig } from '@tryabby/core'

export interface UseAbbyOptions<T extends AbbyConfig = AbbyConfig> {
  config: T
}

export interface UseFeatureFlagOptions<T extends AbbyConfig = AbbyConfig> {
  config: T
}

export interface UseRemoteConfigOptions<T extends AbbyConfig = AbbyConfig> {
  config: T
}
