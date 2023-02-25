import SectionHeading from "../global/SectionHeading";
import "./Roadmap.scss";
import RoadmapItem from "./RoadmapItem";

function Roadmap() {
  const roadmaps = [
    {
      tag: "Stage 1",
      label: "Launch",
      // description:
      //   "Free Beta Test Initial Bootstrapping Liquidity Multichain Compatibility Tiered Service Platform",
      list: [
        {
          checked: true,
          label: "Free Beta Test ",
        },
        {
          checked: true,
          label: "Initial Bootstrapping Liquidity",
        },
        {
          checked: true,
          label: "Multichain Compatibility ",
        },
        {
          checked: true,
          label: "Tiered Service Platform",
        },
      ],
    },
    {
      tag: "Stage 2",
      label: "Major Bot Upgrades",
      // description:
      //   "Multicall function compatibility for Copytrade (v3+v2) Advanced Contract Simulator Automatic Method ID Snipes (Only contract is needed) Known Alpha / Whale Wallet Tracker Advanced AutoSniper for generative passive Income AI & Machine Learning Trading Signal Bot",
      list: [
        {
          checked: false,
          label: "Multicall function compatibility for Copytrade (v3+v2)",
        },
        {
          checked: false,
          label: "Advanced Contract Simulator",
        },
        {
          checked: false,
          label: "Automatic Method ID Snipes (Only contract is needed)",
        },
        {
          checked: false,
          label: "Known Alpha / Whale Wallet Tracker",
        },
        {
          checked: false,
          label: "Advanced AutoSniper for generative passive Income",
        },
        {
          checked: false,
          label: "AI & Machine Learning Trading Signal Bot",
        },
      ],
    },
    {
      tag: "Stage 3",
      label: "Further Progress",
      // description:
      //   "Tier 1/2 CEX Listings Mobile Application on Google Play & Apple store Shibarium Compatibility",
      list: [
        {
          checked: false,
          label: "Tier 1/2 CEX Listings",
        },
        {
          checked: false,
          label: "Mobile Application on",
        },
        {
          checked: false,
          label: "Google Play & Apple store",
        },
        {
          checked: false,
          label: "Shibarium Compatibility",
        },
      ],
    },
  ];

  return (
    <section className="roadmap-section" id="roadmap">
      <SectionHeading tag="Road To Glory" label="Roadmap" />

      <div className="roadmaps">
        {roadmaps.map((roadmap, index) => (
          <RoadmapItem key={index} {...roadmap} />
        ))}
      </div>
    </section>
  );
}

export default Roadmap;
