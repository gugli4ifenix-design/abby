import { describe, it, expect, vi, beforeEach } from "vitest";
import { useRemoteConfig } from "../use-remote-config";
import * as core from "@tryabby/core";

vi.mock("@tryabby/core");

describe("useRemoteConfig", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with config value", () => {
    const mockConfig = { remoteConfig: { key1: {} } } as const;
    const configValue = { setting: "value" };

    vi.mocked(core.getRemoteConfig).mockReturnValue(configValue);

    const result = useRemoteConfig(mockConfig as any, "key1");

    expect(result.value.value).toEqual(configValue);
  });

  it("should handle string values", () => {
    const mockConfig = { remoteConfig: { key1: {} } } as const;

    vi.mocked(core.getRemoteConfig).mockReturnValue("string-value");

    const result = useRemoteConfig(mockConfig as any, "key1");

    expect(result.value.value).toBe("string-value");
  });

  it("should throw if config is missing", () => {
    expect(() => useRemoteConfig(null as any, "key1")).toThrow(
      "Abby config is required"
    );
  });

  it("should throw if name is missing", () => {
    const mockConfig = { remoteConfig: { key1: {} } } as const;
    expect(() => useRemoteConfig(mockConfig as any, "" as any)).toThrow(
      "Remote config name is required"
    );
  });
});
