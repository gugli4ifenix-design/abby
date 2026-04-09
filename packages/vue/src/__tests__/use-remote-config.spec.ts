import { describe, it, expect, vi, beforeEach } from "vitest";
import { useRemoteConfig } from "../use-remote-config";
import * as core from "@tryabby/core";

vi.mock("@tryabby/core");

describe("useRemoteConfig", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with config value", () => {
    const mockConfig = { remoteConfig: { key1: {} } };
    const configValue = { setting: "value" };
    
    vi.mocked(core.getRemoteConfig).mockReturnValue(configValue);

    const result = useRemoteConfig(mockConfig as any, "key1");

    expect(result.value.value).toEqual(configValue);
  });

  it("should handle string values", () => {
    const mockConfig = { remoteConfig: { key1: {} } };
    
    vi.mocked(core.getRemoteConfig).mockReturnValue("string-value");

    const result = useRemoteConfig<string>(mockConfig as any, "key1");

    expect(result.value.value).toBe("string-value