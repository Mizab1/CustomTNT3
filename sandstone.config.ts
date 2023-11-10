import type { SandstoneConfig } from "sandstone";

export default {
  name: "CustomTNT3",
  description: ["A datapack by ", { text: "Mizab", color: "gold" }],
  formatVersion: 15,
  namespace: "custom_tnt_3",
  packUid: "-1o1I9o1",
  // saveOptions: { path: "./.sandstone/output/datapack" },
  saveOptions: { world: "Testing 4" },
  onConflict: {
    default: "warn",
  },
} as SandstoneConfig;
