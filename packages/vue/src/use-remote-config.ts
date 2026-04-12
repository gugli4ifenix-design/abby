import type { AbbyConfig } from "@tryabby/core";
import { getRemoteConfig } from "@tryabby/core";
import { readonly, ref, type Ref } from "vue";
import type { UseRemoteConfigReturn } from "./types";

/**
 * Composable for remote config with Abby
 * @param config - Abby configuration
 * @param name - Remote config key name
 * @returns value ref
 * @throws If config key name is not found in config
 */
export function useRemoteConfig<
  T extends AbbyConfig,
  RC extends NonNullable<T["remoteConfig"]>,
  N extends keyof RC,
>(
  config: T,
  name: N
): UseRemoteConfigReturn<RC[N]> {
  if (!config) {
    throw new Error("Abby config is required");
  }

  if (!name) {
    throw new Error("Remote config name is required");
  }

  const configName = String(name);

  try {
    const value = ref(
      getRemoteConfig(config, configName)
    ) as Ref<RC[N]>;

    return {
      value: readonly(value),
    };
  } catch (error) {
    throw new Error(
      `Failed to initialize useRemoteConfig for key "${configName}": ${error instanceof Error ? error.message : String(error)}`
    );
  }
}